import { useState } from "react";

function Elemento({ titulo, onDelete, edit }) {
  const [value, setValue] = useState(titulo);
  const [editting, setEditting] = useState(false);
  return (
    <>
      {!editting && titulo}
      {editting && (
        <input
          onChange={e => {
            setValue(e.currentTarget.value);
          }}
          value={value}
        ></input>
      )}
      {!editting && <button onClick={onDelete}>X</button>}

      {!editting && (
        <button
          onClick={() => {
            setEditting(true);
          }}
        >
          Editar
        </button>
      )}

      {editting && (
        <button
          onClick={() => {
            setEditting(false);
            edit(value);
          }}
        >
          ok
        </button>
      )}

      {editting && (
        <button
          onClick={() => {
            setEditting(false);
          }}
        >
          cancel
        </button>
      )}
    </>
  );
}

export default Elemento;
