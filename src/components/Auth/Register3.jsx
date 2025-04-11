import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useRegisterMutation } from "../../features/auth/authApi";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const Register3 = ({ setActiveTab }) => {
    const [name, setName] = useState(Cookies.get("name") || "")
    const [birthdate, setBirthdate] = useState(Cookies.get("birthdate") || "")
    const [street, setStreet] = useState(Cookies.get("street") || "")
    const [residence, setResidence] = useState(Cookies.get("residence") || "")
    const [zipCode, setZipCode] = useState(Cookies.get("zipCode") || "")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const regUser = useSelector(state => state.auth.regUser);
    const [register, { data: newUser }] = useRegisterMutation();

    useEffect(() => {
        if (newUser?._id) {
            toast.success("Neues Konto wurde erfolgreich erstellt.");
            setErrors({});
            navigate("/sign-in");
        }
    }, [navigate, newUser]);

    const submitHandlerFurther = async () => {
        const validationErrors = {};

        if (!name) {
            validationErrors.name = "Bitte vollständigen Namen eintragen"
        }

        if (!birthdate) {
            validationErrors.birthdate = "Bitte Geburtsdatum eintragen";
        } else if (new Date(birthdate) > new Date()) {
            validationErrors.birthdate = "Geburtsdatum kann nicht in der Zukunft liegen";
        }

        if (birthdate) {
            const today = new Date();
            const birthDate2 = new Date(birthdate);
            let age = today.getFullYear() - birthDate2.getFullYear();
            const monthDiff = today.getMonth() - birthDate2.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate2.getDate())) {
                age--;
            }

            if (age < 18) {
                validationErrors.birthdate = "Sie müssen mindestens 18 Jahre alt sein";
            }
        }


        if (!street) {
            validationErrors.street = "Bitte Straße und Hausnummer eintragen"
        }

        if (!residence) {
            validationErrors.residence = "Bitte Wohnort eintragen"
        }

        if (!zipCode) {
            validationErrors.zipCode = "Bitte Postleitzahl eintragen"
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors)?.length > 0) {
            return setErrors(validationErrors);
        }

        register({
            ...regUser,
            name,
            birthdate,
            street,
            residence,
            zipCode
        });
    }

    const submitHandlerBack = () => {
        setActiveTab((prev) => prev - 1);
    }

    return (
        <div className="flex flex-col gap-5 mt-10 w-full">

            <div>
                <input
                    required
                    value={name}
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Vollständigen Namen eingeben"
                    onChange={(e) => {
                        const newName = e.target.value;
                        setName(newName)
                        Cookies.set("name", newName, { expires: 1, path: "/" });
                    }} />
                {errors?.name && (
                    <p className="text-red-600">{errors?.name}</p>
                )}
            </div>

            <div>
                <input
                    required
                    value={birthdate}
                    type="date"
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Geburtsdatum eingeben"
                    onChange={(e) => {
                        const newBirthdate = e.target.value;
                        setBirthdate(newBirthdate)
                        Cookies.set("birthday", newBirthdate, { expires: 1, path: "/" });
                    }} />
                {errors?.birthdate && (
                    <p className="text-red-600">{errors?.birthdate}</p>
                )}
            </div>

            <div>
                <input
                    required
                    value={street}
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Straße und Hausnummer eingeben. Bsp. Musterstraße 2"
                    onChange={(e) => {
                        const newStreet = e.target.value;
                        setStreet(newStreet)
                        Cookies.set("street", newStreet, { expires: 1, path: "/" });
                    }} />
                {errors?.street && (
                    <p className="text-red-600">{errors?.street}</p>
                )}
            </div>

            <div>
                <input
                    required
                    value={residence}
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Wohnort eingeben"
                    onChange={(e) => {
                        const newResidence = e.target.value;
                        setResidence(newResidence)
                        Cookies.set("residence", newResidence, { expires: 1, path: "/" });
                    }} />
                {errors?.residence && (
                    <p className="text-red-600">{errors?.residence}</p>
                )}
            </div>

            <div>
                <input
                    required
                    value={zipCode}
                    className="bg-secondary placeholder:text-tertiary rounded-lg py-3.5 px-4 w-full"
                    placeholder="Postleitzahl eingeben"
                    onChange={(e) => {
                        const newZipCode = e.target.value;
                        setZipCode(newZipCode)
                        Cookies.set("zipCode", newZipCode, { expires: 1, path: "/" });
                    }} />
                {errors?.zipCode && (
                    <p className="text-red-600">{errors?.zipCode}</p>
                )}
            </div>


            <div className="flex space-x-2">
                <button
                    className="bg-white text-primary font-medium py-3.5 rounded-lg shadow-gray-300/40 shadow-xl w-1/3"
                    onClick={submitHandlerBack}>Zurück</button>

                <button
                    className="bg-primary text-white font-medium w-full py-3.5 rounded-lg shadow-xl shadow-primary/40 transition duration-300 ease-in-out hover:bg-primary/70"
                    onClick={submitHandlerFurther}>Registrierung abschließen</button>
            </div>
        </div>
    );
}
export default Register3;