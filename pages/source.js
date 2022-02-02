import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Utils/Account";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import useEagerConnect from "../hooks/useEagerConnect";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

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

  function ShopMobile() {
    return (
      <div className=" mt-0   w-full justify-center text-center py-2  mt-24 h-full my-6 shadow-xl shadow-slade-400/20">
        <div className="w-full h-80  justify-center">
          <img
            src="/FishHero.jpg"
            className="h-full flex mx-auto object-cover  rounded-lg"
          />
        </div>
        <div className="ml-0 z-0 flex flex-col my-auto">
          <div className=" text-left ml-6 justify-end">
            <p className="text-5xl font-thin mt-6 my-2 mb-4 decoration-th-accent-light underline">
              Anthromancer
            </p>
            <p className="text-2xl font-thin   my-2">First Edition</p>
            <p className="text-xl font-thin leading-none text-xl  mt-2 pr-2">
              The Ground-Breaking Original Board Game From the mind of Daniel
              James Drake and Expressed through the Visual Language of Sean
              Calen Blake
            </p>
          </div>
          <div className="flex mx-auto w-11/12 text-center justify-center  ">
            <a href="/tokens/anthropos">
              <p className="border border-th-accent-light font-thin mt-8   text-center  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                PREORDER NOW
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function ShopMain() {
    return (
      <div className=" w-screen  bg-th-background shadow-xl shadow-slate-400/20 mt-2 font-futurapt text-center justify-center flex mx-auto">
        <div className="overflow-hidden relative  h-144 items-end w-full text-right  pb-4 flex  rounded-lg">
          <img
            src="https://ipfs.infura.io/ipfs/QmTJxfi1amSbw8JvPQexH7sUQtxViteNQqpi3Pm2cfv9DC"
            className="object-cover w-full h-156 object-bottom -mb-20 rounded-lg shadow-xl shadow-slate-400/20 "
          />
          <div className="font-thin text-white absolute inset-y-0 items-center text-center flex my-auto right-32 text-right  justify-end">
            <p className="drop-shadow-xl font-thin  text-xl leading-tight  mt-2 ">
              The Ground-Breaking Original Board Game
              <br /> From the mind of Daniel James Drake and
              <br />
              Expressed through the Visual Language of
              <br /> Sean Calen Blake
            </p>
          </div>
          <div className="font-thin text-white absolute flex flex-col mx-auto items-start justify-center left-32  inset-y-0  text-left ">
            <p className="drop-shadow-xl text-6xl   my-2 mb-4 decoration-th-accent-light underline">
              Anthromancer
            </p>
            <p className=" text-3xl font-thin   mb-2">First Edition</p>
            <div className="font-thin text-center mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium shadow-xl shadow-slate-400/20-th-accent-light hover:bg-th-accent-light hover:shadow-xl shadow-slate-400/20-th-primary-medium cursor-pointer ">
              <a href="https://anthromancy.backerkit.com/hosted_preorders">
                PREORDER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function YggMain() {
    return (
      <div className="flex mx-auto px-4 py-2 w-full mt-6 ">
        <div className="relative bg-th-background shadow-xl shadow-slate-400/20 h-144  w-full   text-right  mb-4 flex mx-auto rounded-lg">
          <div className=" w-full h-full bg-th-background items-center justify-start  rounded-lg flex">
            <div className="w-full lg:w-5/12  h-auto flex justify-center">
              <img
                src="/Yggdrasil.gif"
                className="w-auto h-auto lg:ml-24  object-cover h-full   border-th-accent-light"
              />
            </div>
            <div className="z-50 absolute right-0 lg:w-7/12 text-right ">
              <p className="font-thin text-6xl text-right font-futurapt decoration-th-accent-light underline leading-tight   w-11/12  mt-2 ">
                Yggdrasil
              </p>
              <p className="font-thin text-2xl text-right font-futurapt leading-tight   w-11/12  mt-2 ">
                777/777 Minted
              </p>

              <p className="font-thin text-xl text-right font-futurapt leading-none   w-11/12  mt-2 ">
                Reward Token for Original Anthromancer
                <br /> Board Game Kickstarter Backers
              </p>
              <p className="font-medium text-base text-right font-futurapt leading-none   w-11/12  mt-2 ">
                Offers a Discount on Anthromancer Hymn Tokens and a Free Random
                Class Card in Anthromancer's Upcoming On-Chain Card Game.
              </p>
              <div className="flex mx-auto  justify-end">
                <a href="/tokens/yggdrasil">
                  <p className="border border-th-accent-light font-thin mt-8 mr-10 w-80 text-center  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                    AVAILABLE TO CLAIM NOW
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function AnthMain() {
    return (
      <div className="flex mx-auto w-full py-4 ">
        <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-128 l w-full text-left  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
          <div className="z-50 h-full w-full lg:w-5/12 flex justify-center items-center h-auto z-0 absolute inset-y-0 right-12 rounded-lg">
            <img
              src="anth4.svg"
              className="object-overflow  rounded-lg z-50 "
            />
          </div>
          <div className="ml-10 z-0 flex flex-col my-auto">
            <div className=" text-left  justify-end">
              <p className="text-6xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
                Anthropos
              </p>
              <p className="text-2xl font-thin   my-2">1298/7777 Minted</p>
              <p className="text-xl font-thin leading-wide    text-xl  mt-2 ">
                Free-To-Mint Human Blueprint Token
              </p>
              <p className="hidden text-xl text-xl font-thin leading-wide   -mt-2 ">
                Celebrating the Archetypal Diversity of Humanity
              </p>
              <div className="text-base font-normal leading-wide    mt-2 ">
                Offers a Discount on Anthromancer Hymn Tokens and a Free
              </div>
              <div className="text-base font-normal leading-wide    -mt-2 ">
                Character Card in Anthromancer's Upcoming On-Chain Card Game.
              </div>
            </div>
            <a href="/tokens/anthropos">
              <p className="border border-th-accent-light font-thin mt-8 mr-8 w-80 text-center  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                AVAILABLE TO MINT 2/14/22
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function HymnsMain() {
    return (
      <div className="flex mx-auto w-full py-4 ">
        <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-128 l w-full text-right  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
          <div class="w-5/12 my-12 flex gap-6 shrink-0 snap-x overflow-x-auto absolute inset-y-0 left-12">
            <div class="snap-center shrink-0 w-full">
              <img
                class="bg-white  w-96 h-96 rounded-lg"
                src="https://ipfs.infura.io/ipfs/QmQwkQ1ebS7uw9K9KNNbsN1AH2C55Fy8CALiWPopEgautD"
              />
            </div>
            <div class="snap-center shrink-0 w-full">
              <img
                class="bg-white w-96 h-96 rounded-lg"
                src="https://ipfs.infura.io/ipfs/QmR5TghpydnL4La5a4RRKe1i9UXCmF3XBg2tAYC4R6ghri"
              />
            </div>
            <div class="snap-center shrink-0 w-full">
              <img
                class="bg-white  w-96 px-2 rounded-lg"
                src="https://ipfs.infura.io/ipfs/QmeZZDQf4nWHXeD3MwEBeRAgyHQSEQrF5uLHAhpweFDefL"
              />
            </div>
            <div class="snap-center shrink-0 w-full">
              <img
                class="bg-white w-96 px-16 py-4 rounded-lg"
                src="https://ipfs.infura.io/ipfs/QmWJRHsHFUYzsGMKqU2KjFtjTNoAQcq2AagDJrqbrXhgsr"
              />
            </div>
            <div class="snap-center shrink-0  w-full">
              <img
                class="bg-white  w-96 px-6 py-4 rounded-lg"
                src="https://ipfs.infura.io/ipfs/QmbJqpEGkycjFvogpditwMP8dN827LDc5HJ68d7fhdMuAV"
              />
            </div>
            <div class="snap-center shrink-0  w-full">
              <img
                class="bg-white w-96 px-12 py-1 rounded-lg"
                src="https://ipfs.infura.io/ipfs/QmZMRz7NgKN3ZUauo3vPKQgjk3FnHMw6v5V2Xzo56CqKDJ"
              />
            </div>
          </div>
          <div className="absolute bottom-20 right-12 text-right  justify-end">
            <p className="text-5xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
              Hymns
            </p>
            <p className="text-2xl font-thin   my-2">2078/10,101 Minted</p>
            <p className="text-xl font-thin leading-wide drop-shadow-lg   text-xl  mt-2 ">
              Primary Token of the Anthromancer Ecosystem
            </p>
            <p className="text-xl font-thin leading-wide drop-shadow-lg   text-xl  -mt-2 ">
              13 Total Variants, with Differing Rewards
            </p>
            <div className="text-base font-normal leading-wide drop-shadow-lg   mt-2 ">
              Offers a Free Class Card Specific to the Hymn Variant in
              Anthromancer's
            </div>
            <div className="text-base font-normal leading-wide drop-shadow-lg   -mt-2 ">
              Upcoming On-Chain Card Game, as well as Future In-Game Rewards
            </div>
          </div>
          <a href="/tokens/hymns">
            <div className="font-thin absolute bottom-6 text-center right-12  mr-1 font-futurapt text-xl text-white px-8 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium shadow-xl shadow-slate-400/20-th-accent-light hover:bg-th-accent-light hover:shadow-xl shadow-slate-400/20-th-primary-medium cursor-pointer ">
              AVAILABLE TO MINT 3/17/22
            </div>
          </a>
        </div>
      </div>
    );
  }

  function YggMobile() {
    return (
      <div className="mt-16 relative justify-center text-center py-2 px-2 mt-12 h-full my-6 shadow-xl shadow-slade-400/20">
        <div className=" w-full justify-center px-2">
          <img
            src="/Yggdrasil.gif"
            className=" flex mx-auto object-cover  rounded-lg"
          />
        </div>
        <div className="z-50  text-right pl-4">
          <p className="font-thin text-6xl text-right font-futurapt decoration-th-accent-light underline leading-tight   w-11/12  mt-2 ">
            Yggdrasil
          </p>
          <p className="font-thin text-2xl text-right font-futurapt leading-tight   w-11/12  mt-2 ">
            777/777 Minted
          </p>

          <p className="font-thin text-xl text-right font-futurapt leading-none   w-11/12  mt-2 ">
            Reward Token for Original Anthromancer
            <br /> Board Game Kickstarter Backers
          </p>
          <p className="font-medium text-base text-right font-futurapt leading-none   w-11/12  mt-2 ">
            Offers a Discount on Anthromancer Hymn Tokens and a Free Random
            Class Card in Anthromancer's Upcoming On-Chain Card Game.
          </p>

          <a href="/tokens/yggdrasil">
            <div className=" w-11/12 flex justify-end ">
              <p className="border border-th-accent-light w-80 font-thin mt-8  text-center   font-futurapt text-xl text-white px-4 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                AVAILABLE TO CLAIM NOW
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  }

  function AnthMobile() {
    return (
      <div className="relative mt-16 justify-center text-center py-2 px-2 mt-24 h-full my-6 shadow-xl shadow-slade-400/20">
        <div className="w-full justify-center px-2">
          <img
            src="/anth4.svg"
            className=" flex mx-auto object-cover w-10/12 rounded-lg"
          />
        </div>
        <div className="ml-0 z-0 flex flex-col my-auto">
          <div className=" text-left ml-6 justify-end pr-4">
            <p className="text-6xl font-thin mt-6 my-2 mb-4 decoration-th-accent-light underline">
              Anthropos
            </p>
            <p className="text-2xl font-thin   my-2">0/7777 Minted</p>
            <p className="text-xl font-thin leading-wide    text-xl  mt-2 ">
              Free-To-Mint Human Blueprint Token
            </p>
            <p className="hidden text-xl text-xl font-thin leading-wide   -mt-2 ">
              Celebrating the Archetypal Diversity of Humanity
            </p>
            <div className="text-base font-normal leading-none   mt-2 ">
              Offers a Discount on Anthromancer Hymn Tokens and a Free Character
              Card in Anthromancer's Upcoming On-Chain Card Game.
            </div>
          </div>
          <div className="flex w-11/12 mx-auto text-center justify-end">
            <a href="/tokens/anthropos">
              <p className="border border-th-accent-light font-thin mt-8 px-8 text-center  mr-1 font-futurapt text-xl text-white  py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                AVAILABLE TO MINT 2/14/22
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  function HymnsMobile() {
    return (
      <div className="mt-16 relative justify-end text-center py-2 px-2  h-full my-6 shadow-xl shadow-slade-400/20">
        <div className="w-full justify-center px-2">
          <div className="h-auto flex mx-auto object-cover  rounded-lg">
            <div class="w-full h-auto my-12 flex gap-6 shrink-0 snap-x overflow-x-auto">
              <div class="snap-center shrink-0 w-full flex mx-auto justify-center">
                <img
                  class="bg-white  w-116  rounded-lg"
                  src="https://ipfs.infura.io/ipfs/QmQwkQ1ebS7uw9K9KNNbsN1AH2C55Fy8CALiWPopEgautD"
                />
              </div>
              <div class="snap-center shrink-0 w-full flex mx-auto justify-center">
                <img
                  class="bg-white w-116  rounded-lg"
                  src="https://ipfs.infura.io/ipfs/QmR5TghpydnL4La5a4RRKe1i9UXCmF3XBg2tAYC4R6ghri"
                />
              </div>
              <div class="snap-center shrink-0 w-full flex mx-auto justify-center">
                <img
                  class="bg-white  w-116 px-2 rounded-lg"
                  src="https://ipfs.infura.io/ipfs/QmeZZDQf4nWHXeD3MwEBeRAgyHQSEQrF5uLHAhpweFDefL"
                />
              </div>
              <div class="snap-center shrink-0 w-full flex mx-auto justify-center">
                <img
                  class="bg-white w-116 px-16 py-4 rounded-lg"
                  src="https://ipfs.infura.io/ipfs/QmWJRHsHFUYzsGMKqU2KjFtjTNoAQcq2AagDJrqbrXhgsr"
                />
              </div>
              <div class="snap-center shrink-0 w-full flex mx-auto justify-center">
                <img
                  class="bg-white  w-116 px-6 py-4 rounded-lg"
                  src="https://ipfs.infura.io/ipfs/QmbJqpEGkycjFvogpditwMP8dN827LDc5HJ68d7fhdMuAV"
                />
              </div>
              <div class="snap-center shrink-0 w-full flex mx-auto justify-center">
                <img
                  class="bg-white w-116 px-12 py-1 rounded-lg"
                  src="https://ipfs.infura.io/ipfs/QmZMRz7NgKN3ZUauo3vPKQgjk3FnHMw6v5V2Xzo56CqKDJ"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="z-50 lg:w-7/12 text-right justify-end -mt-2 pl-4">
          <p className="font-thin text-6xl text-right font-futurapt decoration-th-accent-light underline leading-tight   w-11/12  mt-0 ">
            Hymns
          </p>
          <p className="font-thin text-2xl text-right font-futurapt leading-tight   w-11/12  mt-2 ">
            0/10,101 Minted
          </p>

          <p className="font-thin text-xl text-right font-futurapt leading-none   w-11/12  mt-2 ">
            Primary Token of the Anthromancer Ecosystem. 13 Total Variants, with
            Differing Rewards
          </p>
          <p className="font-medium text-base text-right font-futurapt leading-none w-11/12  mt-2 ">
            Offers a Free Class Card Specific to the Hymn Variant in
            Anthromancer's Upcoming On-Chain Card Game, as well as Future
            Rewards
          </p>
          <a href="/tokens/hymns">
            <div className=" w-11/12 flex justify-end ">
              <p className="border border-th-accent-light w-80 font-thin mt-8  text-center   font-futurapt text-xl text-white px-4 py-1 pt-1 font-light shadow-xl shadow-slate-400/20-2 bg-th-primary-medium hover:bg-th-accent-light hover:shadow-xl  cursor-pointer ">
                AVAILABLE TO MINT 3/17/22
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col mx-auto bg-th-background">
      <Head>
        <title>Source | Anthromancer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="z-50">
        <div className="flex mx-auto scale-30 bg-white opacity-90">
          <ScrollToTop smooth component={<BackToTop />} />
        </div>
      </div>
      <div className="z-40">
        <Nav />
      </div>
      <div className="h-8 lg:h-24 w-full bg-lime-300 invisible">Spacer</div>
      <main className="lg:mt-8  w-screen flex flex-col mx-auto items-center bg-th-background font-futurapt mb-10 text-center justify-center">
        {/* Shop Title Section */}
        <div id="shop" className=" w-11/12 xl:w-10/12 py-8 text-left">
          <p className="font-futurapt text-th-primary-dark lg:mt-16 decoration-th-accent-light underline  font-thin text-7xl ">
            SHOP
          </p>
        </div>

        {/* Shop Section */}
        <div className="hidden lg:flex w-screen">
          <ShopMain />
        </div>
        <div className="lg:w-2/3 w-11/12 lg:hidden ">
          <ShopMobile />
        </div>
        {/* Tokens Section */}
        <div
          id="tokens"
          className="lg:w-2/3 w-11/12 bg-th-background w-full mt-2 lg:mt-36 font-futurapt text-center justify-center"
        >
          <div className="py-8 text-left">
            <p className=" font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline font-thin text-7xl ">
              TOKENS
            </p>
          </div>
          <div className="hidden lg:flex w-full">
            <YggMain />
          </div>
          <div className="lg:hidden w-full">
            <YggMobile />
          </div>

          <div className="hidden lg:flex w-full">
            <AnthMain />
          </div>
          <div className="lg:hidden w-full">
            <AnthMobile />
          </div>

          <div className="hidden lg:flex w-full">
            <HymnsMain />
          </div>
          <div className="lg:hidden w-full mb-0">
            <HymnsMobile />
          </div>
        </div>
        {/* Downloads Section */}
        <div
          id="downloads"
          className="hidden bg-th-background w-full mt-2 lg:mt-36 font-futurapt text-center justify-center"
        >
          <div className="py-8 text-left">
            <p className=" font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline font-futurapt font-thin text-7xl ">
              DOWNLOADS
            </p>
          </div>

          <div className="flex mx-auto  py-2">
            <div className="relative max-w-7x shadow-xl shadow-slate-400/20 h-116 l w-full text-right  pb-4 flex mx-auto shadow-xl shadow-slate-400/20 rounded-lg">
              <div className="absolute bottom-6 right-12 text-right  justify-end">
                <p className="text-6xl font-thin  my-2 mb-4 decoration-th-accent-light underline">
                  Codex
                </p>
                <p className="text-2xl font-thin   my-2">300/777 Minted</p>
                <p className="text-xl leading-snug  mt-2 ">
                  Reward Token for Original Anthromancer
                </p>
                <p className="text-xl leading-snug mb-2 -mt-2 ">
                  Board Game Kickstarter Backers
                </p>
                <div className="text-lg leading-tight mt-4  ">
                  Also Available for Purchase Here. Offers Discounts on
                  Anthromancer Hymn Tokens.
                </div>
                <div className="text-lg leading-tight -mt-1 mb-2  ">
                  As well as a Free Class Card (gas-cost-only) in Anthromancer's
                  Upcoming On-Chain Card Game.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
          box-sizing: shadow-xl shadow-slate-400/20-box;
        }
      `}</style>
    </div>
  );
}
