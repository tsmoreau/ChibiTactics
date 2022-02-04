import { Fragment, useState, useEffect, useRef } from "react";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import Map from "../components/Samples/Map";
import "animate.css/animate.min.css";

import { Tween, Timeline } from "react-gsap";
import {
  TransformWrapper,
  TransformComponent
} from "@tiendeo/react-zoom-pan-pinch";

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
  let [isYggOpen, setYggOpen] = useState(false);
  let [isPlayOpen, setIsPlayOpen] = useState(false);
  let [isBuyOpen, setIsBuyOpen] = useState(false);
  let [isClaimOpen, setIsClaimOpen] = useState(false);

  function closeYgg() {
    setYggOpen(false);
  }

  function openYgg() {
    setYggOpen(true);
  }

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

  const sign = usePersonalSign();

  const handleSign = async () => {
    const msg = "Whitelisted for Anthropos";
    const sig = await sign(msg);
    console.log(sig);
    console.log("isValid", verifyMessage(msg, sig) === account);
  };

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

  function MapPiece() {
    return <></>;
  }

  function App() {
    const users = ["user1", "user2", "user3"];
    const final = [];

    for (let user of users) {
      final.push(<li key={user}>{user}</li>);
    }
    return (
      <div className="App">
        <ul>{final}</ul>
      </div>
    );
  }

  const ref = useRef(null);

  useEffect(() => {
    console.log("width", ref.current.offsetWidth);
  }, []);

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
            ...rest
          }) => (
            <>
              <div className="font-lores text-slate-400 spacing-x-3 absolute right-2 top-4 z-50">
                <button onClick={() => resetTransform()}>X</button>
              </div>
              <div className="absolute right-6  top-6 z-50 flex grid gap-0.5 grid-rows-8 grid-cols-8 ml-12 spacing-x-3 z-50">
                <button
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * 20),
                      -((ref.current.offsetHeight / 10) * 5),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                />
                {/* X + 2.5 \ Y + 1.5 */}
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 1)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 1)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                {/* X + 2.5 \ Y + 1.5 */}
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 2)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 2)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 3)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 3)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 4)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 4)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 5)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 5)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 6)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 6)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 + 2.5 * 7)),
                      -((ref.current.offsetHeight / 10) * (5 + 1.75 * 7)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * 17.5),
                      -((ref.current.offsetHeight / 10) * 6.75),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (17.5 + 2.5 * 1)),
                      -((ref.current.offsetHeight / 10) * (6.75 + 1.75 * 1)),
                      5
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * (20 * 2.25)),
                      -((ref.current.offsetHeight / 10) * (5 * 2.75)),
                      10
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
                <div
                  onClick={() =>
                    setTransform(
                      -((ref.current.offsetWidth / 10) * 95),
                      -((ref.current.offsetHeight / 10) * 31),
                      20
                    )
                  }
                  className="hover:bg-slate-200 cursor-pointer h-2.5 w-2.5 bg-slate-400"
                ></div>
              </div>

              <div className="relative object-center flex w-full mx-auto justify-center h-152 object-cover ">
                <TransformComponent centerOnInit>
                  <div ref={ref} className="">
                    <Map className="" />
                    <div className="w-screen border h-full invisible">
                      space
                    </div>
                  </div>
                </TransformComponent>
                <div className="absolute bottom-0"></div>
              </div>
              <div className="absolute hidden text-xs left-12 bottom-16 border rounded-md px-2 py-1 font-nunito text-white">
                <p className="mt-0 font-gyparodysemi">Game Id: 1209</p>
                <p className="-mt-1">Turn #: 24</p>
                <p className="-mt-1">Player 1: 0xy98whfoi982398h3v4knwlef92</p>
                <p className="-mt-1">Player 2: 0x082j49782hf02j4gf08223f892</p>
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

          font-weight: 900;

          font-style: normal;
          src: url("https://use.typekit.net/jdq8vah.css");
        }

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

        @font-face {
          font-family: gyparody;
          font-weight: 700;
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
