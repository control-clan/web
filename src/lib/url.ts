const base = import.meta.env.BASE_URL;
const trimmed = base.endsWith('/') && base.length > 1 ? base.slice(0, -1) : base === '/' ? '' : base;

export function url(path: string): string {
  if (/^(?:[a-z]+:|\/\/|mailto:|tel:|#)/i.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${trimmed}${p}` || '/';
}
