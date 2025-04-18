import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import News from '../News';
import Stats from '../Stats';
import EspacePerso from '../EspacePerso';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Section Héro - Premier aperçu */}
      <Hero />

      {/* Section Services en ligne - Accès rapide aux démarches */}
      <div className="bg-gray-50">
        <EspacePerso />
      </div>

      {/* Section La Martinique en chiffres */}
      <Stats />

      {/* Section Nos Services - Vue d'ensemble des services */}
      <Services />

      {/* Section Actualités - Dernières informations */}
      <div className="bg-gray-50">
        <News />
      </div>
    </div>
  );
};

export default Home; 