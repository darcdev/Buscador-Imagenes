import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";
import Paginador from "./components/Paginador";

const App = () => {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(5);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;
      const imagenesPorPagina = 30;
      const key = "19246754-3eedfd81697bed67aacfa0efd";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };

    consultarApi();
  }, [busqueda, paginaActual]);

  // definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;

    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  };

  // definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if (nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
        {console.log(imagenes)}
        {busqueda !== "" && imagenes.length !== 0 ? (
          <Paginador
            paginaActual={paginaActual}
            paginaAnterior={paginaAnterior}
            paginaSiguiente={paginaSiguiente}
            totalPaginas={totalPaginas}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
