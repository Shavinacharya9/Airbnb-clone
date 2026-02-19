import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";

function Home({ searchTerm }) {

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default Home;
