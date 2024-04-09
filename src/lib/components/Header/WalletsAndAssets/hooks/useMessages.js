import { useMsg } from "../../../hooks";

export default function useMessages() {
  const getMessage = useMsg('keystone.header');

  return {
    linkText: getMessage('walletsAndCoins.link'),
    evmCoinsTip: getMessage('walletsAndCoins.evmCoinsTip'),
  };
}
