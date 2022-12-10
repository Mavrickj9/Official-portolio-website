import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

import Blast from "../BlastAnimation/Blast";
import "./header.scss";

const nameArray = ["i", "n", "o", "t", "e", "n", "d", "a"];
const jobArray = [
  "w",
  "e",
  "b",
  "",
  "d",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
  ".",
];

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <h1 arial-label="Hi i'm Tinotenda, web Junior full-stack developer">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>’</span>
            <span className={`${letterClass} _16`}>m</span> {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490 496"
              className="home-logo"
            >
              <g
                transform="translate(0.000000,525.000000) scale(0.100000,-0.12900000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  className="lower-logo-color fill__color home-logo animate-logo-1 animate-logo-2"
                  fill="#797878"
                  d="M2275 3958 c-38 -4 -167 -20 -285 -34 -901 -105 -1473 -271 -1679
-489 -75 -79 -106 -151 -105 -241 2 -86 25 -144 85 -209 76 -82 272 -199 461
-274 99 -39 278 -101 278 -97 0 3 -35 23 -77 47 -248 135 -442 290 -496 396
-116 223 339 343 1301 343 233 0 304 -3 307 -12 7 -20 29 -364 106 -1643 68
-1132 72 -1191 92 -1220 95 -135 220 -295 227 -290 4 3 60 76 123 163 l115
157 11 190 c29 477 73 1216 96 1590 14 226 34 553 44 727 11 175 23 323 26
329 5 8 125 9 429 5 231 -2 439 -7 461 -10 22 -3 65 -8 95 -11 326 -34 555
-100 615 -180 31 -40 32 -91 4 -146 -46 -90 -219 -230 -446 -361 -64 -38 -112
-68 -107 -68 38 0 300 103 436 171 264 132 368 246 372 404 7 362 -586 593
-1909 745 -143 16 -268 30 -278 30 -12 0 -25 -16 -38 -47 -36 -83 -67 -86
-103 -8 -28 62 -24 61 -161 43z"
                />
              </g>
            </svg>
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">WEB DEVELOPER / UI/UX DESIGNER</p>
          <Link to="/contact" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </Link>
          <div className="scroll__wrapper switch__color">
            <MdArrowDropDown className="scroll__down switch__color" />
          </div>
        </main>
      </section>
    </>
  );
};

export default Header;
