/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

const LazyImage = (props) => {

  // const [ intersected, setIntersected ] = useState(false)
  // const imageElement = useRef(null)


  // const callbackFunction = (entries) => {
  //   const entry = entries[0];
  //   if(entry.isIntersecting) setIntersected(true)
  // }

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "160px",
  //     threshold: 1,
  //   }
  //   const element = imageElement.current
  //   const observer = new IntersectionObserver(callbackFunction, options)
  //   if(element) observer.observe(element)

  //   return () => {
  //     if(element) observer.unobserve(element)
  //     observer.disconnect();
  //   }
      

  // }, [imageElement])

  const [render, setRender] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 1000);
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