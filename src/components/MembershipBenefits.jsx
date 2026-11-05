import { HandshakeIcon, MapleLeafIcon, RocketIcon } from './icons/BenefitIcons.jsx';

const SLIDE_INIT = { opacity: 0, transform: 'translate3d(0, 25%, 0)' };

// Each card keeps the original (slightly irregular) Webflow class names so the CSS applies 1:1.
const benefits = [
  {
    node: 'w-node-da61fb54-1ff7-46f4-2aaf-d5610cf34402-a6a2ca3f',
    topClass: 'div-block-5',
    iconContainer: 'icon-container',
    embedClass: 'code-embed-2',
    Icon: MapleLeafIcon,
    gif: '/assets/images/scene.gif',
    tag: { wId: '603abce1-4a7c-059e-d8e5-54ad2ae1bd6b', className: 'new-to-canadian-tech', label: 'New to Canadian Tech' },
    bottomClass: 'div-block-4',
    textClass: 'benefit-text',
    title: 'Break Into the Scene',
    titleAttrs: { highlight: '' },
    text: 'Join the community, get insider insights, and uncover opportunities to kickstart your career in Canadian tech.',
    textFirst: false,
  },
  {
    node: 'w-node-eb25088e-da0d-9be0-fdbf-0b8b81a8b743-a6a2ca3f',
    topClass: 'div-block-5',
    iconContainer: 'icon-container-tall',
    embedClass: 'code-embed-3',
    Icon: HandshakeIcon,
    gif: '/assets/images/build.gif',
    tag: { wId: '70089f71-ac41-4178-4531-6391544536c1', className: 'new-to-canadian-tech', label: 'Looking to Raise' },
    bottomClass: 'div-block-4',
    textClass: 'benefit-text-2',
    title: 'Build Investor Relationships',
    text: 'Connect with investors and mentors to refine your pitch and secure the funding you need.',
    textFirst: true,
  },
  {
    node: 'w-node-_53d0acdd-627b-e9f0-f703-e452bf87d690-a6a2ca3f',
    topClass: 'div-block-5-copy',
    iconContainer: 'icon-container-long',
    embedClass: 'code-embed-4',
    Icon: RocketIcon,
    gif: '/assets/images/accelerate.gif',
    tag: { wId: 'c654fdc3-737c-602b-7b00-6c923f8ec9c5', className: 'seed-to-series-a', label: 'Seed to Series A+', pClass: 'paragraph-3' },
    bottomClass: 'div-block-4-copy',
    textClass: 'benefit-text-copy',
    title: 'Accelerate Growth',
    text: 'Gain mentorship, tools, and guidance to scale your team and grow your product as you secure your next round.',
    textFirst: false,
  },
];

function BenefitCard({ b }) {
  const { Icon } = b;
  const title = (
    <h4>
      <span {...b.titleAttrs} className="text-highlight-span">{b.title}</span>
    </h4>
  );
  const text = <p className="indent-32">{b.text}</p>;
  return (
    <div id={b.node} className="w-layout-cell">
      <div className="div-block-3">
        <div className={b.topClass}>
          <div className={b.iconContainer}>
            <div className={`${b.embedClass} w-embed`}>
              <Icon />
            </div>
            <img src={b.gif} loading="lazy" alt="" className="img-gif" />
          </div>
          <div data-w-id={b.tag.wId} style={SLIDE_INIT} className={`${b.tag.className} img-parallax`}>
            <div className="tag white">
              <p className={b.tag.pClass}>{b.tag.label}</p>
            </div>
          </div>
        </div>
        <div className={b.bottomClass}>
          <div className={b.textClass}>
            {b.textFirst ? text : title}
            {b.textFirst ? title : text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembershipBenefits() {
  return (
    <section data-w-id="4f0978ae-6696-e7f7-e7bc-315a1819265d" style={{ opacity: 0 }} className="section_blog44">
      <div className="padding-global">
        <div className="container-large-6">
          <div className="padding-section-medium">
            <div className="blog44_component">
              <div className="margin-bottom margin-small">
                <div className="blog44_heading-wrapper">
                  <div id="w-node-_4f0978ae-6696-e7f7-e7bc-315a18192664-a6a2ca3f" className="blog44_heading">
                    <div className="max-width-xsmall">
                      <div className="margin-bottom margin-xsmall">
                        <h2 scramble="">
                          {/* The source has a <br> here, but the live site's scramble rewrites the
                              heading as plain text, so the rendered heading has no forced break. */}
                          Other Ways Members Benefit
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="button-group is-right hide-mobile-landscape">
                    <a href="/memberships" className="button w-button">Become a Member</a>
                  </div>
                </div>
              </div>
              <div id="w-node-da61fb54-1ff7-46f4-2aaf-d5610cf34401-a6a2ca3f" className="w-layout-layout quick-stack-4 wf-layout-layout">
                {benefits.map(b => (
                  <BenefitCard key={b.node} b={b} />
                ))}
                <div id="w-node-_6384534d-38a4-17d2-3c29-88a5a550a845-a6a2ca3f" className="w-layout-cell cell-24" />
              </div>
              <div className="show-mobile-landscape">
                <div className="margin-top margin-xxlarge">
                  <div className="button-group is-center">
                    {/* The original mobile button links to "#". */}
                    <a href="#" className="button w-button">Become a Member</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-2" />
    </section>
  );
}
