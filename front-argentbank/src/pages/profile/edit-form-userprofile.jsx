import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDatas } from "../../redux/userslice";
import PrimaryButton from "../../components/login-elements/submitbutton";

export default function EditUserProfile({ setIsEditing }) {
  const dispatch = useDispatch();
  const userDatas = useSelector((state) => state.auth.userDatas);
  const [userName, setUserName] = useState(userDatas.userName || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const updatedData = {
      firstName: userDatas.firstName,
      lastName: userDatas.lastName,
      email: userDatas.email,
      userName: userName,
    };
    dispatch(updateUserDatas(updatedData));
    console.log(
      "Anciennes données :",
      userDatas.userName !== undefined ? userDatas.userName : "Non défini"
    );
    console.log("Nouvelles données :", updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-edit-container">
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input-edit"
        />
      </div>
      <div className="edit-button-container">
        <PrimaryButton type="submit" className="button-save" value="Save" />
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
