import React from 'react';
import { FaInbox, FaPaperPlane, FaArchive, FaTrash, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  sender: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
}

const Messages: React.FC = () => {
  const messages: Message[] = [
    {
      id: '1',
      sender: 'Service État Civil',
      subject: 'Confirmation de réception - Demande d\'acte de naissance',
      content: 'Votre demande d\'acte de naissance a bien été reçue...',
      date: '2024-03-15',
      read: false,
    },
    {
      id: '2',
      sender: 'Service Formation',
      subject: 'Inscription formation validée',
      content: 'Votre inscription à la formation a été validée...',
      date: '2024-03-14',
      read: true,
    },
    // Add more messages as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          <div className="mt-4 flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Rechercher un message..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {FaSearch({ className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" })}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar and Messages */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r p-4">
            <nav>
              <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100 text-blue-600">
                {FaInbox({ size: 20 })}
                <span>Boîte de réception</span>
              </button>
              <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                {FaPaperPlane({ size: 20 })}
                <span>Envoyés</span>
              </button>
              <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                {FaArchive({ size: 20 })}
                <span>Archives</span>
              </button>
              <button className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                {FaTrash({ size: 20 })}
                <span>Corbeille</span>
              </button>
            </nav>
          </div>

          {/* Message List */}
          <div className="flex-grow">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                  !message.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium ${!message.read ? 'text-blue-600' : 'text-gray-800'}`}>
                    {message.sender}
                  </h3>
                  <span className="text-sm text-gray-500">{message.date}</span>
                </div>
                <p className={`mt-1 ${!message.read ? 'font-medium' : ''}`}>{message.subject}</p>
                <p className="mt-1 text-sm text-gray-600 truncate">{message.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages; 