import React from "react";
import { listRoute } from "../constants/ListRoute";
import routesType from "../types/routesType";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      {listRoute.map((el: routesType) => (
        <>
          <Link className="mx-3 text-black hover:text-black" to={el.path}>
            {el.title}
          </Link>
        </>
      ))}
    </div>
  );
}
