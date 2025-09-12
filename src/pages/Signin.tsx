import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { BrainIcon } from "../icon/BrainIcon";

export function Signin() {
    return <div className="h-screen w-screen pb-25 bg-gray-100 flex flex-col justify-center items-center">
        <div className="pb-10 gap-5 flex justify-center items-center ">
            <BrainIcon size="lg" />
            <h1 className="text-5xl">Welcome to your Second Brain</h1>
        </div>
        <div className="bg-white p-10 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Sign In</h2>
            <form className="flex flex-col gap-4">
                <Input placeholder="email" />
                <Input placeholder="Password" />
                <Button loading={false} text="SignIn" variant="primary" size="md" classname="flex justify-center items-center rounded-sm" />
            </form>
        </div>
    </div>
}