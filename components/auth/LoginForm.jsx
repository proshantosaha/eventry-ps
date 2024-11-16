"use client";

import { performLogin } from "@/app/actions";
import React, { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      await performLogin(formData);
    } catch (error) {
      setError(err.message);
    }
  };
  return (
    <>
      <div>{error}</div>
      <form className="loginReg-form" onSubmit={onSubmit}>
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
