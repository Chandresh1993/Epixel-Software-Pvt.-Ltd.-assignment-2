import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function UserDetails() {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const { userId } = useParams();
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error(error));
    }, [userId]);
  
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(storedFavorites);
    }, []);
  
    const toggleFavorite = () => {
      const isFavorite = favorites.some((favorite) => favorite.id === user.id);
  
      if (isFavorite) {
        const updatedFavorites = favorites.filter((favorite) => favorite.id !== user.id);
        setFavorites(updatedFavorites);
      } else {
        const updatedFavorites = [...favorites, user];
        setFavorites(updatedFavorites);
      }
    };
  
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="card" style={{ width: "18rem" }}>
         <div className="card-body card">
        <h1 className="card-title">USER DETAILS</h1>
        <h6 className="card-subtitle ">Name: {user.name}</h6>
        <p >Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address:</p>
        <p>Street: {user.address.street}</p>
        <p>Suite: {user.address.suite}</p>
        <p>City: {user.address.city}</p>
        <p>Zip Code: {user.address.zipcode}</p>
        <button  type="button" className="btn btn-success" onClick={toggleFavorite}>
          {favorites.some((favorite) => favorite.id === user.id)
            ? 'Remove from Favorites'
            : 'Add to Favorites'}
        </button>
        </div>
      </div>
    );
  }



  
  export default UserDetails;
  