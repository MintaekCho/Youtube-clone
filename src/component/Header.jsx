import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const [text, setText] = useState("");

  const { q } = useParams();

  const navigate = useNavigate();

  const handleChnage = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/video/${text}`);
  };

  useEffect(() => setText(q || ""), [q]);

  return (
    <header className="flex w-full p-4 text-2xl border-b border-[#c4c4c4] mb-4 relative">
      <Link to={"/"}>
        <h1 className="w-32 md:w-40 lg:w-48">
          <img
            src="https://vermillion-genie-6f5e78.netlify.app/images/logo.png"
            alt="Youtube-Logo"
          />
        </h1>
      </Link>

      <form className="w-1/2 flex justify-center bg-gray-200 rounded-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" onSubmit={handleSubmit}>
        <input
        className="w-[90%] bg-gray-200  p-2 outline-none rounded-3xl text-gray-900"
          type="text"
          placeholder="Search..."
          onChange={handleChnage}
          value={text}
        />
        <button className="text-gray-900 bg-gray-200 rounded-r-3xl ">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
