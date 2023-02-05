import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Validasi
    const [validasi, setValidasi] = useState([]);
    const [isLogin, setIsLogin] = useState(true);

    const navigate = useNavigate();
    const baseURL = "http://laravel-jwt.test/api/auth/";

    async function loginHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        await axios.post(baseURL + "login", formData)
            .then((response) => {

                localStorage.setItem('token', response.data.access_token);
                // console.log(localStorage.getItem('token'));
                
                localStorage.setItem('isLogin', isLogin);
                // console.log(localStorage.getItem('isLogin'));
                navigate('/home');
                window.location.reload(true);
            })
            .catch((error) => {
                setValidasi(error.response.data);
                // console.log(error.response.data);
            });
    }

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         navigate('/home');
    //     }
    // }, []);

    return (
        <div className="app">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loginHandler}>
                            <div className="card-body">
                                {
                                    validasi.error && (
                                        <div className="alert alert-error shadow-lg">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>{validasi.error}</span>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <div className="indicator">
                                        <input type="email" id="email" placeholder="email" className="w-80 input input-primary input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        {
                                            validasi.email && (
                                                <span className="indicator-item indicator-bottom indicator-center badge badge-error text-white">{validasi.email[0]}</span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="password">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="indicator">
                                        <input type="password" id="password" placeholder="password" className="w-80 input input-primary input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {
                                            validasi.password && (
                                                <span className="indicator-item indicator-bottom indicator-center badge badge-error text-white">{validasi.password[0]}</span>
                                            )
                                        }
                                    </div>

                                    <label className="label justify-start">
                                        Don't have an account?
                                        <Link to="/register" className="link link-primary ml-1 font-semibold">Register now!</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;