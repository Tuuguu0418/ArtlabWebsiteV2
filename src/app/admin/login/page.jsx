"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwzO9XVj5_PUYuBiWc5-xSHDKJ360s3b8",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        const { idToken } = responseData;
        const { localId } = responseData;
        // document.cookie = `session=${idToken}; path=/; secure; samesite=lax`;
        Cookies.set("token", idToken);
        Cookies.set("userId", localId);
        router.push("/admin/panel");
      } else {
        console.log(`Something is wrong: ${responseData.error.message}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="w-4/5 flex items-center gap-32 text-white">
          <div className="w-1/2">
            <Image
              src="/img/logo/artlablogo.png"
              alt="logo"
              height={450}
              width={450}
            />
          </div>
          <div className="h-96 w-0.5 bg-white/50"></div>
          <div className="w-1/2 flex flex-col gap-14 items-center">
            <div className="text-center">
              <h1 className="text-4xl font-semibold mb-5">Welcome</h1>
              <p>Please login to admin dashboard</p>
            </div>
            <form
              className="w-full flex flex-col items-center gap-14"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-10/12 gap-3 text-black">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  className="rounded-md p-3"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  className="rounded-md p-3"
                />
              </div>
              <button type="submit" className="bg-sky-500 p-3 w-4/6 rounded-md">
                {isLoading ? (
                  <TailSpin
                    height="20"
                    width="20"
                    color="#fff"
                    ariaLabel="loading"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
