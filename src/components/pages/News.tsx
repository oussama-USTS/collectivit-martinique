import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  TagIcon, 
  ShareIcon,
  NewspaperIcon,
  DocumentTextIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const News: React.FC = () => {
  const [language, setLanguage] = useState<'fr' | 'cr'>('fr');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    fr: [
      { id: 'all', name: 'Toutes les actualités' },
      { id: 'press', name: 'Communiqués de presse' },
      { id: 'events', name: 'Événements' },
      { id: 'decisions', name: 'Décisions' },
      { id: 'projects', name: 'Projets' },
    ],
    cr: [
      { id: 'all', name: 'Tout nouvèl' },
      { id: 'press', name: 'Kominikasyon lapres' },
      { id: 'events', name: 'Évènman' },
      { id: 'decisions', name: 'Désizyon' },
      { id: 'projects', name: 'Pwojé' },
    ],
  };

  const news = {
    fr: [
      {
        id: 1,
        title: 'Lancement du nouveau site internet de la CTM',
        category: 'press',
        date: '2024-03-15',
        description: 'La Collectivité Territoriale de Martinique lance son nouveau site internet pour améliorer ses services numériques.',
        image: '/images/news/site-launch.jpg',
        type: 'article',
      },
      {
        id: 2,
        title: 'Consultation publique sur les projets d\'aménagement 2024-2025',
        category: 'events',
        date: '2024-03-10',
        description: 'Participez à la consultation publique sur les futurs projets d\'aménagement du territoire.',
        image: '/images/news/consultation.jpg',
        type: 'event',
      },
      {
        id: 3,
        title: 'Adoption du budget 2024',
        category: 'decisions',
        date: '2024-03-05',
        description: 'L\'assemblée de la CTM a adopté le budget pour l\'année 2024.',
        image: '/images/news/budget.jpg',
        type: 'document',
      },
    ],
    cr: [
      {
        id: 1,
        title: 'Lansman nouvo sit entènèt CTM la',
        category: 'press',
        date: '2024-03-15',
        description: 'CTM ka lansé nouvo sit entènèt li pou amélyoré sèvis nimérik li.',
        image: '/images/news/site-launch.jpg',
        type: 'article',
      },
      {
        id: 2,
        title: 'Konsiltasyon piblik asi pwojé aménjaman 2024-2025',
        category: 'events',
        date: '2024-03-10',
        description: 'Patisipé a konsiltasyon piblik la asi pwojé aménjaman téritwa-a.',
        image: '/images/news/consultation.jpg',
        type: 'event',
      },
      {
        id: 3,
        title: 'Adoptasyon bidgé 2024 la',
        category: 'decisions',
        date: '2024-03-05',
        description: 'Lasanblé CTM la adopté bidgé pou lanné 2024 la.',
        image: '/images/news/budget.jpg',
        type: 'document',
      },
    ],
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return NewspaperIcon;
      case 'document':
        return DocumentTextIcon;
      case 'event':
        return VideoCameraIcon;
      default:
        return NewspaperIcon;
    }
  };

  const filteredNews = news[language].filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {language === 'fr' ? 'Actualités' : 'Nouvèl'}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Restez informé des dernières actualités de la CTM'
                : 'Rété enfòmé dènyé nouvèl CTM la'}
            </p>
            <div className="mt-6">
              <button
                onClick={() => setLanguage('fr')}
                className={`mx-2 px-4 py-2 rounded-md ${
                  language === 'fr' ? 'bg-white text-primary' : 'bg-transparent text-white border border-white'
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLanguage('cr')}
                className={`mx-2 px-4 py-2 rounded-md ${
                  language === 'cr' ? 'bg-white text-primary' : 'bg-transparent text-white border border-white'
                }`}
              >
                Kréyol
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories[language].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, index) => {
            const Icon = getTypeIcon(item.type);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {new Date(item.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'fr-MQ')}
                    <TagIcon className="h-4 w-4 ml-4 mr-2" />
                    {categories[language].find(cat => cat.id === item.category)?.name}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={`/actualites/${item.id}`}
                      className="text-primary font-medium hover:text-primary-dark transition-colors duration-300"
                    >
                      {language === 'fr' ? 'Lire la suite →' : 'Li plis →'}
                    </a>
                    <button
                      className="text-gray-500 hover:text-primary transition-colors duration-300"
                      aria-label="Partager"
                    >
                      <ShareIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {language === 'fr' ? 'Restez informé' : 'Rété enfòmé'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {language === 'fr'
                ? 'Abonnez-vous à notre newsletter pour recevoir nos dernières actualités'
                : 'Abonné\'w a newsletter nou-an pou resevwa dènyé nouvèl nou'}
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre email' : 'Imèl ou'}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  {language === 'fr' ? 'S\'abonner' : 'Abonné\'w'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default News; 