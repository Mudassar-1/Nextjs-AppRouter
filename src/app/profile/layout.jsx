"use client"
import Aside from "../components/Aside";

export default function Layout({ children }) {
  return (
    <div className="border border-white flex gap-5 max-w-[1250px] m-auto">
      <main>{children}</main>
      <div>
        <Aside />
      </div>
    </div>
  )
}