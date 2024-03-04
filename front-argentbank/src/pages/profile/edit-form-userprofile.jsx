import React from "react";
import { useRef } from "react";
import Input from "../../components/login-elements/inputform";
import PrimaryButton from "../../components/login-elements/submitbutton";
import { useDispatch } from "react-redux";
import { updateUserDatas } from "../../redux/userslice";

import BankAccount from "../../components/bankaccount";

export default function EditUserProfile({ setIsEditing }) {
  const dispatch = useDispatch();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    dispatch(
      updateUserDatas({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-edit-container">
        <Input
          type="text"
          className="input-wrapper input-edit"
          label=""
          htmlFor="firstName"
          id="firstName"
          reference={firstNameRef}
          placeholder="Prénom"
        />
        <Input
          type="text"
          className="input-wrapper input-edit"
          label=""
          htmlFor="lastName"
          id="lastName"
          reference={lastNameRef}
          placeholder="Nom"
        />
      </div>
      <div className="edit-button-container">
        <PrimaryButton type="submit" className="save-button" value="Save" />
        <PrimaryButton
          type="button"
          className="cancel-button"
          value="Cancel"
          handleClick={() => setIsEditing(false)}
        />
      </div>
    </form>
  );
}
