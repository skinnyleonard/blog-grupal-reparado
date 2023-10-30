import { useState, useEffect } from "react";

function Admin({ setShow, show }) {
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setConfirm("");
  }
  useEffect(()=> {
    if(confirm == 123){
      setShow(true)
      window.location='/'
    }
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="contraseña para administrador es 123"
          style={{ width: "500px" }}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button>ingresar</button>
      </form>
    </>
  );
}

export default Admin;
