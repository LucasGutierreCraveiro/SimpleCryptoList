import { useQuery } from "@tanstack/react-query";
import { coinKeys } from "./coin-keys";
import { axiosInstance } from "../axios-config";
import { Coin } from "../../types/coin-types";

type Props = {
  orderBy: string;
};

export const useCoinList = (props: Props) =>
  useQuery({
    queryKey: coinKeys.list.getAllCoins(props.orderBy),
    queryFn: async ({ signal }) => {
      const uri = `coins/markets?vs_currency=usd&order=${props.orderBy}`;
      const response = await axiosInstance.get<Coin[]>(uri, { signal });
      return response;
    },
  });

type CoinInfoProps = {
  id: string;
};
export const useCoinFullInfo = (props: CoinInfoProps) =>
  useQuery({
    queryKey: coinKeys.list.root,
    queryFn: async ({ signal }) => {
      const uri = "";
    },
  });
