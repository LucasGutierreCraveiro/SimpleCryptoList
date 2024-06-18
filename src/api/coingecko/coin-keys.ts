export const coinKeys = {
  list: {
    root: ["list"],
    getAllCoins: (orderBy: string) => [...coinKeys.list.root, orderBy],
  },
};
