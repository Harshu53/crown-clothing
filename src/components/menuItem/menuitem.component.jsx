import React from "react";
import "./menuitem.styles.scss";

const menuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className="background-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default menuItem;