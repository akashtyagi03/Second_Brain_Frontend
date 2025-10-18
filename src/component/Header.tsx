import { BrainIcon } from "../icon/BrainIcon";

interface headerprops {
    onSignInClick:any
    onSignUpClick:any
}

export const Header = ({ onSignInClick, onSignUpClick }:headerprops) => (
    <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3 pl-20">
                <BrainIcon size="sm" />
                <h1 className="text-2xl font-bold text-gray-800">Second Brain</h1>
            </div>
            <div className="flex items-center gap-4 pr-20">
                <button onClick={onSignInClick} className="text-gray-600 font-medium hover:text-indigo-600 transition-colors">Log in</button>
                <button onClick={onSignUpClick} className="bg-indigo-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md">Sign Up</button>
            </div>
        </div>
    </header>
);