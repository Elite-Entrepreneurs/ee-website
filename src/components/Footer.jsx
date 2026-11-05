import NewsletterForm from './NewsletterForm.jsx';
import Wordmark from './icons/Wordmark.jsx';
import { brand, footerColumns, legalLinks } from '../data/content.js';

function FooterColumn({ column }) {
  return (
    <div id={column.node} className="footer1_link-column">
      <div className="margin-bottom margin-xlarge">
        <h3>{column.title}</h3>
      </div>
      <div className="footer1_link-list">
        {column.links.map(link => (
          <a
            key={link.label}
            href={link.href}
            className={column.linkClass}
            {...(link.external ? { target: '_blank', rel: 'noreferrer' } : null)}
          >
            {column.wrapLabel ? <div>{link.label}</div> : link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <section>
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-top padding-xhuge">
              <div className="w-embed">
                <Wordmark />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-hor-grid">
        <div className="padding-global">
          <div className="container-large" />
        </div>
      </section>
      <footer className="footer1_component">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-vertical">
              <div className="padding-bottom padding-xxlarge">
                <div className="w-layout-grid footer1_top-wrapper">
                  <div id="w-node-d468ba35-6def-841d-9685-8f1cdf26c2b9-df26c2b8" className="footer1_left-wrapper">
                    <div className="margin-bottom margin-xlarge">
                      <h3 className="heading-style-h2">Stay up to date on the latest features and releases by joining our newsletter</h3>
                    </div>
                    <NewsletterForm />
                    {/* The original also embeds a Beehiiv iframe here, but `.beehiv-form` is display:none in its CSS. */}
                  </div>
                  <div className="w-layout-grid footer1_menu-wrapper">
                    {footerColumns.map(col => (
                      <FooterColumn key={col.title} column={col} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="padding-bottom padding-large">
                <div className="padding-top padding-medium">
                  <div className="footer1_bottom-wrapper">
                    <div className="footer1_credit-text">
                      © 2026 {brand.name}. All rights reserved.{' '}
                      <span className="footer1_powered-by">
                        <span className="footer1_powered-by-separator" aria-hidden="true">·</span> Powered by{' '}
                        <a href={brand.poweredByUrl} target="_blank" rel="noopener noreferrer" className="footer1_powered-by-name">
                          {brand.poweredBy}
                        </a>
                      </span>
                    </div>
                    <div className="w-layout-grid footer1_legal-list">
                      {legalLinks.map(link => (
                        <a key={link.label} href={link.href} className="footer1_legal-link">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
