import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { useState } from "react";

function Navbar() {

    let [isLogin, setIsLogin] = useState(false);

    return (
        <div className="flex justify-evenly pt-4 w-full">

            <div className="">
                <img src={logo} alt="" className="h-8" />
            </div>

            <ui className="flex gap-4">
                <Link to='/dashboard'>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </ui>

            <div className="flex gap-4">
                {
                    isLogin ?
                        <div className="max-w-[500px] flex gap-3">
                            <button className="px-4 bg-richblack-800 rounded border border-richblack-5"
                                onClick={() => { setIsLogin(!isLogin) }}>Log in</button>

                            <button className="px-4 bg-richblack-800 rounded border border-richblack-5"
                                onClick={() => { setIsLogin(!isLogin) }}>Sign up</button>
                        </div>
                        :
                        <div className="max-w-[500px] flex gap-3"   >
                            <button className="px-4 bg-richblack-800 rounded border border-richblack-5"
                                onClick={() => { setIsLogin(!isLogin) }}>Log out</button>
                            <button className="px-4 bg-richblack-800 rounded border border-richblack-5"
                                onClick={() => { setIsLogin(!isLogin) }}>Dashboard</button>
                        </div>
                }

            </div>

        </div>
    );
}

export default Navbar;
