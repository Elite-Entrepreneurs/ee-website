import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { testimonials } from '../data/content.js';

const MARQUEE_COPIES = 8;
const DURATION_OUT = 0.1; // data-duration-out="100"
const DURATION_IN = 0.3; // data-duration-in="300"

function TestimonialPane({ item, active, paneRef }) {
  return (
    <div ref={paneRef} data-w-tab={item.tab} className={`w-tab-pane${active ? ' w--tab-active' : ''}`}>
      <div className="testimonial1_component">
        <div id={item.imageNode ?? undefined} className="testimonial-img-wrapper">
          <img loading="lazy" className="testimonial-img" {...item.image} />
        </div>
        <div id={item.contentNode} className="testimonial1_content">
          <div className="margin-bottom margin-medium">
            <div className="testimonial1_logo-wrapper">
              <img loading="lazy" src="/assets/images/quote.gif" alt="" className="quote" />
            </div>
          </div>
          <h3 className="heading-style-h2">{item.quote}</h3>
          <div className="margin-top margin-medium">
            <div className="testimonial1_client">
              <h4>
                <span className="highlight-h4-white">{item.name}</span>
              </h4>
              <div>{item.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Webflow Tabs with the original fade timings. */
function TestimonialTabs() {
  const [current, setCurrent] = useState(testimonials[0].tab); // highlighted tab link
  const [shown, setShown] = useState(testimonials[0].tab); // visible pane
  const panes = useRef({});

  const select = tab => {
    if (tab === current) return;
    setCurrent(tab);
    gsap.to(panes.current[shown], {
      opacity: 0,
      duration: DURATION_OUT,
      ease: 'power1.inOut',
      onComplete: () => {
        setShown(tab);
        gsap.fromTo(panes.current[tab], { opacity: 0 }, { opacity: 1, duration: DURATION_IN, ease: 'power1.inOut' });
      },
    });
  };

  return (
    <div data-current={current} data-easing="ease" data-duration-in="300" data-duration-out="100" className="w-tabs">
      <div className="w-tab-content">
        {testimonials.map(item => (
          <TestimonialPane key={item.tab} item={item} active={shown === item.tab} paneRef={el => (panes.current[item.tab] = el)} />
        ))}
      </div>
      <div className="tab-menu w-tab-menu" role="tablist">
        {testimonials.map((item, i) => (
          <a
            key={item.tab}
            data-w-tab={item.tab}
            role="tab"
            tabIndex={0}
            aria-selected={current === item.tab}
            className={`tab-container${i === testimonials.length - 1 ? ' last' : ''} w-inline-block w-tab-link${current === item.tab ? ' w--current' : ''}`}
            onClick={() => select(item.tab)}
            onKeyDown={e => e.key === 'Enter' && select(item.tab)}
          >
            <img loading="lazy" className="testimonial1_logo" {...item.logo} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ImpactStories() {
  return (
    <section className="section_testimonial1 bg-green">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-top padding-xlarge">
            <div>
              <div className="text-style-tagline outline">Impact Stories</div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-horizontal-headline">
          <div className="marquee-horizontal-alt-right">
            {Array.from({ length: MARQUEE_COPIES }, (_, i) => (
              <h2 key={i} className="testimonial-header">Real Success →</h2>
            ))}
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="margin-top margin-large">
            <div className="padding-bottom padding-xhuge">
              <TestimonialTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
