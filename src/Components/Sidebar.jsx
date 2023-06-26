import React, { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Sidebar = (props) => {
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(false);
  const [page, setPage] = useState(1);
  const [start, setstart] = useState(true);
  const [close, setclose] = useState(true);

  useEffect(() => {
    if (props.search) setstart(false);
    setclose(true);
  }, [props.search]);

  console.log(start);
  useEffect(() => {
    if (!props.search.length) setPage(1);
  }, [props.Submit.length]);
  useEffect(() => {
    pages();
  }, [props.Submit][page]);

  const numPages = Math.ceil(props.search.length / 10);
  const pages = function () {
    if (numPages === 0) return;
    if (page === 1 && numPages > 1) {
      setRightButton(true);
      setLeftButton(false);
    } else if (page === numPages && numPages > 1) {
      setRightButton(false);
      setLeftButton(true);
    } else if (page < numPages) {
      setRightButton(true);
      setLeftButton(true);
    } else if (numPages === 1) {
      setRightButton(false);
      setLeftButton(false);
    }
  };

  const getSearchResultsPage = function (page) {
    if (page === 0) return;
    const start = (page - 1) * 10;
    const end = page * 10;

    let subSearch = props.search.slice(start, end);
    return subSearch;
  };
  let subSearch = getSearchResultsPage(page);

  const activeTab = function (id) {
    if (props.clickedId === id) return "bg-greyLight-30";
    else return;
  };

  const Error = function () {
    if (!props.search || !props.search.length)
      return (
        <div>
          <p>couldn't find search</p>
        </div>
      );
  };
  
  console.log(props.search);
  return (
    <>
      <div className="md:hidden ">
        <div className="relative">
        <BsFillArrowLeftCircleFill onClick={() => {
            setclose(!close);
          }} className={`${close?'hidden':'block'} absolute text-[2rem] left-3 top-3 text-primary-10 cursor-pointer z-20`}/>
        </div>
        {close && 
        <>
        <div
          className={`absolute w-screen min-h-screen bg-greyDark-10/30 z-10 ${
            !close && "hidden"
          }`}
          onClick={() => {
            setclose(!close);
          }}
        >
        </div>
            <div
              className={`bg-white-10 min-w-1/5 justify-between md:grid min-h-full overflow-y-auto z-50 ${props.query? 'absolute ':'hidden '}`}
            >
              {start && (
                <p className="pt-[10rem] text-center">search for recipes</p>
              )}
              {Error()}
              {subSearch.map((ser) => (
                <div
                  className={`flex space-x-1  hover:cursor-pointer hover:bg-greyLight-30 mb-[1em]  px-[1rem] items-center justify-around  ${activeTab(
                    ser.id
                  )}`}
                  key={ser.id}
                  onClick={() => {
                    props.ID(ser.id);
                  }}
                >
                  <div className=" grid justify-center align-center m-auto  ">
                    <img
                      src={ser.image_url}
                      alt=""
                      className="max-w-[4em] rounded-[100%] max-h-[5em] "
                    />
                  </div>
                  <a className=" max-w-[14rem]">
                    <p className="text-primary-10">{ser.title}</p>
                    <p className="text-greyDark-10">{ser.publisher}</p>
                  </a>
                </div>
              ))}

              <div className="flex justify-between p-10">
                {leftButton && (
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    <BsFillArrowLeftCircleFill className="text-[2rem] text-primary-10" />
                  </p>
                )}
                {rightButton && (
                  <p
                    className="cursor-pointer flex"
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  >
                    <BsFillArrowRightCircleFill className="text-[2rem] text-primary-10" />
                  </p>
                )}
              </div>
            </div>
        </>
        }
      </div>
      <div className="hidden md:grid">
        <div
          className={`bg-white-10 min-w-1/5 justify-between md:grid min-h-screen z-10000000`}
        >
          {start && (
            <p className="pt-[10rem] text-center">search for recipes</p>
          )}
          {Error()}
          {subSearch.map((ser) => (
            <div
              className={`flex space-x-1  hover:cursor-pointer hover:bg-greyLight-30 mb-[1em]  px-[1rem] items-center justify-around  ${activeTab(
                ser.id
              )}`}
              key={ser.id}
              onClick={() => {
                props.ID(ser.id);
              }}
            >
              <div className=" grid justify-center align-center m-auto  ">
                <img
                  src={ser.image_url}
                  alt=""
                  className="max-w-[4em] rounded-[100%] max-h-[5em] "
                />
              </div>
              <a className=" max-w-[14rem]">
                <p className="text-primary-10">{ser.title}</p>
                <p className="text-greyDark-10">{ser.publisher}</p>
              </a>
            </div>
          ))}

          <div className="flex justify-between">
            {leftButton && (
              <p
                className="cursor-pointer"
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <BsFillArrowLeftCircleFill className="text-[2rem] text-primary-10" />
              </p>
            )}
            {rightButton && (
              <p
                className="cursor-pointer flex"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <BsFillArrowRightCircleFill className="text-[2rem] text-primary-10" />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
