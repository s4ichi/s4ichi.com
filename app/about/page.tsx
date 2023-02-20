import Link from "next/link";
import type { Metadata } from "next";
import { description } from "components/metadata";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "About - s4ichi.com",
  description: description,
};

export default function About() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, I{"'"}m Takamasa Saichi. as known as <b>s4ichi</b> online.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I currently work as a Site Reliability Engineer at Cookpad. I am a member of the team that provides the common
          platform for Cookpad{"'"}s services. I focus on building CI/CD platform and observability features for
          production environment.
        </p>
        <p>
          I{"'"}m also interested in the philosophy and implementation of programming languages. I have previously
          studied the implementation of static memory allocation on cruby. I enjoy deciphering the implementation of the
          programming language itself, as well as the various software in general that surrounds it.
        </p>

        <div className="flex flex-col gap-2 mt-4 mb-4 md:flex-row md:gap-2">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/s4ichi"
            className="flex w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/s4ichi"
            className="flex w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://speakerdeck.com/s4ichi"
            className="flex w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Speaker Deck</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
        </div>

        <div className="flex flex-col gap-2 mt-4 mb-4 md:flex-row md:gap-2">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/s4ichi/"
            className="flex w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://mastodon.cloud/@s4ichi"
            className="flex w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Mastodon</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://discordapp.com/users/s4ichi"
            className="flex w-1/3 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Discord</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
        </div>

        <hr />

        <h2 className="prose-h2 font-bold text-xl font-serif">Experience</h2>
        <ul className="list-disc">
          <li>
            <b>Software Engineer / Site Reliability Engineer @ Cookpad Inc.</b>
            <br />
            2017/06 - Present
          </li>
          <li>
            <b>Software Engineer (Internship) @ Mercari Inc.</b>
            <br />
            2018/08 - 2018/09
          </li>
          <li>
            <b>Part-time Software Engineer @ Minnano Wedding Co., Ltd</b>
            <br />
            2016/04 - 2017/04
          </li>
          <li>
            <b>Part-time Software Engineer @ Beatail Inc.</b>
            <br />
            2014/04 - 2016/07
          </li>
        </ul>
        <h2 className="prose-h2 font-bold text-xl font-serif">Education</h2>
        <ul className="list-disc">
          <li>
            <b>University of Tsukuba</b>
            <br />
            2018/04 - 2020/03
            <br />
            Master{"'"}s Degree Programs in Systems and Information Engineering
          </li>
          <li>
            <b>University of Tsukuba</b>
            <br />
            2014/04 - 2018/03
            <br />
            Degree Programs in College of Information Science
          </li>
        </ul>

        <h2 className="prose-h2 font-bold text-xl font-serif">Publication/Talk</h2>
        <ul className="list-disc">
          <li>TBD</li>
        </ul>
      </div>
    </section>
  );
}
