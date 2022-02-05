import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { injected } from "../../connectors";
import useENSName from "../../hooks/useENSName";
import { formatEtherscanLink, shortenHex } from "../../util";

const Account = ({ triedToEagerConnect }) => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
    deactivate
  } = useWeb3React();

  // initialize metamask onboarding
  const onboarding = useRef();

  useEffect(() => {
    onboarding.current = new MetaMaskOnboarding();
  }, []);

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      onboarding.current?.stopOnboarding();
    }
  }, [active, error]);

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    const hasMetaMaskOrWeb3Available =
      MetaMaskOnboarding.isMetaMaskInstalled() ||
      window?.ethereum ||
      window?.web3;

    return (
      <div>
        {hasMetaMaskOrWeb3Available ? (
          <button
            className="flex font-lores font-normal px-5 py-2 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {MetaMaskOnboarding.isMetaMaskInstalled()
              ? "CONNECT WALLET"
              : "CONNECT WALLET"}
          </button>
        ) : (
          <button
            className="text-th-primary-dark font-lores font-normal font-thin text-xl"
            onClick={() => onboarding.current?.startOnboarding()}
          >
            Install Metamask
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="border border-1.5 border-stone-300 font-lores flex font-normal px-6 py-1 text-lg items-center font-medium text-white bg-gradient-to-b from-teal-400 to-sky-800 rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      {ENSName || `${shortenHex(account, 4)}`}
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 24 24"
        strokeWidth="3"
        className="-mr-2 ml-1 stroke-5 text-th-primary-dark "
        stroke="white"
      >
        <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
      </svg>
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
    </div>
  );
};

export default Account;
