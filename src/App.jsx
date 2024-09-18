// App.js
import React, { useState } from 'react';
import RailMadad from './components/RailMadad';
import Main from './components/Main';
import Footer from './components/Footer';
import './app.css'
// import Chatbot from './components/ChatBot';
// Import the Chatbot component

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleCloseChat = () => setIsChatOpen(false);
  return (
    <div className=''>
      <RailMadad />
      <Main />
      <Footer />
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 md:w-full w-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-100 max-w-md w-[300px] md:w-full">
            <button
              onClick={handleCloseChat}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">How may I help you?</h2>
            <p className="mb-4">Please let us know if you have any questions or need assistance.</p>
            <textarea
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type your message here..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseChat}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
