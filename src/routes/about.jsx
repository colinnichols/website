import { createFileRoute } from "@tanstack/react-router";
import AboutContent from "../about/About";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <AboutContent />;
}
