import React, { useState, useEffect } from "react";
import Account from "../Utils/Account";
import Logo from "./Logo";
import Switcher from "../Utils/ThemeSwitcher";
import useEagerConnect from "../../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";
import { Popover } from "@headlessui/react";
import Alert from "./Alert";

export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const { account, library } = useWeb3React();

  const isConnected2 = typeof account === "string" && !!library;
  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const {
    active,
    error,
    activate,
    chainId,

    setError,
    deactivate
  } = useWeb3React();

  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  function ProfileDropdown() {
    return (
      <Popover className="relative">
        <Popover.Button className="flex mt-0.5  items-center translate-x-0 translate-y-0  ">
          <Account triedToEagerConnect={triedToEagerConnect} />
        </Popover.Button>

        <Popover.Panel className="font-thin tracking-wide rounded z-40 font-lores font-normal text-xl text-th-primary-dark rounded-lg border border-th-accent-light w-48 absolute right-0 translate-y-4 z-10 bg-th-background">
          <div className="flex flex-col">
            <a
              className="w-full py-4 hover:bg-green-200 hover:text-white "
              href="/"
            >
              Profile
            </a>
            <a
              className="w-full py-4 hover:bg-green-200 hover:text-white "
              href="/"
            >
              Tokens
            </a>
            <button
              className="w-full py-4 hover:bg-green-200 hover:text-white font-thin tracking-wide"
              onClick={() => {
                disconnect();
                console.log(active);
              }}
            >
              Disconnect
            </button>
          </div>
        </Popover.Panel>
      </Popover>
    );
  }
  return (
    <>
      <div className="h-full w-full ">
        {/* Code block starts */}

        <div
          className={
            show
              ? "w-full lg:hidden h-full  fixed  z-40  transform  translate-x-0 "
              : "   w-full lg:hidden h-full  fixed z-40  transform -translate-x-full -translate-y-full"
          }
        >
          {" "}
          <div
            className=" bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed z-40 top-0 bg-th-background shadow h-full flex-col justify-between lg:hidden pb-4 transition duration-150 ease-in-out">
            <div className="relative px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <a href="/">
                          <p className="text-3xl   mb-0 bg-gradient-to-b from-green-400  to-emerald-600 text-transparent bg-clip-text font-gyparody tracking-tight font-extrabold">
                            CHIBI TACTICS!
                          </p>
                        </a>
                      </div>
                      <div
                        id="cross"
                        className="text-th-primary-dark w-4"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-th-primary-dark stroke-1 icon icon-tabler icon-tabler-x -translate-y-2 translate-x-2"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5px"
                          stroke="th-primary-dark"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line
                            stroke="th-primary-dark"
                            x1={18}
                            y1={6}
                            x2={6}
                            y2={18}
                          />
                          <line
                            stroke="th-primary-dark"
                            x1={6}
                            y1={6}
                            x2={18}
                            y2={18}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    <li className="pt-10 text-gray-800 py-4 text-center font-futurapt text-xl"></li>
                    <li className="hidden text-gray-800 py-4 text-center font-futurapt text-xl"></li>
                    <li className="text-gray-800 py-4 text-center font-futurapt text-xl"></li>
                    <li className="hidden text-gray-800 py-4 text-center font-futurapt text-xl"></li>

                    <li className="mt-8 ml-9 flex mx-auto items-center"></li>
                    <li className="text-gray-800 mt-3 h-full flex mx-auto text-center justify-center">
                      {isConnected ? (
                        <div className="flex mx-auto  w-full">
                          <div className="flex  h-full flex-col mx-auto my-auto items-center justify-center">
                            <ProfileDropdown />
                          </div>
                        </div>
                      ) : (
                        <div className="flex w-full h-full flex-col mx-auto my-auto items-center  justify-center">
                          <Account triedToEagerConnect={triedToEagerConnect} />
                        </div>
                      )}{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-4 inset-x-0	flex mx-auto justify-center">
                <Switcher />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden">
          <Alert />
        </div>

        <nav className="shadow-md shadow-slate-400/20  animate-slideInDown animate-animated animate-repeat-1 animate-delay-[500ms] animate-duration-[2s]">
          {show ? (
            <div className="h-px -mt-0.5"></div>
          ) : (
            <div>
              <div className="font-molle text-2xl h-16 pt-0.5 bg-th-background px-6 w-full flex lg:hidden justify-between items-center  top-0 z-40">
                <a href="/">
                  <a href="/">
                    <p className="text-3xl   mb-0 bg-gradient-to-b from-green-400  to-emerald-600 text-transparent bg-clip-text font-gyparody tracking-tight font-extrabold">
                      CHIBI TACTICS!
                    </p>
                  </a>
                </a>
                <div className="flex items-center">
                  <div className="relative "></div>
                  <div
                    id="menu"
                    className="text-gray-800 translate-x-3 translate-y-0.5"
                    onClick={() => setShow(!show)}
                  >
                    {show ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-th-primary-dark stroke-1 icon icon-tabler icon-tabler-x "
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="th-primary-dark"
                        fill="th-primary-dark"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="th-primary-dark"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <line
                          stroke="th-primary-dark"
                          x1={4}
                          y1={6}
                          x2={20}
                          y2={6}
                        />
                        <line
                          stroke="th-primary-dark"
                          x1={4}
                          y1={12}
                          x2={20}
                          y2={12}
                        />
                        <line
                          stroke="th-primary-dark"
                          x1={4}
                          y1={18}
                          x2={20}
                          y2={18}
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-th-primary-dark stroke-1 icon icon-tabler icon-tabler-x "
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="th-primary-dark"
                        fill="th-primary-dark"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line
                          stroke="th-primary-dark"
                          x1={4}
                          y1={6}
                          x2={20}
                          y2={6}
                        />
                        <line
                          stroke="th-primary-dark"
                          x1={4}
                          y1={12}
                          x2={20}
                          y2={12}
                        />
                        <line
                          stroke="th-primary-dark"
                          x1={4}
                          y1={18}
                          x2={20}
                          y2={18}
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:hidden"></div>
            </div>
          )}
        </nav>
        <div className="hidden shadow-lg shadow-stone-400/10 fixed w-full lg:flex animate-slideInDown animate-animated animate-repeat-1 animate-delay-[500ms] animate-duration-[2s]">
          <div className="w-full">
            <nav
              className={
                isShrunk
                  ? "h-16 transition duration-500 items-center text-center text-base  py-4 shadow-none pl-8 px-6 w-full flex justify-between bg-th-background top-0 z-50"
                  : "h-20 transition duration-500 items-center text-center text-base  py-4 shadow-none pl-8 px-6 w-full flex justify-between bg-th-background top-0 z-50"
              }
            >
              <div className="flex -ml-4 flex-col h-10 items-center justify-center translate-y-0">
                <a href="/">
                  <p className="text-5xl drop-shadow-sm mb-0 bg-gradient-to-b from-green-400  to-emerald-600 text-transparent bg-clip-text font-gyparody tracking-tight font-extrabold">
                    CHIBI TACTICS!
                  </p>
                  <div className="hidden bg-emerald-500  h-px w-11/12 flex mx-auto"></div>
                  <p className="hidden w-full flex mx-auto justify-center text-center  text-xs mb-0 text-emerald-600 font-gyparody font-extrabold tracking-wide">
                    ON-CHAIN TURN-BASED STRATEGY
                  </p>
                </a>
              </div>
              {isConnected ? (
                <div className="text-th-primary-dark flex items-center">
                  <div className="rounded-full h-8 w-8 mr-2 mt-1  border-emerald-500 items-center flex mx-auto justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="fill-emerald-500 "
                    >
                      <path d="M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z" />{" "}
                    </svg>
                  </div>
                  <ProfileDropdown />
                  <div className="translate-x-1 hidden">
                    <Switcher />
                  </div>
                </div>
              ) : (
                <div className="flex text-th-primary-dark items-center">
                  <Account triedToEagerConnect={triedToEagerConnect} />
                  <div>
                    <div className="translate-x-1">
                      <Switcher />
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Code block ends */}
      </div>
      <style jsx>{`

  @font-face {
    font-family: gyparody;

    font-weight: 900;

    font-style: normal;
    src: url("https://use.typekit.net/jdq8vah.css");
  }

  @font-face {
    font-family: gyparody;
    font-weight: 400;
    font-style: normal;

    src: url("https://use.typekit.net/jdq8vah.css");
  }
       @import url('https://fonts.googleapis.com/css2?family=Mali:500&display=swap');
@font-face {
  font-family: Futura;
  src: url(/fonts/futura-pt-book.otf);
}
@font-face {
  font-family: Nunito;
  src: url("https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap");
}
@font-face {
  font-family: Anthro;
  src: url(/fonts/AnthromancerRegular2.otf);
}
        @font-face {
          font-family: myFirstFont;
          src: url(/fonts/Halaney.otf);
        }


        @font-face {
          font-family: futura-pt, sans-serif;

          font-weight: 300;

          font-style: normal;
          src: url("https://use.typekit.net/pcf5uvh.css");
        }

          #depict,
          #depict2,
          #depict3 {
            font-family: myFirstFont;
            
          }
        }
      `}</style>
    </>
  );
}
