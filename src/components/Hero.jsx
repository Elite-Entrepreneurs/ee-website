import WipeImage from './WipeImage.jsx';

const SLIDE_INIT = { opacity: 0, transform: 'translate3d(0, 25%, 0)' };

// Floating hero images: [data-w-id, wrapper class, src, alt, extra img props]
const floatingImages = [
  { wId: '695ce6e7-caf8-f750-6ff6-9c2d94243da1', className: 'img-arc', src: '/assets/images/arc.png', alt: '', imgProps: { 'img-pixelate': '' } },
  { wId: 'f07441b9-7b41-922f-6d72-bb9d0a411d9d', className: 'img-circuit', src: '/assets/images/cells.png', alt: '' },
  { wId: '10f99069-2465-6554-3e5c-040ecb29225f', className: 'img-man', src: '/assets/images/home_pill-man-in-crow.png', alt: 'Man on laptop' },
  { wId: '5b0ea01c-209d-3867-1ddb-7211d66f72f3', className: 'img-woman', src: '/assets/images/home_female-speaker.png', alt: 'Woman' },
];

export default function Hero() {
  return (
    <>
      <div className="hero-gradient" />
      <header className="section_header-centered">
        <div className="hero-text-centered mobile-padding-hero">
          <div className="container-large">
            <div className="text-centered">
              <div className="padding-top padding-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-xlarge">
                    <h1 data-w-id="89cb5670-34e8-0c6e-446c-3cf8042ad807" style={SLIDE_INIT}>
                      {'Canada’s Most '}
                      <span scramble="" className="h1-span">Connected</span>
                      {' Tech Community'}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-bottom padding-medium">
              <div className="cta8_component">
                <div id="w-node-_89cb5670-34e8-0c6e-446c-3cf8042ad810-a6a2ca3f" className="cta8_content">
                  <div data-w-id="bc15710d-80b4-a115-6608-2920df532de2" style={{ opacity: 0 }} className="text-size-large">
                    Meet leaders, share ideas, and connect with people who can open new doors.
                  </div>
                </div>
                <a id="w-node-_89cb5670-34e8-0c6e-446c-3cf8042ad816-a6a2ca3f" href="#events" className="button is-secondary w-button">
                  See Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-parallax-container">
          {floatingImages.map(img => (
            <div key={img.wId} data-w-id={img.wId} className={`${img.className} img-parallax`}>
              <WipeImage wrapperClass="wipe-container" src={img.src} alt={img.alt} imgProps={img.imgProps} />
            </div>
          ))}
        </div>
        <div className="bg-grid" />
      </header>
    </>
  );
}
