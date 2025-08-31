"use client"; // required for hooks in App Router
import { useRouter } from "next/navigation"; // ✅ correct
import { useState } from "react";
import styles from "./contact-support.module.css";
import Link from "next/link";

export default function ContactAdminPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // mock login, normally call API
    router.push("/mfa");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}  className={styles.form}>
        <div className={styles.companyLogo}>
          <img src="datajettylogo.avif" alt="" />
        </div>
        <div className="text-center text-xl mb-5">Contact Administrator</div>

        <div className="text-gray-500 text-center text-sm mb-5">
          Need immediate help? Send a message to the admin team Enter your email
          to receive password reset instructions
        </div>

        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend">Full Name</legend>
          <input
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input input-sm input-ghost w-full  focus:ring-4 focus:outline-0 focus:ring-gray-300"
          />
          {/* <p className="label">Optional</p> */}
        </fieldset>
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend">Email Address</legend>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-sm input-ghost w-full  focus:ring-4 focus:outline-0 focus:ring-gray-300"
          />
          {/* <p className="label">Optional</p> */}
        </fieldset>
        <fieldset className="fieldset mb-4">
          <legend className="fieldset-legend">Your bio</legend>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea h-24 input-ghost w-full  focus:ring-4 focus:outline-0 focus:ring-gray-300"
            placeholder="Describe your issue or question..."
          ></textarea>
        </fieldset>

        <button className="btn bg-cyan-600 btn-sm rounded-lg text-white mb-8">
          Send Reset Instructions
        </button>

        <div className="text-xs text-center mb-3 text-gray-500 hover:text-cyan-400 hover:underline underline-offset-4">
          <Link href="/login">Back to Login </Link>
        </div>
      </form>
    </div>
  );
}
