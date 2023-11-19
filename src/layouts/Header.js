/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { BurgerMenu, DivFlex, DivLogo, DivMenu, HeaderStyle, LinkStyled, burgerIcon } from '../styled'


const Header = () => {

  const location = useLocation();
  const headerRef = useRef(null);
  const [ menuBurger, setMenuBurger ] = useState(false);

  const callbackScroll = () => {
    let top = window.scrollY
    let heightBanner = 400
    if(location.pathname !== '/'){
      headerRef.current.style.backgroundColor = `rgba(35, 35, 35, 1)`
    }
    else {
      headerRef.current.style.backgroundColor = `rgba(35, 35, 35, ${top / heightBanner})`
    }
  }

  const burgerCallback = () => {
    setMenuBurger(!menuBurger)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    callbackScroll()
    window.onscroll = () => {
      callbackScroll()
    }

    return () => {
      window.onscroll = function(){};
    }
  })

  return (
    <>
      <HeaderStyle ref={headerRef}>
        <DivFlex>
          <DivFlex>
            <DivLogo to={`/`}>LordNime</DivLogo>
          </DivFlex>

          <div>
            <DivMenu>
              <LinkStyled to={`/`}>Home</LinkStyled>
              <LinkStyled to={`/collections`}>Collections</LinkStyled>
            </DivMenu>
            <FontAwesomeIcon
              css={css`${burgerIcon}`}
              icon={faAlignLeft}
              onClick={burgerCallback}
              />
          </div>
        </DivFlex>
      </HeaderStyle>
      
      <BurgerMenu className={menuBurger? 'active' : ''}>
        <DivFlex css={css`border-bottom: 1px solid #333333; padding-bottom: 16px;`}>
          <DivLogo
            to={`/`}
            onClick={() => setMenuBurger(false)}
            >
              LordNime
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
