import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">Turning Pixels into Wizardry</h1>
        <ul className="flex-center w-full xl:gap-20 gap-10 flex-wrap lg:flex-nowrap mt-20">
          {navLinks.slice(1, 6).map((navLink) => (
            <Link
              key={navLink.route}
              href={navLink.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center md:w-fit rounded-full bg-white p-2 md:p-3">
                <Image
                  src={navLink.icon}
                  alt="icon"
                  layout="responsive"
                  objectFit="cover"
                  height={24}
                  width={24}
                />
              </li>
              <p className="font-medium md:text-[14px] text-[12px] md:leading-[120%] leading-[80%] mb-0 text-center text-white">
                {navLink.label}
              </p>
              <p className="text-[12px] font-semibold text-center md:leading-[120%] leading-[80%] italic md:mt-1 mt-0 text-white">
                {navLink.spell}
              </p>
            </Link>
          ))}
        </ul>
      </section>

      <SignedIn>
        <section className="sm: mt-12">
          <Collection
            hasSearch={true}
            images={images?.data}
            totalPages={images?.totalPages}
            page={page}
            communityEdits={true}
          />
        </section>
      </SignedIn>
    </>
  );
};

export default Home;
