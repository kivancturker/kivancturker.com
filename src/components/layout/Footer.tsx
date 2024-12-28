import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kıvanç Türker. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
