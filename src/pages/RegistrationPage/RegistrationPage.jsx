import React from "react";
import "./RegistrationPage.css";
import Stiper from "../../components/Stiper/Stiper";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
function RegistrationPage() {
  return (
    <div className="registration__page">
      {/* Stiper */}
      <Stiper type="first" />
      {/* form */}
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
