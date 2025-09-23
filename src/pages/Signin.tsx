import { useRef } from "react";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { BrainIcon } from "../icon/BrainIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {
      // here i use useref, it helps to get the value of the input field without using state
      const usernameref = useRef<HTMLInputElement>(null);
      const passwordref = useRef<HTMLInputElement>(null);
      const navigate = useNavigate();
  
      async function signin() {
          const username = usernameref.current?.value;
          const password = passwordref.current?.value;
          // we have store our BACKEND_URL somewhere else like config.ts
          console.log("first")
          try {
              const response = await axios.post(BACKEND_URL + "/signin", {
                  username,
                  password
              });
              const jwt = response.data.token
              localStorage.setItem("token", jwt);
              navigate("/dashboard");
            } catch (err) {
              console.error(err);
              alert("Signup failed");
            } 
      }

    return <div className="h-screen w-screen pb-25 bg-gray-100 flex flex-col justify-center items-center">
        <div className="pb-10 gap-5 flex justify-center items-center ">
            <BrainIcon size="lg" />
            <h1 className="text-5xl">Welcome to your Second Brain</h1>
        </div>
        <div className="bg-white p-10 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Sign In</h2>
            <form className="flex flex-col gap-4" onSubmit={(e)=>e.preventDefault()}>
                <Input ref={usernameref} placeholder="email" />
                <Input ref={passwordref} placeholder="Password" />
                <Button type="button" onClick={signin} loading={false} text="SignIn" variant="primary" size="md" classname="flex justify-center items-center rounded-sm" />
            </form>
            <div>
                <p className="mt-4">Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/")}>Sign Up</span></p>
            </div>
        </div>
    </div>
}