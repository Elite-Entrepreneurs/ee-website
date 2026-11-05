/**
 * Homepage content, taken verbatim from https://www.techto.org/ (published Oct 23 2026).
 * Element ids (`w-node-*`) are kept because the original Webflow CSS positions grid cells by id.
 */

const NBSP = ' ';

/** Brand name shown on the site, and the build credit in the footer. */
export const brand = {
  name: 'Elite',
  poweredBy: 'aixoraweb',
  poweredByUrl: 'https://www.aixoraweb.com/',
};

export const podcasts = [
  {
    title: 'Founder Journey',
    description: 'Real Stories of Canadian Startup Success',
    href: 'https://open.spotify.com/show/5ztGmApbvduFqczYRD8IQm',
    image: '/assets/images/podcast1-1.png',
  },
  {
    title: 'Quick Takes',
    description: 'Breaking Down Canadian Tech News and Trends',
    href: 'https://open.spotify.com/show/5GsOadiqu1MhFbMAVUxVJZ',
    image: '/assets/images/podcast2-1.png',
  },
];

// "Trusted by Members who Built" – order matches the DOM; wId drives the IX2 stagger.
export const trustedLogos = [
  { wId: '21ef2c0d-5db0-00af-aa33-d53cf610cad8', node: 'w-node-_21ef2c0d-5db0-00af-aa33-d53cf610cad8-a6a2ca3f', variant: '_1', src: '/assets/images/shopify.svg', alt: 'Shopify' },
  { wId: '7da3bbf3-8f8b-ea8a-1996-5c45993bac63', node: 'w-node-_7da3bbf3-8f8b-ea8a-1996-5c45993bac63-a6a2ca3f', variant: '_2', src: '/assets/images/wealthsimple.svg', alt: 'Wealthsimple' },
  { wId: 'a3e6dfbc-797e-d371-107f-46b7ded3b2ce', node: 'w-node-a3e6dfbc-797e-d371-107f-46b7ded3b2ce-a6a2ca3f', variant: '_2', src: '/assets/images/voiceflow.svg', alt: 'Voiceflow' },
  { wId: '94f97c73-c136-463a-f2a1-49a1e9daf043', node: 'w-node-_94f97c73-c136-463a-f2a1-49a1e9daf043-a6a2ca3f', variant: '_2', src: '/assets/images/loblaw-dig.svg', alt: 'Loblaw Digital' },
  { wId: '28aa4f18-fd77-c968-096e-38f1bd407fa4', node: 'w-node-_28aa4f18-fd77-c968-096e-38f1bd407fa4-a6a2ca3f', variant: '_2', src: '/assets/images/super.com.svg', alt: 'super.com' },
];

const eventImage = '/assets/images/gev_music_tech_-ar_43_-profile_7329xxt_-v_7_c97';

// Events CMS collection (currently one upcoming event, Toronto).
export const events = [
  {
    slug: 'future-of-education-nov-10-2026',
    title: 'Future of Education: Impact of AI on Learning',
    city: 'Toronto',
    year: '2026',
    day: '10',
    month: 'Nov',
    longDate: 'November 10, 2026',
    shortDate: 'Nov 10',
    featuredTime: '6: 00 - 9:00 pm ET',
    start: '6:00 pm',
    end: '9:00 pm',
    venue: 'Convivium Dining Community',
    price: '$30 General Admission | Free for Members',
    soldOut: false,
    image: {
      src: `${eventImage}.png`,
      srcSet: `${eventImage}-p-500.png 500w, ${eventImage}-p-800.png 800w, ${eventImage}-p-1080.png 1080w, ${eventImage}.png 1232w`,
      sizes: '(max-width: 479px) 48vw, (max-width: 1279px) 49vw, 50vw',
    },
  },
];

export const featuredTimeSeparator = `${NBSP}|${NBSP}${NBSP}`;

export const cities = [
  { label: 'Toronto', id: 'radio', name: 'Radio' },
  { label: 'Montreal', id: 'radio-3', name: 'Radio 3' },
  { label: 'Vancouver', id: 'radio-2', name: 'Radio 2' },
];

export const testimonials = [
  {
    tab: 'Voiceflow',
    quote: "If you're building a product—start with a community. People will want you to win and overlook early issues because they feel part of something.",
    name: 'Braden Ream',
    role: 'CEO, Voiceflow',
    image: { src: '/assets/images/img_braden-1.png', alt: 'Braden Ream' },
    imageNode: null,
    contentNode: 'w-node-_15985e47-4f88-6170-64f3-ea32c6c3838f-a6a2ca3f',
    logo: { src: '/assets/images/logo-voiceflow-1.png', alt: 'VoiceFlow' },
  },
  {
    tab: 'Wealthsimple',
    quote: "You are nothing but the people you surround yourself with—that's what turns a cool idea into something that can change the world.",
    name: 'Mike Katchen',
    role: 'CEO, Wealthsimple',
    image: {
      src: '/assets/images/img_mike-1.png',
      srcSet: '/assets/images/img_mike-1-p-500.png 500w, /assets/images/img_mike-1.png 575w',
      sizes: '100vw',
      alt: 'Mike Katchen',
    },
    imageNode: null,
    contentNode: 'w-node-_15985e47-4f88-6170-64f3-ea32c6c383a0-a6a2ca3f',
    logo: { src: '/assets/images/logo-wealthsimple-1.png', alt: 'Wealthsimple' },
  },
  {
    tab: 'Shopify',
    quote: 'You don’t need your product to scale for millions—just solve what the first 10 or 100 people need to be successful.',
    name: 'Satish Kanwar',
    role: 'Former VP Product, Shopify',
    image: {
      src: '/assets/images/img_satish-1.png',
      srcSet: '/assets/images/img_satish-1-p-500.png 500w, /assets/images/img_satish-1.png 575w',
      sizes: '100vw',
      alt: 'Satish Kanwar',
    },
    imageNode: 'w-node-_15985e47-4f88-6170-64f3-ea32c6c383af-a6a2ca3f',
    contentNode: 'w-node-_15985e47-4f88-6170-64f3-ea32c6c383b1-a6a2ca3f',
    logo: { src: '/assets/images/logo-shopify-1.png', alt: 'Shopify' },
  },
];

export const sponsorshipPerks = {
  // Three columns, matching the original .div-block-13 / .div-block-14 / plain div grouping.
  columns: [
    {
      className: 'div-block-13',
      items: [
        { wId: 'e3611ba3-b5ff-81ba-fc40-81bf59eda3bd', spaced: true, title: 'Boost Your Brand', text: 'Be seen alongside top tech companies.' },
        { wId: '9894c9c2-ea55-1f5a-9418-3c9af54a0dfc', spaced: false, title: 'Grow Faster', text: 'Build relationships that can help your business succeed.' },
      ],
    },
    {
      className: 'div-block-14',
      items: [
        { wId: 'd20460ee-5380-6ad2-179d-07898cc2b8b0', spaced: true, title: 'Find New Customers', text: 'Meet tech professionalsready to work with you.' },
        { wId: 'd20460ee-5380-6ad2-179d-07898cc2b8b7', spaced: false, title: 'Peerscale Roundtables', text: 'Connect with high-growth CEOs, CTOs & COOs with $2M+ in revenue or funding.' },
      ],
    },
    {
      className: '',
      items: [{ wId: '30ca1f7f-8f9b-ee63-aeca-9895aa4b3179', spaced: true, title: 'Hire the Best', text: 'Direct access to talented tech professionals.' }],
    },
  ],
};

// "Thank You" sponsor marquees – each row: animation class (from the original embeds) + logos.
export const sponsorRows = [
  {
    trackClass: 'track-horizontal',
    logos: [
      { src: '/assets/images/logo_aws.png', alt: 'AWS' },
      { src: '/assets/images/logo-shopify.png', alt: 'Shopify' },
      { src: '/assets/images/logo-23.png', alt: 'Ritual' },
    ],
  },
  {
    trackClass: 'marquee-horizontal-alt-right',
    logos: [
      { src: '/assets/images/logo-28.png', alt: 'Opencare logo', height: 'Auto' },
      { src: '/assets/images/logo-21.png', alt: 'Wealthsimple' },
      { src: '/assets/images/logo-26.png', alt: 'VoiceFlow' },
      { src: '/assets/images/logo-22.png', alt: 'Koho' },
    ],
  },
  {
    trackClass: 'track-horizontal',
    logos: [
      { src: '/assets/images/logo-24.png', alt: 'Clio' },
      { src: '/assets/images/logo_rbc.png', alt: 'RBC' },
      { src: '/assets/images/logo-16.png', alt: 'Citi' },
      { src: '/assets/images/logo_intuit.png', alt: 'Intuit' },
    ],
  },
];

export const footerColumns = [
  {
    title: 'Content',
    node: 'w-node-d468ba35-6def-841d-9685-8f1cdf26c2c0-df26c2b8',
    linkClass: 'footer1_link',
    links: [
      { label: 'Events', href: '/events' },
      { label: 'Baseball', href: '/baseball' },
      { label: 'Community', href: '/community' },
      { label: 'Sponsors', href: '/sponsors' },
      { label: 'Peerscale', href: 'https://www.peerscale.com/', external: true },
      { label: 'Job Board', href: 'https://jobs.techto.org/', external: true },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Media',
    linkClass: 'footer1_link',
    links: [
      { label: 'Newsletter', href: 'https://blog.techto.org/?_gl=1*1uhtu6h*_gcl_au*MTQ1NDExNjc1OC4xNzI5NjQyNTk1' },
      { label: 'Founder Journey Podcast', href: 'https://open.spotify.com/show/5ztGmApbvduFqczYRD8IQm', external: true },
      { label: 'Quick Takes Podcast', href: 'https://open.spotify.com/show/5GsOadiqu1MhFbMAVUxVJZ?si=4c67d84525624c88', external: true },
      { label: 'Videos', href: 'https://www.youtube.com/c/TechTorontoOrg' },
    ],
  },
  {
    title: 'Follow',
    linkClass: 'footer1_social-link w-inline-block',
    wrapLabel: true,
    links: [
      { label: 'X', href: 'https://x.com/techto' },
      { label: 'Facebook', href: 'https://www.facebook.com/techtorontoorg/' },
      { label: 'Youtube', href: 'https://www.youtube.com/user/TechTorontoOrg' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/techtorontoorg/' },
      { label: 'Instagram', href: 'https://www.instagram.com/techtoorg/' },
    ],
  },
];

export const legalLinks = [
  { label: 'Privacy', href: 'https://docs.google.com/document/u/1/d/e/2PACX-1vRLxvFbVG32LWOeOWcJvbWMA7DjPSkjurBdqX7Bj9PWy-Gq6FcoRFugNws7x1pc381lrYbWXPbKr6KT/pub' },
  { label: 'Terms', href: 'https://docs.google.com/document/d/e/2PACX-1vQd_C_Nt9pwEy5bLQ075wA0QfHpXD922eHMN659rUTw32wK-IckCGhFisWCMI0W2a-Pq8gSd8YxEw4N/pub' },
  { label: 'Cookies', href: '#' },
];

export const TERMS_URL = legalLinks[1].href;
