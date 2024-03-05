import React from "react";
import HeaderUserProfile from "./header-userprofile";
import Account from "../../components/bankaccount";

export default function UserProfile() {
  return (
    <main className="main bg-dark profile-page ">
      <h2 className="sr-only">Accounts</h2>
      <HeaderUserProfile />
      <Account
        title={"Argent Bank Checking (x8349)"}
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
      <Account
        title={"Argent Bank Savings (x6712)"}
        amount={"$10,928.42"}
        description={"Available Balance"}
      />
      <Account
        title={"Argent Bank Credit Card (x8349)"}
        amount={"$184.30"}
        description={"Current Balance"}
      />
    </main>
  );
}
