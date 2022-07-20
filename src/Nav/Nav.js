import { Link } from "react-router-dom";
import  Gold from "./logos/Gold.png";
import Discord from "./icon/Discord";
import opensea from "./logos/open-sea.png";
import Etherscan from "./icon/Etherscan";
import Twitter from "../Nav/icon/Twitter";
import "./style.css";
import { useState } from "react";

const Nav = ({ first, second, third, fourth, fifth}) => {

  const [isshown, setshown] = useState(true);
  const ChangeNav = () => {
    setshown(!isshown);
  };
  return (
    <div className="text-black ">
      <ul className="flex flex-row ">
        <li className="z-[51] w-14">
          <Link to="/">
          <img src={Gold} alt="logo" className="Lborder" />
          </Link>
        </li>
        <li className="logotx" > Horsin' Around</li>
        <div className="flex lg:hidden">
          <input type="checkbox" id="active" />
          <label htmlFor="active" className="menu-btn">
            <div
              className={isshown ? "show" : "show hide"}
              onClick={ChangeNav}
            ></div>
          </label>
          <div className="wrapper">
            <ul>
              <li>
                <Link to="/" className={first ? "text-stafilo" : "text-ia"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Whitepaper" className={second ? "text-stafilo" : "text-ia"}>
                Whitepaper
                </Link>
              </li>
              <li>
                <Link to="/Racemap" className={third ? "text-stafilo" : "text-ia"}>
                  Racemap</Link>
              </li>
              <li>
                <Link to="/Mint" className={fourth ? "text-stafilo" : "text-ia"}>
                  Mint</Link>
              </li>
              <li>
                <Link to="/Team" className={fifth ? "text-stafilo" : "text-ia"} >
                  Team</Link>
              </li>
              <li className=' cursor-not-allowed'>
                <Link to="/Race" className="pointer-events-none">
                  Race</Link>
              </li>
              <li className=' cursor-not-allowed'>
                <Link to="/Market" className="pointer-events-none">Market</Link>
              </li>
              <div className="size">
              <li id="sz">
                {" "}
                <a href="https://twitter.com/Horsinft_Around" target="_blank" rel="noopener noreferrer" className="logo">
                  <Twitter />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://discord.gg/MRnfweur" target="_blank" rel="noopener noreferrer"  className="logo">
                  <Discord />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://opensea.io/collection/horsinaround3335" target="_blank" rel="noopener noreferrer"  className="logo">
                  <img src={opensea} alt="opensea" className="invert-[0.7]"/>
                </a>
              </li>
              <li className="self-center">
                {" "}
                <a href="https://etherscan.io/address/0xafc9dd4f13250f69e8f2191312835ff42d88dcf1" target="_blank" rel="noopener noreferrer"  className="logo">
                  <Etherscan/>
                </a>
              </li>
            </div>
            </ul>
  
          </div>
        </div>
        <div className=" ml-auto hidden flex-row items-center space-x-8 lg:flex">
          <li
            className={` ml-auto   ${
              first
                ? " text-stafilo "
                : "  hover:text-stafilo "
            } `}
          >
            <Link to="/">Home</Link>
          </li>
          <li 
            className={` ml-auto   ${
              second
                ? " text-stafilo "
                : "  hover:text-stafilo "
            } `}
          
          >
            <Link to="/Whitepaper">Whitepaper</Link>
          </li>
          <li 
        className={` ml-auto   ${
          third
            ? " text-stafilo "
            : "  hover:text-stafilo "
        } `}
      
          >
            <Link to="/Racemap">Racemap</Link>
          </li>
          <li 
         className={` ml-auto   ${
          fourth
            ? " text-stafilo "
            : "  hover:text-stafilo "
        } `}
          >
            <Link to="/Mint">Mint</Link>
          </li>
          <li 
          className={` ml-auto   ${
            fifth
              ? " text-stafilo "
              : "  hover:text-stafilo "
          } `}
          >
            <Link to="/Team">Team</Link>
          </li>
          {/* border-2 border-solid px-5 border-black for  border */}
          <li className=' ml-9 text-black cursor-not-allowed'>
            <Link to="/Race" className="pointer-events-none">Race</Link>
          </li>
          <li className=' ml-9 text-black cursor-not-allowed'>
            <Link to="/Market" className="pointer-events-none">Market</Link>
          </li>
          <li className="!ml-8 w-10  ">
            <a href="https://twitter.com/Horsinft_Around" target="_blank" rel="noopener noreferrer">
            <Twitter />
            </a>
          </li>
          <li className="!ml-4 w-10">
            <a href="https://discord.gg/MRnfweur" target="_blank" rel="noopener noreferrer">
              <Discord />
            </a>
          </li>
          <li className="!ml-4 w-10">
            <a href="https://opensea.io/collection/horsinaround3335" target="_blank" rel="noopener noreferrer">
              <img src={opensea} alt="opensea" className="invert-[0.7]"/>
            </a>
          </li>
          <li className="!mx-4 w-8">
            <a href="https://etherscan.io/address/0xafc9dd4f13250f69e8f2191312835ff42d88dcf1" target="_blank" rel="noopener noreferrer">
              <Etherscan/>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
