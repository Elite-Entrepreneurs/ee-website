import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cities, events, featuredTimeSeparator } from '../data/content.js';
import EventRow from './EventRow.jsx';

const SLIDE_INIT = { opacity: 0, transform: 'translate3d(0, 25%, 0)' };

function DetailIcon({ src, alt }) {
  return <img src={src} loading="lazy" alt={alt} />;
}

/** Large featured card ("Events that Hit Different"). */
function FeaturedEvent({ event }) {
  return (
    <div className="layout192_component">
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <div id="events" data-w-id="541dd206-23bf-a984-673b-84a7b91ca994" style={SLIDE_INIT} className="w-layout-grid layout192_content">
              <div id="w-node-_541dd206-23bf-a984-673b-84a7b91ca995-a6a2ca3f" className="event-img-wrapper-home">
                <div className="date-badge">
                  <p>{event.year}</p>
                  <div className="event-date-no">{event.day}</div>
                  <p>{event.month}</p>
                </div>
                <img loading="lazy" alt="" className="layout192_image" {...event.image} />
              </div>
              <div id="w-node-_541dd206-23bf-a984-673b-84a7b91ca997-a6a2ca3f" className="event-right-col">
                <div className="margin-bottom margin-xxsmall">
                  <div className="text-style-tagline">{event.city}</div>
                </div>
                <div className="margin-bottom margin-xsmall">
                  <h2 scramble="">{event.title}</h2>
                </div>
                <div className="max-width-xsmall">
                  <div className="margin-bottom margin-small">
                    <p data-w-id="541dd206-23bf-a984-673b-84a7b91ca99e" style={{ opacity: 0 }} className="w-dyn-bind-empty" />
                  </div>
                </div>
                <div className="margin-bottom margin-small">
                  <div className="detail-row">
                    <div className="detail-container">
                      <DetailIcon src="/assets/images/icon_time.svg" alt="Time" />
                      <div className="div-block-8">
                        <p>{event.shortDate}</p>
                        <p>{featuredTimeSeparator}</p>
                        <p>{event.featuredTime}</p>
                      </div>
                    </div>
                    <div className="detail-container">
                      <DetailIcon src="/assets/images/icon_location2.svg" alt="Location marker" />
                      <div className="div-block-9">
                        <p>{event.venue}</p>
                      </div>
                    </div>
                    <div className="detail-container">
                      <DetailIcon src="/assets/images/icon_price.svg" alt="Bookmark" />
                      <div className="div-block-9">
                        <p>{event.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="button-group is-center-mobile">
                    <a href={`/event/${event.slug}`} className="button is-secondary w-button">Event Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** City tabs (Finsweet CMS filter on the original) + "Select City" toggle on mobile. */
function CityEvents() {
  const [city, setCity] = useState(cities[0].label);
  const [menuOpen, setMenuOpen] = useState(false);
  const arrowRef = useRef(null);

  // IX2 a-8 / a-9 (small + tiny breakpoints only; the toggle is hidden above 767px).
  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    gsap.to(arrowRef.current, { rotation: next ? 180 : 0, duration: 0.5 });
  };

  const visible = events.filter(e => e.city === city);

  return (
    <section data-w-id="f173d2d7-b62e-4bf6-04e0-5ffa16ca05b9" style={{ opacity: 0 }} className="section_cta25">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-small">
            <div className="cta25_component">
              <div className="margin-bottom">
                <div className="tab-dropdown" role="button" tabIndex={0} onClick={toggleMenu} onKeyDown={e => e.key === 'Enter' && toggleMenu()}>
                  <div className="tab-dropdown-icon">
                    <div className="text-block-2">Select City</div>
                    <div ref={arrowRef} className="tab-arrow w-embed">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.59503 10.9671L12.1813 6.3809L13.3902 7.58987L6.74003 14.2401L0.0898438 7.58987L1.29881 6.3809L5.88503 10.9671V0.560059H7.59503V10.9671Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="event-tabs" className="w-form">
                  <form name="wf-form-event-tabs" data-name="event-tabs" className={`tabs-menu${menuOpen ? ' is-open' : ''}`} onSubmit={e => e.preventDefault()}>
                    {cities.map(c => (
                      <label key={c.id} className={`tab_link w-radio${city === c.label ? ' is-active' : ''}`}>
                        <input
                          type="radio"
                          name="radio"
                          id={c.id}
                          data-name={c.name}
                          className="w-form-formradioinput hide w-radio-input"
                          value={c.label}
                          checked={city === c.label}
                          onChange={() => setCity(c.label)}
                        />
                        <span className="w-form-label" htmlFor={c.id}>{c.label}</span>
                      </label>
                    ))}
                  </form>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  {/* Items stay mounted (hidden) so their reveal animation only runs once. */}
                  {events.map(event => (
                    <EventRow key={event.slug} event={event} hidden={event.city !== city} />
                  ))}
                </div>
              </div>
              <div className="empty-state" style={{ display: visible.length ? 'none' : 'block' }}>
                <div className="no-events text-align-center">
                  <div className="check-back-soon">
                    <h1 data-w-id="b01b4fa8-d019-f8bc-f357-74137982041c" style={SLIDE_INIT}>
                      {'Check Back '}
                      <span scramble="" className="h1-span">Soon</span>
                      <span>{'‍'}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Events() {
  return (
    <>
      <section data-w-id="c03be895-ccf2-0912-70ed-27083bde1a79" style={{ opacity: 0 }} className="section_cta25 bg-radial-gradient">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="cta25_component">
                <div className="margin-bottom margin-medium">
                  <div className="text-align-center">
                    <div className="align-center">
                      <div className="margin-bottom margin-small">
                        <div data-w-id="e86f0303-d10b-5543-9b2a-0cbe41e23f40" style={SLIDE_INIT} className="events-title">
                          <h2 className="heading-style-h1">Events that</h2>
                          <div className="event-mic highlight-wrapper">
                            <div className="wipe-wrapper">
                              <div className="img-highlight" />
                              <img src="/assets/images/event-mic-1.png" loading="lazy" alt="Microphone" />
                            </div>
                          </div>
                          <h2 className="heading-style-h1">
                            {'Hit '}
                            <span scramble="" className="h1-span">Different</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="max-width-large align-center">
                      <h3 style={{ opacity: 0 }} className="events-subheading">
                        Our events are designed to provide you with actionable insights and meaningful connections. Check out what&apos;s coming up next.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-top padding-medium">
                <FeaturedEvent event={events[0]} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityEvents />
    </>
  );
}
