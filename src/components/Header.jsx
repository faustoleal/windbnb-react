import windbnbLogo from "../assets/logo.svg";
import Navbar from "./Navbar";
import Title from "./Title";
import FormNav from "./FormNav";
import { useState, useEffect } from "react";

const initialLocation = [
  {
    city: "Helsinki, Finland",
    id: 1,
  },
  {
    city: "Turku, Finland",
    id: 2,
  },
  {
    city: "Vaasa, Finland",
    id: 3,
  },
  {
    city: "Oulu, Finland",
    id: 4,
  },
];

const initialForm = [
  {
    city: "",
    id: null,
  },
];

const Header = ({ data, search, setSearch, setDb, initialDb }) => {
  const [open, setOpen] = useState(false);
  const [location, setLocations] = useState(initialLocation);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (search) {
      setForm(search);
    } else {
      setForm(initialForm);
    }
  }, [search]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function filtrar() {
    console.log(form);
    if (form.id === 1) {
      setDb(initialDb.filter((el) => el.city === "Helsinki"));
      setOpen(false);
    }
    if (form.id === 2) {
      setDb(initialDb.filter((el) => el.city === "Turku"));
      setOpen(false);
    }
    if (form.id === 3) {
      setDb(initialDb.filter((el) => el.city === "Vaasa"));
      setOpen(false);
    }
    if (form.id === 4) {
      setDb(initialDb.filter((el) => el.city === "Oulu"));
      setOpen(false);
    }
  }

  return (
    <>
      <nav className="nav">
        <img className="logo-img" src={windbnbLogo} alt="logo" />
        <FormNav
          handleOpen={handleOpen}
          handleChange={handleChange}
          form={form}
        />
        <Navbar
          open={open}
          handleClose={handleClose}
          location={location}
          handleChange={handleChange}
          form={form}
          setSearch={setSearch}
          filtrar={filtrar}
        />
      </nav>
      <Title data={data} />
    </>
  );
};

export default Header;
