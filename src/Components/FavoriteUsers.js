import React, { useState, useEffect } from 'react';
import '../App.css';

function FavoriteUsers() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (userId) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== userId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card">
       <div className="card-header">FAVORITE USERS</div>
       <div className="card-body">
      {favorites.length === 0 ? (
        <p>No favorite users yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              <h6 className="card-title">Name: {favorite.name}</h6>
              <p className="card-title">Username: {favorite.username}</p>
              <p className="card-title">Email: {favorite.email}</p>
              <p className="card-title">Phone: {favorite.phone}</p>
              <button type="button" class="btn btn-danger" onClick={() => removeFavorite(favorite.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}





export default FavoriteUsers;
