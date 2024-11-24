import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";
import About from "./components/About.jsx";
import Calendar from "./components/Calendar.jsx";
import Contact from "./components/Contact.jsx";

import CheckoutForm from "./components/stripe/CheckoutForm.jsx";
import Return from "./components/stripe/Return.jsx";

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
