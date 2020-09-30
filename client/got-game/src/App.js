import React from 'react';
import Header from "./components/Header/index";
// import Main from "./components/pages/Main"
import Card from "./components/Card/index";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
