import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <div>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={styles.app__wrapper} />
        <AppHeader />
        <AppContent />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </div>
  );
}

export default App;
