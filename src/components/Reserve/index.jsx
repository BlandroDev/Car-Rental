export const Reserve = () => {
  return (
    <div className="reserve">
      <main className="reserve__main">
        <h2 className="reserve__h2">Reservar un Coche</h2>
        <form className="reserve__form">
            <div className="reserve__selected1">
                <label className="reserve__label--selected1">Seleccionar modelo</label>
                <select className="reserve__select--selected1">
                    <option className="reserve__option">Audi A1S-Line</option>
                    <option className="reserve__option">Volkswagen</option>
                    <option className="reserve__option">Kia</option>
                    <option className="reserve__option">Toyota</option>
                    <option className="reserve__option">Jeep</option>
                    <option className="reserve__option">Mercedes</option>
                </select>
            </div>
        </form>
      </main>
    </div>
  );
};
