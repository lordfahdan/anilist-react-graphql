import styled from '@emotion/styled'

export const Container = styled('div')`
  width: 100%;
  padding: 0 20px;
  margin: auto
  @media (min-width: 576px) { 
    
  }

  @media (min-width: 768px) {
    width: 748px;
    margin: auto
  }

  @media (min-width: 992px) {
    
  }

  @media (min-width: 1200px) {
    
  }
`

export const GridList = styled('div')`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill,minmax(105px,1fr));
  grid-gap: 25px 20px;
  @media (min-width: 576px) {}

  @media (min-width: 768px) {}

  @media (min-width: 992px) {}

  @media (min-width: 1200px) {}
`

export const GridItem = styled('div')`
  width: 100%;
`