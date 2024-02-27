import { useEffect, useState } from "react";
import "./Searchbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedUsers } from "../../redux/features/userSlice";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  console.log("usersss", users);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [searchTerm]);

  const handleSearch = () => {
    const filteredUsers = users.filter((user) =>
      user.login.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered users:", filteredUsers);
    dispatch(setSearchedUsers(filteredUsers));
  };

  return (
    <div className="search_wrapper d-flex justify-content-center align-items-center mt-4">
      <input
        placeholder="Search Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search_input p-3 px-4 rounded border-0 bg-light w-25"
      />
    </div>
  );
};

export default Searchbar;
