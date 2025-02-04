const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const blogsContentDirectory = path.join(process.cwd(), "blogs");

function getBlogData(slug) {
  const filePath = path.join(blogsContentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { birthtime, mtime } = fs.statSync(filePath);
  const { data } = matter(fileContents);
  // TODO: should we add draft post
  if (data.draft) return null;
  return {
    slug,
    title: data.title,
    description: data.summary,
    tags: data.tags,
    datetime: birthtime.toISOString(),
    modifiedTime: mtime.toISOString(),
  };
}

function getAllBlogs() {
  const files = fs.readdirSync(blogsContentDirectory);

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return getBlogData(slug);
    })
    .filter((data) => data != null);
}

const generateBlogSearchJson = () => {
  const blogs = getAllBlogs();

  // convert post json data to string
  const jsonString = JSON.stringify(blogs);
  // create search.json file
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  fs.writeFileSync("./blog-search.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
};

generateBlogSearchJson();
