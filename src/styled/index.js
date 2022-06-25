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
    width: 972px;
    margin: auto
  }

  @media (min-width: 1200px) {
    
  }
`

export const GridList = styled('div')`
  padding: 24px 0;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 185px);
  grid-gap: 25px 20px;
  @media (min-width: 576px) {}

  @media (min-width: 768px) {}

  @media (min-width: 992px) {}

  @media (min-width: 1200px) {}
`

export const GridItem = styled('div')`
  display: grid;
  grid-template-rows: min-content auto;

  a.cover {
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    height: 265px;
    overflow: hidden;
    width: 100%;
    position: relative
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`