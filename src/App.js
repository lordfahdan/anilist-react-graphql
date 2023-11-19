import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CollectionContextProvider } from './context/CollectionContext';
import client from './api/client';
import AdsenseScript from './components/AdsenseScript';
import './App.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Collection from './pages/Collection';
import CollectionDetail from './pages/CollectionDetail';
import Error404 from './pages/Error404';
import SearchSelection from './pages/SearchSelection';

const App = () => {
  return (
    <CollectionContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AdsenseScript />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:name" element={<SearchSelection />} />
            <Route path="/anime/:id" element={<Detail />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/collections/:name" element={<CollectionDetail />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </CollectionContextProvider>
  );
};

export default App;
