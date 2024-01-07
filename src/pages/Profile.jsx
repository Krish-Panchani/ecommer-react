import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PlusIcon from '../assets/plus.svg';


export default function Profile() {
    return (
        <>
            <Navbar />
            <section>
                <div className="py-8 max-w-lg">
                    <div>
                        <h2 className="font-lexend-700 text-xl text-primary p-4">Your Profile</h2>
                    </div>
                </div>

                <div className="flex px-2 flex-col lg:flex-row">
                    <div className="mx-2 flex flex-col lg:flex-row justify-center bg-blue-500 items-center inner-shadow max-w-lg pt-20 p-4 px-12 border border-gray-200 rounded-lg hover:bg-blue-600">
                        <div className="flex flex-col justify-end">
                            <h5 className="mb-2 text-md md:text-md font-bold tracking-tight text-white shadow-2xl">Bag Shop</h5>
                            <p className="font-normal text-xs text-nowrap text-white drop-shadow-xl">Get all types of branded bags</p>
                        </div>

                        <div className="backdrop-blur-sm border-2 px-2 rounded-full">
                            <Link to="#">
                                <span className="text-white text-xs">Manage</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-2 flex flex-col lg:flex-row justify-center items-center bg-blue-500 inner-shadow max-w-md pt-20 p-4 px-12 border border-gray-200 rounded-lg hover:bg-blue-600">
                        <div className="flex flex-col justify-end">
                            <h5 className="mb-2 text-md md:text-md font-bold tracking-tight text-white shadow-2xl">Clothes Shop</h5>
                            <p className="font-normal text-xs text-nowrap text-white drop-shadow-xl">Get all types of branded Clothes</p>
                        </div>

                        <div className="backdrop-blur-sm border-2 px-2 rounded-full">
                            <Link to="#">
                                <span className="text-white text-xs">Manage</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center">
                <Link to="addshop.html">
                    <img src={PlusIcon} alt="Plus Icon" className="h-12 w-12 m-4 absolute bottom-12 right-2" />
                </Link>
            </div>
        </>
    );
}