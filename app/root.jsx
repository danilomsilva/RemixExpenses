import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import Navigation from './components/Navigation';

import styles from './styles/app.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        {/* Load other fonts as shown below */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-r from-purple-500 to-pink-500">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
