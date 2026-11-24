/** Keep preferences saved by older versions available on the same browser origin. */
export function readPreference(key: string): string | null {
  return localStorage.getItem(`ejhq.${key}`) ?? localStorage.getItem(`jsmhq.${key}`);
}

export function writePreference(key: string, value: string) {
  localStorage.setItem(`ejhq.${key}`, value);
}
