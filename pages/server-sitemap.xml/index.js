import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const data = await axios.get("http://localhost:8000/api/v1/posts");

  data;

  const fields = data.data.data.docs.map((post) => ({
    loc: `https://www.theblogforeverything.com/post/${post._id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(context, fields);
};

export default function Site() {}
