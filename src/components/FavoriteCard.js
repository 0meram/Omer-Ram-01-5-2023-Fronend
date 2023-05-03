import React from 'react';
import "../App.css";

function FavoriteCard({ cityKey, cityName, onDelete, temperature }) {
    const handleDeleteClick = () => {
        onDelete(cityKey);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{cityName}</h5>
                <h5 className="card-title">{temperature}</h5>
                <button className="btn btn-danger" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default FavoriteCard;
