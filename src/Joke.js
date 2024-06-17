import React, { Component } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

function Jokes({ text, votes, vote, id }) {
  return (
    <div className="Joke">
      <div className="Joke-text">{text}</div>
      <div className="Joke-votes">
        <button onClick={() => vote(id, 1)}>Upvote</button>
        <button onClick={() => vote(id, -1)}>Downvote</button>
        <span>Votes: {votes}</span>
      </div>
    </div>
  );
}

export default Joke;
