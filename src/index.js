import { StrictMode } from "react"; /* exportamos react */
import ReactDOM from "react-dom"; /* exportamos reactDOM */
import Header from "./Header"; /* exportamos la funcion Header */
import Footer from "./Footer";
import MainContent from "./MainContent";

const rootElement = document.getElementById(
  "root"
); /* sacamos el id de root , es la base donde se crea nuestra app */

function Page() {
  /* aca  */
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <Page />
  </StrictMode>,
  rootElement
);
