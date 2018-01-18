import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import WebFont from 'webfontloader';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'; 

import App from './App';

WebFont.load({
  google: {
    families: ['Open Sans', 'Roboto:bold']
  }
});

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/poop';

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={ client } >
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'));
