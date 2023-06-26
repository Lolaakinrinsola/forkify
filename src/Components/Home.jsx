import { Fraction } from "fractional";
import React from "react";

const Home = (props) => {

  const list= props.ingredients

  return (
    <div className="bg-greyLight-10 md:w-4/5 w-screen">
      {!list ? (
        <div className="text-center">
          <p>Search over 10000 recipes</p>
        </div>
      ) : (
        <div>
          <div className="relative ">
            <img src={props.image} alt="food image" className="min-w-[100%] max-h-[400px]"/>
          <div className="bg-gradient-to-r from-grad-10 to-grad-20 m-auto p-[1em] w-fit absolute bottom-[-2rem] right-[25vw]">
            <p className="">{props.title}</p>
          </div>
          </div>
          <div className="grid ">
            <div className="flex justify-between px-10 w-full py-5 mt-10">
              <div>
                <p>{`${props.cookingTime} MINUTES`}</p>
              </div>
              <div>
                <p>{`${props.servings} SERVINGS`}</p>
                <div></div>
              </div>

            </div>

            <div className="bg-greyLight-20 py-[2em] justify-center ">
              <p className="text-primary-10 text-center m-auto font-bold">
                RECIPE INGREDIENTS
              </p>
              <div className="grid grid-cols-2 p-[2em] gap-[1em] ">
              {list?.map((ing,index) => (
               
                  <p key={index}>{`${ing.quantity? new Fraction(ing.quantity).toString():''} ${ing.unit} ${ing.description}`}
                  </p>
                  
                  
                  ))}
                  </div>
            </div>

            <div className="text-center  m-auto pt-[3em] space-y-[1em] ">
              <p className="text-primary-10 font-bold">HOW TO COOK IT</p>
              <p>
                This recipe was carefully designed and tested by{" "}
                <span>{props.publisher}</span> . Please check out directions at
                their website.
              </p>
                <div className=" text-center grid justify-center">
                  <a
                    className="flex items-center text-white-10 rounded-full bg-gradient-to-r from-grad-10 to-grad-20 px-[1em] py-[.5em] text-center min-w-[15rem] justify-center mb-[2rem]" 
                    href={props.url}
                  >
                    DIRECTIONS
                  </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
