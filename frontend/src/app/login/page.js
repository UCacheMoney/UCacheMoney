'use client'

import { useState } from 'react';
import "./page.css";
import NavbarComponent from '../components/NavbarComponent';
import React from "react";
import { useForm } from "react-hook-form";
import { AuthActions } from "@/app/auth/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formData = {
    email: "",
    password: "",
};

const Login = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
    } = useForm();
  
    const router = useRouter();
  
    const { login, storeToken } = AuthActions();
  
    const onSubmit = (data) => {

      login(data.email, data.password)
        .json((json) => {
          storeToken(json.access, "access");
          storeToken(json.refresh, "refresh");
  
          router.push("/home");
        })
        .catch((err) => {
          setError("root", { type: "manual", message: err.json.detail });
        });
    };

    return (
        <>
      <NavbarComponent/>
        <main>
        <div className="">
      <div className="">
        <h3 className="">Login to your account</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div>
            <label className="block" htmlFor="email">
              Username
            </label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
              className=""
            />
            {errors.email && (
              <span className="">Username is required</span>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className=""
            />
            {errors.password && (
              <span className="">Password is required</span>
            )}
          </div>
          <div className="">
            <button className="">
              Login
            </button>
          </div>
          {errors.root && (
            <span className="">{errors.root.message}</span>
          )}
        </form>
        <div className="">
          <Link
            href="/auth/password/reset-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
      </main>
       </>

    );
}

export default Login;