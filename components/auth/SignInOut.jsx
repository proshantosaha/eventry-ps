"use client";

import { useAuth } from "@/app/hooks/useAuth";
import React from "react";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  return (
    <div>
      {auth ? (
        <>
          <span>Hello, {auth?.name}</span>
          <span>|</span>
          <a>Logout</a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInOut;
