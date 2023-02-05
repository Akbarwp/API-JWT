import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Protected from './components/Protected';

function App() {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('isLogin') === "true") {
            setIsLogin(true);

        } else if (localStorage.getItem('isLogin') === "false") {
            setIsLogin(false);
        }
    }, [isLogin]);

    return (
        <div className="App">
            <BrowserRouter>
                {isLogin ? (
                    <Routes>
                        <Route path="/home" element={<Protected Cmp={Home} />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
