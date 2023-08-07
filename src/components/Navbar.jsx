import Location from "./Locations";

const Navbar = ({
  open,
  handleClose,
  location,
  form,
  handleChange,
  setSearch,
  filtrar,
}) => {
  return (
    <section className={`navbar ${open ? "flex" : "none"}`}>
      <div className="box">
        <form className="formulario">
          <span
            className="material-symbols-outlined close"
            id="close"
            onClick={handleClose}
          >
            close
          </span>
          <div className="form-group">
            <div className="lugar">
              <label htmlFor="location">
                <b>LOCATION</b>
              </label>
              <input
                type="text"
                name="lugar"
                id="location"
                placeholder="Add location"
                onChange={handleChange}
                defaultValue={form.city}
              />
            </div>
            <div className="invitados">
              <label htmlFor="guests">
                <b>GUESTS</b>
              </label>
              <input type="text" id="guests" placeholder="Add guests" />
            </div>
            <button type="button" className="buscar-icon" onClick={filtrar}>
              <span className="material-symbols-outlined icono">search</span>
              <p>Search</p>
            </button>
          </div>
          <div className="locations">
            {location.map((el) => (
              <Location el={el} key={el.id} setSearch={setSearch} />
            ))}
          </div>
          <button type="button" className="btn-responsive">
            <span className="material-symbols-outlined icono">search</span>
            <p>Search</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Navbar;
