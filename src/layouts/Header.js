/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Banner from '../components/Banner'
import Lord from '../assets/Lord.png'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faTimes } from '@fortawesome/free-solid-svg-icons'



const HeaderStyle = styled('header')`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 12px 20px;
  @media (min-width: 768px) {
    padding: 14px 47px;
  }
`
const DivFlex = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DivLogo = styled(Link)`
  text-decoration: none;
  font-family: 'Lobster', cursive;
  font-size: 30px;
  color: rgb(255, 0, 0, 1);
  @media (min-width: 768px) {
    font-size: 40px;
  }
`


const DivMenu = styled('div')`
  display: none;
  @media (min-width: 992px) {
    display: block;
    margin-left: 60px;
  }
`

const logoLord = css`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  display: none;

  @media (min-width: 992px) {
    display: inline-block;
  }
`

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  margin-left: 40px;
  color: #aaa;
  position: relative;
  transition: color 0.4s ease-in-out;
  &.active {
    color: #fff
  }
  &:before {
    content: "";
    position: absolute;
    top: 130%;
    left: 0;
    width: 100%;
    transition: box-shadow 0.4s ease-in-out;
  }
  &.active:before {
    box-shadow: 0px 0px 2px 2px red;
  }
`

const burgerIcon = css`
  display: inline;
  font-size: 25px;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`

const BurgerMenu = styled('div')`
  position: fixed;
  z-index: 3;
  background: #232323;
  top: 0;
  width: 100%;
  height: 100%;
  left: 100%;
  transition: left 0.3s ease-out;
  padding: 12px 20px;

  &.active {
    left: 0;
  }
`


const Header = () => {

  const location = useLocation();
  const headerRef = useRef(null);
  const [ menuBurger, setMenuBurger ] = useState(false);

  const callbackScroll = () => {
    let top = window.scrollY
    let heightBanner = 400
    headerRef.current.style.backgroundColor = `rgba(35, 35, 35, ${top / heightBanner})`
  }

  const burgerCallback = () => {
    setMenuBurger(!menuBurger)
  }

  useEffect(() => {
    if(location.pathname !== '/'){
      headerRef.current.style.backgroundColor = 'rgba(35, 35, 35, 1)'
    }
    else {
      callbackScroll()
      window.onscroll = () => {
        callbackScroll()
      }
    }
  }, [headerRef, location])

  return (
    <>
      <HeaderStyle ref={headerRef}>
        <DivFlex>
          <DivFlex>
            <DivLogo to={`/`}>MyAniList</DivLogo>
            <DivMenu>
              <LinkStyled to={`/`}>Home</LinkStyled>
              <LinkStyled to={`/collections`}>Collections</LinkStyled>
            </DivMenu>
          </DivFlex>

          <div>
            <img css={css`${logoLord}`} src={Lord} alt="profile" />
            <FontAwesomeIcon
              css={css`${burgerIcon}`}
              icon={faAlignLeft}
              onClick={burgerCallback}
              />
          </div>
        </DivFlex>
      </HeaderStyle>
      
      { location.pathname !== '/'? '' : (<Banner />) }

      <BurgerMenu className={menuBurger? 'active' : ''}>
        <DivFlex css={css`border-bottom: 1px solid #333333; padding-bottom: 16px;`}>
          <DivLogo
            to={`/`}
            onClick={() => setMenuBurger(false)}
            >
              MyAniList
            </DivLogo>
          <FontAwesomeIcon
            css={css`${burgerIcon}`}
            icon={faTimes}
            onClick={burgerCallback}
            />
        </DivFlex>
        <DivFlex css={css`flex-direction: column; align-items: flex-start; padding-top: 40px;`}>
          <LinkStyled
            css={css`margin-bottom: 30px;`}
            to={`/`}
            onClick={() => setMenuBurger(false)}
            >
              Home
            </LinkStyled>
          <LinkStyled
            css={css`margin-bottom: 30px;`}
            to={`/collections`}
            onClick={() => setMenuBurger(false)}
            >
              Collections
            </LinkStyled>
        </DivFlex>

      </BurgerMenu>
    </>
  )
}

export default Header
