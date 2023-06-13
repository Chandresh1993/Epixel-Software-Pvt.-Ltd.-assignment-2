import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList'
import UserDetails from './Components/UserDetails'
import FavoriteUsers from './Components/FavoriteUsers'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/users/:userId" element={<UserDetails/>} />
        <Route path="/favorites" element={<FavoriteUsers/>} />
      </Routes>
    </Router>
  );
}





export default App;
