import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { HeaderProvider } from './_custom/_utils/HeaderProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HeaderProvider>
        <App />
    </HeaderProvider>
);
