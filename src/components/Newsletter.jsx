import NewsletterForm from './NewsletterForm.jsx';
import { TERMS_URL, brand } from '../data/content.js';

export default function Newsletter() {
  return (
    <section id="newsletter" className="section_cta8-2">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div data-w-id="aa6c8ccb-b4a2-2e73-5e27-53a6c6137579" style={{ opacity: 0, transform: 'translate3d(0, 25%, 0)' }} className="cta8_component-3">
              <div className="cta8_content-3">
                <div id="w-node-_3729d26b-a229-0841-51ef-949ff94f7274-a6a2ca3f" className="w-layout-layout quick-stack-5 wf-layout-layout">
                  <div id="w-node-_3729d26b-a229-0841-51ef-949ff94f7275-a6a2ca3f" className="w-layout-cell subscribe-cell">
                    <div className="cta-img-wrapper">
                      <img
                        sizes="100vw"
                        srcSet="/assets/images/cta-img-1-p-500.png 500w, /assets/images/cta-img-1.png 743w"
                        alt="Envelope"
                        src="/assets/images/cta-img-1.png"
                        loading="lazy"
                        className="layout1_image"
                      />
                    </div>
                  </div>
                  <div id="w-node-_3729d26b-a229-0841-51ef-949ff94f7276-a6a2ca3f" className="w-layout-cell">
                    <div className="div-block-7">
                      <img src="/assets/images/headline-outline-2-2.png" loading="lazy" alt="Subscribe" />
                    </div>
                  </div>
                  <div className="w-layout-cell cell-23">
                    <div className="margin-bottom margin-medium">
                      <div className="margin-bottom margin-xsmall">
                        <h3>Join 70,000+</h3>
                      </div>
                      <p>
                        Get the latest trends, startup profiles and expert advice from {brand.name}. Stay informed and connected—straight to your inbox, at no cost.
                      </p>
                    </div>
                    <NewsletterForm />
                    <div className="text-size-tiny">
                      {"By clicking Sign Up you're confirming that you agree with our "}
                      <a href={TERMS_URL} target="_blank" rel="noreferrer" className="text-link">Terms and Conditions</a>.
                    </div>
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
