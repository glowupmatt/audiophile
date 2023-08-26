"use client";

import React, { useState } from "react";
import Login from "../components/Login";
import CreateAnAccount from "../components/CreateAnAccount";

type Props = {};

export type Variant = "LOGIN" | "REGISTER";

const RegisterPage = (props: Props) => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const toggleVariant = () => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {variant === "LOGIN" ? (
        <Login variant={variant} setVariant={setVariant} />
      ) : (
        <CreateAnAccount variant={variant} setVariant={setVariant} />
      )}
    </div>
  );
};

export default RegisterPage;
