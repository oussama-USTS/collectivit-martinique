import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">Qui sommes-nous</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Nous contacter</Link></li>
              <li><Link to="/careers" className="hover:text-gray-300">Carrières</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-gray-300">Nos services</Link></li>
              <li><Link to="/demarches-en-ligne" className="hover:text-gray-300">Démarches en ligne</Link></li>
              <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-gray-300">Politique de confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Conditions d'utilisation</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-gray-300">Mentions légales</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                {FaFacebook({ size: 24 })}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                {FaTwitter({ size: 24 })}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                {FaInstagram({ size: 24 })}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                {FaLinkedin({ size: 24 })}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} CTM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 