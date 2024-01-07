import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { database } from '../FirebaseConfig'
import { createUserWithEmailAndPassword }  from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [login,setLogin] = React.useState(false)

    const navigate = useNavigate()

    if(login){
        navigate('/profile')
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        createUserWithEmailAndPassword(database, email,password).then(data=>{
            console.log(data, "auth data")
            navigate('/profile')
            setLogin(true)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
            <Navbar />
            <section>
                <div className="py-8 max-w-lg mx-auto">
                    <div>
                        <h2 className="font-lexend-700 text-xl text-primary p-4">Register</h2>
                    </div>
                    <div className="">
                        <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col">
                            <div className="flex flex-col m-4">
                                <label className="py-4" htmlFor="email">GMAIL / USERNAME: </label>
                                <input
                                    className="border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-sm w-full placeholder:text-xs"
                                    type="email" placeholder="Enter your GMAIL / USERNAME" name="email" />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="py-4" htmlFor="password">PASSWORD: </label>
                                <input
                                    className="border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-sm w-full placeholder:text-xs"
                                    type="password" placeholder="Enter your password" name="password" />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="py-4" htmlFor="reenterPassword">ReEnter PASSWORD: </label>
                                <input
                                    className="border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-sm w-full placeholder:text-xs"
                                    type="password" placeholder="Re-enter your password" name="reenterPassword" />
                            </div>
                            <div className="flex flex-col m-4">
                                <span className="py-4">Already have an Account?</span>
                                <Link to="/login"><span className="text-primary">Login Here</span></Link>
                                
                            </div>
                            <button
                                    className="my-4 border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-lg text-white bg-[#006F9E] w-full placeholder:text-xs">Register
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
