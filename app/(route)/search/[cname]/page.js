"use client";
// import DoctorList from "@/app/_components/DoctorList";
// import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import CategoryList from "../_components/CategoryList";
import DoctorListByCat from "../_components/DoctorListByCat";

function Search({ params }) {
  return (
    <div className="grid grid-cols-5 mx-4 md:mx-20 mt-5 h-screen">
      <div className="col-span-5 md:col-span-1">
        <CategoryList currentCat={params.cname} />
      </div>
      <div className="col-span-5 md:col-span-4">
        <DoctorListByCat currentCat={params.cname} />
      </div>
    </div>
  );
}

export default Search;
