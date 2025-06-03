'use client';

import { useEffect, useState } from 'react';
import { signInWithPhoneNumber, RecaptchaVerifier, ConfirmationResult } from 'firebase/auth';
import { auth } from '../lib/firebase';

function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [statusMessage,setStatusMessage]=useState<string>("");
  const [loggedIn, setLogginIn] = useState<boolean>(false);

useEffect(() => {
  if (typeof window !== 'undefined' && !window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      'recaptcha-container',
      {
        size: 'invisible',
        // sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      }
    );

    window.recaptchaVerifier.render().then(() => {
      console.log('reCAPTCHA rendered');
    });
  }

  return () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      delete window.recaptchaVerifier;
    }
  };
}, []);




  const handleSendCode = async () => {
    try {
      const appVerifier = window.recaptchaVerifier as RecaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setStatusMessage('Code sent successfully')
      console.log('Code sent successfully:', result);
    } catch (error) {
      setStatusMessage(`Error sending verification code: ${error}`)
      console.error('Error sending verification code:', error);
    }
  };

  const handleVerifyCode = async () => {
    if (!confirmationResult) return;
    try {
      const result = await confirmationResult.confirm(verificationCode);
      console.log('User signed in successfully:', result.user);
      setLogginIn(true)
    } catch (error) {
      setStatusMessage(`Error verifying code: ${error}`)
      console.error('Error verifying code:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">SMS Login</h2>

      <div className="space-y-4">
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          onClick={handleSendCode}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Send Verification Code
        </button>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter verification code"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button
          onClick={handleVerifyCode}
          className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Verify Code
        </button>
      </div>

      <div className="text-sm text-center text-gray-600 dark:text-gray-300">{statusMessage}</div>

      <div className="text-center">
        {loggedIn ? (
          <h2 className="text-green-600 font-semibold">🎉 You are logged in!</h2>
        ) : (
          <h2 className="text-red-600 font-semibold">🔒 You are not logged in</h2>
        )}
      </div>

      <div id="recaptcha-container"></div>
    </div>
  );
}

export default PhoneLogin;
