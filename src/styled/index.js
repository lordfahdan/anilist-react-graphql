import styled from "@emotion/styled";

// @media (min-width: 576px) {}

// @media (min-width: 768px) {}

// @media (min-width: 992px) {}

// @media (min-width: 1200px) {}

export const Container = styled("div")`
  width: 100%;
  padding: 60px 20px;
  min-height: 100vh;
  margin: auto;
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
`;

export const GridList = styled("div")`
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
`;

export const LoaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  text-align: center;
`;

export const ButtonLoadMore = styled("button")`
  display: block;
  cursor: pointer;
  margin: 20px auto 0;
  color: inherit;
  font: inherit;
  background: rgb(255, 0, 0, 1);
  outline: unset;
  border: unset;
  text-align: center;
  padding: 8px 32px;
  border-radius: 20px;
`;

export const DetailAnime = styled("div")`
  position: relative;
  display: flex;
  div.bannerAnime {
    margin-bottom: 14px;
    .cover {
      height: auto;
      width: 30vw;
      overflow: hidden;
    }
  }

  div.atributAnime{
    margin-left: 10px;

    .titleAnime {
      font-size: 16px;
      margin-bottom: 9px;
    }

    .descAnime {
      font-size: 10px;

      .fontAwsome {
        font-size: 6px;
        margin-right: 4px;
        color: green;
      }

      .descAnimeDetail {
        align-items: center;

        div {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }
      }

    }
    .descAnimeGenre {
      display: flex;
      align-items; center;
      flex-wrap: wrap;
      margin-top: 0px;

      .spanGenre {
        font-size: 10px;
        border: 1px double green;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 4px;
      }
    }
  }
  div.ratingAnime {
    span {
      margin-left: 5px;
    }
    .ratingPopular{
      display: flex;
      align-items: baseline;
      margin-top: 5px;
      font-size: 10px;
    }
    .rating {
      color: lightgrey;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
    }
    .ratingInner{
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
      color: #fab81e;
      
    }
  }
  @media (min-width: 576px) {
    div.atributAnime{
      margin-left: 24px;
      .titleAnime {
        font-size: 22px;
        margin-bottom: 16px;
      }
      .descAnime {
        font-size: 14px;
        .fontAwsome {
          font-size: 8px;
          margin-right: 6px;
        }
        .descAnimeDetail {
          div {
            margin-bottom: 8px;
          }
        }
      }
      .descAnimeGenre {
        .spanGenre {
          font-size: 16px;
          padding: 4px;
        }
      }
    }
    div.ratingAnime {
      .ratingPopular{
        font-size: 14px;
      }
    }
  }

  @media (min-width: 768px) {
    div.bannerAnime {
      .cover {
        width: 210px;
      }
    }
    div.atributAnime{
      margin-left: 26px;
      .titleAnime {
        font-size: 28px;
        margin-bottom: 24px;
      }
      .descAnime {
        font-size: 16px;
        .fontAwsome {
          font-size: 8px;
          margin-right: 6px;
        }
        .descAnimeDetail {
          div {
            margin-bottom: 10px;
          }
        }
      }
      .descAnimeGenre {
        font-size: 18px;
        .spanGenre {
          margin-bottom: 12px;
          margin-right: 12px;
        }
      }
    }
    div.ratingAnime {
      .ratingPopular{
        font-size: 18px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
`;

export const SinopsisAnime = styled("div")`
  margin-top: 8px;
  .sinopsisTitle {
    display: block;
    font-size: 11px;
    margin-bottom: 7px;
  }
  p {
    font-size: 10px;
    text-align: justify;
    line-height: 16px;
  }
  @media (min-width: 768px) {
    margin-top: 18px;
    .sinopsisTitle {
      font-size: 16px;
      margin-bottom: 9px;
    }
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
  @media (min-width: 992px) {
    .sinopsisTitle {
      margin-bottom: 12px;
    }
  }
  @media (min-width: 1200px) {
    .sinopsisTitle {
      margin-bottom: 14px;
    }
  }
`;

export const CardDetailAnime = styled("div")`
  position: relative;
  padding: 10px;
  border-radius: 4px;
  background: #333;
  @media (min-width: 576px) {
    padding: 10px 16px;
  }
  @media (min-width: 768px) {
    margin-top: 40px;
    padding: 40px;
  }
`;

export const ButtonBookmark = styled('button')`
  display: block;
  padding: 6px 10px;
  font-size: 10px;
  background: green;
  outline: none;
  border: none;
  color: inherit;
  position: absolute;
  bottom: 100%;
  right: 0;
`

export const AddedTitle = styled('h5')`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const AddedCollection = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0 10px;
  a {
    padding: 4px 6px;
    background: red;
    border-radius: 50px;
    font-size: 10px;
    margin-right: 8px;
  }
`

export const InputSearch = styled('input')`
  transition: all 0.6s ease;
  outline: 1px solid #ff0000;
  border: none;
  width: 100%;
  padding: 16px 48px 16px 12px;
  border-radius: 4px;
  background: hsl(0deg, 0%, 4%);
  color: #ff0000;
  font-size:16px;
  
  ::selection {
    color: black;
    background: #ff0000;
  }

  :focus {
    box-shadow: 0 5px 10px 2px #ff0000;
  }
  ::placeholder {
    color: #880000;
  }
`

export const InputContainer = styled('form')`
  display: block;
  margin-bottom: 32px;
  position: sticky;
  top: 80px;
  z-index: 2;
  > button {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    background: unset;
    outline: none;
    border: none;
    color: #ffffff;
    z-index: 1;
    cursor: pointer;
    font-size: 20px;
  }

  @media (max-width: 640px){
    top: 60px;
  }
`