import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/Big-Pace-Barber-Shop-and-Beauty-Salon-2-103462851469536/?ref=page_internal"
          aria-label="Facebook page"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/bigpacebarbershop?igshid=6lx9wphfn0pl"
          aria-label="Instagram profile"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="icon-attribution">
        <a
          href="https://www.flaticon.com/free-icons/barber-shop"
          title="Barber shop icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Barber shop icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
}

export default Footer;
