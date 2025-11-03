import React from "react";
import { useNavigate } from "react-router-dom";

const FooterDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white py-8 rounded-t-xl sticky bottom-0">
            <div className="flex items-center justify-around px-4">
                <button onClick={() => navigate("/transfer")} className="bg-gradient-to-r from-primary to-[#6D3AFF] px-12 py-3 font-semibold text-white rounded-lg">Senden</button>
                <button onClick={() => navigate("/wallet")} className="bg-gradient-to-r from-[#6D3AFF]  to-pink px-12 py-3 font-semibold text-white rounded-lg">Einzahlen</button>
            </div>
        </div>
    );
}
export default FooterDashboard;