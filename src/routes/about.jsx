import { createFileRoute } from "@tanstack/react-router";
import About from "../about/About";

export const Route = createFileRoute("/about")({
  component: AboutContent,
});

function AboutContent() {
  return <About />;
}
