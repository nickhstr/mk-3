import React from 'react';
import PropTypes from 'prop-types';
import favicon from '../../assets/favicon-32x32.png';
import styles from './styles.css';

export const Html = ({
  app,
  title,
  description,
  path,
  assets,
  store,
}) => {
  const assetNames = Object.keys(assets);
  const preloadLinks = [];
  const clientScripts = [];
  const state = store.getState();

  assetNames.forEach((asset) => {
    if (asset === 'main' || asset.includes('vendor~')) {
      preloadLinks.push(<link key={asset} charSet="utf-8" rel="preload" as="script" href={assets[asset].js} />);
      clientScripts.push(<script defer key={asset} charSet="utf-8" src={assets[asset].js} />);
    }
  });

  clientScripts.push(<script key="state" charSet="utf-8" dangerouslySetInnerHTML={{
    __html: `window.__initial_state__=${JSON.stringify(state)}`,
  }} />);

  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nickhstr.com${path}`} />
        <meta property="og:locale" conent="en-US" />
        <meta name="description" content={description} />
        <meta name="keywords" conent="web, development, software, engineer, nick, hester, nickhstr, javascript, golang" />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        {preloadLinks}
        <style dangerouslySetInnerHTML={{
          __html: styles.toString(),
        }} />
      </head>
      <body>
        <div id="app-root">
          {app}
        </div>
        {clientScripts}
      </body>
    </html>
  );
};

Html.propTypes = {
  app: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  assets: PropTypes.object,
  store: PropTypes.object,
};
