import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/kivancturker',
      icon: <FaGithub className="h-8 w-8" />,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kivancturker/',
      icon: <FaLinkedin className="h-8 w-8" />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 transition-colors hover:text-sky-500"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
