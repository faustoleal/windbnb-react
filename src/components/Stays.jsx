const Stays = ({ data }) => {
  return (
    <div className="stays">
      <img className="stay-image" src={data.photo} />
      <section className="stay-description">
        {data.superHost === true && <div className="host">SUPERHOST</div>}
        <div className="type-beds">
          <p className="type">{data.type}</p>
          {data.beds !== null && <p className="beds">{`.${data.beds}`}</p>}
        </div>
        <div className="rating-box">
          <span className="material-symbols-outlined star">star</span>
          <div className="rating">{data.rating}</div>
        </div>
      </section>
      <h4 className="stay-title">{data.title}</h4>
    </div>
  );
};

export default Stays;
