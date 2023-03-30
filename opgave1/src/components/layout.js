import react from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default Layout;
