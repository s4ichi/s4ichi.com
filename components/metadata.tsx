export const defaultTitle = "Takamasa Saichi - s4ichi.com";
export const defaultDescription = "Engineer, Site Reliability, Programming Language";

export function openGraph(
  title: string = defaultTitle,
  description: string = defaultDescription,
  type: string = "website",
  url: string = "https://s4ichi.com",
  publishedTime: string | undefined = undefined
) {
  return {
    title,
    description,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: "/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    type,
    publishedTime,
  };
}

export function twitter(title: string = defaultTitle, description: string = defaultDescription) {
  return {
    title,
    description,
    card: "summary_large_image",
    site: "@s4ichi",
    images: [
      {
        url: "/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
  };
}
