import React from 'react';
import './App.css';
import Header from './Sections/Header';
import Projects from './Sections/Projects';

const App: React.FC = () => {

  return (
    <div>
      <Header />
      <Projects/>
    </div>
  );
};

export default App;
