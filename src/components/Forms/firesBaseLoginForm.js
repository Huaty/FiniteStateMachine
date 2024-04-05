"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projectAuth } from "@/firebase/config"; // Adjust the path as necessary
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset errors

    const mapFirebaseErrorToMessage = (firebaseError) => {
      const errorMappings = {
        "auth/user-not-found":
          "User does not exist. Please check your email address and try again.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/internal-error": "Email or password is wrong",
      };

      // Return the custom error message, or the original Firebase error if not mapped
      return errorMappings[firebaseError] || firebaseError;
    };

    try {
      // Sign in with email and password
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      console.log("User logged in:", res.user);
      const token = await res.user.getIdToken();

      // Redirect or update UI as needed
      Cookies.set("sessionToken", token, { expires: 1 });
      router.push("/Afterlogin");
    } catch (err) {
      const userFriendlyError = mapFirebaseErrorToMessage(err.code); // or err.message, depending on what Firebase returns
      setError(userFriendlyError);
    }
  };

  return (
    <div>
      <div className="mt-[5vw] ml-[5vw] w-[10vw] flex">
        <button
          className="border-[1px] p-[10px] rounded-[6px] border-gray-200 text-black cursor-pointer w-[100%] hover:bg-red-500 hover:text-white"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </div>
      <div className="flex justify-center items-center mt-[5vh]">
        <div className="bg-white shadow-2xl rounded-lg p-8 w-[25vw]">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full mb-[3vh] bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </form>
          <div className="flex justify-center items-center">
            <Image
              src="/ntuMiniLogo.png"
              width={50}
              height={50}
              alt="NTU Mini Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
