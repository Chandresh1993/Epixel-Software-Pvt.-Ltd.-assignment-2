import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = ({ favorites, onFavoriteToggle }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetchUserDetails(userId);
  }, [userId]);

  const fetchUserDetails = (userId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        const user = response.data;
        setUser(user);
        fetchAddress(user.id);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  };

  const fetchAddress = (userId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}/address`)
      .then((response) => {
        const address = response.data;
        setAddress(address);
      })
      .catch((error) => {
        console.error("Error fetching user address:", error);
      });
  };

  const handleFavoriteToggle = (userId) => {
    onFavoriteToggle(userId);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const isFavorite = favorites.includes(user.id);

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
        USER DETAILS
      </h1>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Username:</b> {user.username}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      {address && (
        <div>
          <h2>Address</h2>
          <p>
            <b>Street:</b> {address.street}
          </p>
          <p>
            <b>Suite:</b> {address.suite}
          </p>
          <p>
            <b>City:</b> {address.city}
          </p>
          <p>
            <b>Zip Code:</b> {address.zipcode}
          </p>
        </div>
      )}
      {isFavorite ? (
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => handleFavoriteToggle(user.id)}
        >
          Remove Favorite
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => handleFavoriteToggle(user.id)}
        >
          Add Favorite
        </button>
      )}
    </div>
  );
};

const UserDetailsWrapper = (props) => {
  return <UserDetails {...props} />;
};

export default UserDetailsWrapper;
