const FormNav = ({ handleOpen, form }) => {
  return (
    <form className="search">
      <div className="location">
        <input
          type="text"
          name="location"
          placeholder="Add location"
          defaultValue={form.city}
          onClick={handleOpen}
        />
      </div>
      <div className="guests">
        <input type="text" placeholder="Add guests" onClick={handleOpen} />
      </div>
      <div className="search-icon">
        <span className="material-symbols-outlined icon">search</span>
      </div>
    </form>
  );
};

export default FormNav;
