/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

const LazyImage = (props) => {
  const [render, setRender] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const randTime = Math.floor(Math.random() * 1500)
    setTimeout(() => {
      setLoad(true)
    }, randTime);
  }, [render])

  return (
    <img
      className={`card-anime ${load? 'loaded' : ''}`}
      src={props.src}
      alt={props.alt}
      onLoad={() => setRender(true)}
      />
  )
}

export default LazyImage