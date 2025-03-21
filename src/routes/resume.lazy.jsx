import { createLazyFileRoute } from "@tanstack/react-router";
import Resume from "../resume/Resume";

export const Route = createLazyFileRoute("/resume")({
  component: <Resume />,
});
