import React, { useState } from 'react';

const MoneyInput = ({ onAmountChange }) => {
    const [inputValue, setInputValue] = useState('0,00');

    const handleInputChange = (e) => {
        const userInput = e.target.value.replace(/\D/g, ''); // Entfernt alle nicht-numerischen Zeichen
        const numericValue = parseFloat(userInput) / 100; // Konvertiert den Wert in eine Dezimalzahl
        const formattedAmount = numericValue.toLocaleString('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        setInputValue(formattedAmount);
        onAmountChange(formattedAmount); // Rufen Sie die übergebene Funktion mit dem aktualisierten Wert auf
    };

    return (
        <input
            className="py-2 text-black font-semibold text-4xl text-center"
            dir="rtl"
            autoComplete="off"
            type="tel"
            name="amount"
            value={inputValue}
            onChange={handleInputChange}
            required
        />
    );
};

export default MoneyInput;
