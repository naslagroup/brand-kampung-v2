export type BrandUnit = 'all' | 'teh' | 'dimsum' | 'combo';

export interface Product {
  id: string;
  name: string;
  unit: 'teh' | 'dimsum';
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  flavorNotes: string[];
  image: string;
  badge?: 'Best Seller' | 'Favorit' | 'Baru' | 'Rekomendasi' | 'Spesial';
  isAvailable: boolean;
  calories?: string;
  portionSize?: string;
  highlights: string[];
  // Options for customization
  options?: {
    sweetnessLevels?: string[]; // for tea
    iceLevels?: string[]; // for tea
    sizes?: { name: string; extraPrice: number }[]; // for tea
    toppings?: { name: string; price: number }[]; // for tea
    cookingMethod?: string[]; // for dimsum
    sauces?: string[]; // for dimsum
    quantityOptions?: { count: number; price: number; label: string }[]; // for dimsum
  };
}

export interface ComboPackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  badge: string;
  includes: {
    teaItem: string;
    dimsumItem: string;
    extras?: string;
  };
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  unit: 'teh' | 'dimsum' | 'combo';
  price: number;
  quantity: number;
  image: string;
  selectedOptions?: {
    size?: string;
    sweetness?: string;
    ice?: string;
    topping?: string;
    cookingMethod?: string;
    sauce?: string;
    portionLabel?: string;
    notes?: string;
  };
}

export interface UnitInfo {
  id: 'teh' | 'dimsum';
  name: string;
  tagline: string;
  paletteTheme: 'green' | 'red';
  colorClasses: {
    primary: string;
    primaryHover: string;
    lightBg: string;
    lightBorder: string;
    textAccent: string;
    badgeBg: string;
    badgeText: string;
    gradient: string;
  };
  story: string;
  uspList: { title: string; desc: string; iconName: string }[];
  partnership: {
    tagline: string;
    investmentStart: string;
    bepEstimate: string;
    benefits: string[];
    packageIncludes: string[];
    contactWhatsapp: string;
    contactPerson?: string;
    whatsappDisplay?: string;
    instagram: string;
  };
  outlets: {
    city: string;
    name: string;
    address: string;
    hours: string;
    isCenter?: boolean;
  }[];
  faq: { q: string; a: string }[];
}
