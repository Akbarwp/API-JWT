import { Link } from "react-router-dom";


function Welcome() {
    return (
        <div class="app">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="login" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;