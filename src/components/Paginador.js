import React from "react";

const Paginador = ({
  paginaActual,
  paginaAnterior,
  paginaSiguiente,
  totalPaginas,
}) => {
  return (
    <>
      {paginaActual === 1 ? null : (
        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaAnterior}
        >
          &laquo; Anterior{" "}
        </button>
      )}

      {paginaActual === totalPaginas ? null : (
        <button
          type="button"
          className="bbtn btn-info"
          onClick={paginaSiguiente}
        >
          Siguiente &raquo;
        </button>
      )}
    </>
  );
};

export default Paginador;
