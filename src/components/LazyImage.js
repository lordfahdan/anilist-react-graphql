/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react'

const LazyImage = (props) => {

  const [ intersected, setIntersected ] = useState(false)
  const imageElement = useRef(null)


  const callbackFunction = (entries) => {
    const entry = entries[0];
    if(entry.isIntersecting) setIntersected(true)
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "160px",
      threshold: 1,
    }
    const element = imageElement.current
    const observer = new IntersectionObserver(callbackFunction, options)
    if(element) observer.observe(element)

    return () => {
      if(element) observer.unobserve(element)
      observer.disconnect();
    }
      

  }, [imageElement])

  return (
    <img ref={imageElement} src={intersected? props.src : ''} alt={intersected? props.alt : ''} />
  )
}

export default LazyImage