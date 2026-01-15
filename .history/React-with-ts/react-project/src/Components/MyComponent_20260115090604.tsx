import React, { type JSX } from "react";

interface MyComponentProps {
  name: string;
  lastname: string;
}
export default function MyComponent({
  name,
  lastname,
}: MyComponentProps): JSX.Element {
  return (
    <div>
      <h2 color="red">
        Hello {name} {lastname} from MyComponent!
      </h2>
      <p>This is a simple React component written in TypeScript.</p>
    </div>
  );
}
