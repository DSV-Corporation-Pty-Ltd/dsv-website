'use client'; // This is a Client Component

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button'; // Assuming your Button component path
import Input from '@/components/ui/Input'; // Assuming your Input component path
import '../login/login.css'; // Reuse the same CSS for background and blob animations
import axios from 'axios';
const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
type OrgData = {
  orgName: string;
  orgEmail: string;
  colorCode: string;
  logo: File | null;
};

const [orgData, setOrgData] = useState<OrgData>({
  orgName: "",
  orgEmail: "",
  colorCode: "",
  logo: null,
});

const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState({});

  
const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { name, value } = e.target;
  setOrgData((prev) => ({
    ...prev,
    [name]: value, // TS now understands this
  }));
};

const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    setOrgData((prev) => ({ ...prev, logo: file }));

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setLogoPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }
};


  const handleRemoveLogo = () => {
    setOrgData((prev) => ({ ...prev, logo: null }));
    setLogoPreview(null);
  };
// const handleSubmit = async () => {
//   const newErrors = {};

//   if (!orgData.orgName) newErrors.orgName = "Organization name is required";
//   if (!orgData.orgEmail) newErrors.orgEmail = "Email is required";

//   setErrors(newErrors);
//   if (Object.keys(newErrors).length > 0) return;

//   const formData = new FormData();
//   formData.append(
//     "data",
//     JSON.stringify({
//       org_email: orgData.orgEmail,
//       org_first_name: orgData.orgName,
//       org_last_name: '',
//       org_color: orgData.colorCode,
//     })
//   );
//   formData.append("logo", orgData.logo);

//   try {
//     const response = await axios.post(
//       "/server/time_entry_management_application_function/addAdmin",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     console.log("Response:", response.data);


//     setOrgData({
//       orgName: "",
//       orgEmail: "",
//       colorCode: "",
//       logo: null,
//     });
//     setLogoPreview(null);
//      onClose();
//   } catch (error) {
//     console.error("Submit error:", error);
//   }
// };







  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError(null);
  //   setSuccessMessage(null);

  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match.');
  //     setIsLoading(false);
  //     return;
  //   }

  //   // Simulate API call
  //   try {
  //     // Replace with your actual signup API call
  //     console.log('Attempting signup with:', { name, email, password });
  //     await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

  //     // Simulate successful signup
  //     if (email.includes('@') && password.length >= 6) { // Basic validation
  //       setSuccessMessage('Account created successfully! Redirecting to login...');
  //       console.log('Signup successful!');
  //       // In a real app, you'd likely redirect here after a short delay
  //       // setTimeout(() => router.push('/login'), 2000);
  //     } else {
  //       setError('Please provide a valid email and a password of at least 6 characters.');
  //     }
  //   } catch (err) {
  //     setError('An unexpected error occurred during signup. Please try again.');
  //     console.error('Signup error:', err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // Animation variants for Framer Motion
  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const newErrors = {};
  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  const formData = new FormData();
  formData.append(
    "data",
    JSON.stringify({
      org_email: orgData.orgEmail,
      org_first_name: orgData.orgName,
      org_last_name: '',
      org_color: orgData.colorCode,
    })
  );
  if (orgData.logo) formData.append("logo", orgData.logo);
   
  console.log("data is",orgData);
  try {
      const response = await axios.post(
      "https://project-management-771555683.development.catalystserverless.com/server/time_entry_management_application_function/addAdmin",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("data is ", response);

    setOrgData({
      orgName: "",
      orgEmail: "",
      colorCode: "",
      logo: null,
    });
    setLogoPreview(null);
  } catch (error) {
    console.error("Submit error:", error);
  }
};

  
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.15, // Slightly faster stagger for more fields
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-background p-4 relative overflow-hidden">
      {/* Animated background circles/blobs - Reusing classes from login.css */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 login-blob login-blob-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 login-blob login-blob-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.7 }}
      ></motion.div>
      <motion.div
        className="absolute w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 login-blob login-blob-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.9 }}
      ></motion.div>

      <motion.div
        className="relative z-10 bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-100 login-card-backdrop"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">DSV360</h1>
          <p className="text-gray-600 text-lg">Create Your Account</p>
        </motion.div>

        {/* <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <Input
              id="name"
              label="Full Name (Optional)"
              type="text"
              value={orgData.orgName}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              id="email"
              label="Email Address"
              type="email"
              value={orgData.orgEmail}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              id="colorCode"
              label="Color Code"
              type="email"
              value={orgData.colorCode}
              onChange={handleInputChange}
              required
              placeholder="#fff"
            />

              <input
    type="color"
    value={orgData.colorCode}
    onChange={(e) =>
      handleInputChange({ target: { name: "colorCode", value: e.target.value } })
    }
    style={{ width: 40, height: 40, border: 'none', cursor: 'pointer' }}
  />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="********"
            />
          </motion.div>

          {error && (
            <motion.p
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          {successMessage && (
            <motion.p
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-sm text-center"
            >
              {successMessage}
            </motion.p>
          )}

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </motion.div>
        </form> */}
   <form onSubmit={handleSubmit} className="space-y-6">
  <motion.div variants={itemVariants}>
    <Input
      id="name"
      label="Full Name"
      type="text"
      name="orgName"
      value={orgData.orgName}
      onChange={handleInputChange}
      required
      placeholder="John Doe"
       className="text-black"

    />
  </motion.div>

  <motion.div variants={itemVariants}>
    <Input
      id="email"
      label="Email Address"
      type="email"
      name="orgEmail"
      value={orgData.orgEmail}
      onChange={handleInputChange}
      required
      placeholder="you@example.com"
      className="text-black"

    />
  </motion.div>

  {/* Color Code + Picker same line */}
  <motion.div variants={itemVariants} className="flex items-end gap-3">
    <div className="flex-1">
      <Input
        id="colorCode"
        label="Color Code"
        type="text"
        name="colorCode"
        value={orgData.colorCode}
        onChange={handleInputChange}
        required
        placeholder="#ffffff"
        className='text-black'
      />
    </div>
    <input
      type="color"
       name="colorCode"
      value={orgData.colorCode}
       onChange={handleInputChange}
  className="w-10 h-10 border-none cursor-pointer rounded text-black"
    />
  </motion.div>

  {/* Upload Logo */}
  <motion.div variants={itemVariants}>
    <label className="inline-flex items-center gap-2 px-4 py-2 border rounded cursor-pointer hover:bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4M4 8h16" />
      </svg>
      <span  className='text-black'>Upload Logo</span>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleLogoChange}
      />
    </label>

    {logoPreview && (
      <div className="mt-2 flex items-center justify-between border p-2 rounded text-black">
        <div className="flex items-center gap-3">
          <img
            src={logoPreview}
            alt="Logo Preview"
            className="w-12 h-12 object-cover rounded"
          />
          <span className="text-sm">{orgData.logo?.name}</span>
        </div>
        <button
          type="button"
          className="text-red-500 hover:text-red-700"
          onClick={handleRemoveLogo}
        >
          ✕
        </button>
      </div>
    )}
  </motion.div>

  {error && (
    <motion.p
      variants={itemVariants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-red-500 text-sm text-center"
    >
      {error}
    </motion.p>
  )}

  {successMessage && (
    <motion.p
      variants={itemVariants}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-green-600 text-sm text-center"
    >
      {successMessage}
    </motion.p>
  )}

  <motion.div variants={itemVariants}>
    <button
      type="submit"
      className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 shadow-lg"
      disabled={isLoading}
    >
      {isLoading ? "Creating Account..." : "Sign Up"}
    </button>
  </motion.div>
</form>



        <motion.div variants={itemVariants} className="mt-6 text-center text-gray-700">
          <p className="text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;