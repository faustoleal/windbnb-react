import Stays from "./Stays";

const Main = ({ data }) => {
  return (
    <main className="main" id="main">
      {data.map((el) => (
        <Stays data={el} key={el.id} />
      ))}
    </main>
  );
};

export default Main;
