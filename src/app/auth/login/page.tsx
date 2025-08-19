'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion'; // <--- Import Variants here
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log('Attempting login with:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (email === 'test@example.com' && password === 'password123') {
        console.log('Login successful!');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants for Framer Motion
  // Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut', // 'easeOut' is a recognized string literal for Easing
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Explicitly type itemVariants as Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', // 'easeOut' is a recognized string literal for Easing
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-background p-4 relative overflow-hidden">
      {/* Animated background circles/blobs */}
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
          <p className="text-gray-600 text-lg">Welcome Back!</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
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

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="mt-6 text-center text-gray-700">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
          <p className="mt-2 text-sm">
            <Link href="/auth/forgot-password" className="text-blue-600 hover:underline font-medium">
              Forgot Password?
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;