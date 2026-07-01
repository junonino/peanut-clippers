/**
 * Central affiliate links store.
 * Update AMAZON_TAG with your real Associates ID.
 * All Amazon URLs go here — update once, changes everywhere.
 * Umami tracks clicks via the product key, not the URL.
 */

export const AMAZON_TAG = 'peanutclippers-20'; // ← Replace with your tag

export const affiliateLinks: Record<string, { url: string; name: string; }> = {
  // ── Wahl Peanut Models ─────────────────────
  'wahl-peanut-corded': {
    url: `https://www.amazon.com/dp/B00001XXXX?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Classic Corded',
  },
  'wahl-peanut-lithium': {
    url: `https://www.amazon.com/dp/B00001YYYY?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Cordless Lithium',
  },
  'wahl-peanut-chrome': {
    url: `https://www.amazon.com/dp/B00002AAAA?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Chrome',
  },
  'wahl-peanut-black': {
    url: `https://www.amazon.com/dp/B00002BBBB?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Black',
  },
  'wahl-peanut-white': {
    url: `https://www.amazon.com/dp/B00002CCCC?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut White',
  },
  'wahl-all-star-combo': {
    url: `https://www.amazon.com/dp/B00002DDDD?tag=${AMAZON_TAG}`,
    name: 'Wahl All Star Combo Kit',
  },

  // ── Competitors ────────────────────────────
  'andis-t-outliner': {
    url: `https://www.amazon.com/dp/B0000EEEE?tag=${AMAZON_TAG}`,
    name: 'Andis T-Outliner',
  },
  'wahl-stylera': {
    url: `https://www.amazon.com/dp/B0000FFFF?tag=${AMAZON_TAG}`,
    name: 'Wahl Stylera',
  },
  'babylisspro-fx': {
    url: `https://www.amazon.com/dp/B0000GGGG?tag=${AMAZON_TAG}`,
    name: 'BabylissPro FX707',
  },
  'wahl-clipper': {
    url: `https://www.amazon.com/dp/B0000HHHH?tag=${AMAZON_TAG}`,
    name: 'Wahl Magic Clip Cordless',
  },

  // ── Accessories ────────────────────────────
  'replacement-blades': {
    url: `https://www.amazon.com/dp/B00003AAAA?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Replacement Blades',
  },
  'guards-combs-set': {
    url: `https://www.amazon.com/dp/B00003BBBB?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Guards & Combs Set',
  },
  'blade-oil': {
    url: `https://www.amazon.com/dp/B00003CCCC?tag=${AMAZON_TAG}`,
    name: 'Wahl Clipper Blade Oil',
  },
  'travel-case': {
    url: `https://www.amazon.com/dp/B00003DDDD?tag=${AMAZON_TAG}`,
    name: 'Hair Clipper Travel Case',
  },
  'blade-sharpening-kit': {
    url: `https://www.amazon.com/dp/B00003EEEE?tag=${AMAZON_TAG}`,
    name: 'Blade Sharpening Kit',
  },
};

export function getLink(key: string) {
  return affiliateLinks[key] ?? null;
}
