// Example component
import { useEffect, useState } from 'react';

const AdsenseScript = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (!isAdLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9838366977027267';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setIsAdLoaded(true);
      };
    }
  }, [isAdLoaded]);

  return null;
};

export default AdsenseScript;
