import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { database } from '../FirebaseConfig'
import { signInWithEmailAndPassword }  from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()
    const [login,setLogin] = React.useState(false)

    if(login){
        navigate('/profile')
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(database, email,password).then(data=>{
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
                        <h2 className="font-lexend-700 text-xl text-primary p-4">Login</h2>
                    </div>
                    <div className="">
                        <form onSubmit={(e) =>handleSubmit(e)} className="flex flex-col">
                            <div className="flex flex-col m-4">
                                <label className="py-4" htmlFor="email">GMAIL / USERNAME: </label>
                                <input
                                    className="border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-sm w-full placeholder:text-xs"
                                    type="email" placeholder="Enter your GMAIL / USERNAME" name="email"
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <label className="py-4" htmlFor="password">PASSWORD: </label>
                                <input
                                    className="border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-sm w-full placeholder:text-xs"
                                    type="password" placeholder="Enter your password" name="password"
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <span className="py-4">Don't have an Account?</span>
                                <div className="flex flex-col m-4">
                                    <Link to="/signup" className="text-primary">Register Here</Link>
                                </div>
                                <button
                                    type="submit"
                                    className="my-4 border-2 border-gray-600 focus:ring-gray-700 focus:border-gray-700 block rounded-xl px-3 py-4 text-lg text-white bg-[#006F9E] w-full placeholder:text-xs"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
