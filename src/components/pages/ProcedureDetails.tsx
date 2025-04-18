import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaDownload,
  FaPaperclip,
  FaComments,
  FaArrowLeft
} from 'react-icons/fa';

const ProcedureDetails: React.FC = () => {
  const { reference } = useParams();
  const navigate = useNavigate();

  // Simuler les données de la démarche
  const procedure = {
    title: "Demande d'acte de naissance",
    reference: reference || "ACT-2024-001",
    status: 'completed' as const,
    date: "12 mars 2024",
    description: "Demande d'une copie intégrale d'acte de naissance pour renouvellement de passeport.",
    documents: [
      { name: "Acte de naissance.pdf", size: "1.2 MB", status: "ready" },
      { name: "Justificatif de domicile.pdf", size: "800 KB", status: "uploaded" }
    ],
    timeline: [
      {
        date: "12 mars 2024",
        time: "14:30",
        title: "Demande validée",
        description: "Votre document est prêt à être téléchargé",
        status: "completed"
      },
      {
        date: "11 mars 2024",
        time: "10:15",
        title: "Traitement en cours",
        description: "Votre demande est en cours de traitement par nos services",
        status: "completed"
      },
      {
        date: "10 mars 2024",
        time: "09:00",
        title: "Demande reçue",
        description: "Nous avons bien reçu votre demande",
        status: "completed"
      }
    ],
    messages: [
      {
        date: "11 mars 2024",
        time: "15:45",
        sender: "Agent CTM",
        content: "Votre demande a été traitée avec succès. Vous pouvez télécharger votre document."
      }
    ]
  };

  const statusConfig = {
    'completed': { color: 'bg-green-100 text-green-800', icon: FaCheckCircle },
    'in-progress': { color: 'bg-blue-100 text-blue-800', icon: FaClock },
    'pending': { color: 'bg-yellow-100 text-yellow-800', icon: FaExclamationCircle }
  };

  const StatusIcon = statusConfig[procedure.status].icon;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/procedures')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <div className="mr-2">
              {FaArrowLeft({ size: 16 })}
            </div>
            Retour aux démarches
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{procedure.title}</h1>
              <p className="mt-2 text-gray-600">Référence: {procedure.reference}</p>
            </div>
            <div className={`px-4 py-2 rounded-full ${statusConfig[procedure.status].color} flex items-center gap-2`}>
              {StatusIcon({ size: 16 })}
              <span>{procedure.status === 'completed' ? 'Terminé' : procedure.status === 'in-progress' ? 'En cours' : 'En attente'}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600">{procedure.description}</p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Suivi de la demande</h2>
              <div className="space-y-6">
                {procedure.timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="text-green-600">
                          {FaCheckCircle({ size: 16 })}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <span className="text-sm text-gray-500">• {event.date} à {event.time}</span>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Messages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Messages</h2>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Nouveau message
                </button>
              </div>
              <div className="space-y-4">
                {procedure.messages.map((message, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{message.sender}</span>
                      <span className="text-sm text-gray-500">{message.date} à {message.time}</span>
                    </div>
                    <p className="text-gray-600">{message.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Documents</h2>
              <div className="space-y-4">
                {procedure.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400">
                        {FaPaperclip({ size: 20 })}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                    {doc.status === "ready" && (
                      <button className="text-blue-600 hover:text-blue-800">
                        <div>
                          {FaDownload({ size: 20 })}
                        </div>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h2>
              <div className="space-y-4">
                <button className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                  <div>
                    {FaDownload({ size: 20 })}
                  </div>
                  <span>Télécharger les documents</span>
                </button>
                <button className="w-full py-3 px-4 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2">
                  <div>
                    {FaComments({ size: 20 })}
                  </div>
                  <span>Contacter un agent</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureDetails; 