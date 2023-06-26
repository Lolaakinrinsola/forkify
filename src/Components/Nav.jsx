import React, { useState } from "react";
import iconSearch from "./Images/icons.svg";
import logo from "./Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = (props) => {
  const [open, setopen] = useState(false);
  const [input, setInput] = useState("");

  

  const submitSearched = (e) => {
    e.preventDefault();
    props.Query(input);
    props.Submit(true);
    setInput("");
  }

  return (
    <div className="flex bg-greyLight-10 py-[1em] px-2 md:px-[2em] lg:px-[5em] items-center gap-3 justify-between ">
      <img src={logo} alt="logo" className="w-[70px] h-[35px]" />
      <form className="flex h-[2.5em] space-x-1 md:space-x-5" onSubmit={submitSearched}>
        <input
          type="text"
          className="rounded-full bg-white-10 lg:w-[20em] px-[1em] w-[10em]"
          name="input"
          onChange={(e) => {
            setInput(e.target.value);
            props.Submit(false);
          }}
          placeholder="Search over 1,000,000 recipes ..."
          value={input}
        />
        <button type="submit"
          className="flex items-center text-white-10 rounded-full bg-gradient-to-r from-grad-10 to-grad-20 px-[1em] py-[.5em]"
         
        >
          <svg className="color-white w-[20px] fill-white-10 md:mr-[.5em]">
            <use xlinkHref={`${iconSearch}#icon-search`} />
          </svg>
          <p className="hidden md:block">SEARCH</p>
        </button>
      </form>

      <div className=" md:hidden">
        <GiHamburgerMenu onClick={() => setopen(!open)} />

        {open &&(
          <div>
            <div
              className="absolute h-full w-screen top-0 left-0 bg-[#000000] bg-opacity-[60%]"
              onClick={() => setopen(!open)}
            ></div>
            <div className=" pb-[2em] w-2/3 bg-white-10 absolute top-0 right-0 rounded-2xl">
              <div className="mt-[2em] grid justify-end items-end mr-[2em] ">
                <AiOutlineClose
                  size="30px"
                  color="black"
                  onClick={() => setopen(!open)}
                />
              </div>
              <div className="h-screen flex flex-col text:hover-primary-50 space-y-5 px-[2em] pt-[2em]">
                <p>ADD RECIPE</p>
                <p>BOOKMARKS</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="hidden md:flex space-x-[2em]">
        <p>ADD RECIPE</p>
        <p>BOOKMARKS</p>
      </div> */}
    </div>
  );
};

export default Nav;
