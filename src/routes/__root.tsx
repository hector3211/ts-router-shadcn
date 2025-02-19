import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import appCss from "@/styles.css?url";
import NavBar from "@/components/nav";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: () => (
    <main className="max-w-full bg-zinc-100 h-[calc(100vh-0rem)]">
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  ),
});
