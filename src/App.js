import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import client from './api/client'

import List from './pages/List'
import Detail from './pages/Detail'
import CollectionList from './pages/CollectionList'
import CollectionDetail from './pages/CollectionDetail'

import { Container } from './styled'

function App() {

  return (
    <ApolloProvider client={client} >
      <Container>
        <BrowserRouter>
          <Routes>
              <Route path="/list" element={<List />} />
              <Route path="/list/:id" element={<Detail />} />
              <Route path="/collections" element={<CollectionList />} />
              <Route path="/collections/:colletion_id" element={<CollectionDetail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  );
}

export default App;
