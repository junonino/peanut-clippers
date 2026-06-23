/**
 * Central affiliate links store.
 * Update AMAZON_TAG with your real Associates ID.
 * All Amazon URLs go here — update once, changes everywhere.
 * Umami tracks clicks via the product key, not the URL.
 */

export const AMAZON_TAG = 'peanutclippers-20'; // ← Replace with your tag

export const affiliateLinks: Record<string, { url: string; name: string; price?: string }> = {
  // ── Wahl Peanut Models ─────────────────────
  'wahl-peanut-corded': {
    url: `https://www.amazon.com/dp/B00001XXXX?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Classic Corded',
    price: '$29.99',
  },
  'wahl-peanut-lithium': {
    url: `https://www.amazon.com/dp/B00001YYYY?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Cordless Lithium',
    price: '$54.99',
  },
  'wahl-peanut-chrome': {
    url: `https://www.amazon.com/dp/B00002AAAA?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Chrome',
    price: '$34.99',
  },
  'wahl-peanut-black': {
    url: `https://www.amazon.com/dp/B00002BBBB?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Black',
    price: '$32.99',
  },
  'wahl-peanut-white': {
    url: `https://www.amazon.com/dp/B00002CCCC?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut White',
    price: '$31.99',
  },
  'wahl-all-star-combo': {
    url: `https://www.amazon.com/dp/B00002DDDD?tag=${AMAZON_TAG}`,
    name: 'Wahl All Star Combo Kit',
    price: '$79.99',
  },

  // ── Competitors ────────────────────────────
  'andis-t-outliner': {
    url: `https://www.amazon.com/dp/B0000EEEE?tag=${AMAZON_TAG}`,
    name: 'Andis T-Outliner',
    price: '$59.99',
  },
  'wahl-stylera': {
    url: `https://www.amazon.com/dp/B0000FFFF?tag=${AMAZON_TAG}`,
    name: 'Wahl Stylera',
    price: '$44.99',
  },
  'babylisspro-fx': {
    url: `https://www.amazon.com/dp/B0000GGGG?tag=${AMAZON_TAG}`,
    name: 'BabylissPro FX707',
    price: '$74.99',
  },
  'wahl-clipper': {
    url: `https://www.amazon.com/dp/B0000HHHH?tag=${AMAZON_TAG}`,
    name: 'Wahl Magic Clip Cordless',
    price: '$89.99',
  },

  // ── Accessories ────────────────────────────
  'replacement-blades': {
    url: `https://www.amazon.com/dp/B00003AAAA?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Replacement Blades',
    price: '$14.99',
  },
  'guards-combs-set': {
    url: `https://www.amazon.com/dp/B00003BBBB?tag=${AMAZON_TAG}`,
    name: 'Wahl Peanut Guards & Combs Set',
    price: '$11.99',
  },
  'blade-oil': {
    url: `https://www.amazon.com/dp/B00003CCCC?tag=${AMAZON_TAG}`,
    name: 'Wahl Clipper Blade Oil',
    price: '$6.99',
  },
  'travel-case': {
    url: `https://www.amazon.com/dp/B00003DDDD?tag=${AMAZON_TAG}`,
    name: 'Hair Clipper Travel Case',
    price: '$12.99',
  },
  'blade-sharpening-kit': {
    url: `https://www.amazon.com/dp/B00003EEEE?tag=${AMAZON_TAG}`,
    name: 'Blade Sharpening Kit',
    price: '$24.99',
  },
};

export function getLink(key: string) {
  return affiliateLinks[key] ?? null;
}
