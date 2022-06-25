import React from 'react'
import { Container } from '../styled'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const HeaderStyle = styled('header')`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 16px 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 7%);
  background: #fff;
`

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <div>

        </div>
      </Container>
    </HeaderStyle>
  )
}

export default Header
