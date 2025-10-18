interface heroprops{
    onSignUpClick:any
}

export const Hero = ({ onSignUpClick }:heroprops) => (
    <main className="relative pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Capture Everything. <br className="hidden md:block" />
                <span className="text-indigo-600">Organize Effortlessly.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                Your Second Brain is the ultimate digital notebook. Save articles, notes, videos, and tweets in one place and find them instantly. Stop forgetting, start creating.
            </p>
            <div className="mt-10">
                <button onClick={onSignUpClick} className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-xl cursor-pointer">
                    Get Started 
                </button>
            </div>
        </div>
    </main>
);