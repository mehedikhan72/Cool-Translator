import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75"
      data-testid="loading-element"
    >
      <ReactLoading type="bars" color="white" height={100} width={100} />
    </div>
  );
}
