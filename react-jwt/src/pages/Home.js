import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Welcome() {

    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const baseURL = "http://laravel-jwt.test/api/auth/";
    const token = localStorage.getItem('token');

    async function userInfo() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await axios.post(baseURL + "me")
        .then((response) => {
            setUser(response.data);
        })
    }

    async function logoutHandler() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await axios.post(baseURL + "logout")
        .then(() => {
            localStorage.removeItem('token');
            localStorage.setItem('isLogin', isLogin);
            navigate('/');
            window.location.reload(true);
        })
    }

    useEffect(() => {
        userInfo();
    }, []);

    return (
        <div className="app">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome back! <span className="text-primary">{user.nama}</span></h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button onClick={logoutHandler} className="btn btn-error">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;