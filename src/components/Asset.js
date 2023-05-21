import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";


const Asset = ({spinner, src, message}) => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#fbbf24");

  return (
        <div className="sweet-loading">

            {spinner && <FadeLoader
                color={color}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}
            {src && <img className="w-full h-full object-center object-cover" src={src} alt={message} />}
        </div>
    );
};

export default Asset;