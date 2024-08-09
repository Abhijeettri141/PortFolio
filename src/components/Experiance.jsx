import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import Bootstrap from "../../public/Bootstrap.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html5",
    },
    {
      id: 2,
      logo: css,
      name: "CSS3",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: Bootstrap,
      name: "Spring Boot",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div className="flex flex-wrap justify-center">
              <div
              className=" flex flex-col items-center justify-center border-2 border-gray-300 rounded-full w-[200px] h-[200px] shadow-lg p-4 cursor-pointer transform transition duration-500 ease-in-out hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-white via-gray-100 to-gray-200"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
