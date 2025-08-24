"use client"; // required for hooks in App Router
import { useRouter } from "next/navigation"; 
import { useState } from "react";
import styles from "./authentication.module.css";
import Link from "next/link";

export default function Auth() {
  const router = useRouter();
  const [code, setCode] = useState(Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto focus next input if value entered
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join("");
    console.log("Entered Code:", enteredCode);
    // Normally verify code with API here
    router.push("/mfa");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.companyLogo}>
          <img src="datajettylogo.avif" alt="" />
        </div>
        <div className="text-center text-xl mb-5">Enter Authentication Code</div>

        <div className="text-gray-500 text-center text-sm mb-5">
          Enter the 6-digit code from your authenticator app
        </div>

        <div className="flex justify-center gap-2 mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="input w-10 h-12 text-center bg-white shadow-sm input-sm input-ghost focus:ring-4 focus:outline-0 focus:ring-gray-300"
            />
          ))}
        </div>

        <button className="btn bg-cyan-600 btn-sm rounded-lg text-white mb-5">
          Verify Code
        </button>

        <div className="text-xs text-center mb-3 text-gray-500 hover:text-cyan-400 hover:underline underline-offset-4">
          <Link href="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
}
