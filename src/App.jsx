import { useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustedCompanies from './components/TrustedCompanies.jsx';
import Events from './components/Events.jsx';
import CommunityBenefits from './components/CommunityBenefits.jsx';
import ImpactStories from './components/ImpactStories.jsx';
import MembershipBenefits from './components/MembershipBenefits.jsx';
import Newsletter from './components/Newsletter.jsx';
import Sponsorship from './components/Sponsorship.jsx';
import Footer from './components/Footer.jsx';
import { initInteractions } from './lib/interactions.js';

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanup = initInteractions(rootRef.current);
    return cleanup;
  }, []);

  return (
    <div ref={rootRef} className="page-wrapper">
      <main className="main-wrapper">
        <Header />
        <Hero />
        <TrustedCompanies />
        <Events />
        <CommunityBenefits />
        <ImpactStories />
        <MembershipBenefits />
        <Newsletter />
        <Sponsorship />
        <Footer />
      </main>
    </div>
  );
}
