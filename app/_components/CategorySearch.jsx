"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import GlobalApi,{getStrapiMedia} from "../_utils/GlobalApi";
import SearchDoctor from "./SearchDoctor";

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);
 
  useEffect(() => {
    getCategoryList();
    console.log("Category List");
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      //console.log("Response Data", resp);
      setCategoryList(resp.data.data);
      
    });
  };
  return (
    <section className="mx-4 md:mx-20 mt-8">
      <div className="flex flex-col items-center gap-y-3">
       
       <SearchDoctor />
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2 my-8">
          {categoryList.length > 0
            ? categoryList.map((category, index) => {
                return (
                  <Link
                    className="hover:shadow-2xl transition-shadow duration-300 border-gray-200 border rounded-lg"
                    href={"/search/" + category?.attributes?.slug}
                    key={index}
                  >
                    <div className="flex flex-col items-center mt-2 w-[130px] h-[120px]">
                      <Image
                        src= {getStrapiMedia(category?.attributes?.Icon)}
                        width={80}
                        height={80}
                        alt={category?.attributes?.Name}
                      />
                      <p className="text-[14px] font-semibold pt-3">
                      
                        {category?.attributes?.Name}
                      </p>
                    </div>
                  </Link>
                );
              })
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className=" bg-slate-200 m-2
   w-[130px] h-[120px] rounded-lg animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySearch;
