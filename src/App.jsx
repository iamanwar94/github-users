import PhoneInput from "react-phone-input-2";
import GithubUsers from "./components/header/Header";
import Searchbar from "./components/search/Searchbar";
import UsersList from "./components/users/UsersList";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");
  return (
    <div className="h-100 w-100">
      <GithubUsers />
      <Searchbar />

      <UsersList />
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
}

export default App;
