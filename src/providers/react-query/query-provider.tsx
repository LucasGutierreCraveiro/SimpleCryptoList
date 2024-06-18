/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function QueryProvider(props: Props) {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
