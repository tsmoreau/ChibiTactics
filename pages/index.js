import { Fragment, useState, useEffect } from "react";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Utils/Account";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import "animate.css/animate.min.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import ETHBalance from "../components/Utils/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import usePersonalSign, { hexlify } from "../hooks/usePersonalSign";
import ScrollAnimation from "react-animate-on-scroll";
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
            className="px-5 py-2 text-lg items-center font-medium text-white bg-emerald-400 rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
            className="px-5 py-2 text-lg items-center font-medium text-white bg-emerald-400 rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            CLAIM PACK
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
                  CLAIM PACK
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
                      onClick={closeClaimModal}
                    >
                      Got it, thanks!
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
            className="px-5 py-2 text-lg items-center font-medium text-white bg-emerald-400 rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            BUY PACK
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  BUY PACK
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
                      onClick={closeBuyModal}
                    >
                      Got it, thanks!
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

  return (
    <div className="bg-th-background w-screen justify-center h-full relative">
      <Head>
        <title>CHIBI TACTICS</title>
        <link rel="icon" href="/favicon.png" />
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
      <div className="h-0 w-full bg-lime-300 invisible">Spacer</div>

      <div className="relative h-144 w-full bg-sky-300 ">
        <div className="font-nunito absolute bottom-6 space-x-2 flex justify-center inset-x-0">
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
        <div className="h-96 rounded-md w-3/4 bg-emerald-300 mt-4">Spacer</div>
        <div className="h-96 rounded-md w-3/4 bg-emerald-300 mt-4">Spacer</div>
        <div className="h-96 rounded-md w-3/4 bg-emerald-300 mt-4">Spacer</div>
      </div>

      <Footer />
      <style jsx>{`
        #title {
          font-family: Futura;
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
