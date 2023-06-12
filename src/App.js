import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./index.css";
import axios from "axios";
import UserList from "./components/Page1";
import UserDetails from "./components/Page2";

const App = () => {
  const Param = useParams();
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const sortedUsers = response.data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setUsers(sortedUsers);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleUserClick = (userId) => {
    Param.push(`/users/${userId}`);
  };

  const handleFavoriteToggle = (userId) => {
    const isFavorite = favorites.includes(userId);

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== userId);
      setFavorites(updatedFavorites);
      saveFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, userId];
      setFavorites(updatedFavorites);
      saveFavorites(updatedFavorites);
    }
  };

  const saveFavorites = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              users={users}
              favorites={favorites}
              onUserClick={handleUserClick}
              onFavoriteToggle={handleFavoriteToggle}
            />
          }
        />

        <Route
          path="/users/:userId"
          element={
            <UserDetails
              users={users}
              favorites={favorites}
              onFavoriteToggle={handleFavoriteToggle}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
