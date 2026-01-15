import React, { type JSX } from "react";

export default function MyComponent({
  name,
  lastname,
}: {
  name: string;
  lastname: string;
}) {
  return (
    <div>
      <h2 color="red">
        Hello {name} {lastname} from MyComponent!
      </h2>
      <p>This is a simple React component written in TypeScript.</p>
    </div>
  );
}
