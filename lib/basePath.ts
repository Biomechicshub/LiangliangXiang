/**
 * Prepend the GitHub Pages basePath to any public-folder asset path.
 * e.g. asset("/cv.pdf") → "/LiangliangXiang/cv.pdf"
 *
 * Next.js <Image> and <Link> handle basePath automatically;
 * plain <a href> tags need this helper.
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}
