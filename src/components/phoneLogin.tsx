'use client'

import { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { app } from '../lib/firebase';

function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const auth = getAuth(app);

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response: any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response)
      }
    });
    window.recaptchaVerifier = recaptchaVerifier
  }, []);

  const handleSendCode = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmationResult);
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      if(confirmationResult){

        const credential = await confirmationResult.confirm(verificationCode);
        const user = credential.user;
        console.log("Sign in Success", user);
      }
      // Sign-in successful.
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <div>
      <div className='input-phone'>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendCode}>Send Code</button>
      </div>
      <div className='verify-phone'>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button onClick={handleVerifyCode}>Verify Code</button>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default PhoneLogin;
