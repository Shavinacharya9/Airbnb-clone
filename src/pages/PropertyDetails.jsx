import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === parseInt(id));

  if (!property) {
    return <h2 style={{ textAlign: "center" }}>Property not found</h2>;
  }

  return (
    <div className="details-container">
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <h3>₹{property.price} / night</h3>

      <div className="details-images">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt="Property view" />
        ))}
      </div>

      <p className="details-description">{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
