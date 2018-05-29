import React, { Component } from 'react';
import 'normalize.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './css/helpers.css';
import './css/app.css';

class App extends Component {
  render() {
    const sidebarLinks = [
      {type: 'item', value: 'Inicio'},
      {type: 'item', value: 'Identidades'},
      {type: 'item', value: 'Configuración'},
      {type: 'title', value: 'Demos'},
      {type: 'item', value: 'API'},
      {type: 'item', value: 'Web SDK'},
      {type: 'item', value: 'Mobile SDK'},
      {type: 'item', value: 'Mobile App'},
      {type: 'title', value: 'Documentation'},
      {type: 'item', value: 'API'},
      {type: 'item', value: 'Web SDK'},
      {type: 'item', value: 'Mobile SDK'}
    ];

    const appLocalStorage = window.localStorage;
    appLocalStorage.appMiscData = JSON.stringify({brandName: 'Mati Inc.'});

    return (
      <div className="app">
        <Sidebar links={sidebarLinks}/>
        <MainContent />
      </div>
    );
  }
}

export default App;
