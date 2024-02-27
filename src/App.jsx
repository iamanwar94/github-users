import GithubUsers from "./components/header/Header";
import Searchbar from "./components/search/Searchbar";
import UsersList from "./components/users/UsersList";

function App() {
  return (
    <div className="h-100 w-100">
      <GithubUsers />
      <Searchbar />
      <UsersList />
    </div>
  );
}

export default App;
