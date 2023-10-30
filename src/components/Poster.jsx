import React from "react";
import { useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from "react-router-dom";

function Poster({ createNewPost }) {
  const [newUser, setNewUser] = useState("");
  const [newPost, setNewPost] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createNewPost(newUser, newPost);
    localStorage.setItem("theusers", newUser);
    localStorage.setItem("theposts", newPost);
    setNewUser("");
    setNewPost("");
  }
  return (
    <>
      <Link to={`/`}><h1>Volver al Home</h1></Link>
      <form onSubmit={handleSubmit} className="comenterForm">
        <h1>Postea algo:</h1>
        <input
          type="text"
          placeholder="nombre"
          onChange={(e) => setNewUser(e.target.value)}
          value={newUser}
          style={{ width: '249px' }}
        />
        <textarea
          className="textarea"
          type="text"
          placeholder="post"
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
        />
        <Markdown remarkPlugins={[remarkGfm]}>{newPost}</Markdown>
        <button>Enviar</button>
      </form>
    </>
  );
}

export default Poster;
