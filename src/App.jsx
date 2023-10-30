import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Poster from "./components/Poster";
import Posts from "./components/Posts";
import Fullpost from "./components/Fullpost";
import "./App.css";
import Admin from './components/Admin'

function App({ createNewPost }) {
  const [show, setShow] = useState(false)
  const [comments, setComments] = useState([]);

  const [info, setInfo] = useState([]);
  function createNewPost(newUser, newPost) {
    setInfo([...info, { id: info.length == 0 ? 1 : info[info.length - 1].id + 1, user: newUser, post: newPost }])
  }
  useEffect(() => {
    let data = localStorage.getItem('theusers')
    if (data) {
      setInfo(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    let data = localStorage.getItem('theposts')
    if (data) {
      setInfo(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    let data = localStorage.getItem('admin')
    if (data) {
      setShow(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theposts', JSON.stringify(info))
  }, [info])
  useEffect(() => {
    localStorage.setItem('theusers', JSON.stringify(info))
  }, [info])
  useEffect(() => {
    localStorage.setItem('admin', JSON.stringify(show))
  }, [show])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Posts info={info} setInfo={setInfo} show={show} setShow={setShow} comments={comments} setComments={setComments} />} />
          <Route exact path="/poster" element={<Poster info={info} createNewPost={createNewPost} />} />
          <Route path="/posts/:id" element={<Fullpost info={info} comments={comments} setComments={setComments} />} />
          <Route path="/admin" element={<Admin show={show} setShow={setShow} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
import React from 'react'
