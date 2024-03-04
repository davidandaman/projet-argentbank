import React from "react";
import PrimaryButton from "../login-elements/submitbutton";

export default function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <PrimaryButton className="transaction-button" value="View transactions" />
    </section>
  );
}
