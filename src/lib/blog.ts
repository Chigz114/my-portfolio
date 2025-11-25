import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  category: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

// Helper function to recursively get all files
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

export function getSortedPostsData(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get all markdown files recursively
  const allFiles = getAllFiles(postsDirectory);
  
  const allPostsData = allFiles
    .filter((file) => file.endsWith(".md"))
    .map((fullPath) => {
      // Extract category and slug from path relative to postsDirectory
      // e.g., content/blog/hardware/pcb-design.md -> category: hardware, slug: pcb-design
      const relativePath = path.relative(postsDirectory, fullPath);
      const pathParts = relativePath.split(path.sep);
      
      // Handle cases where file might be at root or in subdir
      const category = pathParts.length > 1 ? pathParts[0] : "uncategorized";
      const fileName = pathParts[pathParts.length - 1];
      const slug = fileName.replace(/\.md$/, "");

      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        category,
        content,
        ...(data as { title: string; date: string; description: string; tags: string[] }),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(category: string, slug: string): Post {
  // Decode category to handle URL encoding (e.g., "PCB%20Design" -> "PCB Design")
  const decodedCategory = decodeURIComponent(category);

  // Construct path based on category
  // If category is 'uncategorized', check root, otherwise check subdir
  const fullPath = decodedCategory === "uncategorized" 
    ? path.join(postsDirectory, `${slug}.md`)
    : path.join(postsDirectory, decodedCategory, `${slug}.md`);
    
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    category,
    content,
    ...(data as { title: string; date: string; description: string; tags: string[] }),
  };
}
