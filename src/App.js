/** @jsxImportSource @emotion/react */
import { ApolloProvider } from "@apollo/client";
import { css } from '@emotion/react'
import List from './components/List'
import client from './api/client'

function App() {

  return (
    <ApolloProvider client={client} >
      <div css={css`
        background: red;
        padding: 0 20px;
        max-width: 600px;
        margin: auto;
      `}>
        <List />
      </div>
    </ApolloProvider>
  );
}

export default App;
