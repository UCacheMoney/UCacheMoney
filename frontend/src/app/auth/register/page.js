"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { AuthActions } from "@/app/auth/utils";
import { useRouter } from "next/navigation";

FormData = {
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const router = useRouter();

  const { register: registerUser } = AuthActions(); // Note: Renamed to avoid naming conflict with useForm's register

  const onSubmit = (data) => {
    registerUser(data.email, data.username, data.password)
      .json(() => {
        router.push("/login");
      })
      .catch((err) => {
        setError("root", {
          type: "manual",
          message: err.json.detail,
        });
      });
  };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className=""
            />
            {errors.email && (
              <span className="">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className=""
            />
            {errors.username && (
              <span className="">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className=""
            />
            {errors.password && (
              <span className="">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="">
            <button className="">
              Register
            </button>
          </div>
          {errors.root && (
            <span className="">{errors.root.message}</span>
          )}
        </form>
    </div>
  )
};

export default Register;
