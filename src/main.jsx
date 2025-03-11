import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Cursor from "./Cursor.jsx";
import Navbar from "./component/Navbar.jsx";
import ChatButton from "./ChatButton.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import Footer from "./component/Footer.jsx";
import Translater from "./Translater.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        {/* <Cursor />*/}
        <Navbar />
        <App />
        {/* <ChatButton /> */}
        <Footer />
        {/* <Translater/> */}
        {/* <WhatsAppButton/> */}
    </BrowserRouter>
);
