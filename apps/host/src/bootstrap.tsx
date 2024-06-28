import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { init,preloadRemote } from "@module-federation/enhanced/runtime";
import App from './app/app';
import dynamicplugin from './dynamic-loader-plugin';


init({
  name: '@host',
  remotes: [
    {
      name: "auth",
      entry: "http://localhost:3200/_next/static/chunks/mf-manifest.json",
    }
  ],
  plugins: [
    dynamicplugin()
  ]
});
preloadRemote([
  {
    nameOrAlias: 'auth',
    exposes: ["SignIn"],
  },
]);




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
