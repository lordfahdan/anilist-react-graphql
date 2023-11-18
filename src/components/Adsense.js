// Example component
import React, { useEffect, useState } from 'react';

const Adsense = () => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (!isAdLoaded) {
      const script = document.createElement('script');
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9838366977027267';
      script.async = true;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      script.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setIsAdLoaded(true);
      };
    }
  }, [isAdLoaded]);

  return (
    <>
      {/* AdSense Ad Unit */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', gridColumn: '1 / 3' }}
        data-ad-format="fluid"
        data-ad-layout-key="+1r+s4-1b-27+96"
        data-ad-client="ca-pub-9838366977027267"
        data-ad-slot="8287074193"
      />
    </>
  );
};

export default Adsense;
