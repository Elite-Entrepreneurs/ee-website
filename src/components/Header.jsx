import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Logo from './icons/Logo.jsx';
import MoreDropdownPanel from './MoreDropdownPanel.jsx';

const COLLAPSE_QUERY = '(max-width: 991px)'; // data-collapse="medium"
const NAV_DURATION = 0.4; // data-duration="400"

/** Reads a colour token from theme.css (see the --tt-nav-* tokens there). */
function themeToken(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/**
 * IX2 a-18 "Nav scroll bg": between 0% and 2% of page scroll the pill goes from
 * transparent + outlined (no shadow) to filled + no border (with shadow). smoothing: 50.
 * Colours come from theme.css: --tt-nav-scrolled-rgb (fill) and --tt-nav-border-rgb (outline).
 */
function useNavScrollStyle(containerRef, shadowRef, overrideRef) {
  useEffect(() => {
    const fillRgb = themeToken('--tt-nav-scrolled-rgb');
    const borderRgb = themeToken('--tt-nav-border-rgb');
    const smooth = { value: 0 };
    let raf;
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const target = max > 0 ? Math.min(1, window.scrollY / (max * 0.02)) : 0;
      smooth.value += (target - smooth.value) * 0.5;
      if (Math.abs(target - smooth.value) < 0.001) smooth.value = target;
      const current = smooth.value;
      const c = containerRef.current;
      const s = shadowRef.current;
      if (c && s && !overrideRef.current) {
        c.style.backgroundColor = `rgba(${fillRgb}, ${current})`;
        c.style.borderColor = `rgba(${borderRgb}, ${1 - current})`;
        s.style.opacity = String(current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [containerRef, shadowRef, overrideRef]);
}

export default function Header() {
  const collapsed = useMediaQuery(COLLAPSE_QUERY);
  const [menuOpen, setMenuOpen] = useState(false); // mobile/tablet menu
  const [menuMounted, setMenuMounted] = useState(false); // menu lives in the overlay
  const [ddOpen, setDdOpen] = useState(false); // "More" dropdown
  const [ddVisible, setDdVisible] = useState(false);

  const navRef = useRef(null);
  const containerRef = useRef(null);
  const shadowRef = useRef(null);
  const iconRef = useRef(null);
  const menuRef = useRef(null);
  const listRef = useRef(null);
  const chevronRef = useRef(null);
  const overrideRef = useRef(false);

  useNavScrollStyle(containerRef, shadowRef, overrideRef);

  // ---- Mobile menu (Webflow w-nav, data-animation="default") ----
  const openMenu = useCallback(() => {
    setMenuOpen(true);
    setMenuMounted(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setDdOpen(false);
  }, []);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!collapsed || !menu) return;
    if (menuOpen && menuMounted) {
      gsap.fromTo(menu, { y: -menu.offsetHeight }, { y: 0, duration: NAV_DURATION, ease: 'power1.inOut' });
    } else if (!menuOpen && menuMounted) {
      gsap.to(menu, { y: -menu.offsetHeight, duration: NAV_DURATION, ease: 'power1.inOut', onComplete: () => setMenuMounted(false) });
    }
  }, [menuOpen, menuMounted, collapsed]);

  // Icon rotation (a-2 / a-3) and pill colour (a-36 / a-37) while the menu is open.
  useEffect(() => {
    gsap.to(iconRef.current, { rotation: menuOpen ? 180 : 0, duration: 0.4, ease: 'power4.inOut' });
    // a-2 also sets the icon colour (otherwise `.w-nav-button.w--open` makes it white).
    if (menuOpen) gsap.to(iconRef.current, { color: themeToken('--tt-nav-icon'), duration: 0.5, delay: 0.4 });
    const c = containerRef.current;
    if (menuOpen) {
      overrideRef.current = true;
      gsap.to(c, { backgroundColor: themeToken('--tt-nav-open-bg'), borderColor: `rgba(${themeToken('--tt-nav-border-rgb')}, 0)`, duration: 0.5 });
      gsap.to(shadowRef.current, { opacity: 1, duration: 0.5 });
    } else if (overrideRef.current) {
      gsap.to(c, {
        backgroundColor: `rgba(${themeToken('--tt-nav-scrolled-rgb')}, 0)`,
        borderColor: `rgba(${themeToken('--tt-nav-border-rgb')}, 1)`,
        duration: 0.5,
        onComplete: () => (overrideRef.current = false),
      });
    }
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Leaving the collapsed breakpoint resets the mobile menu.
  useEffect(() => {
    if (!collapsed) {
      setMenuOpen(false);
      setMenuMounted(false);
      overrideRef.current = false;
    }
  }, [collapsed]);

  // ---- "More" dropdown (w-dropdown + IX2 a-23 / a-24 on desktop) ----
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (ddOpen) {
      setDdVisible(true);
      if (!collapsed) {
        gsap.fromTo(list, { y: '3rem', opacity: 0 }, { y: 0, duration: 0.3, ease: 'power1.out' });
        gsap.to(list, { opacity: 1, duration: 0.2, ease: 'power1.out' });
      }
      gsap.to(chevronRef.current, { rotation: 180, duration: 0.3, ease: 'power1.out' });
    } else {
      gsap.to(chevronRef.current, { rotation: 0, duration: 0.3, delay: 0.1, ease: 'power1.out' });
      if (!collapsed && ddVisible) {
        gsap.to(list, { opacity: 0, duration: 0.2, delay: 0.2, ease: 'power1.out', onComplete: () => setDdVisible(false) });
      } else {
        setDdVisible(false);
      }
    }
  }, [ddOpen]);

  // Webflow closes dropdowns on outside click and Escape.
  useEffect(() => {
    if (!ddOpen && !menuOpen) return;
    const onDown = e => {
      if (ddOpen && !e.target.closest('.navbar2_menu-dropdown')) setDdOpen(false);
      if (menuOpen && !navRef.current.contains(e.target)) closeMenu();
    };
    const onKey = e => {
      if (e.key === 'Escape') {
        setDdOpen(false);
        closeMenu();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [ddOpen, menuOpen, closeMenu]);

  const inOverlay = collapsed && menuMounted;

  const menu = (
    <nav
      ref={menuRef}
      role="navigation"
      id="w-node-_172472bf-4440-ddd8-e975-7e859557b662-6c0acf0c"
      className="navbar2_menu is-page-height-tablet w-nav-menu"
      {...(inOverlay ? { 'data-nav-menu-open': '' } : {})}
    >
      <div className="div-block-11">
        <a href="/events" className="navbar2_link current w-nav-link">Events</a>
        <a href="https://www.peerscale.com/" target="_blank" rel="noreferrer" className="navbar2_link current w-nav-link">Peerscale</a>
        <a href="/community" className="navbar2_link current w-nav-link">Community</a>
        <div
          data-delay="200"
          data-hover="false"
          className={`navbar2_menu-dropdown w-dropdown${ddOpen && collapsed ? ' w--nav-dropdown-open' : ''}`}
        >
          <div
            className={`navbar2_dropdwn-toggle w-dropdown-toggle${ddOpen ? ' w--open' : ''}${ddOpen && collapsed ? ' w--nav-dropdown-toggle-open' : ''}`}
            role="button"
            tabIndex={0}
            aria-haspopup="menu"
            aria-expanded={ddOpen}
            onClick={() => setDdOpen(o => !o)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setDdOpen(o => !o))}
          >
            <div>More</div>
            <div ref={chevronRef} className="dropdown-chevron hide-mobile w-embed">
              <svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor" />
              </svg>
            </div>
            <div className="dropdown-chevron hide-desktop w-embed">
              <svg width="45" height="33" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.4052 13.1612L20.1588 0.0996094H28.7844L44.6801 16.5498L28.7844 32.9999H20.1588L33.3436 20H0.320068V13.1612H33.4052Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <nav
            ref={listRef}
            className={`navbar2_dropdown-list w-dropdown-list${ddVisible || ddOpen ? ' w--open' : ''}${ddOpen && collapsed ? ' w--nav-dropdown-list-open' : ''}`}
          >
            <MoreDropdownPanel />
          </nav>
        </div>
      </div>
      <a href="/memberships" className="button w-button">Become a Member</a>
    </nav>
  );

  return (
    <div
      ref={navRef}
      data-animation="default"
      className="navbar2_component w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      role="banner"
      data-duration="400"
    >
      <div ref={containerRef} className="navbar2_container">
        <a href="/" id="w-node-_854e75ae-8084-bd6f-a7d5-e8f06c0acf0e-6c0acf0c" aria-current="page" className="navbar2_logo-link w-nav-brand w--current">
          <div className="navbar2_logo w-embed">
            <Logo />
          </div>
        </a>
        {!inOverlay && menu}
        <div id="w-node-_854e75ae-8084-bd6f-a7d5-e8f06c0acf26-6c0acf0c" className="navbar2_button-wrapper">
          <div
            className={`navbar2_menu-button w-nav-button${menuOpen ? ' w--open' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="menu"
            aria-expanded={menuOpen}
            onClick={() => (menuOpen ? closeMenu() : openMenu())}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), menuOpen ? closeMenu() : openMenu())}
          >
            <div ref={iconRef} className="menu-icon2">
              <div className="w-embed">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5954 8.35546L14.8845 6.64452L9.68997 11.8391V0.23999H7.26997V11.8391L2.07544 6.64452L0.364502 8.35546L8.47997 16.4709L16.5954 8.35546Z" fill="CurrentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div ref={shadowRef} className="nav-box-shadow" />
      </div>
      <div
        className={`w-nav-overlay${inOverlay ? ' is-open' : ''}`}
        style={inOverlay ? { height: document.documentElement.scrollHeight } : undefined}
      >
        {inOverlay && menu}
      </div>
    </div>
  );
}
