import { Fragment, useState, useEffect, useRef, useLayoutEffect } from "react";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import Map from "../components/Samples/Map";

import Character01 from "../components/Samples/Char01";
import Character02 from "../components/Samples/Char02";
import Character03 from "../components/Samples/Char03";
import Character04 from "../components/Samples/Char04";
import "animate.css/animate.min.css";
import { gsap } from "gsap";
import { Tween, Timeline } from "react-gsap";
import {
  TransformWrapper,
  TransformComponent
} from "@tiendeo/react-zoom-pan-pinch";

import { positions } from "../components/Samples/Outline";

import ETHBalance from "../components/Utils/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import usePersonalSign, { hexlify } from "../hooks/usePersonalSign";
import ScrollToTop from "react-scroll-to-top";
import { Dialog, Transition } from "@headlessui/react";

function BackToTop() {
  return (
    <div className="flex mx-auto h-6 w-6">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-th-accent-light stroke-th-accent-light"
        stroke-width="1px"
      >
        <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
      </svg>
    </div>
  );
}

export default function Home() {
  let [isPlayOpen, setIsPlayOpen] = useState(false);
  let [isBuyOpen, setIsBuyOpen] = useState(false);
  let [isClaimOpen, setIsClaimOpen] = useState(false);

  let [isCharMenuOpen, setIsCharMenuOpen] = useState(false);

  let [CharPos, setCharPos] = useState([4, 5, 60, 61]);
  let [CharFace, setCharFace] = useState([1, 1, 0, 0]);
  let [MoveX, setMoveX] = useState(0);
  let [MoveY, setMoveY] = useState(0);

  let [Selected, setSelected] = useState(0);

  function closePlayModal() {
    setIsPlayOpen(false);
  }

  function openPlayModal() {
    setIsPlayOpen(true);
  }

  function closeClaimModal() {
    setIsClaimOpen(false);
  }

  function openClaimModal() {
    setIsClaimOpen(true);
  }

  function closeBuyModal() {
    setIsBuyOpen(false);
  }

  function openBuyModal() {
    setIsBuyOpen(true);
  }

  function closeCharMenu() {
    setIsCharMenuOpen(false);
  }

  function openCharMenu() {
    setIsCharMenuOpen(true);
  }

  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  function PlayModal() {
    return (
      <div>
        <div className="">
          <button
            type="button"
            onClick={openPlayModal}
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            PLAY
          </button>
        </div>

        <Transition appear show={isPlayOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closePlayModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  PLAY GAME
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closePlayModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  }

  function ClaimModal() {
    return (
      <>
        <div className="">
          <button
            type="button"
            onClick={openClaimModal}
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            CLAIM STARTER PACK
          </button>
        </div>

        <Transition appear show={isClaimOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeClaimModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-white/80" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="  inline-block w-full max-w-3xl px-1 lg:p-6 pt-8 pb-8 my-1 lg:my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <p className="text-4xl font-gyparody font-black   text-transparent tracking-tight bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600">
                    CLAIM STARTER PACK
                  </p>
                  <div className="mt-0">
                    <p className="leading-snug font-lores font-normal text-lg py-4 leading-snug px-2 lg:px-24 text-gray-900">
                      Free To Mint Launch Starter Packs available through the
                      end of June 2022. The Launch Starter Pack has Exclusive
                      Characters and Card Traits, which will only be available
                      during Launch!
                      <br />
                      <br />
                      Limit One Pack Per Address.
                    </p>
                  </div>
                  <div className="mt-3 space-y-1 lg:space-y-0 w-3/4 lg:w-1/2 flex flex-col lg:flex-row mx-auto justify-center">
                    <button
                      type="button"
                      onClick={openClaimModal}
                      className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-1 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      CLAIM MY PACK!
                    </button>
                    <button
                      type="button"
                      onClick={openClaimModal}
                      className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-1 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      ABOUT CARD PACKS
                    </button>
                    <button
                      type="button"
                      className="hidden inline-flex justify-center px-4 py-2 text-xs font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeClaimModal}
                    >
                      WHAT ARE PACKS AGAIN?
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }

  function BuyModal() {
    return (
      <>
        <div className="">
          <button
            type="button"
            onClick={openBuyModal}
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            BUY BOOSTER PACK
          </button>
        </div>

        <Transition appear show={isBuyOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeBuyModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="font-nunito inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <p className="text-4xl">BUY BOOSTER PACK</p>
                  <div className="mt-2">
                    <p className="text-lg py-4 px-10 text-gray-900">
                      Chibi Tactics Pack 00
                    </p>
                  </div>
                  <div className="mt-4 space-x-3  flex mx-auto justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeClaimModal}
                    >
                      CLAIM MY PACK!
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeClaimModal}
                    >
                      ABOUT LAUNCH EXCLUSIVES
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeClaimModal}
                    >
                      WHAT ARE PACKS AGAIN?
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }

  function CharMenu() {
    return (
      <>
        <div className="hidden">
          <button
            type="button"
            onClick={openCharMenu}
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            CHAR
          </button>
        </div>

        <Transition appear show={isCharMenuOpen}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment}>
              <div>
                <div className="w-144 h-56 overflow-hidden bg-gradient-to-br from-teal-300 to-blue-400 border border-slate-300 rounded-xl absolute bottom-4 right-4">
                  <div className="absolute -bottom-16 -right-12 w-72 h-72 overflow-hidden flex items-center mx-auto">
                    <div className="object-fill w-72 h-72 rounded-full border overflow-hidden">
                      {Selected === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="600"
                          height="600"
                          viewBox="0 0 24 24"
                          transform="scale(-1 1) translate(300 0)"
                        >
                          <Character01 />{" "}
                        </svg>
                      ) : (
                        ""
                      )}
                      {Selected === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="600"
                          height="600"
                          viewBox="0 0 24 24"
                          transform="scale(-1 1) translate(300 0)"
                        >
                          <Character02 />{" "}
                        </svg>
                      ) : (
                        ""
                      )}
                      {Selected === 2 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="600"
                          height="600"
                          viewBox="0 0 24 24"
                          transform="scale(-1 1) translate(260 0)"
                        >
                          <Character03 />
                        </svg>
                      ) : (
                        ""
                      )}
                      {Selected === 3 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="600"
                          height="600"
                          viewBox="0 0 24 24"
                          transform="scale(-1 1) translate(320 0)"
                        >
                          <Character04 />
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="absolute top-0 inset-x-0 mr-56 flex flex-col my-auto items-center mx-auto  text-center font-gyparody font-black text-slate-400">
                    <div className="mt-3 text-4xl text-slate-400 tracking-tight ">
                      Aryina the Ardent
                    </div>
                    <div className="-mt-1 text-base text-slate-400 tracking-tight ">
                      Mageineer
                    </div>
                    <div className="mb-0.5 w-11/12 h-2 bg-red-400  border border-slate-400 rounded"></div>
                    <div className="w-11/12 h-2 bg-fuchsia-400 border border-slate-400 rounded"></div>
                    <div className=" grid grid-cols-4 gap-2 mt-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                      <div className="w-12 h-12 rounded-lg bg-slate-300 border border-slate-400"></div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={closeCharMenu}
                  className="cursor-pointer z-50 absolute bottom-56 transform -translate-y-1 right-2 rounded-full h-6 w-6 text-center bg-slate-300 border"
                >
                  X
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </>
    );
  }

  function openCharMenuMain() {
    if (isCharMenuOpen === false) {
      setIsCharMenuOpen(true);
    }
  }

  const ref = useRef(null);

  const char01 = useRef();
  const char02 = useRef();
  const char03 = useRef();
  const char04 = useRef();

  let [SelectRef, setSelectRef] = useState(char01);

  function SetupBoard(CharId, Char, Loc) {
    gsap.to(Char.current, {
      duration: 1,
      x: positions[Loc].x,
      y: positions[Loc].y
    });

    if (Loc < 32) {
      gsap.to(Char.current, {
        transformOrigin: "bottom center",
        scaleX: -1
      });
    }
  }

  useEffect(() => {
    SetupBoard(0, char01, CharPos[0]);
    SetupBoard(1, char02, CharPos[1]);
    SetupBoard(2, char03, CharPos[2]);
    SetupBoard(3, char04, CharPos[3]);
  }, []);

  function MoveRight(CharId) {
    console.log("Face", CharFace[Selected]);
    if (CharFace[Selected] === 1) {
      gsap.to(SelectRef.current, {
        transformOrigin: "bottom center",
        scaleX: 1
      });
      CharFace[Selected] = 0;
    }

    if (
      (positions[CharPos[Selected]].r === true) &
      ((positions[CharPos[Selected] + 1].content === null) &
        (CharPos[Selected] + 1 !== CharPos[0]) &
        (CharPos[Selected] + 1 !== CharPos[1]) &
        (CharPos[Selected] + 1 !== CharPos[2]) &
        (CharPos[Selected] + 1 !== CharPos[3]))
    ) {
      gsap.fromTo(
        SelectRef.current,
        {
          repeat: 2,
          rotation: 4,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -4,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );
      console.log("charpos", CharPos[Selected]);
      console.log("positionx", positions[CharPos[Selected]].x);
      console.log("positiony", positions[CharPos[Selected]].y);
      gsap.to(
        SelectRef.current,

        {
          transformOrigin: "bottom center",
          duration: 1,
          x: positions[CharPos[Selected] + 1].x,
          y: positions[CharPos[Selected] + 1].y
        }
      );
      setMoveX(MoveX + 50);
      setMoveY(MoveY + 20);
      console.log("X", MoveX + 50);
      console.log("Y", MoveY + 20);
      console.log("Check X", positions[CharPos[Selected] + 1].x);
      console.log("Check Y", positions[CharPos[Selected] + 1].y);
      gsap.to(SelectRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] + 1;
    }
    console.log("Characer", Selected, ":", CharPos[Selected]);
  }

  function MoveLeft(CharId) {
    if (CharFace[Selected] === 0) {
      gsap.to(SelectRef.current, {
        transformOrigin: "bottom center",
        scaleX: -1
      });
      CharFace[Selected] = 1;
    }

    if (
      (positions[CharPos[Selected]].l === true) &
      ((positions[CharPos[Selected] - 1].content === null) &
        (CharPos[Selected] - 1 !== CharPos[0]) &
        (CharPos[Selected] - 1 !== CharPos[1]) &
        (CharPos[Selected] - 1 !== CharPos[2]) &
        (CharPos[Selected] - 1 !== CharPos[3]))
    ) {
      gsap.fromTo(
        SelectRef.current,
        {
          repeat: 2,
          rotation: 4,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -4,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(SelectRef.current, {
        duration: 1,
        x: positions[CharPos[Selected] - 1].x,
        y: positions[CharPos[Selected] - 1].y
      });
      setMoveX(MoveX - 50);
      setMoveY(MoveY - 20);
      console.log("X", MoveX - 50);
      console.log("Y", MoveY - 20);
      console.log("Check X", positions[CharPos[Selected] - 1].x);
      console.log("Check Y", positions[CharPos[Selected] - 1].y);
      gsap.to(SelectRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] - 1;
    }
    console.log("Characer", Selected, ":", CharPos[Selected]);
  }

  function MoveDown(CharId) {
    if (CharFace[Selected] === 0) {
      gsap.to(SelectRef.current, {
        transformOrigin: "bottom center",
        scaleX: -1
      });
      CharFace[Selected] = 1;
    }

    if (
      (positions[CharPos[Selected]].d === true) &
      ((positions[CharPos[Selected] + 8].content === null) &
        (CharPos[Selected] + 8 !== CharPos[0]) &
        (CharPos[Selected] + 8 !== CharPos[1]) &
        (CharPos[Selected] + 8 !== CharPos[2]) &
        (CharPos[Selected] + 8 !== CharPos[3]))
    ) {
      gsap.fromTo(
        SelectRef.current,
        {
          repeat: 2,
          rotation: 4,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -4,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(SelectRef.current, {
        duration: 1,
        x: positions[CharPos[Selected] + 8].x,
        y: positions[CharPos[Selected] + 8].y
      });
      setMoveX(MoveX - 50);
      setMoveY(MoveY + 20);
      console.log("X", MoveX - 50);
      console.log("Y", MoveY + 20);
      console.log("Check X", positions[CharPos[Selected] + 8].x);
      console.log("Check Y", positions[CharPos[Selected] + 8].y);
      gsap.to(SelectRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] + 8;
    }
    console.log("Characer", Selected, ":", CharPos[Selected]);
  }

  function MoveUp(CharId) {
    if (CharFace[Selected] === 1) {
      gsap.to(SelectRef.current, {
        transformOrigin: "bottom center",
        scaleX: 1
      });
      CharFace[Selected] = 0;
    }

    if (
      (positions[CharPos[Selected]].u === true) &
      ((positions[CharPos[Selected] - 8].content === null) &
        (CharPos[Selected] - 8 !== CharPos[0]) &
        (CharPos[Selected] - 8 !== CharPos[1]) &
        (CharPos[Selected] - 8 !== CharPos[2]) &
        (CharPos[Selected] - 8 !== CharPos[3]))
    ) {
      gsap.fromTo(
        SelectRef.current,
        {
          repeat: 2,
          rotation: 4,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -4,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(SelectRef.current, {
        duration: 1,
        x: positions[CharPos[Selected] - 8].x,
        y: positions[CharPos[Selected] - 8].y
      });
      setMoveX(MoveX + 50);
      setMoveY(MoveY - 20);
      console.log("X", MoveX + 50);
      console.log("Y", MoveY - 20);
      console.log("Check X", positions[CharPos[Selected] - 8].x);
      console.log("Check Y", positions[CharPos[Selected] - 8].y);
      gsap.to(SelectRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] - 8;
    }
    console.log("Characer", Selected, ":", CharPos[Selected]);
  }

  function Flip() {
    console.log("TestFace", CharFace[Selected]);

    if (CharFace[Selected] === 0) {
      gsap.to(SelectRef.current, {
        transformOrigin: "bottom center",
        scaleX: 1
      });
      CharFace[Selected] = 1;
    } else if (CharFace[Selected] === 1) {
      gsap.to(SelectRef.current, {
        transformOrigin: "bottom center",
        scaleX: -1
      });
      CharFace[Selected] = 0;
    }
  }

  return (
    <div className="bg-white w-screen justify-center h-full relative">
      <Head>
        <title>CHIBI TACTICS</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/jdq8vah.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <div className="">
        <div className="flex mx-auto scale-30 bg-white opacity-100 z-50">
          <ScrollToTop smooth component={<BackToTop />} />
        </div>
      </div>
      <div className="absolute top-0 z-50 w-full">
        <Nav />
      </div>
      <div className="h-16 w-full bg-lime-300 invisible">Spacer</div>

      <div className="relative h-152 overflow-hidden flex justify-center w-full bg-gradient-to-b from-sky-200 via-sky-200 to-sky-400">
        <TransformWrapper
          centerZoomedOut={true}
          initialScale={1}
          minScale={0.5}
          maxScale={20}
          defaultPositionX={0}
          defaultPositionY={0}
          centerOnInit
          limitToBounds={false}
          className="border border-8 border-purple-400"
        >
          {({
            zoomIn,
            zoomOut,
            resetTransform,
            setTransform,
            zoomToElement,
            centerView,
            testf,
            ...rest
          }) => (
            <>
              <div className="font-lores flex flex-col items-center text-slate-400 spacing-x-1 absolute right-2 top-6 z-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  className="fill-slate-400 my-2 cursor-pointer"
                  onClick={() =>
                    setTransform(
                      -(
                        (ref.current.offsetWidth / 10) *
                        positions[CharPos[Selected]].x2
                      ),
                      -(
                        (ref.current.offsetHeight / 10) *
                        positions[CharPos[Selected]].y2
                      ),
                      5
                    )
                  }
                >
                  <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />{" "}
                </svg>

                <button
                  className="my-0.5  cursor-pointer"
                  onClick={() => {
                    setSelected(0);
                    setSelectRef(char01);
                    openCharMenuMain();
                  }}
                >
                  <div
                    className={
                      "w-16 h-16 overflow-hidden rounded-full bg-sky-200 flex items-center mx-auto border-2  " +
                      (Selected === 0 ? "border-teal-500" : "border-slate-400")
                    }
                  >
                    <div className="object-cover w-16 h-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="150"
                        viewBox="0 0 24 24"
                        transform="scale(-1 1) translate(72 0)"
                      >
                        <Character01 />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  className="my-0.5 cursor-pointer"
                  onClick={() => {
                    setSelected(1);
                    setSelectRef(char02);
                    openCharMenuMain();
                  }}
                >
                  <div
                    className={
                      "w-16 h-16 overflow-hidden rounded-full bg-sky-200 flex items-center mx-auto border-2  " +
                      (Selected === 1 ? "border-teal-500" : "border-slate-400")
                    }
                  >
                    {" "}
                    <div className="object-cover w-16 h-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="150"
                        viewBox="0 0 24 24"
                        transform="scale(-1 1) translate(72 0)"
                      >
                        <Character02 />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  className="my-0.5  cursor-pointer"
                  onClick={() => {
                    setSelected(2);
                    setSelectRef(char03);
                    openCharMenuMain();
                  }}
                >
                  <div
                    className={
                      "w-16 h-16 overflow-hidden rounded-full bg-sky-200 flex items-center mx-auto border-2  " +
                      (Selected === 2 ? "border-teal-500" : "border-slate-400")
                    }
                  >
                    {" "}
                    <div className="object-cover w-16 h-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="150"
                        viewBox="0 0 24 24"
                        transform="scale(-1 1) translate(65 0)"
                      >
                        <Character03 />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  className="my-0.5  cursor-pointer"
                  onClick={() => {
                    setSelected(3);
                    setSelectRef(char04);
                    openCharMenuMain();
                  }}
                >
                  <div
                    className={
                      "w-16 h-16 overflow-hidden rounded-full bg-sky-200 flex items-center mx-auto border-2  " +
                      (Selected === 3 ? "border-teal-500" : "border-slate-400")
                    }
                  >
                    {" "}
                    <div className="object-cover w-16 h-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="150"
                        height="150"
                        viewBox="0 0 24 24"
                        transform="scale(-1 1) translate(80 0)"
                      >
                        <Character04 />
                      </svg>
                    </div>
                  </div>
                </button>

                <div className="-mt-1">
                  <p
                    onClick={MoveUp}
                    className="mx-3 pl-1.5 ml-5  transform translate-y-2 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="mb-1 transform -translate-x-0.5 fill-slate-400"
                    >
                      <path d="M24 22h-24l12-20z" />
                    </svg>
                  </p>
                  <div className="flex">
                    <p onClick={MoveLeft} className="mx-2  cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="mt-1 fill-slate-400"
                      >
                        <path d="M3 12l18-12v24z" />
                      </svg>
                    </p>
                    <p onClick={MoveRight} className="mx-2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="mt-1 fill-slate-400"
                      >
                        <path d="M21 12l-18 12v-24z" />
                      </svg>
                    </p>
                  </div>
                  <p
                    onClick={MoveDown}
                    className="mx-3 pl-1.5 ml-5 transform -translate-y-2 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 24 24"
                      className="mt-2 transform -translate-x-0.5 fill-slate-400"
                    >
                      <path d="M12 21l-12-18h24z" />
                    </svg>
                  </p>
                </div>
              </div>

              <div className="relative object-center flex w-full mx-auto justify-center h-152 object-cover ">
                <TransformComponent centerOnInit>
                  <div ref={ref} className="">
                    <div className="relative">
                      <Map className="absolute top-0" />
                      <div className=" absolute top-0 inset-x-0 h-152">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1000 550"
                        >
                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(0);
                              setSelectRef(char01);
                              openCharMenuMain();
                            }}
                            ref={char01}
                          >
                            <Character01 />
                          </g>
                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(1);
                              setSelectRef(char02);
                              openCharMenuMain();
                            }}
                            ref={char02}
                          >
                            <Character02 />
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(2);
                              setSelectRef(char03);
                            }}
                            ref={char03}
                          >
                            <Character03 />
                          </g>
                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(3);
                              setSelectRef(char04);
                            }}
                            ref={char04}
                          >
                            <Character04 />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="w-screen border h-full invisible">
                      space
                    </div>
                  </div>
                </TransformComponent>
                <div className="absolute top-4 text-slate-400  left-2 font-gyparody font-semibold">
                  <p onClick={MoveLeft} className="mt-0">
                    Game Id: 1209
                  </p>
                  <p onClick={Flip} className="-mt-1">
                    Turn #: 24
                  </p>
                </div>
              </div>
            </>
          )}
        </TransformWrapper>

        <div className="hidden font-nunito absolute bottom-8 space-x-0 lg:space-x-2 space-y-1 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center inset-x-0">
          <div className="">
            <PlayModal />
          </div>
          <div className="">
            <ClaimModal />
          </div>
          <div className="">
            <BuyModal />
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <CharMenu />
        </div>
      </div>
      <div className="w-full justify-center  flex flex-col items-center">
        <div className="h-96 rounded-md w-3/4 p-5 bg-gradient-to-b from-teal-400 to-sky-800 mt-4">
          <p className="font-gyparody font-bold text-white text-6xl mt-8 w-full flex-mx-auto text-center justify-center">
            On-Chain.
            <br />
            Turn-Based.
            <br />
            Strategy Game.
          </p>
        </div>
        <div className="h-96 rounded-md w-3/4 bg-gradient-to-b from-teal-400 to-sky-800 mt-4">
          <p className="font-gyparody font-bold text-white text-6xl mt-8 w-full flex-mx-auto text-center justify-center">
            equip characters.
            <br />
            fight Battles.
            <br />
            win NFTs.
            <br />
            repeat.
          </p>
        </div>
        <div className="h-96 rounded-md w-3/4 bg-gradient-to-b from-teal-400 to-sky-800 mt-4">
          <p className="font-gyparody font-bold text-white text-6xl mt-8 w-full flex-mx-auto text-center justify-center">
            Launch Starter Packs.
            <br />
            Free To Mint.
            <br />
            Available Through June.
          </p>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        #title {
          font-family: gyparody;
        }

        @font-face {
          font-family: gyparody;
          font-weight: 400;
          font-style: normal;

          src: url("https://use.typekit.net/jdq8vah.css");
        }

        @font-face {
          font-family: lores-12-narrow, sans-serif;
          font-weight: 400;
          font-style: normal;
          src: url("https://use.typekit.net/jdq8vah.css");
        }

        @font-face {
          font-family: futura-pt, sans-serif;

          font-weight: 300;

          font-style: normal;
          src: url("https://use.typekit.net/pcf5uvh.css");
        }

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
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
        }

        html {
          font-family: sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
