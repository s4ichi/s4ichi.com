import Link from "next/link";
import Image from "next/image";
import { name, about, bio } from "components/info";
import { s4ichiAvatar, s4ichiSelfy } from "components/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-sans">{name}</h1>
      <p className="my-5 max-w-[580px] text-neutral-800 dark:text-neutral-200">{about()}</p>
      <div className="flex items-start md:items-center my-8 flex-row">
        <Image alt={name} className="flex rounded-full" src={s4ichiAvatar} placeholder="blur" width={100} priority />
        <div className="mt-8 md:mt-0 ml-3 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400"></div>
        <Image alt={name} className="flex rounded-full" src={s4ichiSelfy} placeholder="blur" width={100} priority />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400"></div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">{bio()}</p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/s4ichi"
          >
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
            <p className="h-7">follow me on twitter</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/s4ichi/"
          >
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
            <p className="h-7">connect with me on LinkedIn</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
