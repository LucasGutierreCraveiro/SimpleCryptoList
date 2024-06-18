import { Select, TextField } from "@radix-ui/themes";
import { useCoinList } from "../../api/coingecko/coin";
import CardView from "./components/card-view";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function HomePage() {
  const [orderBy, setOrderBy] = useState("");
  const [inputText, setInputText] = useState("");
  const { data, isLoading, isFetching } = useCoinList({ orderBy });

  const isLoadingTableData = isLoading || isFetching;

  const handleSelectChange = (value: string) => {
    setOrderBy(value);
  };

  const handleTextFieldChange = (value: string) => {
    setInputText(value);
  };

  const filterTableData = (filter: string) => {
    if (!data?.data || data.data.length === 0) return [];
    return data.data.filter((coin) =>
      coin.name.toUpperCase().includes(filter.toUpperCase().trim())
    );
  };

  return (
    <div>
      <div className="flex max-md:flex-col justify-center items-center gap-2 mb-2 mt-2">
        <div className="w-40">
          <TextField.Root
            placeholder="Search for a coin..."
            onChange={(e) => {
              handleTextFieldChange(e.target.value);
            }}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <div className="ml-3 flex gap-2 items-center">
          <div>Order By:</div>
          <Select.Root
            defaultValue="default"
            onValueChange={(value) => handleSelectChange(value)}
            value={orderBy}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Group className="truncate">
                <Select.Label>Order By</Select.Label>
                <Select.Item value="price_asc">Price Asc.</Select.Item>
                <Select.Item value="price_desc">Price Desc.</Select.Item>
                <Select.Item value="volume_asc">Volume Asc.</Select.Item>
                <Select.Item value="volume_desc">Volume Desc.</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
      <CardView
        coinData={filterTableData(inputText)}
        loading={isLoadingTableData}
      />
    </div>
  );
}
