// // 'use client'; // This component uses client-side hooks like useState, useEffect etc.

// // import React, { Fragment } from 'react';
// // import Link from 'next/link';
// // import { Popover, Transition } from '@headlessui/react';
// // import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Install @heroicons/react if you haven't: npm install @heroicons/react
// // import Button from './Button'; // Import your Button component

// // const features = [
// //   { name: 'Project Management', href: '/features/project-management' },
// //   { name: 'Task Management', href: '/features/task-management' },
// //   { name: 'Time Entries', href: '/features/time-entries' },
// //   { name: 'Client Accounts', href: '/features/client-accounts' },
// //   { name: 'Feedback System', href: '/features/feedback-system' },
// //   { name: 'Employee Directory', href: '/features/employee-directory' },
// // ];

// // const Navbar: React.FC = () => {
// //   return (
// //     <nav className="sticky top-0 z-50 bg-white shadow-sm py-4">
// //       <div className="container mx-auto px-4 flex justify-between items-center">
// //         {/* Logo */}
// //         <Link href="/" className="font-bold text-2xl text-blue-700">
// //           <span className="text-blue-500">DSV</span>360
// //         </Link>

// //         {/* Navigation Links */}
// //         <div className="hidden md:flex items-center space-x-8">
// //           <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

// //           {/* Features Dropdown */}
// //           <Popover className="relative">
// //             {({ open }) => (
// //               <>
// //                 <Popover.Button
// //                   className={`
// //                     ${open ? 'text-blue-600' : 'text-gray-700'}
// //                     group inline-flex items-center rounded-md text-base font-medium hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition-colors
// //                   `}
// //                 >
// //                   <span>Features</span>
// //                   <ChevronDownIcon
// //                     className={`${open ? 'rotate-180' : ''} ml-2 h-5 w-5 transition-transform duration-200`}
// //                     aria-hidden="true"
// //                   />
// //                 </Popover.Button>
// //                 <Transition
// //                   as={Fragment}
// //                   enter="transition ease-out duration-200"
// //                   enterFrom="opacity-0 translate-y-1"
// //                   enterTo="opacity-100 translate-y-0"
// //                   leave="transition ease-in duration-150"
// //                   leaveFrom="opacity-100 translate-y-0"
// //                   leaveTo="opacity-0 translate-y-1"
// //                 >
// //                   <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0">
// //                     <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
// //                       <div className="relative grid gap-4 bg-white p-4">
// //                         {features.map((item) => (
// //                           <Link
// //                             key={item.name}
// //                             href={item.href}
// //                             className="-m-3 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
// //                           >
// //                             <p className="text-sm font-medium text-gray-900">{item.name}</p>
// //                           </Link>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </Popover.Panel>
// //                 </Transition>
// //               </>
// //             )}
// //           </Popover>

// //           <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
// //           <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
// //           <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
// //         </div>

// //         {/* Auth Buttons */}
// //         <div className="hidden md:flex items-center space-x-4">
// //           <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
// //           <Button onClick={() => window.location.href='/auth/signup'}>Sign Up</Button>
// //         </div>

// //         {/* Mobile menu (Hamburger icon, etc.) - To be implemented for responsiveness */}
// //         <div className="md:hidden">
// //           {/* Add a mobile menu button/drawer here */}
// //           <button className="text-gray-700">
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// 'use client';

// import React, { Fragment, useState } from 'react'; // Import useState
// import Link from 'next/link';
// import { Popover, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import Button from './Button';

// const features = [
//   { name: 'Project Management', href: '/features/project-management' },
//   { name: 'Task Management', href: '/features/task-management' },
//   { name: 'Time Entries', href: '/features/time-entries' },
//   { name: 'Client Accounts', href: '/features/client-accounts' },
//   { name: 'Feedback System', href: '/features/feedback-system' },
//   { name: 'Employee Directory', href: '/features/employee-directory' },
// ];

// const Navbar: React.FC = () => {
//   // We'll manage the hover state manually for the Popover
//   const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-sm py-4">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="font-bold text-2xl text-blue-700">
//           <span className="text-blue-500">DSV</span>360
//         </Link>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

//           {/* Features Dropdown - Modified for Hover */}
//           <Popover className="relative">
//             {/* We control 'open' state here based on our custom 'isFeaturesHovered' state */}
//             {({ close }) => ( // 'close' function is provided by Popover for programmatic closing
//               <div
//                 onMouseEnter={() => setIsFeaturesHovered(true)}
//                 onMouseLeave={() => setIsFeaturesHovered(false)}
//               >
//                 <Popover.Button
//                   // Use our own state to determine if it's "open" for styling/aria
//                   className={`
//                     ${isFeaturesHovered ? 'text-blue-600' : 'text-gray-700'}
//                     group inline-flex items-center rounded-md text-base font-medium hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition-colors
//                   `}
//                   // Important: For accessibility, Popover.Button still needs to be clickable
//                   // It will toggle its internal 'open' state, but we override the visual based on hover
//                   // This is a common pattern for "click to open, hover to keep open" or "hover to open" with accessibility in mind.
//                 >
//                   <span>Features</span>
//                   <ChevronDownIcon
//                     className={`${isFeaturesHovered ? 'rotate-180' : ''} ml-2 h-5 w-5 transition-transform duration-200`}
//                     aria-hidden="true"
//                   />
//                 </Popover.Button>

//                 <Transition
//                   show={isFeaturesHovered} // Control Transition visibility with our state
//                   as={Fragment}
//                   enter="transition ease-out duration-200"
//                   enterFrom="opacity-0 translate-y-1"
//                   enterTo="opacity-100 translate-y-0"
//                   leave="transition ease-in duration-150"
//                   leaveFrom="opacity-100 translate-y-0"
//                   leaveTo="opacity-0 translate-y-1"
//                 >
//                   <Popover.Panel
//                     className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0"
//                     // Add onMouseLeave to the panel itself to ensure it stays open while hovering over items
//                     onMouseLeave={() => setIsFeaturesHovered(false)}
//                   >
//                     <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                       <div className="relative grid gap-4 bg-white p-4">
//                         {features.map((item) => (
//                           <Link
//                             key={item.name}
//                             href={item.href}
//                             // When an item is clicked, we want to close the popover
//                             onClick={() => close()} // Close the popover programmatically
//                             className="-m-3 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
//                           >
//                             <p className="text-sm font-medium text-gray-900">{item.name}</p>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </Popover.Panel>
//                 </Transition>
//               </div>
//             )}
//           </Popover>

//           <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
//           <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
//           <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
//         </div>

//         {/* Auth Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
//           <Button onClick={() => window.location.href='/auth/signup'}>Sign Up</Button>
//         </div>

//         {/* Mobile menu (Hamburger icon, etc.) - To be implemented for responsiveness */}
//         <div className="md:hidden">
//           {/* Add a mobile menu button/drawer here */}
//           <button className="text-gray-700">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';

import React, { Fragment, useState } from 'react';
import Link from 'next/link';
// Import Menu and Disclosure components from Headless UI
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'; // Hamburger and Close icons
import Button from './Button';

const features = [
  { name: 'Project Management', href: '/features/project-management' },
  { name: 'Task Management', href: '/features/task-management' },
  { name: 'Time Entries', href: '/features/time-entries' },
  { name: 'Client Accounts', href: '/features/client-accounts' },
  { name: 'Feedback System', href: '/features/feedback' },
  { name: 'Employee Directory', href: '/features/employee-directory' },
];

const Navbar: React.FC = () => {
  // State to manage mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to close mobile menu after navigation
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-blue-700">
          <span className="text-blue-500">DSV</span>360
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>

          {/* Features Dropdown - Desktop (Hover) */}
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <div
                onMouseEnter={() => document.getElementById('features-button')?.click()}
                onMouseLeave={() => document.getElementById('features-button')?.click()}
              >
                <Menu.Button
                  id="features-button"
                  className={`
                    ${open ? 'text-blue-600' : 'text-gray-700'}
                    group inline-flex items-center rounded-md text-base font-medium hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition-colors
                  `}
                >
                  <span>Features</span>
                  <ChevronDownIcon
                    className={`${open ? 'rotate-180' : ''} ml-2 h-5 w-5 transition-transform duration-200`}
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items
                    static
                    className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0
                                  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      {features.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>

          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          {/* Auth Buttons - Desktop */}
          <Link href="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
          <Button onClick={() => window.location.href='/auth/signup'}>Sign Up</Button>
        </div>

        {/* Mobile menu button (Hamburger icon) */}
        <div className="md:hidden flex items-center">
          <Button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
            <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <Transition
        as={Fragment}
        show={isMobileMenuOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            {/* Mobile Menu Logo */}
            <Link href="/" className="font-bold text-2xl text-blue-700" onClick={closeMobileMenu}>
              <span className="text-blue-500">DSV</span>360
            </Link>
            {/* Close Button */}
            <Button onClick={closeMobileMenu} className="p-2">
              <XMarkIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
            </Button>
          </div>

          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-xl font-medium text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Home</Link>

            {/* Features Dropdown - Mobile (Accordion using Disclosure) */}
            <Disclosure as="div" className="relative">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between text-xl font-medium text-gray-700 hover:text-blue-600">
                    <span>Features</span>
                    <ChevronDownIcon
                      className={`${open ? 'rotate-180' : ''} ml-2 h-6 w-6 transition-transform duration-200`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-2 pt-2 pb-2 text-sm text-gray-500 space-y-2">
                      {features.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100"
                          onClick={closeMobileMenu} // Close entire mobile menu on click
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Link href="/pricing" className="block text-xl font-medium text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Pricing</Link>
            <Link href="/about" className="block text-xl font-medium text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>About Us</Link>
            <Link href="/contact" className="block text-xl font-medium text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Contact</Link>

            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-4">
              <Link href="/auth/login" className="block text-xl font-medium text-gray-700 hover:text-blue-600" onClick={closeMobileMenu}>Login</Link>
              <Button onClick={() => { window.location.href='/auth/signup'; closeMobileMenu(); }} className="w-full text-lg">Sign Up</Button>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;