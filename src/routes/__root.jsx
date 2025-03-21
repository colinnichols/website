import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../Header";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Header />
        <main className="content overflow-auto">
          <div className="mx-auto px-[2rem] max-w-5xl">
            <Outlet />
          </div>
        </main>
        <TanStackRouterDevtools />
      </>
    );
  },
});
