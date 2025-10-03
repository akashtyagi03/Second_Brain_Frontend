import { useRef } from "react";
import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { BrainIcon } from "../icon/BrainIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    // here i use useref, it helps to get the value of the input field without using state
    const usernameref = useRef<HTMLInputElement>(null);
    const passwordref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup() {
        const username = usernameref.current?.value;
        const password = passwordref.current?.value;
        // we have store our BACKEND_URL somewhere else like config.ts
        console.log("first")
        try {
            const response = await axios.post(BACKEND_URL + "/signup", {
                username,
                password
            });
            const token = response.data.token;
            localStorage.setItem("token", token);
            alert("Account created successfully");
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
            <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
            <form className="flex flex-col gap-4" onSubmit={(e)=>e.preventDefault()}>
                <Input ref={usernameref} placeholder="username" />
                <Input ref={passwordref} placeholder="Password" />
                <Button type="button" onClick={signup} loading={false} text="Create Account" variant="primary" size="md" classname="flex justify-center items-center rounded-sm" />
            </form>
            <p className="mt-4 text-sm">
                Already have an account? <span className="text-blue-500 hover:underline" onClick={()=>navigate("/signin")}>Sign In</span>
            </p>
        </div>
    </div>
}