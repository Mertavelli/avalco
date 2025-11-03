import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./components/PublicRoutes";
import PrivateRoute from "./components/PrivateRoutes";
import Startpage from "./pages/Startpage";
import SignUp from "./pages/Authentification/SignUp";
import SignIn from "./pages/Authentification/SignIn";
import Dashboard from "./pages/Dashboard";
import DashboardStatic from "./pages/DashboardStatic/DashboardStatic.jsx"
import Transfer from "./pages/Transfer/Transfer";
import Wallet from "./pages/Payment/Wallet";
import Activities from "./pages/Activities/Activities";
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";
import Navbar2 from "./components/Navbar2";
import FooterDashboard from "./components/Dashboard/FooterDashboard";
import PaymentGateway from "./pages/Payment/PaymentGateway";
import { useLocation } from "react-router-dom";
import Payout from "./pages/Payment/Payout";
import PayoutSuccess from "./pages/Payment/PayoutSuccess";
import Payin from "./pages/Payment/Payin";
import PaymentSummary from "./pages/Payment/PaymentSummary";
import ChangeName from "./pages/Settings/ChangeName";
import ChangeEmail from "./pages/Settings/ChangeEmail";
import ChangeTelephone from "./pages/Settings/ChangeTelephone";
import ChangeAdress from "./pages/Settings/ChangeAdress";
import TransferAmount from "./pages/Transfer/TransferAmount";
import TransferSummary from "./pages/Transfer/TransferSummary";
import TransferSuccess from "./pages/Transfer/TransferSuccess";
import PaymentMethod from "./pages/Transfer/PaymentMethod";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkMobileAndWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', checkMobileAndWidth);

    return () => {
      window.removeEventListener('resize', checkMobileAndWidth);
    };
  }, []);

  return (
    <div>
      {windowWidth >= 1024 ? (
        <Toaster position="top-right" reverseOrder={false} />
      ) : (<Toaster position="top-center" reverseOrder={false} />)}

      <Routes>
        <Route path="/" element={<PublicRoute><Startpage /></PublicRoute>} />
        <Route path="/sign-up" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/sign-in" element={<PublicRoute><SignIn /></PublicRoute>} />
        <Route
          path="/payment"
          element={
            <PublicRoute>
              <div className="h-screen">
                <PaymentGateway />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/payment/payout"
          element={
            <PublicRoute>
              <div className="h-screen">
                <Payout />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/payment/payout/success"
          element={
            <PublicRoute>
              <div className="h-screen">
                <PayoutSuccess />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/payment/payin"
          element={
            <PublicRoute>
              <div className="h-screen">
                <Payin />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/settings/change/name"
          element={
            <PublicRoute>
              <div className="h-screen">
                <ChangeName />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/settings/change/email"
          element={
            <PublicRoute>
              <div className="h-screen">
                <ChangeEmail />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/settings/change/telephone"
          element={
            <PublicRoute>
              <div className="h-screen">
                <ChangeTelephone />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/settings/change/adress"
          element={
            <PublicRoute>
              <div className="h-screen">
                <ChangeAdress />
              </div>
            </PublicRoute>}
        />

        <Route
          path="/transfer/payment-methods"
          element={
            <PublicRoute>
              <div className="h-screen">
                <PaymentMethod />
              </div>
            </PublicRoute>}
        />


      </Routes>

      {(windowWidth >= 1024) && (
        <div>
          <Routes>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <Dashboard />
                  </div>
                </PrivateRoute>}
            />

            <Route
              path="/dashboard-static"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <DashboardStatic />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/transfer"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <Transfer />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/wallet"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <Wallet />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/activities"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <Activities />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/help"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <Help />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/settings"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <Settings />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/activities/installment"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <PaymentSummary />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/transfer/amount"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <TransferAmount />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/transfer/amount/summary"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <TransferSummary setIsOpen={setIsOpen} />
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/transfer/amount/summary/success"
              element={
                <PublicRoute>
                  <div className="flex">
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    <TransferSuccess />
                  </div>
                </PublicRoute>}
            />


          </Routes>
        </div>

      )}

      {(windowWidth < 1024) && (
        <div>
          <Routes>

            <Route path="/dashboard" element={
              <PrivateRoute>
                <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                {!isOpen && <Dashboard />}
                {!isOpen && <FooterDashboard />}
              </PrivateRoute>
            } />

            <Route
              path="/transfer"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  {!isOpen && <Transfer />}
                </PublicRoute>} />

            <Route
              path="/wallet"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  {!isOpen && <Wallet />}
                </PublicRoute>} />

            <Route
              path="/activities"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  {!isOpen && <Activities />}
                </PublicRoute>} />

            <Route
              path="/help"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  {!isOpen && <Help />}
                </PublicRoute>} />

            <Route
              path="/settings"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  {!isOpen && <Settings />}
                </PublicRoute>} />

            <Route
              path="/activities/installment"
              element={
                <PublicRoute>
                  <div>
                    <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                    {!isOpen && <PaymentSummary />}
                  </div>
                </PublicRoute>}
            />

            <Route
              path="/transfer/amount"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  <TransferAmount />
                </PublicRoute>}
            />

            <Route
              path="/transfer/amount/summary"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  <TransferSummary />
                </PublicRoute>}
            />

            <Route
              path="/transfer/amount/summary/success"
              element={
                <PublicRoute>
                  <Navbar2 isOpen={isOpen} toggleNavbar={toggleNavbar} />
                  <TransferSuccess />
                </PublicRoute>}
            />

          </Routes>
        </div>
      )}

      {/*       {!(location.pathname.startsWith("/payment")) && !(location.pathname.startsWith("/settings/change")) && (
        <Footer />
      )} */}

    </div>
  );
}

export default App;
