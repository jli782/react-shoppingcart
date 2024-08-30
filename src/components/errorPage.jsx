import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.error(err);

  return (
    <div
      id="error-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has occurred!</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
}
