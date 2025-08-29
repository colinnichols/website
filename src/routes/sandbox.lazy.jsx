import { createLazyFileRoute } from "@tanstack/react-router";
import Sandbox from "../sandbox";

export const Route = createLazyFileRoute("/sandbox")({
  component: SandboxContent,
});

function SandboxContent() {
  return <Sandbox />;
}
