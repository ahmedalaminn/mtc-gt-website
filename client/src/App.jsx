import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";
import About from "./components/About.jsx";
import Calendar from "./components/Calendar.jsx";
import Contact from "./components/Contact.jsx";
import Donate from "./components/Donate.jsx";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const CheckoutForm = () => {
  const fetchClientSecret = useCallback(() => {
    return fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section id="success" className="p-6 text-center text-white">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com" className="text-blue-500">
            orders@example.com
          </a>
          .
        </p>
      </section>
    );
  }

  return null;
};

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="landing">
                  <Landing />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="calendar">
                  <Calendar />
                </section>
                <section id="donate">
                  <Donate />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
