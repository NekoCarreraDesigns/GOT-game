import React from 'react';
import Header from "./components/Header/index";
import Main from "./components/pages/Main"
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
