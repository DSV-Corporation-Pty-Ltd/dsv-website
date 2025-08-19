'use client'; // This is a Client Component

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button'; // Assuming your Button component path
import Input from '@/components/ui/Input'; // Assuming your Input component path
import '../login/login.css'; // Reuse the same CSS for background and blob animations

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    // Simulate API call to send password reset email
    try {
      console.log('Requesting password reset for:', { email });
      await new Promise(resolve => setTimeout(resolve, 2500)); // Simulate network delay

      // Simulate success based on email
      if (email === 'test@example.com' || email === 'user@dsv360.com') {
        setSuccessMessage('If an account with that email exists, a password reset link has been sent!');
        setEmail(''); // Clear email field on success
      } else {
        // For security reasons, typically we give a generic success message
        // even if the email doesn't exist, to prevent enumeration attacks.
        setSuccessMessage('If an account with that email exists, a password reset link has been sent!');
        setEmail(''); // Clear email field on success
      }
    } catch (err) {
      setError('Failed to send reset link. Please try again later.');
      console.error('Forgot password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants for Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.15,
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
          <p className="text-gray-600 text-lg">Forgot Your Password?</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <p className="text-gray-700 text-sm text-center mb-4">
              Enter your email address below and we'll send you a link to reset your password.
            </p>
            <Input
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
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
              {isLoading ? 'Sending Link...' : 'Send Reset Link'}
            </Button>
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="mt-6 text-center text-gray-700">
          <p className="text-sm">
            Remembered your password?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;