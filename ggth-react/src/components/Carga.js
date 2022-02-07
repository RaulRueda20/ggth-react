import { useState } from "react";
import { Button, Typography, LinearProgress } from "@mui/material";
import axios from "axios";

import Aviso from "../components/Aviso.js";
import { serverUrl } from "../utils/constants";
import { ProcesadorArchivo } from "../utils/ProcesadorArchivo";

function CargarArchivos({ archivos, setArchivos }) {
  const [snack, setSnack] = useState({ open: false, variant: "", message: "" });
  const [version, setVersion] = useState([]);
  const [loading, setLoading] = useState(false);

  const subirArchivos = (e) => {
    const fr = new FileReader();
    fr.onload = function () {
      setArchivos(fr.result);
    };

    fr.readAsText(e[0], "Windows-1252");
  };

  const onFileUpload = async () => {
    setLoading(true);
    const results = ProcesadorArchivo(archivos);
    if (results.length > 0) {
      try {
        const response = await axios.post(`${serverUrl}upload`, {
          data: [...results],
        });
        console.log(response);
        // if (error) {
        //   console.log(error);
        // }
        alert(`${results.length} ingresadas con éxito.`);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert("Ha ocurrido un error en el servidor.");
        setLoading(false);
      }
      if (version) {
        console.log(version);
        try {
          const response = await axios.post(`${serverUrl}versionUpdate`, {
            version,
          });
          console.log(response)
        //   if (error) {
        //     console.log(error);
        //   }
          alert("Versión Actualizada");
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setSnack({
        open: true,
        variant: "warning",
        message: "No se ha podido procesar el archivo.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="Container">
      <header className="divTitle">
        <Typography variant="h2">
          Glosario-Guía Para Traducir a Husserl
        </Typography>
        <Typography variant="h6">Módulo de carga</Typography>
        {loading && (
          <div className="center-block">
            <h5>Cargando...</h5>
          </div>
        )}
      </header>

      {loading && <LinearProgress />}

      <div className="wrapper">
        <div className="block">
          <Typography variant="subtitle1">
            Ingrese la versión de la base de datos
          </Typography>
          <input
            type="text"
            name="version"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="block">
          <Typography variant="subtitle1">
            Ingrese el archivo a cargar
          </Typography>
          <input
            type="file"
            name="file"
            accept=".txt"
            onChange={(e) => subirArchivos(e.target.files)}
            disabled={loading}
          />
        </div>

        <div xs={12} className="reverse-block">
          <Button
            variant="outlined"
            size="small"
            disabled={loading}
            onClick={(event) => onFileUpload()}
          >
            Cargar Archivo
          </Button>
        </div>
      </div>

      <div>
        <Aviso snack={snack} setSnack={setSnack} />
      </div>
    </div>
  );
}

export default CargarArchivos;
