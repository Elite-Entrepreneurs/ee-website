# Elite homepage (React + Vite)

The Elite homepage, built from a close recreation of the homepage at https://www.techto.org/ (published Oct 23 2026) and rebranded as Elite with a brown & cream theme. Only the homepage is built. Links to other pages keep their original destinations.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```

## How it is built

The original site is a Webflow build. For the closest match, this project uses the site's **original stylesheet and markup structure** and replaces the Webflow runtime with React.

- `src/styles/webflow.css` is the original Webflow CSS, with asset URLs rewritten to `/assets/...`.
- `src/styles/embeds.css` holds the original page-level `<style>` embeds (global helpers, marquee keyframes, highlight style).
- **Brand:** the name and footer credit live in `brand` in `src/data/content.js`. The nav logo (`icons/Logo.jsx`), footer wordmark (`icons/Wordmark.jsx`) and favicons (`public/favicon.svg`, `public/favicon.png`, `public/assets/images/elite-icon-256.png`) are Elite marks drawn in the original letter style.
- `src/styles/theme.css` is the colour theme (Warm Editorial, brown & cream). It holds the palette and semantic colour tokens (`--tt-*`), remaps the Webflow colour variables onto them, and overrides every colour on the homepage. It contains only colour properties, never sizes or layout. To retheme, edit the tokens at the top. `Header.jsx` reads the `--tt-nav-*` tokens for the nav pill animation.
- `src/styles/components.css` holds a few runtime states that `webflow.js` used to set inline (nav overlay, form success, mobile city menu).
- `public/assets/` holds every image, logo, GIF and font from the original site (82 files).
- `src/lib/interactions.js` replaces Webflow IX2 and the site's custom GSAP script. Timings, easings, offsets and delays are taken from the site's published IX2 config: fade-ins, slide-ups, image "wipe" reveals, the logo stagger, the sponsorship stagger, heading scramble, button hover scramble and the image bounce.
- Webflow `w-node-*` ids are kept, because the original CSS places grid cells by id.

```
src/
  App.jsx                    page composition + interaction bootstrap
  data/content.js            all copy, links, events, testimonials, sponsors, footer links
  lib/interactions.js        IX2 / GSAP animation port
  components/
    Header.jsx               pill nav: scroll state, "More" dropdown, mobile menu
    MoreDropdownPanel.jsx    dropdown contents (newsletter, podcasts, contact)
    Hero.jsx                 headline + floating images
    TrustedCompanies.jsx     "Trusted by Members who Built" logo grid
    Events.jsx / EventRow.jsx featured event, city tabs, mobile "Select City", empty state
    CommunityBenefits.jsx    Learn from the Best / Expand Your Network / Stay Ahead
    ImpactStories.jsx        "Real Success" marquee + testimonial tabs
    MembershipBenefits.jsx   "Other Ways Members Benefit"
    Newsletter.jsx           Subscribe card
    Sponsorship.jsx          perks + "Thank You" sponsor marquees
    Footer.jsx               gradient wordmark, grid lines, link columns
    NewsletterForm.jsx       shared form (3 instances)
    WipeImage.jsx            image with reveal cover
    icons/                   inline SVGs from the original (logo, wordmark, pixel icons)
```

## Differences from the original (on purpose)

- **Newsletter forms** have no backend. The original sends to Beehiiv. Submitting here only shows Webflow's built-in "Thank You for subscribing!" state in the browser.
- **City filter** uses React state in place of Finsweet CMS Filter, with the same behavior: the active tab is highlighted, and "Check Back Soon" shows when a city has no events.
- **Third-party scripts are not included**: analytics, Memberful, Tito, Beehiiv attribution and Cloudflare Turnstile. Turnstile adds an empty `<div>` to each form, and that changes the form spacing, so the same empty node is kept for layout only.
- The footer's Beehiiv iframe is left out because the original hides it (`.beehiv-form { display: none }`).
- The wordmark SVG's invalid `height="auto"` attribute is removed. It rendered the same but logged a console error.

## Asset note

All images, logos, fonts and copy belong to TechTO and the named companies. This project is for local reference and development only. Don't deploy it publicly as-is.
