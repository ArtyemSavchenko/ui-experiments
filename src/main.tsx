import App from 'app/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const startApp = () => {
  const root = document.querySelector('#root');

  if (!root) {
    console.error('App root not found');
    return;
  }

  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

startApp();
