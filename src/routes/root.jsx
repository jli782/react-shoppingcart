import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <section>
      <NavBar />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        React Shopping Cart!
      </h1>
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
