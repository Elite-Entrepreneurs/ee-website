import { Fragment } from 'react';
import { sponsorRows, sponsorshipPerks } from '../data/content.js';

const PERK_INIT = { opacity: 0, transform: 'translate3d(0, 20%, 0)' };

function ThankYou() {
  return (
    <h2 className="heading-style-h1">
      {'Thank '}
      <span className="h1-span">You</span>
    </h2>
  );
}

/** One "Thank You · logo · Thank You …" row; animation comes from the original embed CSS. */
function SponsorMarquee({ trackClass, logos }) {
  return (
    <div className="padding-bottom padding-xxhuge">
      <div className="marquee-horizontal-headline">
        <div className={trackClass}>
          <ThankYou />
          {logos.map(logo => (
            <Fragment key={logo.alt}>
              <div className="logo-pill">
                <img src={logo.src} loading="lazy" alt={logo.alt} height={logo.height} className="logo-tile" />
              </div>
              <ThankYou />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sponsorship() {
  return (
    <section>
      <div data-w-id="bf418e48-711c-d77e-849f-3945261b7091" style={{ opacity: 0 }} className="padding-global">
        <div className="container-large">
          <div className="padding-section-large padding-mobile-small">
            <div className="cta8_component-3">
              <div data-w-id="06b22815-caf7-f09c-b229-a0b60d155446" className="w-layout-grid grid">
                <div id="w-node-_224b7677-c11e-e977-3d6a-5d5ec77b7efc-a6a2ca3f" className="div-block-36">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline outline">Showcase Your Brand</div>
                  </div>
                  <h2 scramble="">Exclusive Sponsorships</h2>
                </div>
                {sponsorshipPerks.columns.map(col => (
                  <div key={col.items[0].wId} className={col.className || undefined}>
                    {col.items.map(item => (
                      <div key={item.wId} data-w-id={item.wId} style={PERK_INIT} className={item.spaced ? 'margin-bottom margin-medium' : undefined}>
                        <div className="margin-bottom margin-xsmall">
                          <p>
                            <span className="text-highlight-h1">{item.title}</span>
                          </p>
                        </div>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-large">
        {sponsorRows.map((row, i) => (
          <SponsorMarquee key={i} {...row} />
        ))}
        <div className="padding-global">
          <div className="container-large">
            <div className="margin-top margin-medium">
              <div className="button-group is-right is-center-mobile">
                <a href="/sponsors" className="button w-button">Become a Sponsor</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
