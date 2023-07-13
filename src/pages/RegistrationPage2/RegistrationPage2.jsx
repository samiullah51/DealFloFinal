import React from "react";
import "./RegistrationPage.css";
import Stiper from "../../components/Stiper/Stiper";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import RegistrationForm2 from "../../components/RegistrationForm2/RegistrationForm2";
function RegistrationPage2() {
  return (
    <div className="registration__page">
      {/* Stiper */}
      <Stiper type="second" />
      {/* form */}
      <RegistrationForm2 />
    </div>
  );
}

export default RegistrationPage2;
