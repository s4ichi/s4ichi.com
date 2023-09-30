import Link from "next/link";

export const name = "Takamasa Saichi";
export const about = () => {
  return (
    <>
      Yo, I{"'"}m s4ichi. I currently working as a Site Reliability Engineer at Finatext Ltd., and studying
      philosophy of programming language and distributed systems.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I work as a software engineer and spend a lot of time working out, doing activities, listening to podcasts, and
      going for walks. ISFJ-T on{" "}
      <Link rel="noopener noreferrer" target="_blank" href="https://www.16personalities.com/">
        16personalities
      </Link>
      .
    </>
  );
};
