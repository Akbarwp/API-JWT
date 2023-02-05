import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {

    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // Validasi
    const [validasi, setValidasi] = useState([]);

    const navigate = useNavigate();
    const baseURL = "http://laravel-jwt.test/api/auth/";

    async function registerHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirm);

        await axios.post(baseURL + "register", formData)
            .then(() => {
                navigate('/login');
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
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={registerHandler}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label" htmlFor="nama">
                                        <span className="label-text">Nama</span>
                                    </label>
                                    <div className="indicator">
                                        <input type="text" id="nama" placeholder="nama" className="w-80 input input-secondary input-bordered" value={nama} onChange={(e) => setNama(e.target.value)} />
                                        {
                                            validasi.nama && (
                                                <span className="indicator-item indicator-bottom indicator-center badge badge-error text-white">{validasi.nama[0]}</span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <div className="indicator">
                                        <input type="email" id="email" placeholder="email" className="w-80 input input-secondary input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                        <input type="password" id="password" placeholder="password" className="w-80 input input-secondary input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {
                                            validasi.password && (
                                                <span className="indicator-item indicator-bottom indicator-center badge badge-error text-white">{validasi.password[0]}</span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label" htmlFor="password_confirmation">
                                        <span className="label-text">Password Confirmation</span>
                                    </label>
                                    <input type="password" id="password_confirmation" placeholder="confirmation password" className="input input-secondary input-bordered" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />

                                    <label className="label justify-start">
                                        Already have an account?
                                        <Link to="/login" className="link link-secondary ml-1 font-semibold">Login now!</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-secondary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;