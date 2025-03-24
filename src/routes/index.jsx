import { createFileRoute } from "@tanstack/react-router";
import AboutContent from "../about";

export const Route = createFileRoute(["/", "/about"])({
  component: Index,
});

function Index() {
  return <AboutContent />;
}
