import { useEffect, useState } from "react";
import styles from "./styles.css"

function FormImc() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);


  useEffect(() => {
    setResultado(peso / (altura * altura));
  }, [altura, peso]); 

  return (
    <div className="container-fluid">
      <section>
        <form className="form">

          <div className="row">
            <div className="col-3"></div>
            <div className="col-3">
              <h2 className="entrada-label">Altura:</h2>
              <input value={altura}  onChange={(e) => setAltura(e.target.value)}  className="entrada form-control" type="number" name="altura" id="altura" placeholder="Informe a altura"></input>
            </div>
            <div className="col-3">
              <h2 className="entrada-label">Pêso:</h2>
              <input value={peso} onChange={(e) => setPeso(e.target.value)} className="entrada form-control" type="number" name="peso" id="peso" placeholder="Informe o peso"></input>
            </div>
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <h2 className="resultado-label">Resultado:</h2>
              <input value={resultado} disabled className="resultado-class form-control" type="number" name="resultado" id="resultado"></input>
            </div>
          </div>

        </form>
      </section>
    </div>
  );
}

export default FormImc;
