import FadeLoader from "react-spinners/FadeLoader";

const Asset = ({ spinner, src, message }) => {

    return (
        <div className="sweet-loading">

            {spinner && <FadeLoader
                color={"#fbbf24"}
                loading={true}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}
            {src && <img className="w-full h-full object-center object-cover" src={src} alt={message} />}
        </div>
    );
};

export default Asset;