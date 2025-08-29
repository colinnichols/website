import { createLazyFileRoute } from "@tanstack/react-router";
import Form from "../form";

export const Route = createLazyFileRoute("/form")({
  component: FormContent,
});

function FormContent() {
  return <Form />;
}
