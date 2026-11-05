import { trustedLogos } from '../data/content.js';

const CARD_INIT = { opacity: 0, transform: 'translate3d(0, 2rem, 0)' };

export default function TrustedCompanies() {
  return (
    <section className="section_logo1">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-top padding-medium">
            <div className="logo1_component">
              <div className="logo1_content">
                <div className="margin-bottom margin-medium">
                  <h3 className="heading-style-h2-1 align-center-mobile">Trusted by Members who Built</h3>
                </div>
                <div
                  id="w-node-_21ef2c0d-5db0-00af-aa33-d53cf610cad7-a6a2ca3f"
                  data-w-id="21ef2c0d-5db0-00af-aa33-d53cf610cad7"
                  className="w-layout-layout quick-stack wf-layout-layout"
                >
                  {trustedLogos.map(logo => (
                    <div key={logo.wId} id={logo.node} data-w-id={logo.wId} style={CARD_INIT} className={`w-layout-cell logo-card ${logo.variant}`}>
                      <img loading="lazy" src={logo.src} alt={logo.alt} className="logo1_logo" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
