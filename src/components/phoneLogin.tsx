'use client';

import { useEffect, useState } from 'react';
import { signInWithPhoneNumber, RecaptchaVerifier, ConfirmationResult } from 'firebase/auth';
import { auth } from '../lib/firebase';

function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [statusMessage,setStatusMessage]=useState<String>("");
  const [loggedIn, setLogginIn] = useState<Boolean>(false);

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
      setStatusMessage('Error sending verification code')
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
      setStatusMessage('Error verifying code')
      console.error('Error verifying code:', error);
    }
  };

  return (
    <div>
      <div className="input-phone">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendCode}>Send Code</button>
      </div>

      <div className="verify-phone">
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button onClick={handleVerifyCode}>Verify Code</button>
        <span>

        {statusMessage}
        </span>
      </div>
      <div className='logged-in-status m-2'>

        {loggedIn ? 
        <h2>You are logged in!</h2>
        :
        <h2>You are not logged in</h2>  
      }

      </div>

      <div id="recaptcha-container"></div>
    </div>
  );
}

export default PhoneLogin;
