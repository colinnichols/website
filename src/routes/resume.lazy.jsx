import { createLazyFileRoute } from "@tanstack/react-router";
import Resume from "../resume";

export const Route = createLazyFileRoute("/resume")({
  component: ResumeContent,
});

function ResumeContent() {
  return <Resume />;
}
