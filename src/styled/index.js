import styled from '@emotion/styled'

// @media (min-width: 576px) {}

// @media (min-width: 768px) {}

// @media (min-width: 992px) {}

// @media (min-width: 1200px) {}

export const Container = styled('div')`
  width: 100%;
  padding: 100px 20px;
  margin: auto;
  @media (min-width: 576px) { 
    
  }

  @media (min-width: 768px) {
    width: 748px;
    margin: auto;
  }

  @media (min-width: 992px) {
    width: 972px;
    margin: auto;
  }

  @media (min-width: 1200px) {
    width: 1180px;
    margin: auto;
  }
`

export const GridList = styled('div')`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, calc(50% - 20px));
  grid-gap: 20px 15px;
  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, 150px);
  }

  @media (min-width: 992px) {
    grid-gap: 30px 20px;
    grid-template-columns: repeat(auto-fill, 185px);
  }

  @media (min-width: 1200px) {}
`

export const LoaderContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  text-align: center;
`

export const ButtonLoadMore = styled('button')`
  display: block;
  margin: auto;
  color: inherit;
  font: inherit;
  background: rgb(255, 0, 0, 1);
  outline: unset;
  border: unset;
  text-align: center;
  padding: 8px 32px;
  border-radius: 20px;
`