import { wait } from "@/app/_utils/GlobalApi";
import React from "react";

export default async function page() {
  await wait(1000);
  return (
    <>
      <p>About page..</p>
    </>
  );
}
