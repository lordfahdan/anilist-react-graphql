import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CollectionContextProvider } from './context/CollectionContext'
import client from './api/client'
import './App.css'

import Header from './layouts/Header'
import Footer from './layouts/Footer'

import Home from './pages/Home'
import Detail from './pages/Detail'
import CollectionList from './pages/CollectionList'
import CollectionDetail from './pages/CollectionDetail'

import { Container } from './styled'

const App = () => {

  return (
    <CollectionContextProvider>
      <ApolloProvider client={client} >
        <BrowserRouter>
          <Header />
          <Container>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/anime/:id" element={<Detail />} />
                  <Route path="/collections" element={<CollectionList />} />
                  <Route path="/collections/:name" element={<CollectionDetail />} />
              </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </CollectionContextProvider>
  );
}

export default App;
