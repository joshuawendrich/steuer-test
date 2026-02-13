// src/App.tsx
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Summary from './components/Summary';
import type { FormData, UserData } from './types'; // Changed to type-only import
import './App.css'; // Assuming basic styling will be in App.css

function App() {
  const [userData1, setUserData1] = useState<FormData | null>(null);
  const [userData2, setUserData2] = useState<FormData | null>(null);
  const [currentUser, setCurrentUser] = useState<1 | 2>(1);
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (data: FormData) => {
    if (currentUser === 1) {
      setUserData1(data);
      setCurrentUser(2);
    } else {
      setUserData2(data);
      setShowSummary(true);
    }
  };

  const handleReset = () => {
    setUserData1(null);
    setUserData2(null);
    setCurrentUser(1);
    setShowSummary(false);
  };

  return (
    <div className="App">
      <h1>User Data Comparison</h1>

      {!showSummary && currentUser === 1 && (
        <UserForm userNumber={1} onSubmit={handleSubmit} />
      )}

      {!showSummary && currentUser === 2 && (
        <UserForm userNumber={2} onSubmit={handleSubmit} />
      )}

      {showSummary && userData1 && userData2 && (
        <>
          <Summary userData1={{ userNumber: 1, data: userData1 }} userData2={{ userNumber: 2, data: userData2 }} />
          <button onClick={handleReset}>Start Over</button>
        </>
      )}
    </div>
  );
}

export default App;
