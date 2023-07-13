import React from "react";

function InvestedBox({ title, amount }) {
  return (
    <div>
      <p className="amount__invested">{title}</p>
      <p className="amount__price">{amount}</p>
    </div>
  );
}

export default InvestedBox;
