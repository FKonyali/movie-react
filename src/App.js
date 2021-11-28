import Header from 'components/Header';
import Layout from './layout';
import React from 'react';
import 'styles/App.scss';
import 'plugins/axios';

function App() {
  return (
    <div className={'page-container'}>
      <Header />
      <Layout />
    </div>
  );
}

export default App;
