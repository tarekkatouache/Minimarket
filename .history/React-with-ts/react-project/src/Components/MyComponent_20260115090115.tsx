import React, { type JSX } from "react";

export default function MyComponent({
  name,
  age,
}: {
  name: string;
  age: number;
}) {
  return (
    <div>
      <h2 color="red">Hello from MyComponent!</h2>
      <p>This is a simple React component written in TypeScript.</p>
    </div>
  );
}
