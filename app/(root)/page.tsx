import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home-heading">Turning Pixels into Wizardry</h1>
      <ul className="flex-center w-full gap-20 sm:gap-10">
        {navLinks.slice(1, 6).map((navLink) => (
          <Link
            key={navLink.route}
            href={navLink.route}
            className="flex-center flex-col gap-2"
          >
            <li className="flex-center w-fit rounded-full bg-white p-4">
              <Image src={navLink.icon} alt="icon" width={24} height={24} />
            </li>
            <p className="p-14-medium text-center text-white">{navLink.label}</p>
            <p className="text-xs font-semibold text-center italic mt-1 text-white">
              {navLink.spell}
            </p>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Home;
