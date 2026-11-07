export type ProjectCategory =
  | 'Mosquito Net Installations'
  | 'Aluminium Windows and Doors'
  | 'Glass Partitions'
  | 'Steel Railings';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Mosquito Net Installations',
  'Aluminium Windows and Doors',
  'Glass Partitions',
  'Steel Railings',
];

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  materialSpec: string;
  /**
   * Verified caption is only shown when verified is true.
   * Per strict content rules, stock or generated images are NEVER marked as verified customer projects.
   */
  verifiedCustomerProject: boolean;
  verifiedCaption?: string;
}

/**
 * Genuine completed customer project photographs.
 * Populated only when authentic site photographs from Sakshi Enterprises (Nagpur) are supplied.
 */
export const VERIFIED_CUSTOMER_PROJECTS: ProjectGalleryItem[] = [];

/**
 * Illustrative Architectural Capability Specimens.
 * Explicitly labeled as illustrative design/material references (NEVER presented as completed customer projects)
 * so visitors and site administrators can preview how the masonry gallery, category filters, and lightbox operate.
 */
export const ILLUSTRATIVE_CAPABILITY_SPECIMENS: ProjectGalleryItem[] = [
  {
    id: 'specimen-mosquito-1',
    title: 'Fine Charcoal Fiberglass Window Screen Reference',
    category: 'Mosquito Net Installations',
    image: '/images/hero-mosquito-net.jpg',
    aspect: 'tall',
    materialSpec: 'Fiberglass Mesh • Charcoal Black • Perimeter Velcro System',
    verifiedCustomerProject: false,
  },
  {
    id: 'specimen-mosquito-2',
    title: 'Integrated Sliding Window Mosquito Mesh Reference',
    category: 'Mosquito Net Installations',
    image: '/images/hero-home.jpg',
    aspect: 'wide',
    materialSpec: 'Aluminium / Polyester Mesh • Custom Window & Door Sizing',
    verifiedCustomerProject: false,
  },
  {
    id: 'specimen-mosquito-3',
    title: 'Velcro & Chain-Based Perimeter Fitting Specification',
    category: 'Mosquito Net Installations',
    image: '/images/detail-fitting-systems.svg',
    aspect: 'square',
    materialSpec: 'Washable & Reusable Assembly • Velcro & Zippered Chain Options',
    verifiedCustomerProject: false,
  },
  {
    id: 'specimen-aluminium-1',
    title: 'Slim-Profile Aluminium Sliding Windows & Doors Reference',
    category: 'Aluminium Windows and Doors',
    image: '/images/hero-aluminium.jpg',
    aspect: 'wide',
    materialSpec: 'Anodised / Powder-Coated Aluminium • Multi-Track Sliding System',
    verifiedCustomerProject: false,
  },
  {
    id: 'specimen-partition-1',
    title: 'Commercial & Residential Aluminium Glass Partition Reference',
    category: 'Glass Partitions',
    image: '/images/detail-glass-partition.svg',
    aspect: 'tall',
    materialSpec: 'Acoustic-Style Framed Glass Partition • Custom Door Integration',
    verifiedCustomerProject: false,
  },
  {
    id: 'specimen-steel-1',
    title: 'Architectural Staircase & Balcony Steel Railing Reference',
    category: 'Steel Railings',
    image: '/images/hero-steel.svg',
    aspect: 'wide',
    materialSpec: 'Custom Steel Fabrication • Balcony & Staircase Balustrade',
    verifiedCustomerProject: false,
  },
];
