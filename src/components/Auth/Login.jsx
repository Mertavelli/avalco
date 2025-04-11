import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../features/auth/authApi";

const Login = () => {
    const [email, setEmail] = useState(Cookies.get("email") || "")
    const [password, setPassword] = useState(Cookies.get("password") || "")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [login, { data, isError, error }] = useLoginMutation();


    const submitHandler = () => {
        setErrors({});
        const validationErrors = {};

        if (!email) {
            validationErrors.email = "Bitte Email eintragen.";
        }

        if (!password) {
            validationErrors.password = "Bitte Passwort eintragen.";
        }

        if (Object.keys(validationErrors)?.length > 0) {
            return setErrors(validationErrors);
        }

        const emailLow = email.toLowerCase();
        login({ email: emailLow, password });
    };

    useEffect(() => {
        if (isError) {
            setErrors(error?.data?.error);
        }

        if (data?.user?._id) {
            toast.success("Erfolgreich angemeldet.");
            setErrors({});

            navigate("/dashboard");
        }
    }, [data, isError, error, navigate]);

    return (
        <div className="flex flex-col gap-5 mt-10 w-full">
            <input
                required
                type="email"
                value={email}
                className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                placeholder="Email eingeben"
                onChange={(e) => setEmail(e.target.value)} />

            <input
                required
                type="password"
                value={password}
                className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                placeholder="Passwort eingeben"
                onChange={(e) => setPassword(e.target.value)} />

            <a href="" className="text-sm text-right">Passwort vergessen?</a>


            <button
                className="bg-primary text-white font-medium w-full py-3.5 rounded-lg shadow-xl shadow-primary/40 transition duration-300 ease-in-out hover:bg-primary/70"
                onClick={submitHandler}>Weiter</button>
        </div>
    );
}
export default Login;