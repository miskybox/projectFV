//Forum.jsx
import React, { useState } from "react";
import { useAuth } from "../context/UseAuth";

const TextArea = ({ placeholder }) => (
  <textarea
    placeholder={placeholder}
    className="p-2.5 text-base text-black font-semibold border border-solid border-stone-300 min-h-[100px] w-[90%]"
    aria-label={placeholder}
  />
);

const ForumComponent = () => {
  const userData = useAuth();
  const [opinion, setOpinion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData) {
      setOpinion("");
    } else {
      alert("You must be registered to comment on the forum.");
    }
  };

  return (
    <main
      className="box-border flex relative flex-col shrink-0 items-center font-semibold text-white"
      id="forum"
      style={{ backgroundColor: "#006494" }}
    >
      <section className="text-center">
        <header>
          <h1 className="mb-2.5 text-4xl text-white-800 font-bold">Forum</h1>
        </header>
        <p className="mb-2.5 text-xl leading-4">
          To comment in the forum, you must be registered or logged in
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="opinion" className="sr-only text-black">
            Write your opinion
          </label>
          <TextArea
            placeholder="Write your opinion"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
          />
          <label htmlFor="fileUpload" className="sr-only">
            Upload File
          </label>
          <input
            type="file"
            id="fileUpload"
            className="mb-2.5"
            aria-label="Upload File"
          />
          <button
            type="submit"
            className="px-5 py-2.5 mb-2.5 font-semibold bg-teal-300 border-white cursor-pointer border-[none] text-white-600"
          >
            SEND
          </button>
        </form>
      </section>
    </main>
  );
};

export default ForumComponent;
