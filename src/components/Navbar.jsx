function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      <div className="logo">Airbnb</div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search destinations"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <span>Wishlist</span>
        <span>Profile</span>
      </div>
    </nav>
  );
}

export default Navbar;
