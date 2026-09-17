import { Product, ComboPackage, UnitInfo } from '../types';
import brandLogoImg from '../assets/images/loko-brand-kampung.png';
import tehBannerImg from '../assets/images/teh_kampung_official_1789670507221.jpg';
import dimsumBannerImg from '../assets/images/dimsum_kampung_official_1789670523167.jpg';

// Official Brand Kampung unit banners and logo assets
export const BRAND_ASSETS = {
  logo: brandLogoImg,
  heroBanner: '/src/assets/images/brand_kampung_hero_1789550016533.jpg',
  tehBanner: tehBannerImg,
  dimsumBanner: dimsumBannerImg,
};

export const BRAND_KAMPUNG_INFO = {
  name: 'Brand Kampung',
  legalName: 'PT Kampung Kuliner Nusantara (Brand Kampung Group)',
  origin: 'Tambakroto, Indonesia',
  foundingYear: '2022',
  vision: 'Membawa cita rasa otentik kuliner rakyat ke panggung modern dengan kualitas bahan terbaik, harga terjangkau, dan membuka peluang wirausaha bagi masyarakat luas.',
  tagline: 'Segar & Hangat di Bawah Naungan Brand Kampung',
  socialMedia: {
    instagramTeh: '@tehkampung',
    instagramDimsum: '@dimsumkampung',
    whatsapp: '6281234567890',
    email: 'kemitraan.kampung@gmail.com',
  },
  stats: [
    { label: 'Mitra Aktif', value: '150+' },
    { label: 'Cup Teh Terjual / Bulan', value: '45.000+' },
    { label: 'Porsi Dimsum / Bulan', value: '30.000+' },
    { label: 'Rating Kepuasan Pelanggan', value: '4.9 / 5' },
  ],
};

export const TEH_KAMPUNG_INFO: UnitInfo = {
  id: 'teh',
  name: 'Teh Kampung',
  tagline: 'Segarnya Tradisi Teh Pilihan Tambakroto',
  paletteTheme: 'green',
  colorClasses: {
    primary: 'bg-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    lightBg: 'bg-emerald-50',
    lightBorder: 'border-emerald-200',
    textAccent: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    gradient: 'from-emerald-700 via-emerald-600 to-teal-700',
  },
  story:
    'Teh Kampung lahir dari kearifan lokal Tambakroto yang memadukan 3 jenis pucuk daun teh tradisional pilihan Jawa Tengah. Diseduh segar setiap hari menggunakan gula tebu asli tanpa pemanis buatan, menghasilkan cita rasa khas WASGITEL: Wangi melatinya semerbak, Sepet nikmat di lidah, Legi manis alami, dan Kenthel pekat menyegarkan.',
  uspList: [
    {
      title: 'Racikan Daun Teh Asli Wasgitel',
      desc: 'Kombinasi daun teh hitam dan melati alami kualitas perkebunan rakyat, bukan serbuk instan.',
      iconName: 'Leaf',
    },
    {
      title: '100% Gula Pasir & Tebu Asli',
      desc: 'Tanpa pemanis buatan (sakarin/siklamat). Manisnya pas, nyaman di tenggorokan, tidak bikin batuk.',
      iconName: 'Sparkles',
    },
    {
      title: 'Diseduh Fresh Setiap Hari',
      desc: 'Air seduhan segar disiapkan berulang setiap shift demi menjaga kejernihan aroma dan rasa pekat.',
      iconName: 'Clock',
    },
    {
      title: 'Porsi Jumbo Hemat Rakyat',
      desc: 'Cup 22oz super puas dengan es batu kristal higienis bersertifikasi air minum sehat.',
      iconName: 'CupSoda',
    },
  ],
  partnership: {
    tagline: 'Buka Usaha Teh Kampung di Kota Anda - Modal Ringan, Margin Menggiurkan!',
    investmentStart: 'Mulai Rp 3.900.000 (Paket Lengkap Siap Jualan)',
    bepEstimate: '1 - 2 Bulan (Estimasi penjualan 80-120 cup/hari)',
    benefits: [
      '100% Keuntungan Milik Mitra (Tanpa Royalty Fee)',
      'Sudah termasuk Booth Portable eksklusif bernuansa hijau segar',
      'Paket Bahan Baku Awal untuk 500 Porsi Penjualan Pertama',
      'Peralatan lengkap: Dispenser Stainless, Shaker, Termos, Cup Sealer/Manual, Banner & Seragam',
      'Konsultasi Lokasi dan Panduan SOP Pembuatan Teh Berstandar',
      'Promosi gratis di media sosial @tehkampung',
    ],
    packageIncludes: [
      'Booth Portable / Gerobak Roda Premium',
      'Termos Es & Dispenser Teh Stainless Steel',
      'Panci Seduh Food-Grade & Saringan Kain Tradisional',
      'Bahan Teh Racikan Kampung 10 kg (500 porsi)',
      'Gelas Cup Sablon Brand Kampung 500 pcs + Sedotan',
      'Buku Panduan Resep & Video Training Online',
    ],
    contactWhatsapp: '6281234567890',
    instagram: '@tehkampung',
  },
  outlets: [
    {
      city: 'Tambakroto (Pusat)',
      name: 'Outlet Pusat Tambakroto',
      address: 'Jl. Raya Tambakroto No. 12, Area Sentra Kuliner Tradisional',
      hours: '09.00 - 21.30 WIB',
      isCenter: true,
    },
    {
      city: 'Semarang',
      name: 'Cabang Banyumanik',
      address: 'Jl. Grafika No. 45, Banyumanik (Depan Lapangan Futsal)',
      hours: '10.00 - 21.00 WIB',
    },
    {
      city: 'Solo',
      name: 'Cabang Manahan',
      address: 'Jl. MT Haryono No. 18, Kawasan Stadion Manahan',
      hours: '08.30 - 22.00 WIB',
    },
    {
      city: 'Yogyakarta',
      name: 'Cabang Kaliurang KM 5',
      address: 'Jl. Kaliurang KM 5 No. 88 (Dekat Kampus UGM)',
      hours: '10.00 - 22.00 WIB',
    },
  ],
  faq: [
    {
      q: 'Apa perbedaan Teh Kampung dengan es teh biasa di pinggir jalan?',
      a: 'Teh Kampung menggunakan daun teh tubruk racikan khusus Tambakroto dengan aroma melati alami dan teknik seduhan tradisional yang menghasilkan rasa pekat khas (sepet & wangi), bukan sirup ekstrak atau teh celup instan.',
    },
    {
      q: 'Apakah bisa request tingkat kemanisan (sugar level)?',
      a: 'Tentu bisa! Anda bisa memesan versi Normal Sugar, Less Sugar (50%), atau bahkan Tawar (No Sugar).',
    },
    {
      q: 'Bagaimana cara bergabung kemitraan Teh Kampung?',
      a: 'Cukup klik tombol "Daftar Kemitraan" di halaman ini atau hubungi WhatsApp resmi kami di nomor 0812-3456-7890. Tim kami akan mengirimkan proposal detail dan membantu proses hingga siap jualan.',
    },
  ],
};

export const DIMSUM_KAMPUNG_INFO: UnitInfo = {
  id: 'dimsum',
  name: 'Dimsum Kampung',
  tagline: 'Kehangatan Dimsum Halal Khas Tradisi Pilihan',
  paletteTheme: 'red',
  colorClasses: {
    primary: 'bg-red-600',
    primaryHover: 'hover:bg-red-700',
    lightBg: 'bg-red-50',
    lightBorder: 'border-red-200',
    textAccent: 'text-red-700',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-800',
    gradient: 'from-red-800 via-red-600 to-amber-700',
  },
  story:
    'Dimsum Kampung hadir dengan komitmen menyajikan hidangan dimsum kukus dan goreng yang 100% Halal, padat daging ayam fillet segar pilihan dan olahan udang laut gurih. Diolah higienis setiap hari di dalam kukusan klakat bambu tradisional, disajikan lengkap dengan Chili Oil bawang putih khas racikan rahasia Dimsum Kampung yang pedas, gurih, dan wangi semerbak.',
  uspList: [
    {
      title: '100% Bersertifikasi Halal',
      desc: 'Bebas gelatin haram, tanpa angciu, tanpa mirin, dan tanpa lemak hewani non-halal. Aman & berkah untuk seluruh keluarga.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Padat Daging Ayam & Udang Segar',
      desc: 'Perbandingan daging 85% dengan sedikit tepung tapioka super halus, menghasilkan gigitan kenyal berdaging empuk.',
      iconName: 'Award',
    },
    {
      title: 'Chili Oil Khas Gurih Wangi',
      desc: 'Diracik dari cabai kering pilihan, bawang putih cincang gurih, ebi sangrai, dan minyak wijen premium.',
      iconName: 'Flame',
    },
    {
      title: 'Kukus Segar di Klakat Bambu',
      desc: 'Uap panas klakat bambu menjaga kelembapan tekstur dimsum tetap juicy dan wangi saat disantap.',
      iconName: 'Utensils',
    },
  ],
  partnership: {
    tagline: 'Peluang Usaha Dimsum Kampung - Favorit Segala Usia, Repeat Order Tinggi!',
    investmentStart: 'Mulai Rp 4.800.000 (Paket Kukusan & Perlengkapan Lengkap)',
    bepEstimate: '1.5 - 2 Bulan (Estimasi 50-80 porsi/hari)',
    benefits: [
      'Bahan baku Dimsum beku (frozen vacuum) terstandar BPOM & Halal',
      'Free 1 Set Klakat Bambu Susun 4 Tingkat & Panci Kukus Stainless Tebal',
      'Termasuk Kompor Gas Mawar Khusus & Regulator Tekanan Tinggi',
      'Free Pasokan 200 Porsi Dimsum Campur & 5 Botol Chili Oil Khas',
      'Free Spanduk Display, Kemasan Box Kraft Food Grade & Sumpit Bambu',
      'Tidak ada bagi hasil bulanan (100% keuntungan mitra)',
    ],
    packageIncludes: [
      'Booth Desain Oriental Warm Red Dimsum Kampung',
      'Panci Kukus Stainless + Klakat Bambu Tradisional',
      'Kompor Mawar & Selang Regulator Standar SNI',
      'Stok Awal Dimsum Frozen 800 pcs (200 porsi @4pcs)',
      'Chili Oil Kampung 5 Liter & Saus Dimsum Manis Gurih',
      'Packaging Mika & Box Ramah Lingkungan 200 pcs',
    ],
    contactWhatsapp: '6281234567890',
    instagram: '@dimsumkampung',
  },
  outlets: [
    {
      city: 'Tambakroto (Pusat)',
      name: 'Dapur Utama & Kedai Tambakroto',
      address: 'Jl. Raya Tambakroto No. 12B, Sentra Kuliner Brand Kampung',
      hours: '11.00 - 22.00 WIB',
      isCenter: true,
    },
    {
      city: 'Semarang',
      name: 'Cabang Tembalang',
      address: 'Jl. Prof. Soedarto No. 102, Tembalang (Dekat Kampus UNDIP)',
      hours: '11.00 - 22.30 WIB',
    },
    {
      city: 'Solo',
      name: 'Cabang UMS',
      address: 'Jl. Garuda Mas No. 54, Pabelan (Kawasan Kampus UMS)',
      hours: '11.00 - 22.00 WIB',
    },
    {
      city: 'Yogyakarta',
      name: 'Cabang Seturan',
      address: 'Jl. Seturan Raya No. 33, Caturtunggal, Depok, Sleman',
      hours: '11.30 - 23.00 WIB',
    },
  ],
  faq: [
    {
      q: 'Apakah Dimsum Kampung benar-benar 100% Halal?',
      a: 'Ya, seluruh bahan baku daging ayam fillet, udang, kulit pangsit, hingga bumbu penyedap yang kami gunakan telah mengantongi sertifikat Halal Indonesia. Kami tidak menggunakan minyak babi, arak masak, atau bahan haram lainnya.',
    },
    {
      q: 'Berapa isi per porsi Dimsum Kampung?',
      a: 'Porsi standar berisi 4 pcs dimsum hangat. Kami juga menyediakan porsi hemat 6 pcs dan Porsi Platter Ramai-ramai berisi 8 hingga 10 pcs lengkap dengan aneka saus.',
    },
    {
      q: 'Apakah bisa dibeli dalam bentuk Frozen (Beku)?',
      a: 'Bisa! Kami menyediakan kemasan vacuum beku isi 10 pcs dan 20 pcs lengkap dengan cup Chili Oil yang bisa disimpan di freezer rumah hingga 2 bulan.',
    },
  ],
};

// Complete product catalog
export const PRODUCTS: Product[] = [
  // ===================== TEH KAMPUNG PRODUCTS =====================
  {
    id: 'teh-01',
    name: 'Teh Original Kampung Jumbo',
    unit: 'teh',
    category: 'Teh Original',
    price: 5000,
    originalPrice: 6000,
    description:
      'Seduhan racikan 3 jenis daun teh tradisional Jawa dengan aroma melati wangi semerbak, rasa sepet mantap, dan manis alami gula tebu. Disajikan dingin segar porsi 22oz.',
    flavorNotes: ['Wangi Melati Asli', 'Sepet Lembut Mantap', 'Manis Gula Tebu'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    isAvailable: true,
    calories: '90 kkal',
    portionSize: 'Cup Jumbo 22oz',
    highlights: ['100% Daun Teh Lokal', 'Gula Tebu Asli', 'Es Kristal Higienis'],
    options: {
      sweetnessLevels: ['Normal Manis', 'Sedang (50%)', 'Sedikit Manis (25%)', 'Tawar (No Sugar)'],
      iceLevels: ['Normal Ice', 'Sedikit Es (Less Ice)', 'Tanpa Es (Dingin Suhu Ruang)'],
      sizes: [
        { name: 'Reguler (16oz)', extraPrice: -1000 },
        { name: 'Jumbo Puas (22oz)', extraPrice: 0 },
      ],
      toppings: [
        { name: 'Cincau Hitam Kenyal', price: 2000 },
        { name: 'Nata de Coco', price: 2000 },
        { name: 'Lemon Slice Segar', price: 2000 },
      ],
    },
  },
  {
    id: 'teh-02',
    name: 'Teh Kampul Solo Tambakroto',
    unit: 'teh',
    category: 'Teh Buah & Fusion',
    price: 7000,
    originalPrice: 8000,
    description:
      'Sensasi khas teh racikan Solo dengan irisan jeruk nipis dan lemon segar yang "dikampul" (mengapung), memberikan perpaduan asam segar alami dan aroma teh melati pekat.',
    flavorNotes: ['Asam Segar Alami', 'Aroma Kulit Jeruk', 'Teh Hitam Pekat'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    badge: 'Favorit',
    isAvailable: true,
    calories: '95 kkal',
    portionSize: 'Cup Jumbo 22oz',
    highlights: ['Jeruk Nipis & Lemon Segar', 'Kaya Vitamin C', 'Segar Siang Hari'],
    options: {
      sweetnessLevels: ['Normal Manis', 'Sedang (50%)', 'Sedikit Manis (25%)'],
      iceLevels: ['Normal Ice', 'Less Ice'],
      toppings: [
        { name: 'Extra Jeruk Nipis Slice', price: 2000 },
        { name: 'Nata de Coco', price: 2000 },
      ],
    },
  },
  {
    id: 'teh-03',
    name: 'Teh Tarik Kampung Creamy',
    unit: 'teh',
    category: 'Teh Susu & Creamy',
    price: 9000,
    originalPrice: 11000,
    description:
      'Perpaduan teh hitam kental khas kampung yang ditarik hingga berbusa lembut bersama susu kental manis dan creamer nabati pilihan. Gurih, manis, dan creamy.',
    flavorNotes: ['Creamy Gurih', 'Busa Lembut', 'Teh Pekat Legit'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    badge: 'Rekomendasi',
    isAvailable: true,
    calories: '180 kkal',
    portionSize: 'Cup Jumbo 22oz',
    highlights: ['Ditarik Manual Tradisional', 'Susu Kental Gurih', 'Bisa Dingin / Hangat'],
    options: {
      sweetnessLevels: ['Normal Manis', 'Less Sweet (70%)'],
      iceLevels: ['Dingin (Ice)', 'Hangat Nikmat (Warm)'],
      toppings: [
        { name: 'Cincau Grass Jelly', price: 2000 },
        { name: 'Boba Mutiara Kenyal', price: 3000 },
      ],
    },
  },
  {
    id: 'teh-04',
    name: 'Teh Melati Keraton Jumbo',
    unit: 'teh',
    category: 'Teh Original',
    price: 6000,
    description:
      'Racikan daun teh hijau dan melati kuncup segar dengan karakter harum lembut yang menenangkan. Sangat cocok dinikmati untuk melepas penat dan dahaga.',
    flavorNotes: ['Aroma Bunga Melati Kuat', 'Rasa Lembut Menenangkan', 'Aftertaste Manis'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    badge: 'Favorit',
    isAvailable: true,
    calories: '85 kkal',
    portionSize: 'Cup Jumbo 22oz',
    highlights: ['Kuncup Melati Asli', 'Rendah Kalori', 'Aroma Terapi Alami'],
    options: {
      sweetnessLevels: ['Normal Manis', 'Sedang (50%)', 'Tawar (No Sugar)'],
      iceLevels: ['Normal Ice', 'Less Ice'],
      toppings: [{ name: 'Nata de Coco', price: 2000 }],
    },
  },
  {
    id: 'teh-05',
    name: 'Teh Lemon Madu Alami',
    unit: 'teh',
    category: 'Teh Buah & Fusion',
    price: 10000,
    originalPrice: 12000,
    description:
      'Teh seduh kampung dipadukan dengan madu randu murni dan perasan lemon segar asli. Memberikan kesegaran ekstra sekaligus meningkatkan imunitas tubuh.',
    flavorNotes: ['Madu Murni Alami', 'Asam Lemon Segar', 'Keseimbangan Teh Lembut'],
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&auto=format&fit=crop&q=80',
    badge: 'Spesial',
    isAvailable: true,
    calories: '110 kkal',
    portionSize: 'Cup Jumbo 22oz',
    highlights: ['Madu Murni 100%', 'Bebas Pemanis Buatan', 'Kaya Antioksidan'],
    options: {
      sweetnessLevels: ['Manis Madu Normal', 'Less Honey'],
      iceLevels: ['Dingin (Ice)', 'Hangat Sehat (Warm)'],
      toppings: [{ name: 'Extra Madu Murni', price: 3000 }],
    },
  },
  {
    id: 'teh-06',
    name: 'Teh Susu Cincau Kampung',
    unit: 'teh',
    category: 'Teh Susu & Creamy',
    price: 10000,
    description:
      'Favorit muda-mudi! Teh susu racikan kampung manis legit dipadukan dengan potongan cincau hitam kenyal dingin yang melimpah.',
    flavorNotes: ['Manis Susu Lembut', 'Cincau Kenyal Sejuk', 'Rasa Nostalgia'],
    image: 'https://images.unsplash.com/photo-1558857563-b37fe88f2dd7?w=600&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    isAvailable: true,
    calories: '160 kkal',
    portionSize: 'Cup Jumbo 22oz',
    highlights: ['Cincau Segar Melimpah', 'Pereda Panas Dalam', 'Porsi Puas Mengenyangkan'],
    options: {
      sweetnessLevels: ['Normal Manis', 'Less Sweet'],
      iceLevels: ['Normal Ice', 'Less Ice'],
    },
  },

  // ===================== DIMSUM KAMPUNG PRODUCTS =====================
  {
    id: 'dim-01',
    name: 'Siomay Ayam Kampung (Isi 4)',
    unit: 'dimsum',
    category: 'Dimsum Kukus Klasik',
    price: 14000,
    originalPrice: 16000,
    description:
      'Dimsum siomay daging ayam cincang premium dengan kulit tipis kenyal gurih, dihiasi taburan tobiko orange renyah. Disajikan panas mengepul dari klakat bambu dengan chili oil khas.',
    flavorNotes: ['Daging Ayam Juicy', 'Gurih Bawang Putih', 'Kulit Tipis Lembut'],
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    isAvailable: true,
    portionSize: '1 Porsi (4 Pcs) + Chili Oil',
    highlights: ['100% Halal', 'Ayam Fillet Pilihan', 'Termasuk Sambal Chili Oil'],
    options: {
      cookingMethod: ['Kukus', 'Goreng'],
      sauces: ['Chili Oil Khas Kampung', 'Saus Merah Manis Gurih', 'Mayonaise Creamy'],
      quantityOptions: [
        { count: 4, price: 14000, label: '4 Pcs (Reguler)' },
        { count: 6, price: 20000, label: '6 Pcs (Hemat)' },
        { count: 10, price: 32000, label: '10 Pcs (Puas)' },
      ],
    },
  },
  {
    id: 'dim-02',
    name: 'Siomay Udang Spesial (Isi 4)',
    unit: 'dimsum',
    category: 'Dimsum Kukus Klasik',
    price: 16000,
    originalPrice: 18000,
    description:
      'Kombinasi daging ayam dan potongan udang laut segar yang melimpah. Tekstur udang yang manis kres berpadu dengan gurihnya bumbu minyak wijen khas Dimsum Kampung.',
    flavorNotes: ['Udang Manis Renyah (Kres)', 'Aroma Minyak Wijen', 'Daging Tebal'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    badge: 'Rekomendasi',
    isAvailable: true,
    portionSize: '1 Porsi (4 Pcs) + Chili Oil',
    highlights: ['Potongan Udang Utuh', 'Kaya Protein', 'Saus Chili Oil Segar'],
    options: {
      cookingMethod: ['Kukus', 'Goreng'],
      sauces: ['Chili Oil Khas Kampung', 'Saus Merah Manis Gurih'],
      quantityOptions: [
        { count: 4, price: 16000, label: '4 Pcs (Reguler)' },
        { count: 6, price: 23000, label: '6 Pcs (Hemat)' },
      ],
    },
  },
  {
    id: 'dim-03',
    name: 'Dimsum Keju Mozzarella Lumer (Isi 4)',
    unit: 'dimsum',
    category: 'Dimsum Kekinian',
    price: 16000,
    originalPrice: 18000,
    description:
      'Dimsum ayam lembut dengan potongan keju mozzarella di dalam dan lelehan keju lumer di bagian atas saat dikukus panas. Sangat creamy dan memanjakan lidah!',
    flavorNotes: ['Keju Mozzarella Molor', 'Gurih Keju Asin Pas', 'Daging Ayam Lembut'],
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&auto=format&fit=crop&q=80',
    badge: 'Favorit',
    isAvailable: true,
    portionSize: '1 Porsi (4 Pcs)',
    highlights: ['Keju Mozzarella Melimpah', 'Bisa Kukus / Goreng Renyah', 'Favorit Anak & Remaja'],
    options: {
      cookingMethod: ['Kukus', 'Goreng'],
      sauces: ['Chili Oil Khas Kampung', 'Mayonaise Gurih'],
    },
  },
  {
    id: 'dim-04',
    name: 'Dimsum Nori Rumput Laut (Isi 4)',
    unit: 'dimsum',
    category: 'Dimsum Kukus Klasik',
    price: 15000,
    description:
      'Adonan dimsum ayam udang gurih yang dibalut lembaran rumput laut nori Jepang aromatik. Memberikan aroma laut gurih yang sedap ketika dikukus.',
    flavorNotes: ['Aroma Rumput Laut Gurih', 'Tekstur Daging Padat', 'Rasa Umami Alami'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
    badge: 'Spesial',
    isAvailable: true,
    portionSize: '1 Porsi (4 Pcs) + Chili Oil',
    highlights: ['Nori Import Berkualitas', 'Aroma Umami Menggugah Selera', 'Rendah Lemak'],
    options: {
      cookingMethod: ['Kukus', 'Goreng'],
      sauces: ['Chili Oil Khas Kampung', 'Saus Merah Manis'],
    },
  },
  {
    id: 'dim-05',
    name: 'Pangsit Udang Goreng Mayonaise (Isi 4)',
    unit: 'dimsum',
    category: 'Dimsum Goreng Krispi',
    price: 15000,
    originalPrice: 17000,
    description:
      'Kulit pangsit renyah keemasan membungkus daging ayam udang berbumbu lezat. Disajikan dengan cocolan saus mayonaise gurih asam manis yang nagih.',
    flavorNotes: ['Super Renyah (Garing)', 'Isian Lembut Gurih', 'Saus Mayo Segar'],
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600&auto=format&fit=crop&q=80',
    badge: 'Favorit',
    isAvailable: true,
    portionSize: '1 Porsi (4 Pcs) + Mayo',
    highlights: ['Goreng Dadakan Panas', 'Kulit Pangsit Krispi', 'Mayonaise Creamy'],
    options: {
      sauces: ['Mayonaise Creamy', 'Saus Sambal Bangkok', 'Chili Oil'],
    },
  },
  {
    id: 'dim-06',
    name: 'Platter Mix Dimsum Kampung (Isi 8)',
    unit: 'dimsum',
    category: 'Paket Platter Spesial',
    price: 29000,
    originalPrice: 34000,
    description:
      'Pilihan komplit untuk disantap bersama! Terdiri dari 2 Siomay Ayam, 2 Siomay Udang, 2 Dimsum Nori, dan 2 Dimsum Keju Lumer, disajikan dengan 2 cup Chili Oil dan Saus Dimsum.',
    flavorNotes: ['4 Varian Rasa Terpopuler', 'Porsi Lengkap Ramai-ramai', 'Dua Pilihan Saus'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    isAvailable: true,
    portionSize: '1 Box Klakat (8 Pcs) + 2 Saus',
    highlights: ['Paling Hemat untuk Berdua', 'Cicip Semua Varian Favorit', 'Extra Chili Oil'],
    options: {
      cookingMethod: ['Kukus Semua', 'Mix (4 Kukus + 4 Goreng)'],
      sauces: ['Chili Oil + Saus Merah', 'Chili Oil + Mayonaise'],
    },
  },
  {
    id: 'dim-07',
    name: 'Chili Oil Khas Kampung (Jar 150ml)',
    unit: 'dimsum',
    category: 'Saus & Pelengkap',
    price: 18000,
    description:
      'Minyak cabai bawang putih resep rahasia Dimsum Kampung dalam toples kaca kedap udara. Gurih, wangi ebi & bawang putih goreng, pedasnya nendang tanpa pengawet.',
    flavorNotes: ['Pedas Gurih Bawang Putih', 'Aroma Ebi Sangrai', 'Minyak Nabati Bersih'],
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&auto=format&fit=crop&q=80',
    badge: 'Spesial',
    isAvailable: true,
    portionSize: 'Jar Kaca 150ml',
    highlights: ['Tahan 3 Bulan', 'Cocok untuk Semua Makanan', '100% Homemade'],
  },
];

// Special Combo Packages combining Teh Kampung & Dimsum Kampung
export const COMBO_PACKAGES: ComboPackage[] = [
  {
    id: 'combo-01',
    name: 'Paket Ngemil Segar Kampung',
    price: 18000,
    originalPrice: 20000,
    badge: 'Paling Laris',
    description:
      'Perpaduan terfavorit di Brand Kampung! 1 Cup Teh Original Kampung Jumbo dingin segar dipadukan dengan 1 porsi Siomay Ayam hangat (4 pcs) + Chili Oil pedas gurih.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    includes: {
      teaItem: '1x Teh Original Kampung Jumbo (22oz)',
      dimsumItem: '1x Siomay Ayam Kampung (4 pcs)',
      extras: '1 Cup Chili Oil Khas Kampung',
    },
  },
  {
    id: 'combo-02',
    name: 'Paket Puas Gurih Mantap',
    price: 23000,
    originalPrice: 26000,
    badge: 'Rekomendasi',
    description:
      'Kombinasi asam segar dan gurih manis! 1 Cup Teh Kampul Solo Tambakroto Jumbo dingin + 1 porsi Siomay Udang Spesial (4 pcs) + Saus Dimsum & Chili Oil.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&auto=format&fit=crop&q=80',
    includes: {
      teaItem: '1x Teh Kampul Solo Tambakroto (22oz)',
      dimsumItem: '1x Siomay Udang Spesial (4 pcs)',
      extras: 'Chili Oil + Saus Merah',
    },
  },
  {
    id: 'combo-03',
    name: 'Paket Nongkrong Berdua',
    price: 38000,
    originalPrice: 44000,
    badge: 'Hemat Berdua',
    description:
      'Paket komplit untuk quality time berdua! 2 Cup Teh Pilihan (Original/Melati Jumbo) + 1 Box Platter Mix Dimsum (8 pcs aneka rasa) + 2 Saus komplit.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    includes: {
      teaItem: '2x Teh Kampung Jumbo (Bisa Pilih Varian)',
      dimsumItem: '1x Platter Mix Dimsum Kampung (8 pcs)',
      extras: '2 Cup Chili Oil + Sumpit & Tissue',
    },
  },
];
