import { promises as fs } from "fs";
import path from "path";

async function traverseDirectory(dir, basePath = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const filePaths = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name);
      if (entry.isDirectory()) {
        return traverseDirectory(entryPath, relativePath);
      } else {
        return relativePath;
      }
    })
  );
  return Array.prototype.concat(...filePaths);
}

export default async function handler(req, res) {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const assets = await traverseDirectory(publicDir);
    res.status(200).json({ assets });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
