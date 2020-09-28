import { useEffect, useState } from 'react';

export default function useGAPI() {
  const [gapi, setGAPI] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = process.env.REACT_APP_YOUTUBE_API_URL;
    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          setGAPI(window.gapi);
        });
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return gapi;
}
