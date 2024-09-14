import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl text-center font-semibold mb-4">About Us</h2>
            <p className="text-gray-400 text-center">
            Our mission at Laxa is to develop a site which is most informative, useful, reliable and handy resource of statutory laws, legal news, articles and other related information for Judicial officers, Legal professionals, Law students/researchers and general public.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="/articles" className="text-gray-400 hover:text-white transition">Articles</a>
              </li>
              <li className="mb-2">
                <a href="/latest-news" className="text-gray-400 hover:text-white transition">Latest News</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center border-t border-gray-700 pt-5">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Your Website. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
