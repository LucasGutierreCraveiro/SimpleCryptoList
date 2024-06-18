import { Avatar, Card, DataList, Spinner } from "@radix-ui/themes";
import { Coin } from "../../../types/coin-types";

type Props = {
  coinData: Coin[];
  loading: boolean;
};
export default function CardView({ coinData, loading }: Props) {
  if (loading) {
    return (
      <div className="flex justify-center mt-8 mb-8">
        <Spinner size="3" />
      </div>
    );
  }

  return (
    <div className="flex justify-center overflow-y-auto">
      <div className="flex flex-col max-w-max gap-3">
        {coinData.map((coin) => {
          return (
            <Card key={coin.id}>
              <div
                className="flex max-md:flex-col justify-center items-center gap-2 p-2 space-x-4 hover:bg-slate-400"
                // onClick={() => navigate(`${coin.id}/info`)}
                // Not implemented
              >
                <div className="md:min-w-20 flex justify-center">
                  <Avatar src={coin.image} fallback className="mb-4 " />
                </div>
                <DataList.Root className="w-[300px]">
                  <DataList.Item>
                    <DataList.Label>Coin Name</DataList.Label>
                    <DataList.Value>{coin.name}</DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label>Current Price</DataList.Label>
                    <DataList.Value>
                      {coin.current_price !== null
                        ? `${coin.current_price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}`
                        : "N/A"}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label>Market Cap</DataList.Label>
                    <DataList.Value>
                      {coin.market_cap !== null
                        ? `${coin.market_cap.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}`
                        : "N/A"}
                    </DataList.Value>
                  </DataList.Item>
                  <DataList.Item>
                    <DataList.Label maxWidth="25px">
                      24-hour trading volume
                    </DataList.Label>
                    <DataList.Value>
                      {coin.total_volume !== null
                        ? `${coin.total_volume.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}`
                        : "N/A"}
                    </DataList.Value>
                  </DataList.Item>
                </DataList.Root>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
