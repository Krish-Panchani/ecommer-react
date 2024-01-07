import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="sticky md:fixed bottom-0 w-full mt-2">
                <div className="flex justify-evenly p-4 border-2 border-primary rounded-t-2xl bg-white">
                    <div className="flex justify-evenly">
                        <Link to="/profile"><span className="px-2 text-sm ">Home</span></Link>
                        <Link to="/orders"><span className="px-2 text-sm text-primary">Orders</span></Link>
                        <Link to="/add_items"><span className="px-2 text-sm">Your Shop</span></Link>
                    </div>
                </div>
            </footer>
        </>
    );
}