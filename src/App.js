import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';//載入bootstrap
import Head from "./components/head"; //載入component
import Progress from "./components/Progress"; //載入component
import Content from "./components/Content"; //載入component
import Foot from "./components/foot"; //載入component

function App() {

  //bootstrap-icons
  /*useEffect(() => {
    const link = document.createElement('link')

    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"

    document.body.appendChild(link);
    return () => {
      document.body.removeChild(link);
    }
  }, []);*/
  //fontawesome
  useEffect(() => {
    const link = document.createElement('link')

    link.rel = "stylesheet"
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"

    document.body.appendChild(link);
    return () => {
      document.body.removeChild(link);
    }
  }, []);



  return (
    <div>
      <Head />
      <Progress />
      <Content />
      <Foot/>
    </div>
  );
}

export default App;
