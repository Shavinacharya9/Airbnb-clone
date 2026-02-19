import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  // Check if property is already in wishlist
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = saved.find((item) => item.id === property.id);
    if (exists) setLiked(true);
  }, [property.id]);

  const toggleWishlist = (e) => {
    e.stopPropagation(); // prevent navigation when clicking heart

    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (liked) {
      const updated = saved.filter((item) => item.id !== property.id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setLiked(false);
    } else {
      saved.push(property);
      localStorage.setItem("wishlist", JSON.stringify(saved));
      setLiked(true);
    }
  };

  return (
    <div
      className="card"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="image-wrapper">
        <img src={property.image} alt={property.title} />
        <button
          className={`wishlist-btn ${liked ? "active" : ""}`}
          onClick={toggleWishlist}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="card-content">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p className="price">₹{property.price} / night</p>
      </div>
    </div>
  );
}

export default PropertyCard;
