// import { get } from "@Utils/http";
// import { getToken } from "@Utils/index";
// import { IBlog } from "@Interfaces/blog";
// import { urls } from "@Core/constants";

// =====================================================
// const fetchInterceptor = () => {
//   const token = getToken();
//   return {
//     async get<T>(url: string): Promise<T | null> {
//       const response = await get<T>(url, {
//         headers: {
//           "Content-Type": "application/json",
//           authorization: "Bearer " + token,
//         },
//       });
//       if (response && response.parsedBody) {
//         return response.parsedBody;
//       }
//       return null;
//     },
//   };
// };
const data = [
  {
    _id: "1",
    thumbnail:
      "https://media.graphcms.com/resize=w:1280,h:720,fit:crop/quality=value:75/output=format:webp/compress/2H1ykRbxSbSkfrRbyKt7",
    name: "Announcing the official ReqterCMS integration for Netlify!",
    shortdescription:
      "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
    tags: [
      {
        text: "Product Update",
      },
      {
        text: "Headless CMS",
      },
      {
        text: "Announcements",
      },
    ],
    publishdate: "November 13, 2020",
    slug: "reqtercms-netlify-integration",
    category: "1",
  },
  {
    _id: "2",
    thumbnail:
      "https://media.graphcms.com/resize=w:1280,h:720,fit:crop/quality=value:75/output=format:webp/compress/2H1ykRbxSbSkfrRbyKt7",
    name: "Product Update December 2020",
    shortdescription:
      "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
    tags: [
      {
        text: "Product Update",
      },
      {
        text: "Headless CMS",
      },
    ],
    publishdate: "November 13, 2020",
    slug: "reqtercms-update-december",
    category: "1",
  },
  {
    _id: "1",
    thumbnail:
      "https://media.graphcms.com/resize=w:1280,h:720,fit:crop/quality=value:75/output=format:webp/compress/2H1ykRbxSbSkfrRbyKt7",
    name: "Announcing the official ReqterCMS integration for Vercel!",
    shortdescription:
      "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
    tags: [
      {
        text: "Product Update",
      },
      {
        text: "Headless CMS",
      },
      {
        text: "Announcements",
      },
    ],
    publishdate: "November 13, 2020",
    slug: "reqtercms-vercel-integration",
    category: "1",
  },
  {
    _id: "2",
    thumbnail:
      "https://media.graphcms.com/resize=w:1280,h:720,fit:crop/quality=value:75/output=format:webp/compress/2H1ykRbxSbSkfrRbyKt7",
    name: "Product Update Jun 2020",
    shortdescription:
      "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
    tags: [
      {
        text: "Product Update",
      },
      {
        text: "Headless CMS",
      },
    ],
    publishdate: "November 13, 2020",
    slug: "reqtercms-jun-updates",
    category: "2",
  },
  {
    _id: "1",
    thumbnail:
      "https://media.graphcms.com/resize=w:1280,h:720,fit:crop/quality=value:75/output=format:webp/compress/2H1ykRbxSbSkfrRbyKt7",
    name: "Announcing the official ReqterCMS integration for Heroku!",
    shortdescription:
      "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
    tags: [
      {
        text: "Product Update",
      },
      {
        text: "Headless CMS",
      },
      {
        text: "Announcements",
      },
    ],
    publishdate: "November 13, 2020",
    slug: "reqtercms-heroku-integration",
    category: "2",
  },
  {
    _id: "2",
    thumbnail:
      "https://media.graphcms.com/resize=w:1280,h:720,fit:crop/quality=value:75/output=format:webp/compress/2H1ykRbxSbSkfrRbyKt7",
    name: "Product Update April 2020",
    shortdescription:
      "We've just rolled out the native ReqterCMS - Netlify integration, with more integrations on the way!",
    tags: [
      {
        text: "Product Update",
      },
      {
        text: "Headless CMS",
      },
    ],
    publishdate: "November 13, 2020",
    slug: "reqtercms-april-updates",
    category: "2",
  },
];
const getAllBlogs = async () => {
  // return await fetchInterceptor().get<IBlog[]>(urls.allBlogs);
  return data;
};
const getBlogBySlug = async (slug: string) => {
  // const blogs = await fetchInterceptor().get<IBlog[]>(urls.allBlogs);
  return data?.find((item) => item.slug === slug);
};
const getRelatedItemsByCategory = (category: string) => {
  return data?.filter((item) => item.category === category);
};
export { getAllBlogs, getBlogBySlug, getRelatedItemsByCategory };
