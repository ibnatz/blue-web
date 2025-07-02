import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header.jpg')"}} id='Header'>
        <Navbar />
        <div className='flex-1 flex items-center justify-center'>
            <h2 className="text-3xl font-bold text-blue-900">Computational Psychiatry Lab</h2>
        </div>
        
        </div>
    )
}

export default Header