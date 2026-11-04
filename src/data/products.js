export const featuredProducts = [
  {
    id: "featured-air-jordan",
    name: "Air Jordan 1 Retro High OG",
    category: "Basketball",
    price: 14999,
    image: "/images/cutout-air-jordan.png",
    description: "An unmistakable icon with a premium, court-ready feel.",
  },
  {
    id: "featured-air-max",
    name: "Nike Air Max 1 PRM",
    category: "Lifestyle",
    price: 12999,
    image: "/images/cutout-air-max.png",
    description: "Visible Air cushioning and a timeless everyday silhouette.",
  },
  {
    id: "featured-cortez",
    name: "Nike Cortez TXT",
    category: "Lifestyle",
    price: 5299,
    image: "/images/cutout-cortez.png",
    description: "A low-profile classic refreshed for the modern street.",
  },
  {
    id: "featured-dunk",
    name: "Nike Dunk Low Retro",
    category: "Lifestyle",
    price: 8999,
    image: "/images/cutout-dunk.png",
    description: "Clean lines, bold colour and effortless daily comfort.",
  },
  {
    id: "featured-vomero",
    name: "Nike Zoom Vomero 5",
    category: "Running",
    price: 11499,
    image: "/images/cutout-vomero.png",
    description: "Layered comfort for the miles ahead and the moments between.",
  },
];

export const menProducts = [
  { id: "men-brasilia", name: "Nike Brasilia 9.5", category: "Training", price: 9999, image: "/images/cutout-brasilia.png", description: "A versatile running shoe with comfort and durability." },
  { id: "men-championship", name: "Nike Championship", category: "Running", price: 13499, image: "/images/cutout-championship.png", description: "Soft cushioning and a secure fit for long-distance runs." },
  { id: "men-force", name: "Nike Air Force 1 '07 Texture", category: "Lifestyle", price: 7499, image: "/images/cutout-air-force.png", description: "Classic style with premium leather for everyday wear." },
];

export const womenProducts = [
  { id: "women-phoenix", name: "Nike Sportswear Phoenix Fleece", category: "Lifestyle", price: 10999, image: "/images/cutout-women-1.png", description: "Iconic silhouette with cushioned comfort." },
  { id: "women-aura", name: "Nike Aura", category: "Training", price: 6499, image: "/images/cutout-women-2.png", description: "Lightweight, breathable, and flexible for all-day wear." },
  { id: "women-air-max", name: "Nike Air Max Dn8", category: "Running", price: 8799, image: "/images/cutout-women-3.png", description: "Retro-inspired style with modern cushioning." },
];

export const kidsProducts = [
  { id: "kids-club", name: "Nike Sportswear Club Fleece", category: "Everyday", price: 6999, image: "/images/cutout-kids-1.png", description: "Great comfort and style for young feet." },
  { id: "kids-elemental", name: "Nike Elemental", category: "Everyday", price: 3499, image: "/images/cutout-kids-2.png", description: "Affordable, stylish, and comfortable for everyday use." },
  { id: "kids-nova", name: "Nike Air Max Nova", category: "Running", price: 4299, image: "/images/cutout-kids-3.png", description: "Easy slip-on design and flexible for active kids." },
];

export const newArrivals = [
  { id: "new-perfectstretch", name: "Nike 24.7 PerfectStretch", category: "Performance", price: 18999, image: "/images/cutout-new-1.png", description: "Top-of-the-line performance Dri-FIT for serious athletes." },
  { id: "new-shox", name: "Nike Shox TL", category: "Lifestyle", price: 14499, image: "/images/cutout-new-2.png", description: "Responsive cushioning and a bold, unmistakable profile." },
  { id: "new-jordan", name: "Jordan", category: "Basketball", price: 8999, image: "/images/cutout-new-3.png", description: "Sleek, modern design with lightweight cushioning." },
];

export const allProducts = [...featuredProducts, ...menProducts, ...womenProducts, ...kidsProducts, ...newArrivals];
