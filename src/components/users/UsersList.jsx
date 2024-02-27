import React, { useEffect, useState } from "react";
import User from "../user/User";
import { getUsers } from "../../utils/services";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/features/userSlice";
import { Spinner } from "reactstrap";
import UserInfoModal from "../user-info-modal/UserInfoModal";

const UsersList = () => {
  const users = useSelector((state) => state.user.users);
  const searchedUsers = useSelector((state) => state.user.searchedUsers);
  const [loading, setLoading] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let timeOut = setTimeout(() => {
      handleFetchUsers();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  const handleFetchUsers = async () => {
    if (!users.length) {
      setLoading(true);
      const usersResp = await getUsers();
      console.log("usersResp", usersResp);
      setLoading(false);
      if (usersResp && usersResp.length) {
        dispatch(setUsers(usersResp));
      }
    }
  };

  return (
    <>
      <UserInfoModal modal={openUserModal} setModal={setOpenUserModal} />
      <div className="container d-flex justify-content-center align-items-center gap-4 mt-4 flex-wrap w-100">
        {(searchedUsers.length ? searchedUsers : users)?.map((user) => (
          <User user={user} modal={openUserModal} setModal={setOpenUserModal} />
        ))}
        {loading ? <Spinner className="mt-4" /> : null}
      </div>
    </>
  );
};

export default UsersList;
