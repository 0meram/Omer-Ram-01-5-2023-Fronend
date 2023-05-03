import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard';
import "../App.css";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/favorites")
            .then((response) => {
                setFavorites(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteFavorite = (cityKey) => {
        axios
            .delete(`http://localhost:5000/api/favorites/${cityKey}`)
            .then(() => {
                setFavorites(favorites.filter((favorite) => favorite.cityKey !== cityKey));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='favorites-wrapper'>
            <h1>Favorites</h1>
            {favorites.map((favorite) => (
                <FavoriteCard
                    key={favorite.city_key}
                    cityKey={favorite.city_key}
                    cityName={favorite.city_name}
                    temperature={favorite.temperature}
                    onDelete={handleDeleteFavorite}
                />
            ))}
        </div>
    );
}

export default Favorites;
