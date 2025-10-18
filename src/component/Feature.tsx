export const Features = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800">A Digital Brain That Works For You</h2>
                <p className="text-gray-500 mt-4 max-w-xl mx-auto">From fleeting thoughts to life-changing projects, Second Brain helps you connect the dots.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:bg-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900">Capture Instantly</h3>
                    <p className="mt-2 text-gray-600">Save any content from the web with our browser extension. Tweets, YouTube videos, articles, and more.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:bg-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900">Powerful Search</h3>
                    <p className="mt-2 text-gray-600">Find anything in seconds. Our intelligent search understands context, not just keywords.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:bg-gray-100">
                    <h3 className="text-2xl font-semibold text-gray-900">Connect Ideas</h3>
                    <p className="mt-2 text-gray-600">Link related notes together to build a network of your knowledge, revealing insights you never saw before.</p>
                </div>
            </div>
        </div>
    </section>
);