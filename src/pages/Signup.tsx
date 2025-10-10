// import { useRef } from "react";
// import { Button } from "../component/Button";
// import { Input } from "../component/Input";
// import { BrainIcon } from "../icon/BrainIcon";
// import axios from "axios";
// import { BACKEND_URL } from "../config";
// import { useNavigate } from "react-router-dom";

// export function Signup() {
//     // here i use useref, it helps to get the value of the input field without using state
//     const usernameref = useRef<HTMLInputElement>(null);
//     const passwordref = useRef<HTMLInputElement>(null);
//     const navigate = useNavigate();

//     async function signup() {
//         const username = usernameref.current?.value;
//         const password = passwordref.current?.value;
//         // we have store our BACKEND_URL somewhere else like config.ts
//         console.log("first")
//         try {
//             const response = await axios.post(BACKEND_URL + "/signup", {
//                 username,
//                 password
//             });
//             const token = response.data.token;
//             localStorage.setItem("token", token);
//             alert("Account created successfully");
//             navigate("/dashboard");
//           } catch (err) {
//             console.error(err);
//             alert("Signup failed");
//           } 
//     }

//     return <div className="h-screen w-screen pb-25 bg-gray-100 flex flex-col justify-center items-center">
//         <div className="pb-10 gap-5 flex justify-center items-center ">
//             <BrainIcon size="lg" />
//             <h1 className="text-5xl">Welcome to your Second Brain</h1>
//         </div>
//         <div className="bg-white p-10 rounded shadow-lg">
//             <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
//             <form className="flex flex-col gap-4" onSubmit={(e)=>e.preventDefault()}>
//                 <Input ref={usernameref} placeholder="username" />
//                 <Input ref={passwordref} placeholder="Password" />
//                 <Button type="button" onClick={signup} loading={false} text="Create Account" variant="primary" size="md" classname="flex justify-center items-center rounded-sm" />
//             </form>
//             <p className="mt-4 text-sm">
//                 Already have an account? <span className="text-blue-500 hover:underline" onClick={()=>navigate("/signin")}>Sign In</span>
//             </p>
//         </div>
//     </div>
// }
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, LoaderCircle, AlertCircle } from 'lucide-react';

export function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Basic validation
        if (!username || !email || !password) {
            setError("Please fill in all fields.");
            setIsLoading(false);
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/v1/signup', {
                username,
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/Dashboard');
        } catch (err) {
            console.log("error is ", err);
            // setError(errorMessage);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Create an Account</h2>
                <p className="text-gray-500 text-center mb-6">Join us to get started.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password (min. 6 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                            required
                        />
                    </div>
                    {error && (
                        <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-green-400 flex items-center justify-center"
                    >
                        {isLoading ? <LoaderCircle className="animate-spin" /> : <><UserPlus className="mr-2 h-5 w-5" /> Sign Up</>}
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-6">
                    Already have an account?{' '}
                    <Link to="/signin" className="font-semibold text-indigo-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
