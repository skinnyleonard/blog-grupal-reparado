import { useState } from "react";
import { useParams } from "react-router-dom";

function Comentador(props) {
  const { id } = useParams();

  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.createNewComment(newName, newComment)
    let comments = JSON.parse(localStorage.getItem(`thecomments/${id}`));
    if (comments)
      localStorage.setItem(`thecomments/${id}`, JSON.stringify([...comments, newComment]));
    else
      localStorage.setItem(`thecomments/${id}`, JSON.stringify([newComment]));
    setNewName("");
    setNewComment("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="comenta, sin miedo"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}
export default Comentador;
