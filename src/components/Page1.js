import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users, favorites, onFavoriteToggle }) => {
  return (
    <div
      style={{
        backgroundColor: "salmon",
        color: "white",
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h1
        style={{
          color: "black",
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          border: "2px solid black",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        USER LIST
      </h1>

      <ul style={{ backgroundColor: "coral" }}>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} ({user.username})
            </Link>
            {favorites.includes(user.id) ? (
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "2px 2px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={() => onFavoriteToggle(user.id)}
              >
                Remove Favorite
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "2px 2px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={() => onFavoriteToggle(user.id)}
              >
                Add Favorite
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
