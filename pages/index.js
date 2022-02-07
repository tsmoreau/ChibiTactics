import { Fragment, useState, useEffect, useRef, useLayoutEffect } from "react";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import Map from "../components/Samples/Map";
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

  let [CharPos, setCharPos] = useState([4, 5, 60, 61]);
  let [CharFace, setCharFace] = useState([1, 1, 0, 0]);
  let [MoveX, setMoveX] = useState(0);
  let [MoveY, setMoveY] = useState(0);
  let [Face, setFace] = useState(0);

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
                  <p className="text-4xl font-gyparody font-black  drop-shadow-sm text-transparent tracking-tight bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600">
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
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-slate-400 mb-1"
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
                {Selected === 0 ? (
                  <div className="flex mx-auto text-center">**01**</div>
                ) : (
                  <div></div>
                )}
                {Selected === 1 ? (
                  <div className="flex mx-auto text-center">**02**</div>
                ) : (
                  <div></div>
                )}
                {Selected === 2 ? (
                  <div className="flex mx-auto text-center">**03**</div>
                ) : (
                  <div></div>
                )}
                {Selected === 3 ? (
                  <div className="flex mx-auto text-center">**04**</div>
                ) : (
                  <div></div>
                )}
                <button
                  onClick={() => {
                    setSelected(0);
                    setSelectRef(char01);
                  }}
                >
                  CHAR 01
                </button>
                <button
                  onClick={() => {
                    setSelected(1);
                    setSelectRef(char02);
                  }}
                >
                  CHAR 02
                </button>
                <button
                  onClick={() => {
                    setSelected(2);
                    setSelectRef(char03);
                  }}
                >
                  CHAR 03
                </button>
                <button
                  onClick={() => {
                    setSelected(3);
                    setSelectRef(char04);
                  }}
                >
                  CHAR 04
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
                            }}
                            ref={char01}
                          >
                            <g
                              stroke="#010101"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-name="Layer 3"
                              className="cursor-pointer "
                            >
                              <path
                                fill="#849558"
                                strokeWidth="0.123"
                                d="M499.64 107.85l.73-.83v-.51s2.15.8 2.51 1.78c.49 1.32-.47 5.74.82 9.56l-.39-.75-.25 1.35a2.26 2.26 0 01-.48-1 13.79 13.79 0 00-.29 1.76 2 2 0 01-.91-1.18c-.54-.08-1.23.87-1.23.87a1.47 1.47 0 01-1-1.3 9.78 9.78 0 00-.84 2 3.22 3.22 0 00-1.93-.82 3.77 3.77 0 01-1.69 1.15s0-.87-.23-.92c-.06.31-.73.75-.73.75a3.87 3.87 0 010-1.26c1.54-2.96 5.91-10.65 5.91-10.65z"
                              ></path>
                              <path
                                fill="#6f8143"
                                strokeWidth="0.061"
                                d="M496 105c0-2.17 1.36-3.93 3-3.93s3 1.76 3 3.93-1.36 3.94-3 3.94-3-1.78-3-3.94z"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeWidth="0.123"
                                d="M499.81 105.39l.07 1c.61.62 1.49.59 2.29 1.46s.14 1.18 1 2.08 2.61.78 2.42 1.56-1.5.42-2.6-.09a4.28 4.28 0 01-1.72-2 3.71 3.71 0 00-.35 2c.1 1.26.52 1.64.74 3a20.84 20.84 0 01-.17 5.19l.42.31h-2.14a27.89 27.89 0 000-4.68 4.87 4.87 0 00-.64-1.45 8.12 8.12 0 00-.64 1.54 32.47 32.47 0 00-.17 4.59h-2.31l.45-.32a32.58 32.58 0 01-.17-5.28 25.28 25.28 0 00.37-2.69 7.41 7.41 0 00-.31-2.22 6 6 0 00-1.28 2c-.14.48-.42 3.21-1.15 2.9s-.08-2.74.05-3.39a6.76 6.76 0 011.39-3.43c1-1.2 1.59-1.11 2.7-1.38.18 0 .15-.87.15-.87"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeWidth="0.123"
                                d="M500.62 103.49c.41 1.87-1.05 2-1.52 2a2.54 2.54 0 01-1.76-.75c-.77-.7-1.17-1.17-1.16-1.9s.05-2.32 2.14-2.32 2.57.74 2.3 2.97z"
                              ></path>
                              <path
                                fill="#010101"
                                strokeWidth="0.123"
                                d="M498.32 103.88c0-.16.05-.3.11-.3s.12.14.12.3-.05.29-.12.29-.11-.17-.11-.29zM500.13 103.7c0-.16.05-.29.11-.29s.11.13.11.29-.05.29-.11.29-.11-.13-.11-.29z"
                              ></path>
                              <path
                                fill="none"
                                strokeWidth="0.123"
                                d="M499.2 104.42c.34.24.48.1.58 0"
                              ></path>
                              <path
                                fill="#519d65"
                                strokeWidth="0.123"
                                d="M499.19 115.15c2.18.76 4.3-.3 2.29-3.3a2.27 2.27 0 00-.05-1.59c1 .71 2.11.12 1.65-1.2a6.22 6.22 0 00-2.69-2.55c0 .47.07 1.17-1 1.32s-1.82-1.7-1.82-1.7-2.45 0-3.57 3.65c-.29 1.15 1.59 1.69 2.43.48a3.75 3.75 0 000 1.67c-1.77 4.12.79 3.78 2.76 3.22z"
                              ></path>
                              <path
                                fill="#e9e27b"
                                strokeWidth="0.123"
                                d="M496.32 111.47h5.26a.16.16 0 01.16.16v.37a.16.16 0 01-.16.16h-5.26a.16.16 0 01-.16-.16v-.36a.16.16 0 01.16-.17z"
                              ></path>
                              <path
                                fill="#e9e27b"
                                strokeWidth="0.123"
                                d="M498.45 111.8a.82.82 0 11.8.67.75.75 0 01-.8-.67z"
                              ></path>
                              <path
                                fill="#849558"
                                strokeWidth="0.123"
                                d="M498.18 113.22a2.16 2.16 0 00.53 1c0-1.46.81-3.65.67-6.39 0-.3 0-1.57-1.82-1.7a2.94 2.94 0 00-2.72.94 7.67 7.67 0 00-1.45 3.62c-.38 3.82-1.18 4.62-1.18 7.32.32-.46.35-.43.58-.73a6 6 0 010 2.06 9.8 9.8 0 001.79-1.64 8.1 8.1 0 01.46 1.45 6.83 6.83 0 001-1.78 2 2 0 00.65.73 3.12 3.12 0 01.33-.9 9.71 9.71 0 00.91 1.38c-.39-2.04.32-3.95.25-5.36z"
                              ></path>
                              <path
                                fill="#849558"
                                strokeWidth="0.123"
                                d="M499.62 107.78c0-.8.32-1.72 1.25-1.38a3 3 0 012.1 2.14c0 .73-1 1-2.06 1.15-1.67.19-1.3-1.11-1.29-1.91z"
                              ></path>
                              <path
                                fill="#e98079"
                                strokeWidth="0.123"
                                d="M500.35 102.55c0 .2 0-.59-.11-.38s-.36.67-.6.67a3.29 3.29 0 00-.11-.44 2.19 2.19 0 01-.73.75c0-.33.09-.47-.07-.75a2.72 2.72 0 01-1.09 1.18c-.21 1 1.46 1.92.29 3.82a1.81 1.81 0 01-.39-.68l-.34.84c-.1-.73-2.51-1.64-2-3.38.36-1.29 0-3.9 3.3-3.89 2.36 0 2.17 1.71 2.47 2.29 1.58 3 1 3.93.58 4.61-.18-.51-.12-.66-.12-.66a2.07 2.07 0 01-.52 1.23 2.26 2.26 0 00-1-1.25v-1.12s1.06-.2.8-1.9c0-.2.05-.82 0-1.32-.08-.3-.18.46-.36.38z"
                              ></path>
                              <path
                                fill="#d2cd6a"
                                strokeWidth="0.123"
                                d="M498.73 107.64h1.51l-.64 1.54zM499 107.64l.71 1.37"
                              ></path>
                              <path
                                fill="#d28b6b"
                                strokeWidth="0.123"
                                d="M499.43 107.91l.25.51.15-.51z"
                              ></path>
                              <path
                                fill="#849558"
                                strokeWidth="0.123"
                                d="M496.88 107.14c.07-.91-.57-1.34-.72-1.8 0-.87 1.75-4.33 3.19-4.29a1.81 1.81 0 011.71 1 5.25 5.25 0 011 3c0 1-.33 1.09-.42 1.55-.15.65.27.49.27.49a2.26 2.26 0 00.8-.8 2.22 2.22 0 00.2-1.42 10.57 10.57 0 00-1.65-3.25c-.38-.57-.52-1.75-3.06-1.64-2.92.12-2.87 2.5-2.87 2.5l-.45 1.68a1.82 1.82 0 001.33 2.69"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeWidth="0.123"
                                d="M500.67 103.48a13.7 13.7 0 012.27-.16 8.61 8.61 0 01-2.25 1.07M496.91 103.88a16.23 16.23 0 00-2.91.12 16.1 16.1 0 002.5.92c.76.12.63-.35.56-.53"
                              ></path>
                              <path
                                fill="none"
                                strokeWidth="0.123"
                                d="M500.69 103.93a2.15 2.15 0 01.76-.27M497 104.27a6.88 6.88 0 00-1.51-.09"
                              ></path>
                              <path
                                fill="#b18a61"
                                strokeWidth="0.123"
                                d="M503.72 119.9c0 .44 1.15-1.93 1.13-4.47a12.64 12.64 0 011.35-6.7c1.2-2.75-.29-3.23 1.1-5.55 1-1.73.1-2.46.1-2.46s-1.77-1.48-1.49 4.78c-.53 2.19.31 1.48-.63 4-.74 2-.86 1.68-.63 4.33s-.98 5.64-.93 6.07z"
                              ></path>
                              <path
                                fill="none"
                                strokeWidth="0.123"
                                d="M507.23 102s.1-.61-.26-.61-.28 1.07-.15 1.43.67 0 .67 0"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeWidth="0.123"
                                d="M505.09 111.24l.44.13a.13.13 0 01.08.16h0a.12.12 0 01-.15.08l-.44-.12a.13.13 0 01-.09-.16h0a.13.13 0 01.16-.09zM505 111.54l.44.12a.13.13 0 01.09.16h0a.13.13 0 01-.16.09l-.44-.13a.13.13 0 01-.09-.16h0a.13.13 0 01.16-.08zM504.55 111.11l-.05-.38a.14.14 0 01.12-.13h0a.1.1 0 01.13.09l.05.39a.11.11 0 01-.11.12h0a.12.12 0 01-.14-.09zM505.16 110.94l.44.13a.12.12 0 01.09.15h0a.13.13 0 01-.16.09l-.44-.13a.12.12 0 01-.09-.18h0a.13.13 0 01.16-.06z"
                              ></path>
                            </g>
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(1);
                              setSelectRef(char02);
                            }}
                            ref={char02}
                          >
                            <g
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#010101"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.097"
                            >
                              <path
                                fill="#fee969"
                                d="M495.46 119.78h4c2.24.1 3.32-1.13 4.13-1.66-1-.12 0-7.36-.57-10.45-.8-1.17-7.56 12.11-7.56 12.11z"
                              ></path>
                              <path
                                fill="#e4c29c"
                                d="M499.88 104.7l.07 1.1c.64.64 1.57.61 2.41 1.52s.14 1.25 1.07 2.19 2.74.82 2.54 1.63-1.58.44-2.73-.09a4.57 4.57 0 01-1.81-2.09 3.89 3.89 0 00-.36 2.13c.1 1.33.54 1.72.78 3.17a22.21 22.21 0 01-.18 5.45l.44.33h-2.25a29.51 29.51 0 000-4.91 4.89 4.89 0 00-.68-1.53 8.33 8.33 0 00-.66 1.62 34.64 34.64 0 00-.18 4.82h-2.42l.47-.34a34.86 34.86 0 01-.19-5.54 25.75 25.75 0 00.4-2.82 7.84 7.84 0 00-.33-2.34 6.44 6.44 0 00-1.35 2.13c-.14.5-.43 3.36-1.2 3s-.08-2.88.06-3.56a7 7 0 011.46-3.6c1.07-1.26 1.66-1.17 2.82-1.45.2 0 .17-.91.17-.91"
                              ></path>
                              <path
                                fill="#e4c29c"
                                d="M500.73 102.7c.43 2-1.1 2.12-1.59 2.12a2.62 2.62 0 01-1.85-.79c-.81-.73-1.23-1.23-1.22-2a2.08 2.08 0 012.24-2.43c2.07 0 2.69.77 2.42 3.1z"
                              ></path>
                              <path
                                fill="#010101"
                                d="M498.32 103.11c0-.17.05-.3.12-.3s.11.13.11.3-.05.31-.11.31-.12-.14-.12-.31zM500.22 102.93c0-.17 0-.31.11-.31s.12.14.12.31-.05.31-.12.31-.11-.14-.11-.31z"
                              ></path>
                              <path
                                fill="none"
                                d="M499.24 103.68c.36.26.51.11.61 0"
                              ></path>
                              <path
                                fill="#519d65"
                                d="M499.3 113.77c.22.26.26 1.33.58 1.36 2.62.23 2.65.11 1.76-3.65a5.32 5.32 0 00-.21-2.52c.62 1.85 1.6 1.39 1.79-.19-.21-1.3-1.77-2.4-2.89-2.72 0 .49-.65.93-.79 1.87a2.94 2.94 0 00-2.11-2.22c-.74 0-2.48.31-3.47 3.8 1.17 1.18 1.48 1.22 2.33-.5a8.23 8.23 0 000 2.57c-.47 3.91-1.37 4 2.22 3.65.21-.01.56-1.02.79-1.45z"
                              ></path>
                              <path
                                fill="#8c6e4c"
                                fillRule="evenodd"
                                d="M506.65 104.41l-3 15.63-.4-.12 2.92-15.65z"
                              ></path>
                              <path
                                fill="#b7e3ea"
                                fillRule="evenodd"
                                d="M506.65 104.41l-.45-.14-.8-2.31.68.25 1.13-1.54.36 1.24.56.3zM506.08 102.21l.4.33M507.57 101.91l-.14.59"
                              ></path>
                              <path
                                fill="#e4c29c"
                                d="M505.42 110.84l.46.14a.13.13 0 01.09.16h0a.13.13 0 01-.16.09l-.47-.13a.14.14 0 01-.09-.17h0a.14.14 0 01.17-.09zM505.32 111.15l.46.14a.13.13 0 01.09.16h0a.13.13 0 01-.17.09l-.46-.13a.14.14 0 01-.09-.17h0a.14.14 0 01.17-.09zM504.86 110.71l-.05-.41a.12.12 0 01.12-.13h0a.12.12 0 01.14.1l.05.4c0 .07-.05.12-.12.14h0a.12.12 0 01-.14-.1zM505.5 110.53l.46.13a.13.13 0 01.09.17h0a.13.13 0 01-.16.09l-.47-.14a.13.13 0 01-.09-.16h0a.13.13 0 01.17-.09z"
                              ></path>
                              <path
                                fill="#fee969"
                                d="M498.17 106.37c.86-.17 1.37.76 1.35 1.61-.09 3.36-.73 10-1.95 11-1.44 1.21-3 .89-4.94 0 .81-.56.18-8.13 1.33-10.53 1.38-2.84 2.89-2.82 4.21-2.08z"
                              ></path>
                              <path
                                fill="#fee969"
                                d="M500.81 106.32c-2.27 1-.92 2.44.35 3.4s2.12-1 1.88-2c-.18-.81-1.57-1.72-2.23-1.4zM496.89 104.72c-.63 0-.74 1.16-.74 1.16s1.55 2.09 2.1 2.24c-.21-.86.67-2.67.09-2.91a2.27 2.27 0 00-1.45-.49z"
                              ></path>
                              <path
                                fill="#fee969"
                                d="M499.89 104.7s0 .63.08 1.23a6.72 6.72 0 01.82 2 8.29 8.29 0 00.49-1.37c.06-.23.4-1.41-.63-1.65a4.92 4.92 0 00-.76-.21zM497.24 104.74h1v.36z"
                              ></path>
                              <path
                                fill="#8c7d4b"
                                d="M498.76 107.86c0-.3.34-.55.76-.55s.76.25.76.55-.34.56-.76.56-.76-.25-.76-.56z"
                              ></path>
                              <path
                                fill="#fee969"
                                d="M496.83 103.11l.47.39a5.42 5.42 0 01.16-2c.31-.8.31-.91 1.08-1.16a2.62 2.62 0 012 .18 1.38 1.38 0 01.25.87s.31-1.16-.37-1.7a3.81 3.81 0 00-2.76-.39 1.91 1.91 0 00-.86.38 1.33 1.33 0 00-.06-.46c-.06.19-.33.85-.33.85l-.65.3.41.12a3.06 3.06 0 00-.22.72c.06 1.47.29 1.68.29 1.68zM498.85 104.24c.22 0 1 .09 1.28-.13.24.25 0 1.18 0 1.18l-.44-.23-.19.35s-.63-.75-.65-1.17z"
                              ></path>
                              <path
                                fill="#e4c29c"
                                d="M500.79 102.69a6.81 6.81 0 001.85-1 3.94 3.94 0 00-1.17 1.52 1 1 0 01-.76.74M496.83 103.11a8.77 8.77 0 01-2.2-1.44 2.11 2.11 0 01.77 1.19c.12.6.32 1.16.68 1.22.8.12 1-.24.93-.43"
                              ></path>
                              <path
                                fill="none"
                                d="M500.79 103.57s.16-.73.56-.76M496.55 103.65s-.2-.63-.67-.54"
                              ></path>
                            </g>{" "}
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(2);
                              setSelectRef(char03);
                            }}
                            ref={char03}
                          >
                            <g
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#010101"
                              strokeWidth="0.128"
                            >
                              <path
                                fill="#d3c589"
                                strokeMiterlimit="10.8"
                                d="M496.62 106.5c-3-.84-4.07 6.06-5.3 6.36 1.73.15 2-.47 2-.47s.21.45-.39.8a5 5 0 002.53-.81s-.05.61-.43.79c.92.18 5.78-.9 6.43-2.79a13.62 13.62 0 00.32-4.12 9.22 9.22 0 00-5.16.24z"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M499.92 104.73l.07 1.08c.64.65 1.55.61 2.38 1.52s.15 1.23 1.07 2.17 2.72.81 2.52 1.62-1.56.43-2.71-.1a4.46 4.46 0 01-1.8-2.06 3.89 3.89 0 00-.36 2.11c.1 1.32.54 1.71.77 3.14a21.49 21.49 0 01-.17 5.4l.44.33h-2.24a28.93 28.93 0 000-4.86 5 5 0 00-.67-1.52 8.17 8.17 0 00-.67 1.62 35 35 0 00-.17 4.77H496l.47-.33a34.18 34.18 0 01-.19-5.49 28.09 28.09 0 00.4-2.8 7.94 7.94 0 00-.33-2.32 6.29 6.29 0 00-1.33 2.11c-.15.5-.43 3.33-1.19 3s-.09-2.86.06-3.53a7.05 7.05 0 011.45-3.57c1.06-1.25 1.65-1.16 2.8-1.44.2 0 .17-.91.17-.91"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M500.76 102.76c.43 1.95-1.1 2.09-1.59 2.09a2.66 2.66 0 01-1.83-.79c-.8-.72-1.21-1.2-1.21-2a2.06 2.06 0 012.22-2.41c2.06.03 2.65.79 2.41 3.11z"
                              ></path>
                              <path
                                fill="#519d65"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M502 104.14c-1.17-.71 0-4.72-3.18-4.92s-3.18 2.27-3.18 2.27a10.65 10.65 0 01-.63 3.37c.71-.34.83-.71.83-.71a2.76 2.76 0 01.08 1c.54-.14 1.07-1 1.07-1l.3.81.26-.64-.44-.37a1.31 1.31 0 01-.33-1c.13 0 0 .48.74.66a2.47 2.47 0 01.32-2.56 1.34 1.34 0 01.32.88 2.56 2.56 0 00.93-1 1.38 1.38 0 01.33.93 1.17 1.17 0 00.58-.86 1.23 1.23 0 01.36.89c.29-.49.16-1.06.29-.85a2.6 2.6 0 01.16 1.73 3.56 3.56 0 010 1.22 1.34 1.34 0 00.64.71l-.07-.82s.06.55.62.26z"
                              ></path>
                              <path
                                fill="#010101"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M498.36 103.16c0-.17.06-.31.11-.31s.13.13.13.31-.06.31-.13.31-.11-.14-.11-.31zM500.25 103c0-.17.05-.31.12-.31s.11.13.11.31-.06.31-.11.31-.12-.17-.12-.31z"
                              ></path>
                              <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M499.28 103.73c.36.26.51.11.61 0"
                              ></path>
                              <path
                                fill="#519d65"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M499.34 113.72c.22.25.33 4.67.65 4.71.95.08 2.18.44 2.18-.39a29.86 29.86 0 00-.51-6.58 5.37 5.37 0 00-.2-2.5c.61 1.82 1.79 2.11 2 .54-.47-2.47-1.44-3-3.08-3.43 0 .48-.65 3.15-.78 4.08 0-1.39-.78-4-2.09-4.43-.73 0-2.91.6-3.74 5.32 1.72.82 1.71-.88 2.6-2a8.67 8.67 0 000 2.54 31.35 31.35 0 00-.24 6.34c.1.68.76.66 2.26.52.18-.04.73-4.29.95-4.72z"
                              ></path>
                              <path
                                fill="#dcdcdc"
                                strokeMiterlimit="10.8"
                                d="M506.45 109.36l1.89-5.62-.12-1.54-1.05 1.11-2 5.69z"
                              ></path>
                              <path
                                fill="#d3c589"
                                strokeMiterlimit="10.8"
                                d="M505.33 109.44l.75.26 1.13-.1-2.68-.89z"
                              ></path>
                              <path
                                fill="#93704a"
                                strokeMiterlimit="10.8"
                                d="M505.35 109.46l-.81 3 .48.15 1-2.9z"
                              ></path>
                              <path
                                fill="#d3c589"
                                strokeMiterlimit="10.8"
                                d="M504.43 112.52a.36.36 0 11.72 0 .37.37 0 01-.38.34.36.36 0 01-.34-.38z"
                              ></path>
                              <path
                                fill="#e4c29c"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M505.41 110.82l.45.13a.14.14 0 01.09.17h0a.14.14 0 01-.17.09h0l-.45-.14a.13.13 0 01-.09-.16h0a.15.15 0 01.17-.09zM505.31 111.13l.45.13a.14.14 0 01.09.17h0a.14.14 0 01-.17.09l-.45-.14a.13.13 0 01-.09-.16h0a.14.14 0 01.17-.09zM504.85 110.7v-.4a.14.14 0 01.12-.14h0a.12.12 0 01.14.09h0l.05.4a.14.14 0 01-.12.13h0a.12.12 0 01-.15-.08zM505.48 110.51l.46.13a.15.15 0 01.09.17h0a.15.15 0 01-.17.09h0l-.45-.14a.13.13 0 01-.09-.16h0a.13.13 0 01.16-.09zM500.82 102.73a6.65 6.65 0 001.84-1 3.88 3.88 0 00-1.16 1.51.94.94 0 01-.77.73M496.89 103.16a9.2 9.2 0 01-2.19-1.43 2 2 0 01.76 1.18c.12.6.32 1.15.68 1.21.78.13 1-.23.93-.42"
                              ></path>
                              <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M500.82 103.61s.16-.71.54-.75M496.61 103.69s-.2-.62-.67-.53"
                              ></path>
                              <path
                                fill="#b3b3b3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M496.38 111.54c-.59.8 2 3.11 2.94 3.11 1.28 0 3-2.5 2.34-3.19a38.8 38.8 0 01-5.28.08z"
                              ></path>
                              <path
                                fill="#b3b3b3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M499.48 107c.88 0 .47-1 .44-1.33s.8.24 1.28.51c.8 4.47 1.45 5.69-1.65 5.75-4 .06-3.59 0-3.3-5.66.24-.18 1.57-1 1.73-.75.52.78.53 1.48 1.5 1.48z"
                              ></path>
                              <path
                                fill="#b3b3b3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M495.56 106.06c-1.56 1.14-.93 1.86-.32 2s2.6-1.07 2.48-1.62-.43-1.65-2.16-.38zM502.29 105.83c1.51 1 1.09 1.6.6 1.87s-2.13-.6-2.2-1.18a7.18 7.18 0 00-.08-.83c0-.11 0 0-.24-.07.15-.29 1.43-.1 1.92.21z"
                              ></path>
                              <path
                                fill="#b3b3b3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M495.58 106.52c-.07-.2-.45-1-.45-1l1.16.51c-.06.35-.23.58-.71.49zM502.69 106.16c.06-.24.29-.83.29-.83l-1 .52s.46.44.71.31zM497.37 105.88c0 1.39 3.42 1.75 3.4.05 0-1.17-.79-.47-1.61-.5s-1.79-.43-1.79.45z"
                              ></path>
                            </g>{" "}
                          </g>

                          <g
                            className="cursor-pointer"
                            onClick={() => {
                              setSelected(3);
                              setSelectRef(char04);
                            }}
                            ref={char04}
                          >
                            <g
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#010101"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.125"
                              data-name="Layer 2"
                            >
                              <path
                                fill="#e4c29c"
                                d="M499.85 105.09l.06 1.06c.63.63 1.52.6 2.34 1.48s.14 1.21 1 2.12 2.66.8 2.47 1.59-1.53.42-2.65-.1a4.42 4.42 0 01-1.75-2 3.83 3.83 0 00-.35 2.07c.1 1.28.52 1.67.75 3.07a21.06 21.06 0 01-.17 5.28l.43.32h-2.18a28.87 28.87 0 000-4.76 4.77 4.77 0 00-.66-1.48 7.91 7.91 0 00-.65 1.57 33.59 33.59 0 00-.17 4.67H496l.46-.33a34.47 34.47 0 01-.18-5.37 26.87 26.87 0 00.39-2.74 7.76 7.76 0 00-.33-2.26 6.2 6.2 0 00-1.3 2.06c-.14.49-.42 3.26-1.16 3s-.08-2.79.05-3.45a6.84 6.84 0 011.41-3.49c1-1.22 1.62-1.13 2.74-1.41.19 0 .16-.88.16-.88"
                              ></path>
                              <path
                                fill="#e4c29c"
                                d="M500.67 103.16c.42 1.9-1.07 2-1.55 2a2.52 2.52 0 01-1.78-.77c-.79-.71-1.19-1.19-1.19-1.94a2 2 0 012.18-2.35c2 .05 2.61.79 2.34 3.06z"
                              ></path>
                              <path
                                fill="#010101"
                                d="M498.33 103.55c0-.16.05-.29.12-.29s.11.13.11.29-.05.3-.11.3-.12-.13-.12-.3zM500.17 103.37c0-.16.05-.29.11-.29s.12.13.12.29 0 .3-.12.3-.11-.13-.11-.3z"
                              ></path>
                              <path
                                fill="none"
                                d="M499.22 104.11c.35.24.49.1.59 0"
                              ></path>
                              <path
                                fill="#519d65"
                                d="M499.28 113.88c.21.25.33 4.57.64 4.6.92.08 2.13.43 2.13-.38a29.63 29.63 0 00-.5-6.43 5.28 5.28 0 00-.2-2.45c.6 1.79 1.75 2.07 1.93.53-.45-2.41-1.4-3-3-3.35 0 .47-.63 3.08-.76 4 0-1.37-.77-3.94-2-4.33-.72 0-2.85.58-3.65 5.2 1.69.8 1.67-.86 2.54-2a8.34 8.34 0 000 2.49 31.43 31.43 0 00-.24 6.2c.09.67.75.64 2.21.52.15-.03.68-4.18.9-4.6z"
                              ></path>
                              <path
                                fill="#8c6e4c"
                                d="M507.13 100.15l-2.08 1.85.93 2.7-2.84 15.18.39.11 2.87-15.15 1.8-2zm-.14.59l.85 1.94-1.61 1.67-.83-2.28z"
                              ></path>
                              <path
                                fill="#b5b5b5"
                                d="M506.28 104.05a3.86 3.86 0 00.4 2.48c.35.17-.08-1.94 0-2.07.21 0 .62 2.64 0 2.51-.68-.17-.99-3.12-.4-2.92z"
                              ></path>
                              <path
                                fill="#b5b5b5"
                                d="M506.41 104a3.41 3.41 0 00.79 2c.35.07-.14-1.13-.39-1.69.24-.27 1.21 1.91.56 2s-1.54-2.46-.96-2.31z"
                              ></path>
                              <path
                                fill="#e4c29c"
                                d="M505.21 111.05l.45.13a.13.13 0 01.09.16h0a.12.12 0 01-.16.08l-.45-.13a.13.13 0 01-.09-.16h0a.13.13 0 01.16-.08zM505.11 111.35l.45.13a.13.13 0 01.09.16h0a.13.13 0 01-.16.09l-.45-.14a.13.13 0 01-.09-.16h0a.14.14 0 01.16-.08zM504.67 110.92l-.05-.4c0-.06 0-.11.12-.12h0a.12.12 0 01.14.09v.39a.12.12 0 01-.11.13h0a.12.12 0 01-.1-.09zM505.29 110.74l.45.13a.13.13 0 01.09.16h0a.13.13 0 01-.16.09l-.45-.13a.13.13 0 01-.09-.16h0a.13.13 0 01.16-.09zM500.73 103.15a6.77 6.77 0 001.79-1 3.9 3.9 0 00-1.13 1.48.93.93 0 01-.74.72M496.89 103.55a8.67 8.67 0 01-2.14-1.4 2 2 0 01.75 1.16c.12.58.32 1.12.66 1.18.77.12 1-.23.91-.42"
                              ></path>
                              <path
                                fill="none"
                                d="M500.73 104s.15-.7.54-.73M496.62 104.07s-.2-.6-.65-.52"
                              ></path>
                              <path
                                fill="#daf0f7"
                                d="M496.44 101.07c.64-.31 2.63-.31 3.08.38.77-.86 1-.45 1-.45a3.54 3.54 0 01.21 1.1c.31.58.75.47.95.26a.77.77 0 01-.52-.75 2.57 2.57 0 00-.22-1.25c-.23-.56-1.43-.38-1.43-.38l.46-.35a7.58 7.58 0 00-1.44.27s0-.11.23-.47c-.4 0-1.25.83-1.25.83a.75.75 0 01.23-.78l-.91.75s-.57-.16-.39.84z"
                              ></path>
                            </g>
                            );{" "}
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

        <div className="font-nunito absolute bottom-8 space-x-0 lg:space-x-2 space-y-1 lg:space-y-0 flex flex-col lg:flex-row items-center justify-center inset-x-0">
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
