import React from 'react';
import cart from '../assets/cart.svg';
import profile from '../assets/profile.svg';

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="flex justify-between p-4 border-2 border-primary rounded-b-2xl">
                    <div>
                        <h1 className="font-lexend-900 text-xl text-primary">LOCOMMERCE</h1>
                    </div>
                    <div className="flex">
                        <img className="px-2" src={cart} alt="" />
                        <img className="px-2" src={profile} alt="" />
                    </div>
                </div>
            </nav>
        </>
    );
}