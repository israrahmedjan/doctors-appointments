"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
function CategoryList({ currentCat }) {
  const [categoryList, setCategoryList] = useState([]);
  const params = usePathname();
  const category = params.split("/")[2];
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className=" md:min-h-[500px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList &&
              categoryList.map((item, index) => (
                <Link
                  href={"/search/" + item?.attributes?.slug}
                  className={`p-1 flex gap-2
                text-[14px]
                items-center
                rounded-md cursor-pointer w-full
                ${currentCat == item.attributes.slug && "bg-gray-200"}
                `}
                  key={index}
                >
                  <CommandItem className="text-black">
                    <Image
                      src={item.attributes?.Icon?.data.attributes?.url}
                      alt="icon"
                      width={50}
                      height={50}
                    />
                    <label className="text-black px-1">
                      {item.attributes.Name}
                    </label>
                  </CommandItem>
                </Link>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
