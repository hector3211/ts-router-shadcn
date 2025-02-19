import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/counter/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-y-3 justify-center text-center mx-auto max-w-xs py-16">
      <p>Count: {count}</p>
      <Button
        size={"sm"}
        className="max-w-[10rem] mx-auto"
        onClick={() => setCount((prev) => (prev += 1))}
      >
        Plus + 1
      </Button>
    </div>
  );
}
