import { FC, useEffect } from 'react';
import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { getLongUrl } from './helpers/urlHelper';



const RedirectHandler: FC = () => {
  
  const { shortcode } = useParams<{ shortcode: string }>(); // Get shortcode from URL
  const navigate = useNavigate();

  console.log('shortcode:', shortcode);
  

  useEffect(() => {
    (async () => {
      if (shortcode) {
        const url = await getLongUrl(shortcode);
        console.log(url);
        if (url === "") {
          navigate("/not-found");
        } else {
          window.location.href = url;
        }
      }
    })();
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
}

export default RedirectHandler