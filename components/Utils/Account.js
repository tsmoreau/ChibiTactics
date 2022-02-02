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
            className="font-futurapt text-xl text-white px-5 py-0.5 pt-0.5 font-light border-2 bg-th-primary-medium border-th-accent-light hover:bg-th-primary-medium"
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
            className="text-th-primary-dark font-futurapt font-thin text-xl"
            onClick={() => onboarding.current?.startOnboarding()}
          >
            Install Metamask
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="font-thin flex tracking-wide  font-futurapt text-xl text-white px-5 pb-0.5 pt-0.5 border-2 bg-th-accent-light border-th-accent-light hover:bg-th-primary-medium">
      {ENSName || `${shortenHex(account, 4)}`}
    </div>
  );
};

export default Account;
