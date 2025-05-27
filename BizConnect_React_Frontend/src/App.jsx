import React, { useState } from 'react';
import './App.css';
import BusinessVerification from './components/BusinessVerification';
import ReviewSystem from './components/ReviewSystem';

function App() {
  const [currentView, setCurrentView] = useState('verification');

  return (
    <div>
      <div className="fixed top-4 left-4 z-10">
        <div className="bg-white rounded-lg shadow-lg p-2">
          <button
            onClick={() => setCurrentView('verification')}
            className={`px-4 py-2 rounded mr-2 ${
              currentView === 'verification' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Verification
          </button>
          <button
            onClick={() => setCurrentView('reviews')}
            className={`px-4 py-2 rounded ${
              currentView === 'reviews' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Reviews
          </button>
        </div>
      </div>

      {currentView === 'verification' ? <BusinessVerification /> : <ReviewSystem />}
    </div>
  );
}

export default App;
