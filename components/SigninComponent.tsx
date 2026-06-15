"use client"

export const SigninComponent = () =>{
    return <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg border border-gray-200">
                <h1 className="text-2xl font-bold mb-6">Sign In</h1>
                
                <form className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        // Handle sign-in logic here
                    }} className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">Sign In</button>
                </form>
            </div>
        </div>
}