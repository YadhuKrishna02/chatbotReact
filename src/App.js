import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Welcome from './components/Welcome/Welcome';
import Summary from './components/Summary/Summary';
import Chatbot from 'react-chatbot-kit'; // Import Chatbot component
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/config';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* Route for Page2 (Chatbot) */}
          <Route path="/chatbot" element={<Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
