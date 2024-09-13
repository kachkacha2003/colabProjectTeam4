import React, { useState } from "react";
import image1 from "/public/img/image (1).png";
import imag21 from "/public/img/image (2).png";
import imag31 from "/public/img/image (3).png";
import imag312 from "/public/img/image.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) {
      setError("Email address is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Handle form submission
    console.log("Email submitted:", email);
    // Optionally clear the email input field after successful submission
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12">
        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <img className="w-24 h-24 object-cover rounded-lg shadow-lg" src={image1} alt="Brand 1" />
          <img className="w-24 h-24 object-cover rounded-lg shadow-lg" src={imag21} alt="Brand 2" />
          <img className="w-24 h-24 object-cover rounded-lg shadow-lg" src={imag31} alt="Brand 3" />
          <img className="w-24 h-24 object-cover rounded-lg shadow-lg" src={imag312} alt="Brand 4" />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left">
          {/* Company Information */}
          <div className="flex flex-col gap-4 mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-xl font-semibold mb-2">Company Info</h2>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col gap-4 mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p>+1 (844) 326-6000</p>
            <p>support@example.com</p>
            <p>Mon-Fri 9am-5pm PT</p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Stay Informed</h2>
            <p>Sign up for our newsletter to receive the latest updates and special offers.</p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                className={`p-3 rounded-lg border ${error ? 'border-red-600' : 'border-gray-600'} bg-gray-700 text-white placeholder-gray-400`}
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
