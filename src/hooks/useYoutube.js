import { useEffect, useState } from 'react';
import useGAPI from './useGAPI';

const API_KEY = '';
const API_URL = 'https://apis.google.com/js/client.js';

export default function useYoutube() {
  const gapi = useGAPI(API_URL, API_KEY);
  const [searchByKeyword, setSearchByKeyword] = useState(null);

  useEffect(() => {
    if (gapi != null) {
      setSearchByKeyword((keyword, maxResults = 10) => {
        gapi.client.youtube.search
          .list({
            part: ['snippet'],
            maxResults,
            q: keyword,
            type: ['video'],
          })
          .then(
            function (response) {
              // Handle the results here (response.result has the parsed body).
              console.log('Response', response);
            },
            function (err) {
              console.error('Execute error', err);
            }
          );
      });
      console.log('function set');
    }
  }, [gapi]);

  return [searchByKeyword];
}
