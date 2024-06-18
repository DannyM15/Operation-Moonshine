// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';


const App = () => {
  console.log('Rendering App.jsx');
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App
