import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import {
  FaFileAlt,
  FaClipboardList,
  FaBell,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaSearch
} from 'react-icons/fa';

interface StatCardProps {
  icon: IconType;
  title: string;
  value: string;
  description: string;
  color: string;
}

interface ProcedureCardProps {
  icon: IconType;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
  reference: string;
}

interface NotificationCardProps {
  icon: IconType;
  title: string;
  description: string;
  time: string;
  isNew?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, description, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold mb-2">{value}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          {Icon({ size: 24, className: "text-white" })}
        </div>
      </div>
    </motion.div>
  );
};

const ProcedureCard: React.FC<ProcedureCardProps> = ({ icon: Icon, title, status, date, reference }) => {
  const navigate = useNavigate();
  const statusConfig = {
    'completed': { color: 'bg-green-100 text-green-800', icon: FaCheckCircle },
    'in-progress': { color: 'bg-blue-100 text-blue-800', icon: FaClock },
    'pending': { color: 'bg-yellow-100 text-yellow-800', icon: FaExclamationCircle }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-100 rounded-xl">
          {Icon({ size: 20, className: "text-gray-600" })}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500">Réf: {reference}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${statusConfig[status].color} flex items-center gap-2`}>
          {StatusIcon({ size: 14 })}
          <span>{status === 'completed' ? 'Terminé' : status === 'in-progress' ? 'En cours' : 'En attente'}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>{date}</span>
        <button 
          onClick={() => navigate(`/procedures/${reference}`)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Voir détails
        </button>
      </div>
    </motion.div>
  );
};

const NotificationCard: React.FC<NotificationCardProps> = ({ icon: Icon, title, description, time, isNew }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-4 rounded-xl ${isNew ? 'bg-blue-50' : 'bg-white'} hover:bg-gray-50 transition-colors duration-300 cursor-pointer`}
      onClick={() => navigate('/notifications')}
    >
      <div className="flex gap-4">
        <div className={`p-2 rounded-lg ${isNew ? 'bg-blue-200' : 'bg-gray-200'}`}>
          {Icon({ size: 20, className: isNew ? 'text-blue-700' : 'text-gray-600' })}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h4 className="font-medium text-gray-900">{title}</h4>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const stats = [
    {
      icon: FaFileAlt,
      title: "Démarches totales",
      value: "12",
      description: "+3 ce mois-ci",
      color: "bg-blue-500"
    },
    {
      icon: FaCheckCircle,
      title: "Démarches terminées",
      value: "8",
      description: "67% de réussite",
      color: "bg-green-500"
    },
    {
      icon: FaClock,
      title: "En cours",
      value: "3",
      description: "Délai moyen: 5 jours",
      color: "bg-yellow-500"
    },
    {
      icon: FaDownload,
      title: "Documents disponibles",
      value: "5",
      description: "2 nouveaux documents",
      color: "bg-purple-500"
    }
  ];

  const procedures = [
    {
      icon: FaFileAlt,
      title: "Demande d'acte de naissance",
      status: 'completed' as const,
      date: "12 mars 2024",
      reference: "ACT-2024-001"
    },
    {
      icon: FaClipboardList,
      title: "Inscription formation professionnelle",
      status: 'in-progress' as const,
      date: "15 mars 2024",
      reference: "FORM-2024-023"
    },
    {
      icon: FaFileAlt,
      title: "Aide au logement",
      status: 'pending' as const,
      date: "18 mars 2024",
      reference: "LOG-2024-045"
    }
  ];

  const notifications = [
    {
      icon: FaCheckCircle,
      title: "Document disponible",
      description: "Votre acte de naissance est prêt à être téléchargé",
      time: "Il y a 2 heures",
      isNew: true
    },
    {
      icon: FaBell,
      title: "Rappel important",
      description: "N'oubliez pas de compléter votre dossier de formation",
      time: "Il y a 1 jour"
    },
    {
      icon: FaCalendarAlt,
      title: "Rendez-vous confirmé",
      description: "Votre rendez-vous du 20 mars est confirmé",
      time: "Il y a 2 jours"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="mt-2 text-gray-600">Bienvenue sur votre espace personnel</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Rechercher une démarche..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {FaSearch({ size: 20 })}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Procedures */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Démarches récentes</h2>
                <button 
                  onClick={() => navigate('/procedures')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Voir tout
                </button>
              </div>
              <div className="space-y-4">
                {procedures.map((procedure, index) => (
                  <ProcedureCard key={index} {...procedure} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <button 
                  onClick={() => navigate('/procedures/new')}
                  className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300 text-center"
                >
                  <div className="mx-auto mb-2 text-blue-600">
                    {FaFileAlt({ size: 24 })}
                  </div>
                  <span className="text-sm font-medium text-gray-900">Nouvelle démarche</span>
                </button>
                <button 
                  onClick={() => navigate('/documents')}
                  className="p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300 text-center"
                >
                  <div className="mx-auto mb-2 text-green-600">
                    {FaDownload({ size: 24 })}
                  </div>
                  <span className="text-sm font-medium text-gray-900">Mes documents</span>
                </button>
                <button 
                  onClick={() => navigate('/messages')}
                  className="p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300 text-center"
                >
                  <div className="mx-auto mb-2 text-purple-600">
                    {FaEnvelope({ size: 24 })}
                  </div>
                  <span className="text-sm font-medium text-gray-900">Messages</span>
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
                <button 
                  onClick={() => navigate('/notifications')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Tout marquer comme lu
                </button>
              </div>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <NotificationCard key={index} {...notification} />
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
              <p className="text-gray-600 mb-6">Notre équipe est là pour vous aider avec vos démarches.</p>
              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <div>
                    {FaPhone({ size: 16 })}
                  </div>
                  <span>Nous appeler</span>
                </button>
                <button 
                  onClick={() => navigate('/contact/message')}
                  className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <div>
                    {FaEnvelope({ size: 16 })}
                  </div>
                  <span>Envoyer un message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 