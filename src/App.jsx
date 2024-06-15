import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  console.log('Rendering App.jsx');
  return (
    <ApolloProvider client={client}>
      <Header />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
};

export default App
