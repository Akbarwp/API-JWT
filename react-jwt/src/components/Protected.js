import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected(props) {

    const navigate = useNavigate();
    let Cmp = props.Cmp;

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login");
        }
    });

    return (
        <div className="app">
            <Cmp />
        </div>
    );
}

export default Protected;