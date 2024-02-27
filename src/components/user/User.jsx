import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { setUserInfo } from "../../redux/features/userSlice";
import {
  getUserByUsername,
} from "../../utils/services";

const User = ({ user, modal, setModal }) => {
  const dispatch = useDispatch();
  console.log("loading => user", user);

  const handleOpenModal = async (user) => {
    const userInfo = await getUserByUsername(user.url);
    dispatch(setUserInfo(userInfo));
    setModal(!modal);
  };
  return (
    <div
      key={user.id}
      className="bg-light rounded"
      style={{ width: "23%", cursor: "pointer" }}
    >
      <div className="" onClick={() => handleOpenModal(user)}>
        <img
          src={user.avatar_url}
          alt={user.login}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="d-flex flex-column">
        <p
          onClick={() => handleOpenModal(user)}
          className="mt-2 text-center text-capitalize"
        >
          {user.login}
        </p>
        <Button onClick={() => (window.location.href = user.html_url)}>
          Visit Profile
        </Button>
      </div>
    </div>
  );
};

export default User;
