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

  let [CharPos, setCharPos] = useState([1, 13, 26]);
  let [MoveX, setMoveX] = useState(0);
  let [MoveY, setMoveY] = useState(0);
  let [Face, setFace] = useState("R");

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
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-green-400  to-emerald-500 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-green-400  to-emerald-500 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                      className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-1 text-lg items-center font-medium text-white bg-gradient-to-b from-green-400  to-emerald-500 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      CLAIM MY PACK!
                    </button>
                    <button
                      type="button"
                      onClick={openClaimModal}
                      className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-1 text-lg items-center font-medium text-white bg-gradient-to-b from-green-400  to-emerald-500 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
            className="border border-1.5 border-stone-300 font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-green-400  to-emerald-500 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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

  const boxRef = useRef();

  function MoveRight(CharId) {
    if (Face === "L") {
      Flip();
    }

    if (positions[CharPos[Selected]].r === true) {
      gsap.fromTo(
        boxRef.current,
        {
          repeat: 2,
          rotation: 3,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -3,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(boxRef.current, {
        duration: 1,
        x: MoveX + 50,
        y: MoveY + 20
      });
      setMoveX(MoveX + 50);
      setMoveY(MoveY + 20);
      gsap.to(boxRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[0] = CharPos[0] + 1;
    }
    console.log("Character 1 Position", CharPos[0]);
  }

  function MoveLeft(CharId) {
    if (Face === "R") {
      Flip();
    }
    console.log("Left Move?", positions[CharPos[Selected]].l);
    if (positions[CharPos[Selected]].l === true) {
      gsap.fromTo(
        boxRef.current,
        {
          repeat: 2,
          rotation: 3,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -3,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(boxRef.current, {
        duration: 1,
        x: MoveX - 50,
        y: MoveY - 20
      });
      setMoveX(MoveX - 50);
      setMoveY(MoveY - 20);
      gsap.to(boxRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] - 1;
    }
    console.log("Character 1 Position", CharPos[Selected]);
  }

  function MoveDown(CharId) {
    if (Face === "R") {
      Flip();
    }
    console.log("Down Move?", positions[CharPos[Selected]].d);
    if (positions[CharPos[Selected]].d === true) {
      gsap.fromTo(
        boxRef.current,
        {
          repeat: 2,
          rotation: 3,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -3,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(boxRef.current, {
        duration: 1,
        x: MoveX - 50,
        y: MoveY + 20
      });
      setMoveX(MoveX - 50);
      setMoveY(MoveY + 20);
      gsap.to(boxRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] + 8;
    }
    console.log("Character 1 Position", CharPos[Selected]);
  }

  function MoveUp(CharId) {
    if (Face === "L") {
      Flip();
    }
    console.log("Left Move?", positions[CharPos[Selected]].u);
    if (positions[CharPos[Selected]].u === true) {
      gsap.fromTo(
        boxRef.current,
        {
          repeat: 2,
          rotation: 3,
          duration: 0.25,
          transformOrigin: "bottom center",
          ease: "linear",
          yoyo: true
        },
        {
          ease: "linear",
          repeat: 2,
          duration: 0.25,
          rotation: -3,
          transformOrigin: "bottom center",
          yoyo: true
        }
      );

      gsap.to(boxRef.current, {
        duration: 1,
        x: MoveX + 50,
        y: MoveY - 20
      });
      setMoveX(MoveX + 50);
      setMoveY(MoveY - 20);
      gsap.to(boxRef.current, {
        delay: 0.75,
        duration: 0.1,
        rotation: 0,
        transformOrigin: "bottom center",
        ease: "linear"
      });
      CharPos[Selected] = CharPos[Selected] - 8;
    }
    console.log("Character 1 Position", CharPos[Selected]);
  }

  function Flip() {
    if (Face === "R") {
      gsap.to(boxRef.current, {
        transformOrigin: "bottom center",
        scaleX: -1
      });
      setFace("L");
    }
    if (Face === "L") {
      gsap.to(boxRef.current, {
        transformOrigin: "bottom center",
        scaleX: 1
      });
      setFace("R");
    }
  }

  return (
    <div className="bg-th-background w-screen justify-center h-full relative">
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
              <div className="font-lores text-slate-400 spacing-x-3 absolute right-2 top-4 z-50">
                <button onClick={() => resetTransform()}>X</button>
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
                          <g ref={boxRef}>
                            <g
                              stroke="#010101"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              data-name="Layer 3"
                              className="cursor-pointer"
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
                  <p
                    onClick={MoveUp}
                    className="mx-3 pl-1.5 ml-5  transform translate-y-2 cursor-pointer"
                  >
                    ↑
                  </p>
                  <div className="flex">
                    <p onClick={MoveLeft} className="mx-2  cursor-pointer">
                      ←
                    </p>
                    <p onClick={MoveRight} className="mx-2 cursor-pointer">
                      →
                    </p>
                  </div>
                  <p
                    onClick={MoveDown}
                    className="mx-3 pl-1.5 ml-5 transform -translate-y-2 cursor-pointer"
                  >
                    ↓
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
        <div className="h-96 rounded-md w-3/4 p-5 bg-gradient-to-b from-green-400 to-emerald-500 mt-4">
          <p className="font-gyparody font-bold text-white text-6xl mt-8 w-full flex-mx-auto text-center justify-center">
            On-Chain.
            <br />
            Turn-Based.
            <br />
            Strategy Game.
          </p>
        </div>
        <div className="h-96 rounded-md w-3/4 bg-gradient-to-b from-green-400 to-emerald-500 mt-4">
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
        <div className="h-96 rounded-md w-3/4 bg-gradient-to-b from-green-400 to-emerald-500 mt-4">
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
