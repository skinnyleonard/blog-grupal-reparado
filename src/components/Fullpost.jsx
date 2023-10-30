import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Comentador from "./Comentador";
import Header from "./Header";

function Fullpost({ info }) {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  function createNewComment(newName, newComment) {
    setComments([...comments, { id: `${id}`, thename: newName, comment: newComment }]);
  }
  useEffect(() => {
    let data = localStorage.getItem("thenames");
    if (data) {
      setComments(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    let data = localStorage.getItem(`thecomments/${id}`);
    if (data) {
      setComments(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(`thecomments/${id}`, JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <Header home='Volver al home' />
      <section>
        <div>
          {info
            .filter((post) => post.id == id)
            .map((post) => (
              <div className="postPres">
                <h3>{post.user} <small>posteo:</small></h3>
                <h1>
                  <Markdown remarkPlugins={[remarkGfm]}>{post.post}</Markdown>
                </h1>
              </div>
            ))}
          <div>
            {/* returns de los comentarios */}
            <Comentador createNewComment={createNewComment} />
            <h1><u>Comentarios</u></h1><br />
            {comments.map((coment) => (
              <div className="comments">
                <h2>{coment.thename} <small><small>comento:</small></small></h2>
                <h3>{coment.comment}</h3>
              </div>
            ))}
          </div>
          {/* finaliza los returns de los comentarios */}
        </div>
      </section>
    </>
  );
}

export default Fullpost;
