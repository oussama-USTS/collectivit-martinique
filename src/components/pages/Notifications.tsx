import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  FaCheckCircle,
  FaBell,
  FaCalendarAlt,
  FaFileAlt,
  FaEnvelope,
  FaExclamationCircle,
  FaFilter
} from 'react-icons/fa';

interface NotificationCardProps {
  icon: IconType;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'success' | 'info' | 'warning';
  isNew?: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  icon: Icon,
  title,
  description,
  date,
  time,
  type,
  isNew
}) => {
  const typeConfig = {
    success: 'bg-green-50 border-green-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-yellow-50 border-yellow-200'
  };

  const iconConfig = {
    success: 'text-green-500',
    info: 'text-blue-500',
    warning: 'text-yellow-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-xl border ${typeConfig[type]} relative ${
        isNew ? 'shadow-lg' : ''
      }`}
    >
      {isNew && (
        <span className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full" />
      )}
      <div className="flex gap-4">
        <div className={`p-2 rounded-lg ${iconConfig[type]}`}>
          {Icon({ size: 24 })}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Notifications: React.FC = () => {
  const notifications = [
    {
      icon: FaCheckCircle,
      title: "Document disponible",
      description: "Votre acte de naissance est prêt à être téléchargé",
      date: "12 mars 2024",
      time: "14:30",
      type: 'success' as const,
      isNew: true
    },
    {
      icon: FaBell,
      title: "Rappel important",
      description: "N'oubliez pas de compléter votre dossier de formation",
      date: "11 mars 2024",
      time: "10:15",
      type: 'warning' as const,
      isNew: true
    },
    {
      icon: FaCalendarAlt,
      title: "Rendez-vous confirmé",
      description: "Votre rendez-vous du 20 mars est confirmé",
      date: "10 mars 2024",
      time: "09:00",
      type: 'info' as const
    },
    {
      icon: FaFileAlt,
      title: "Nouvelle démarche",
      description: "Votre demande d'aide au logement a été enregistrée",
      date: "9 mars 2024",
      time: "16:45",
      type: 'info' as const
    },
    {
      icon: FaEnvelope,
      title: "Nouveau message",
      description: "Un agent a répondu à votre demande",
      date: "8 mars 2024",
      time: "11:30",
      type: 'info' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="mt-2 text-gray-600">Restez informé de l'avancement de vos démarches</p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Tout marquer comme lu
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2">
              <div>
                {FaFilter({ size: 16 })}
              </div>
              <span>Filtrer</span>
            </button>
            <select className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option value="all">Toutes les notifications</option>
              <option value="unread">Non lues</option>
              <option value="success">Succès</option>
              <option value="warning">Avertissements</option>
              <option value="info">Informations</option>
            </select>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <NotificationCard key={index} {...notification} />
          ))}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              {FaBell({ size: 48 })}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucune notification
            </h3>
            <p className="text-gray-600">
              Vous n'avez pas de nouvelles notifications pour le moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications; 