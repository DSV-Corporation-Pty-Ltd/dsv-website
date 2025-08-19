import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-blue-400">DSV360</h3>
          <p className="text-gray-400 text-sm">
            Manage projects, track time, and collaborate effortlessly.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons Placeholder */}
             <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <FaFacebookF size={20} /> {/* Adjust size as needed */}
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <FaTwitter size={20} /> {/* Adjust size as needed */}
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <FaLinkedinIn size={20} /> {/* Adjust size as needed */}
    </a>
          </div>
        </div>

        {/* Features Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Features</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/features/project-management" className="hover:text-white transition-colors">Project Management</Link></li>
            <li><Link href="/features/task-management" className="hover:text-white transition-colors">Task Management</Link></li>
            <li><Link href="/features/time-entries" className="hover:text-white transition-colors">Time Entries</Link></li>
            <li><Link href="/features/client-accounts" className="hover:text-white transition-colors">Client Accounts</Link></li>
            <li><Link href="/features/feedback-system" className="hover:text-white transition-colors">Feedback System</Link></li>
            <li><Link href="/features/employee-directory" className="hover:text-white transition-colors">Employee Directory</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
          <p className="text-gray-400 text-sm">
            4th Floor C block ,The Social Street Hinjewadi  <br />
            Pune, Maharashtra 411057<br />
            India
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Email: <a href="mailto:support@dsvcorp.com.au" className="hover:text-white transition-colors">support@dsvcorp.com.au</a><br />
            Phone: <a href="tel:+918591044966" className="hover:text-white transition-colors">+91 85910 44966</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center text-gray-500 text-xs mt-8 border-t border-gray-800 pt-8">
        &copy; {new Date().getFullYear()} DSV Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;