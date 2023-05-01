import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteCard from './FavoriteCard';
import "../App.css";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios
            .get("/favorites")
            .then((response) => {
                setFavorites(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteFavorite = (cityKey) => {
        axios
            .delete(`/favorites/${cityKey}`)
            .then(() => {
                setFavorites(favorites.filter((favorite) => favorite.cityKey !== cityKey));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map((favorite) => (
                <FavoriteCard
                    key={favorite.cityKey}
                    cityKey={favorite.cityKey}
                    cityName={favorite.cityName}
                    onDelete={handleDeleteFavorite}
                />
            ))}
        </div>
    );
}

export default Favorites;
