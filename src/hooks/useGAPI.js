import { useEffect, useState } from 'react';

export default function useGAPI(url, key) {
  const [gapi, setGAPI] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(key);
        window.gapi.client.load('youtube', 'v3', () => {
          setGAPI(window.gapi);
        });
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, key]);

  return gapi;
}
