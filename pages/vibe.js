import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Utils/Account";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import useEagerConnect from "../hooks/useEagerConnect";

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className="w-full h-full bg-th-background">
      <Head>
        <title>Vibe | Anthromancer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="z-50">
        <Nav />
      </div>
      <div className="h-20 w-full bg-lime-300 invisible">Spacer</div>

      <main className=" flex flex-col mx-auto lg:w-2/3 w-11/12 bg-th-background font-futurapt font-thin mb-10 text-center justify-center">
        {/* Header*/}

        <div id="shop" className="py-8 text-left">
          <p className="font-futurapt text-th-primary-dark mt-16 decoration-th-accent-light underline  font-thin text-7xl ">
            BLOG
          </p>
        </div>

        {/* Main Post Area */}
        <div className="mt-16 w-full justify-start text-left">
          <p className="text-5xl">Yggdrasil Token Drop</p>
          <p className="text-base lg:text-lg py-2 mt-2">
            JANUARY 30th 2022 | By Daniel James Drake
          </p>

          <div className="flex mx-auto justify-start mt-2">
            <p className="text-base px-2 py-0.5 bg-th-accent-light">tags:</p>
            <p className="text-base px-2 py-0.5 bg-th-accent-light">tokens</p>
            <p className="text-base px-2 py-0.5 bg-th-accent-light">
              yggdrasil
            </p>
          </div>
          <div className="bg-th-accent-light h-1 w-full "></div>
          <div className="w-11/12 lg:w-8/12 flex mx-auto rounded-lg mt-4 justify-center">
            <video
              width="520"
              height="240"
              autoPlay
              muted
              loop
              className="rounded-lg flex mx-auto"
            >
              <source
                src="https://gateway.ipfs.io/ipfs/QmVwJGSZmsBzsseFEx3RtCnGL8q5d1DXZQxUkDt7aCjEpd"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-full text-center italic text-sm text-slate-500/50">
            Yggdarsil Token Image, Depicting the Great World-Tree
          </div>
          <div className="bg-th-accent-light h-1 w-full my-2 mb-6"></div>

          {/* Main Post Contents*/}
          <div className="w-full leading-snug mt-4">
            <p className="text-center items-center font-thin text-xl text-left font-futurapt leading-tight    mt-2 ">
              <p className="mt-8">
                "Animosity
                <br />
                is unbecoming,
                <br />
                overwhelmed as you may feel.
                <br />
                Color crossed with destiny,
                <br />
                you’ll be satisfied
                <br />
                with what the light reveals.""
                <br />
                <br />
                <span className="italic">-Excerpt from hymn I. Fireyes</span>
                <br />
              </p>
            </p>
          </div>

          <p className="w-ful hidden text-left leading-snug mt-8 indent-8">
            We’ve been hard at work for the last few weeks rebuilding the
            Anthromancer website and getting everything ready for our product
            launch on April 1st. Long time followers may have noticed that
            anthromancer.com now redirects to a .io domain name – which seemed
            only fitting with our full-bodied pivot into web3. Now, we are
            pleased to announce the release of our very first brand-centric NFT,
            Yggdrasil.
          </p>
          <p className="w-full text-left leading-snug mt-8 indent-8">
            We’ve been hard at work for the last few weeks rebuilding the
            Anthromancer website and getting everything ready for our product
            launch on April 1st. Long time followers may have noticed that
            anthromancer.com now redirects to a .io domain name – which seemed
            only fitting with our full-bodied pivot into web3. Now, we are
            pleased to announce the release of our very first brand-centric NFT,
            Yggdrasil.
          </p>
          <p className="w-full leading-snug mt-3 indent-8">
            The Yggdrasil token is a bit of an Anthromancer milestone (and a
            personal one as well). It’s our first deployed smart contract, the
            first digital token in our web3 ecosystem, and I also think it’s the
            most important: It is a declaration of our intentions.
          </p>
          <p className="w-full leading-snug mt-4  indent-8">
            The Yggdrasil token is a loss-leading investment on our part – a
            place we are sinking our limited resources to send a message. A
            literal ‘virtue signal’, if you’ll excuse the parlance of the time.
            It is a gift of gratitude to those who helped us will our economic
            engine into being through contributions to our crowdfund, and a
            non-fungible olive branch to those whose experiences have led them
            to believe we are up to no good. I do not believe we are up to no
            good. I don’t know if I’d say we’re up to ‘good’, exactly (good/evil
            dichotomies obfuscate understanding), but we are up to something
            interesting, with depth, and with a meaningful ethos underpinning
            our praxis.
          </p>
          <p className="w-full leading-snug mt-5 indent-8">
            This is why it is so critically important for creators in this space
            to set their intentions firmly, clearly, and back those intentions
            up with meaningful action.
          </p>
          <p className="w-full leading-snug mt-4 indent-8">
            If you contributed to our Kickstarter campaign in the summer of
            2020, the email associated with your kickstarter account will
            receive a secret code that can be used one time to claim a single
            ERC-1155 token called Yggdrasil, which lives in the blockchain
            ledger known as Ethereum mainnet. We have built the claims webpage
            to walk you through the claims process if you’ve never done
            something like this before. We have also prepaid the ‘gas fee’
            necessary to transact on the Ethereum network (using a mechanism
            called a relayer), so that our fans and friends who have never
            participated in web3 and never held any kind of token can have their
            first experience of digital ownership streamlined. No fees, no
            exchanges, no hassle, no verification – simply install a web3 wallet
            (like metamask), copy the code from your email, connect your wallet
            to our website and claim the token. If you’re willing to take these
            simple steps with us, you can be a part of what we’re building more
            intimately.
          </p>
          <p className="w-full leading-snug mt-4 indent-8">
            It is worth pointing out to neophytes that each part of this process
            – the deployment of the contract, the setting of parameters, the
            minting of the tokens, and the transferring of tokens from our
            wallet to yours – carries an economic cost (known as a ‘gas fee’)
            which we are eating in service of our intention. I want you to
            understand that this is not a throwaway decision like an email
            marketing campaign is. There is something beautiful about building
            systems with blockchains – the energy cost is presented to you at
            the outset, in the form of the money you have to sacrifice to get
            anything done here. There is necessarily a gravity to the decisions
            you make with these systems, and a punishment if you use them
            poorly. Having lived through some of the highest peaks of throwaway
            consumerist culture...I like that. I like that a lot; systemic
            equilibrium requires that we develop a sensitivity to real costs.
          </p>
          <p className="w-full leading-snug mt-4  indent-8">
            That being said: we’re eating your first cost, so don’t get carried
            away. If you lose access to your wallet, if you send your token to
            an incorrect address, or if you’re not careful and fall victim to
            simple theft (by, say, giving your seed phrase to a stranger), the
            token you lose most likely cannot be retrieved.
          </p>
          <p className="w-full leading-snug mt-4 indent-8">
            And with THAT being said...we are minting more tokens than
            necessary. There have only been around 400 kickstarter backers, but
            we’ve minted 777 Yggdrasil tokens; this redundancy will allow us to
            help insulate some of our backers from simple, human mistakes. If
            you stumble as you wade into this new frontier, we have at least a
            little leeway established to help make you whole again. Mistakes are
            valuable, but it is just as valuable to know that someone cares
            enough to help you get up when you fall. We do.
          </p>
          <p className="w-full leading-snug mt-4  indent-8">
            We will also use some of the tokens from this surplus as gifts to
            strangers; reviewers, publishers, friends and people who beat me in
            a spirited game of Mercenarium at some point down the road. Their
            existence gives us the power to ‘cut people in’ and do human magic
            in a way we’ve not really seen before. I like that.
          </p>
          <p className="w-full leading-snug mt-4  indent-8">
            If you claim this token and hold it for a while, you’re effectively
            giving us the power to give you power. We’re building some exciting
            things in web3 – on-chain strategy games and generative card
            archetypes, immersive experiences, and a community of seekers who we
            will guide towards an attitude of compassion, curiosity, and mutual
            respect. The tokens we deploy become specialized ‘keys’ to unlocking
            parts of these experiences, while also carrying the potential of
            becoming batteries of economic energy. They are versatile and
            dynamic, fascinating and unpredictable, and they truly belong to
            you.
          </p>
          <p className="w-full leading-snug mt-4 indent-8">
            Anthromancer is on its way to an ostentatious release, and after the
            Yggdrasil token is live and claimable we will be following it up
            with two additional token drops. The first, named Anthropos, will
            launch on Valentine’s Day (an Aquarian romantic’s favorite holiday),
            and will be free-to-mint as a way to extend a similar olive branch
            to the wider cryptonative community. The next, called the Hymnal
            Collection, will launch on the Ides of March (we do love our weird
            little holidays here), and will give this new community of backers
            and cryptonatives the chance to competitively collect pieces of our
            game’s lore as a method for unlocking secret classes and aesthetic
            powers in our future gaming ecosystem. Once these drops are
            completed, we’ll finish this little stunt off by auctioning 0. The
            Fool as a single token ownable by the highest bidder, on April
            Fool’s Day, after which point our board game will be formally
            released.
          </p>
          <p className="w-full leading-snug mt-4  indent-8">
            If you’d like to participate in any of these, we invite you to
            connect with us via our community Discord.
          </p>
          <p className="w-full leading-snug mt-4 indent-8">
            It’s a very exciting time to be at the forefront of something like
            this. I’ve been working on this dream in relative obscurity for the
            better part of a decade. With the Yggdrasil deployment behind us,
            we’ve begun to build momentum towards realizing the enormous
            potential we’ve built up over the years. For so long it has seemed
            that I’m the madman trying to figure out my elevator pitch – “It’s a
            game, but also, you can do tarot readings, and there’s a story about
            the collapse but it’s so hopeful and also, shapes, and a concept
            album too!” – but soon I won’t have to. The product will exist, it
            will be in your hands, and you can figure out what it means on your
            own time. The duty that lies before me is to keep pushing, keep
            building, and maximize the value that my team and I can bring out of
            these ideas. We have very little reason to stop, and I’m hopeful
            that you’ll come along for the ride.
          </p>
          <p className="w-full leading-snug mt-4  indent-8">
            Thanks for reading...and happy claiming!
          </p>
          <p className="w-full leading-snug mt-4 text-xl italic text-center font-bold">
            -Dan
          </p>
          <div className="bg-th-accent-light h-1 w-full my-4 mb-0"></div>
        </div>
        <div className="text-xl my-2 italic mt-4">
          More Posts On The Way... Be Sure To Check Back Again Soon!
        </div>
      </main>
      <Footer />

      <style jsx>{`
        #title {
          font-family: Futura;
        }

        @font-face {
          font-family: Futura;
          src: url(/fonts/futura-pt-book.otf);
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
