import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import OnlineProcedures from './components/pages/OnlineProcedures';
import ProcedureDetails from './components/pages/ProcedureDetails';
import NewProcedure from './components/pages/NewProcedure';
import Documents from './components/pages/Documents';
import Messages from './components/pages/Messages';
import Notifications from './components/pages/Notifications';
import Layout from './components/layout/Layout';
import Dashboard from './components/pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/demarches" element={<OnlineProcedures />} />
          <Route path="/demarches/:reference" element={<ProcedureDetails />} />
          <Route path="/demarches/new" element={<NewProcedure />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
