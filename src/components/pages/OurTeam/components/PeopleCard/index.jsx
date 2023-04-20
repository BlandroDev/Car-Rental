export const PeopleCard = ({ src, name, job }) => {
  return (
    <div className="team__peopleCard--content">
      <div className="team__imgSection--peopleCard">
        <img
          className="team__img--peopleCard"
          src={src}
          alt="Imagen de Persona"
        ></img>
      </div>
      <footer className="team__footer--peopleCard">
        <h5 className="team__h5--peopleCard">{`${name}`}</h5>
        <p className="team__p--peopleCard">{`${job}`}</p>
      </footer>
    </div>
  );
};
