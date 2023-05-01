import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies: string[];
}

export default function ParentProps() {
  const hwan: MyProps = {
    name: "HWAN",
    age: 36,
    hobbies: ["sleep"],
  };
  return (
    <>
      {/* <Props name="HWAN" age={36} hobbies={["Sleep"]} /> */}
      <Props {...hwan} />
    </>
  );
}
