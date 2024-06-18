import { Theme } from "@radix-ui/themes";
import { QueryProvider } from "./react-query/query-provider";
import { Router } from "./react-router/router-provider";

export default function Providers() {
  return (
    <Theme>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </Theme>
  );
}
