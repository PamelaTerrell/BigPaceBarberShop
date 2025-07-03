import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import "./App.css";
import Header from "./components/Header";
import Hours from "./components/Hours";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://seal.godaddy.com/getSeal?sealID=WuHoMw6BXY2oRtL6FIS4W4ekJ7Wo4jkAHRZpI7587TkXfGDPhOrxluxonetb";
    script.async = true;
    document.getElementById("siteseal").appendChild(script);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <img src="/storefront.jpg" alt="Barbershop storefront" className="responsive-img" />
        <h3>*NOW HIRING LICENSED BARBERS*</h3>

        <h1>
          BIG PACE BARBER SHOP
          AND BEAUTY SALON 2
        </h1>
       
        <div className="contact-info">
  <p>
    3355 Deans Bridge Rd Ste D<br />
    Augusta, GA 30906
  </p>
  <a className="phone" href="tel:+17622154738">
    📞 Call (762) 215-4738
  </a>
</div>


        <Hours />

        <img src="/updatedprice.jpg" alt="Updated prices" className="responsive-img" />

        <section className="services-section">
  <h2>💈 Services</h2>
  <p className="walk-ins">WALK-INS ALWAYS WELCOME</p>
  <ul className="service-list">
    <li>💇🏾‍♂️ Haircuts – Adults & Kids</li>
    <li>🧔🏾 Beard Trim & Straight Razor</li>
    <li>✂️ Tape with Beard / Regular Tape</li>
    <li>💆🏽 Beauty Salon Services</li>
    <li>🌀 Dreadlocks & Retwists</li>
    <li>🪡 Sew-Ins & Relaxers</li>
    <li>✨ And More!</li>
  </ul>
</section>


        <div id="siteseal"></div>

        <Footer />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
