/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  const Footer = styled('footer')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #232323;
    padding: 20px 16px 6px;
  `

  const Copyright = styled('p')`
    color: #ccc;
    font-size: 12px;
    margin-bottom: 14px;
  `

  const Socmed = styled('div')`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-bottom: 14px;
    font-size: 20px;

    * {
      margin-right: 8px;
    }
  `

  return (
    <>
      <Footer>
        <Copyright>Copyright © 2022 All Rights Reserved by LordFahdan.</Copyright>
        <Socmed>
          <a href={'https://www.linkedin.com/in/fahdan-khairi/'} target={`_blank`}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={'https://github.com/lordfahdan'} target={`_blank`}>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </Socmed>
      </Footer>
    </>
  )
}

export default Footer