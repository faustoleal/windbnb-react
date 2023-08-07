const Title = ({ data }) => {
  return (
    <section className="header">
      <h2 className="stay-place">
        <b>Stays in Finland</b>
      </h2>
      <div className="total-stays">{`${data.length}+ stays`}</div>
    </section>
  );
};

export default Title;
