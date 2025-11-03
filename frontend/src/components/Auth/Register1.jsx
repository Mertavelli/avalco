import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../features/auth/authSlice";
import { useSendCodeMutation } from "../../features/auth/authApi";
import Cookies from "js-cookie";
import { useCheckEmailMutation } from "../../features/auth/authApi";

const Register1 = ({ setActiveTab }) => {
    const [email, setEmail] = useState(Cookies.get("email") || "")
    const [phone, setPhone] = useState(Cookies.get("phone") || "")
    const [password, setPassword] = useState(Cookies.get("password") || "")
    const [confirmPassword, setConfirmPassword] = useState(Cookies.get("confirmPassword") || "")
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const [sendCode, { data, isLoading, isError }] = useSendCodeMutation();
    const [checkEmail] = useCheckEmailMutation();
    const [msg, setMsg] = useState("")

    const submitHandler = async () => {
        const validationErrors = {};

        if (!email) {
            validationErrors.email = "Bitte Email eintragen.";
        }

        const existingEmailUser = await checkEmail({ email });
        if (email && existingEmailUser?.data !== null) {
            validationErrors.email = "Diese Email ist schon mit einem anderen Account verbunden.";
        }

        if (!phone) {
            validationErrors.phone = "Bitte Telefonnummer eintragen.";
        }

        if (phone && !/^\+?\d{1,14}$/.test(phone)) {
            validationErrors.phone = "Telefonnummer muss gültig sein.";
        }

        if (phone && (!/^\+?\d{10,14}$/.test(phone) || phone.length < 10)) {
            validationErrors.phone = "Telefonnummer muss mindestens 10 Ziffern haben und gültig sein.";
        }

        if (!password) {
            validationErrors.password = "Bitte Passwort eintragen.";
        } else if (password.length <= 7) {
            validationErrors.password = "Passwort muss mindestens 8 Zeichen haben.";
        }

        if (!confirmPassword) {
            validationErrors.confirmPassword = "Bitte Passwort bestätigen.";
        } else if (confirmPassword !== password) {
            validationErrors.confirmPassword = "Diese Passwörter stimmen nicht überein. Versuchen Sie es noch einmal.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const emailLow = email.toLowerCase();
            const response = await sendCode({ email: emailLow });

            if (response?.error) {
                setMsg("Email muss gültig sein.");
                return;
            }

            const verificationCode = response?.data?.data;

            dispatch(
                userRegister({
                    email: emailLow,
                    phone,
                    password,
                    verificationCode
                })
            );
            setActiveTab((prev) => prev + 1);
        }
    }

    return (
        <div className="flex flex-col gap-5 mt-10 w-full">

            <div>
                <input
                    required
                    value={email}
                    type="email"
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Email eingeben"
                    onChange={(e) => {
                        const newEmail = e.target.value;
                        setEmail(newEmail);
                        Cookies.set("email", newEmail, { expires: 1, path: "/" });
                    }} />
                {errors?.email && (
                    <p className="text-red-600">{errors?.email}</p>
                )}

                {msg && (
                    <p className="text-red-600">{msg}</p>
                )}
            </div>

            <div>
                <input
                    value={phone}
                    required
                    type="tel"
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Mobilnummer eingeben mit +49 am Anfang."
                    onChange={(e) => {
                        const newPhone = e.target.value;
                        setPhone(newPhone);
                        Cookies.set("phone", newPhone);
                    }} />
                {errors?.phone && (
                    <p className="text-red-600">{errors?.phone}</p>
                )}
            </div>

            <div>
                <input
                    value={password}
                    required
                    type="password"
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Passwort eingeben"
                    onChange={(e) => {
                        const newPassword = e.target.value;
                        setPassword(newPassword);
                        Cookies.set("password", newPassword);
                    }} />
                {errors?.password && (
                    <p className="text-red-600">{errors?.password}</p>
                )}
            </div>

            <div>
                <input
                    value={confirmPassword}
                    required
                    type="password"
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Passwort bestätigen"
                    onChange={(e) => {
                        const newConfirmPassword = e.target.value;
                        setConfirmPassword(newConfirmPassword);
                        Cookies.set("confirmPassword", newConfirmPassword);
                    }} />
                {errors?.confirmPassword && (
                    <p className="text-red-600">{errors?.confirmPassword}</p>
                )}
            </div>



            <button
                className="bg-primary text-white font-medium w-full py-3.5 rounded-lg shadow-xl shadow-primary/40 transition duration-300 ease-in-out hover:bg-primary/70"
                onClick={submitHandler}>Weiter</button>
        </div>
    );
}
export default Register1;