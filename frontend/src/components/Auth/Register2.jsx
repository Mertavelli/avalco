import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useSendCodeMutation } from "../../features/auth/authApi";
import { useDispatch } from "react-redux";
import { userRegister } from "../../features/auth/authSlice";

const Register2 = ({ setActiveTab }) => {
    const [errors, setErrors] = useState({});
    const [code, setCode] = useState("")
    const regUser = useSelector(state => state.auth.regUser);
    const [sendCode, { data, isLoading, isError }] = useSendCodeMutation();
    const dispatch = useDispatch();

    const submitHandlerFurther = async () => {
        const serverCode = regUser?.verificationCode.toString();
        const validationErrors = {};

        if (!code) {
            validationErrors.code = "Bitte Code eintragen.";
        }

        if (code && (code !== serverCode)) {
            validationErrors.code = "Falscher Code";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setActiveTab((prev) => prev + 1);
        }

    }

    const submitHandlerBack = () => {
        setActiveTab((prev) => prev - 1);
    }

    return (
        <div className="flex flex-col gap-5 mt-10 w-full">

            <div>
                <input
                    required
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Verifizierungscode eingeben"
                    onChange={(e) => setCode(e.target.value)} />
                {errors?.code && (
                    <p className="text-red-600">{errors?.code}</p>
                )}
            </div>


            <div className="flex space-x-2">
                <button
                    className="bg-white text-primary font-medium py-3.5 rounded-lg shadow-gray-300/40 shadow-xl w-1/3"
                    onClick={submitHandlerBack}>Zurück</button>

                <button
                    className="bg-primary text-white font-medium w-full py-3.5 rounded-lg shadow-xl shadow-primary/40 transition duration-300 ease-in-out hover:bg-primary/70"
                    onClick={submitHandlerFurther}>Code bestätigen</button>
            </div>
            <button
                className="text-sm mt-5 text-left"
                onClick={async () => {
                    try {
                        const response = await sendCode({ email: regUser?.email })
                        const verificationCode = response?.data?.data;
                        dispatch(
                            userRegister({
                                ...regUser,
                                verificationCode
                            })
                        );
                    } catch (error) {
                        console.log("Fehler beim senden des Codes " + error)
                    }


                }}>Verifizierungscode erneut senden</button>

        </div>
    );
}
export default Register2;