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
      <h1 className="font-bold text-3xl font-sans">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hi, I{"'"}m Takamasa Saichi. also known as <b>s4cihi</b> on the web.
      </p>
      <div className="prose max-w-[770px] prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          Currently working as a Site Reliability Engineer at Finatext Ltd. Focusing on improve the developer
          productibity building such as CI/CD platform and observability features for production.
        </p>

        <p>
          Rubyist, Rustacean. Studying on memory management of programming languages. Concerned with memory management
          of dynamic languages and optimizing just in time memory allocation.
        </p>

        <div className="flex flex-col gap-2 mt-4 mb-4 md:flex-row md:gap-2">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/s4ichi"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
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
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
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
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
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
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
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
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Mastodon</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.docswell.com/user/s4ichi"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <div className="ml-3">Docswell</div>
            </div>
            <ArrowUpRightIcon className="h-4 mr-2 text-gray-500" />
          </Link>
        </div>
        <hr />
        <h2 className="prose-h2 font-bold text-xl font-sans">Experience</h2>
        <ul className="list-disc">
          <li>
            <b>Software Engineer @ Finatext Ltd.</b>
            <br />
            2023/09 - Present
          </li>
          <li>
            <b>Software Engineer / Site Reliability Engineer @ Cookpad Inc.</b>
            <br />
            2017/06 - 2023/08
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
        <h2 className="prose-h2 font-bold text-xl font-sans">Education</h2>
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

        <h2 className="prose-h2 font-bold text-xl font-sans">Writes/Talks</h2>
        <ul className="list-disc">
          <li>
            <b>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.docswell.com/s/s4ichi/5RXQLG-cookpad-self-hosted-runner-infra"
              >
                CI/CD Test Night #6 「開発者体験を改善し続けるための Self-hosted runner 運用基盤」
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/live/BRbKH1TVsUQ?feature=share"
              >
                Cookpad Lounge #17 〜Ruby コミッター×プロダクト開発エンジニア座談会〜
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://techlife.cookpad.com/entry/2023/01/18/115104"
              >
                クックパッド開発者ブログ: AWS re:Invent 2022 に参加してきました
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://techlife.cookpad.com/entry/2022/11/07/124025"
              >
                クックパッド開発者ブログ: Amazon ECS と AWS Lambda で汎用 self-hosted runner を提供する基盤
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link rel="noopener noreferrer" target="_blank" href="https://kaigionrails.org/2021/talks/s4ichi/">
                Kaigi on Rails 2021: メトリクス可視化から始める Rails ウェブサーバーのチューニング
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/live/c_yBVmq-VcA?feature=share"
              >
                Cookpad Lounge #7 世界最大級のモノリスcookpad_allどうする会議
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link rel="noopener noreferrer" target="_blank" href="http://id.nii.ac.jp/1001/00207288/">
                情報処理学会論文誌プログラミング: 実行時リージョン解析による動的言語Rubyのメモリ割付け最適化
              </Link>
            </b>
          </li>
          <li>
            <b>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://engineering.mercari.com/blog/entry/2018-09-04-100000/"
              >
                Custom Controller で Kubernetes の上の TLS 証明書を監視する
              </Link>
            </b>
          </li>
        </ul>
      </div>
    </section>
  );
}
