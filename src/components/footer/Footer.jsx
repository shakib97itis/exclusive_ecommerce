import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

import googlePlayStoreImg from "../../assets/app_button/google_play_button.png";
import appleStoreImg from "../../assets/app_button/apple_appstore.png";
import qrCode from "../../assets/images/qu_code.png";

const Footer = () => {
  /*
  TODO: Middle Section
  ! WE ARE HERE FOR THE MAIN PART.
  */

  return (
    <footer className="bg-gray-900">
      <div className="main-container text-text pt-20 pb-6">
        {/* TODO:change mb; Middle Section - Support, Account, Links */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* LOGO AND EMAILD */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-24-bold text-text">Exclusive</h2>
            </div>
            <p className="title-20-medium text-text">Subscribe</p>
            <div>
              <form action="">
                <label
                  htmlFor="newsletter"
                  className="title-16-regular text-text"
                >
                  Get 10% off your first order
                </label>
                <input type="email" name="newsletter" id="newsletter" />
              </form>
            </div>
          </div>

          {/* Support */}
          <div className="text-text">
            <h3 className="title-20-medium mb-6">Support</h3>
            <address className="title-16-regular space-y-4 not-italic">
              <p>11 Bijoy sarani, Dhaka, DH 1516, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9898</p>
            </address>
          </div>

          {/* Account */}
          <div>
            <h3 className="title-20-medium mb-6">Account</h3>
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Login / Register
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-text">
            <h3 className="title-20-medium mb-6">Quick Links</h3>
            <div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Apps */}
          <div className="text-text">
            <h3 className="title-20-medium mb-6">Download App</h3>
            <div className="space-y-4">
              <div>
                <p className="title-12-medium text-text/70 mb-4">
                  $3 off with App New User Only
                </p>
                <div className="grid grid-cols-[40%_1fr] grid-rows-2 gap-2">
                  <div className="row-span-2 flex items-center justify-center">
                    <img src={qrCode} alt="QR Code" />
                  </div>
                  <a
                    href="#"
                    className="flex items-center rounded bg-black p-2 text-white"
                  >
                    <img
                      src={googlePlayStoreImg}
                      alt="Google PlayStore Button"
                      className="h-full w-full object-cover"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded bg-black p-2 text-white"
                  >
                    <img src={appleStoreImg} alt="Apple Store Button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
