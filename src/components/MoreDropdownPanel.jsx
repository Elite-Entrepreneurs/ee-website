import NewsletterForm from './NewsletterForm.jsx';
import { podcasts } from '../data/content.js';

/** Content of the navbar "More" dropdown: newsletter, podcasts and contact CTA. */
export default function MoreDropdownPanel() {
  return (
    <div id="w-node-be271d11-17d1-f19b-0c69-e2996a085c56-6a085c49" className="padding-global">
      <div id="w-node-be271d11-17d1-f19b-0c69-e2996a085c57-6a085c49" className="container-large bg-gradient-dropdown">
        <div id="w-node-be271d11-17d1-f19b-0c69-e2996a085c58-6a085c49" className="nav-bg-container">
          <div id="w-node-be271d11-17d1-f19b-0c69-e2996a085c59-6a085c49" className="w-layout-layout quick-stack-11 wf-layout-layout">
            <div className="w-layout-cell max-width-small max-width-full-tablet">
              <div className="div-block-40">
                <div className="margin-bottom margin-small">
                  <div className="max-width-small">
                    <h2>Get the Best Emails</h2>
                  </div>
                </div>
                <NewsletterForm />
              </div>
            </div>
            <div id="w-node-be271d11-17d1-f19b-0c69-e2996a085c6c-6a085c49" className="w-layout-cell">
              <div className="margin-bottom margin-small">
                <div className="icon-h2">
                  <img loading="lazy" src="/assets/images/icon_podcast.svg" alt="" />
                  <h2>Podcasts</h2>
                </div>
              </div>
              {podcasts.map(p => (
                <div key={p.title} className="margin-bottom margin-xsmall">
                  <a href={p.href} className="pocast-container w-inline-block">
                    <div className="nav-img-wrapper">
                      <img loading="lazy" src={p.image} alt="" className="nav-img" />
                    </div>
                    <div>
                      <div className="margin-bottom margin-xsmall">
                        <h3>{p.title}</h3>
                      </div>
                      <p>{p.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="w-layout-cell max-width-small">
              <div className="dropdown-container">
                <div className="margin-bottom margin-small">
                  <h3>Interested in becoming a speaker, sponsor, or volunteer?</h3>
                </div>
                <a href="/contact" className="button is-alternate w-button">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-menu-mobile" />
        </div>
      </div>
    </div>
  );
}
