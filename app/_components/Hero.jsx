"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="bg-slate-200 h-full">
      <div className="mx-4 md:mx-20 grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        <div className="flex flex-col py-10">
          <h2 className="text-4xl font-bold sm:text-4xl">
            Find & Book
            <span className="text-primary"> Appointment </span>
            with your Fav
            <span className="text-primary "> Doctors</span>
          </h2>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>

          <Button className="mt-10 w-[130px]">Explore Now</Button>
        </div>
        <div className="">
          <div className="py-10">
            <Image
              alt=""
              src={`/assets/images/doctors.jpg`}
              width={800}
              height={800}
              className="border-gray-200 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
