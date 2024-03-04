import React from "react";
import PrimaryButton from "../../components/login-elements/submitbutton";
import { useState, useEffect } from "react";
import EditUserProfile from "./edit-form-userprofile";
import { useDispatch, useSelector } from "react-redux";
import { getUserDatas } from "../../redux/userslice";

import BankAccount from "../../components/bankaccount";

export default function HeaderUserProfile() {
  const userDatas = useSelector((state) => state.auth.userDatas);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDatas());
  }, []);

  return (
    <div className="header">
      <h1>Welcome back</h1>
      {isEditing ? (
        <EditUserProfile setIsEditing={setIsEditing} />
      ) : (
        <div className="user-initial-container">
          {userDatas && (
            <h1 className="first-last-name">
              {userDatas.firstName} {userDatas.lastName}!
            </h1>
          )}
          <PrimaryButton
            className="edit-button"
            value="Edit Name"
            handleClick={() => setIsEditing(true)}
          />
        </div>
      )}
    </div>
  );
}
