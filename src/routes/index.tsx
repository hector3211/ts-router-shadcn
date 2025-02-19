import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <h1 className="text-center text-6xl font-bold my-16">Home</h1>
    </div>
  );
}
