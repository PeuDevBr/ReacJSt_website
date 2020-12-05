import Link from "next/link";
import React, { Fragment } from "react";

export default function IndexPage() {
  return (
    <Fragment>
      <h1 className="head"> Hello world </h1>
      <h4 className="sub"> css with Globle </h4>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Fragment>
  );
}
