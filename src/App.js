import { useState, useEffect } from "react";
import "./App.css";
import Elemento from "./Elemento";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const agregar = () => {
    setList([...list, text]);
    setText("");
  };

  const actualizar = e => {
    setText(e.currentTarget.value);
  };

  const eliminar = j => {
    setList(list.filter((_, i) => j != i));
  };

  const editar = (nuevoTitulo, i) => {
    setList(
      list.map((elemento, j) => {
        if (i == j) {
          return nuevoTitulo;
        }
        return elemento;
      })
    );
  };

  return (
    <div className="App">
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            onChange={actualizar}
            value={text}
            type="text"
            placeholder="Escribí aquí hdp..."
          ></input>
          <button onClick={agregar}>Agregar</button>
          <ul>
            {list.map((elemento, i) => {
              return (
                <li key={`${elemento}-${i}`}>
                  <Elemento
                    titulo={elemento}
                    onDelete={() => {
                      eliminar(i);
                    }}
                    edit={nuevoTitulo => editar(nuevoTitulo, i)}
                  />
                </li>
              );
            })}
          </ul>
        </form>
      </>
    </div>
  );
}

export default App;
