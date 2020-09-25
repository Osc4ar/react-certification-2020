import { useEffect, useState } from 'react';

const API_URL = 'https://apis.google.com/js/client.js';
const API_KEY = 'AIzaSyD-LNjx3t5Yfr_qGcqY0KQE4hHGvWC71W0';

export default function useGAPI() {
  const [gapi, setGAPI] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = API_URL;
    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
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
