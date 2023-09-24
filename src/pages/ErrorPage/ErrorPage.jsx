import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-3xl font-semibold space-y-2 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>
          <button className="btn btn-primary mt-6">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
