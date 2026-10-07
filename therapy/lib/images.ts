import { existsSync } from "node:fs";
import path from "node:path";

const extensions = [".jpg", ".jpeg", ".png", ".webp"];

// Returns the public URL of /images/<name>.<ext> if the file exists, otherwise null,
// so sections can fall back to their illustrated placeholder until an image is added.
export function findImage(name: string): string | null {
  for (const ext of extensions) {
    const rel = `/images/${name}${ext}`;
    if (existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return null;
}
