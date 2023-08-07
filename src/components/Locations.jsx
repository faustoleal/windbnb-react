const Location = ({ el, setSearch }) => {
  return (
    <button
      type="button"
      name="location"
      className="btn-location"
      onClick={() => setSearch(el)}
    >
      <span className="material-symbols-outlined">location_on</span>
      <p>{el.city}</p>
    </button>
  );
};

export default Location;
