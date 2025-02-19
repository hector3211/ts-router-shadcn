import AboutContainer from "@/components/about-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutContainer />;
}
