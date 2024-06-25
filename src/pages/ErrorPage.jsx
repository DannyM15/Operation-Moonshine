import { useRouteError } from "react-router-dom";
import Error from "../assets/Images/Error.png"
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src={Error} alt="Moonshine Animations oops" className="w-50 p-3" />

      <p className='custom-p'>Sorry, an unexpected error has occurred.</p>
      <p className='custom-p'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}