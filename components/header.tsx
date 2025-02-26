import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import clsx from "clsx";
import NextLink from "next/link";
import { link as linkStyles } from "@heroui/theme";
import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";

import { GithubIcon, SearchIcon } from "./icons";

import { siteConfig } from "@/config/site";

export const Header = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar className="bg-black" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="text-gray-100 font-bold text-inherit">
              Geonwoo_PlayList
            </div>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="lg:flex">
          <Link
            className="text-white"
            href="https://music.apple.com/us/artist/%EA%B9%80%EA%B1%B0%EB%88%84/1774774538"
          >
            Apple Music
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link
            className="text-white"
            href="https://www.youtube.com/channel/UCsI6PlDcZLOudV00YhvakcQ"
          >
            YouTube
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link
            className="text-white"
            href="https://open.spotify.com/artist/5dN2rRPbn2Uag2tZVlxHFs?si=WeWEetPeQ3-NJfv7wYH1Lw&nd=1&dlsi=d5f9e3ebd1914fe5"
          >
            Spotify
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link
            className="text-white"
            href="https://www.melon.com/artist/detail.htm?artistId=3985240"
          >
            Melon
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-black bg-default-200"
            href="https://github.com/Kim-Geonwoo/asdf-3"
            startContent={<GithubIcon className="text-black" />}
            variant="flat"
          >
            Github
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href="https://github.com/Kim-Geonwoo">
          <GithubIcon className="text-default-500" />
        </Link>
        <div className="text-gray-300">
          <NavbarMenuToggle />
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-black z-50">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarItem className="lg:flex">
            <Link
              className="text-white"
              href="https://music.apple.com/us/artist/%EA%B9%80%EA%B1%B0%EB%88%84/1774774538"
            >
              Apple Music
            </Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Link
              className="text-white"
              href="https://www.youtube.com/channel/UCsI6PlDcZLOudV00YhvakcQ"
            >
              YouTube
            </Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Link
              className="text-white"
              href="https://open.spotify.com/artist/5dN2rRPbn2Uag2tZVlxHFs?si=WeWEetPeQ3-NJfv7wYH1Lw&nd=1&dlsi=d5f9e3ebd1914fe5"
            >
              Spotify
            </Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Link
              className="text-white"
              href="https://www.melon.com/artist/detail.htm?artistId=3985240"
            >
              Melon
            </Link>
          </NavbarItem>

          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-black bg-default-200"
              href="https://github.com/Kim-Geonwoo/asdf-3"
              startContent={<GithubIcon className="text-black" />}
              variant="flat"
            >
              Github
            </Button>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
