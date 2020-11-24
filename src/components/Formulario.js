import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="row">
        <div className="form group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen , ej. futbol o café"
          />
        </div>
        <div className="form group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Busca una imagen , ej. futbol o café"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
