import React from "react";

export default function MenuButton({ setNavbarOpen }) {
  return (
    <button
      type="button"
      className="cursor-pointer leading-none px-2 py-1 border border-solid rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      onClick={() => setNavbarOpen(true)}
    >
      <svg viewBox="0 0 100 70" width="20" height="24" fill=" #334155">
        <rect width="100" height="12"></rect>
        <rect y="30" width="100" height="12"></rect>
        <rect y="60" width="100" height="12"></rect>
      </svg>
    </button>
  );
}
