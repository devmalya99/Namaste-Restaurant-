import React from 'react';
import Header from '../Header';

const Contact = () => {
  // Dummy data for contact information
  const contactInfo = {
    address: '123 Main Street, Cityville',
    email: 'info@thegoldenspoon.com',
    phone: '+1 (555) 123-4567',
    website: 'https://www.thegoldenspoon.com',
  };

  // Dummy data for social media links with logos
  const socialMediaLinks = [
    { name: 'Facebook', logo: 'data:image/png;base64,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', url: 'https://www.facebook.com/thegoldenspoon' },
    { name: 'Twitter', logo: 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706486400&semt=ais', 
    url: 'https://twitter.com/thegoldenspoon' },
    { name: 'Instagram', logo: 'https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg', 
    url: 'https://www.instagram.com/thegoldenspoon/' },
    // Add more social media links as needed
  ];

  return (
    <>
      <Header />
      <div className="w-full bg-gray-800 text-white">
        <main className="pt-10 px-4">
          <h2 className="text-4xl font-bold mb-5">Contact</h2>

          {/* Contact Information */}
          <div className="mb-8">
            <p className="text-lg">
              <strong>Address:</strong> {contactInfo.address}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {contactInfo.email}
            </p>
            <p className="text-lg">
              <strong>Phone:</strong> {contactInfo.phone}
            </p>
            <p className="text-lg">
              <strong>Website:</strong> <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">{contactInfo.website}</a>
            </p>
          </div>

          {/* Social Media Links with Logos */}
          <div className="flex space-x-4 py-20">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 transition duration-300"
              >
                <img src={link.logo} alt={`${link.name} Logo`} className="w-10 h-16" />
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-center py-4 bg-gray-800 text-white">
          <p>&copy; {new Date().getFullYear()} The Golden Spoon</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
