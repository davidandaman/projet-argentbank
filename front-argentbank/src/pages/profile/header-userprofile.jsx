// HeaderUserProfile.js
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../components/login-elements/submitbutton";
import EditUserProfile from "./edit-form-userprofile";
import { useDispatch, useSelector } from "react-redux";
import { getUserDatas } from "../../redux/userslice";

export default function HeaderUserProfile() {
  const userDatas = useSelector((state) => state.auth.userDatas);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDatas());
  }, [dispatch]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="user-profile">
      <h1>Welcome back</h1>
      {isEditing ? (
        <EditUserProfile setIsEditing={setIsEditing} />
      ) : (
        <div className="user-initial-container">
          {userDatas && (
            <h1 className="first-last-name">
              {userDatas.userName} {/* Afficher le nom d'utilisateur */}
            </h1>
          )}
          <PrimaryButton
            className="edit-button"
            value="Edit Name"
            handleClick={handleEdit}
          />
        </div>
      )}
    </div>
  );
}
