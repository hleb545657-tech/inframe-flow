export interface PortfolioItem {
  id: number
  title: string
  cloudinaryId: string // Cloudinary public ID for optimization
  alt: string
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Coming Soon',
    cloudinaryId: 'inframe/placeholder-1',
    alt: 'Project 1',
  },
  {
    id: 2,
    title: 'Rendering',
    cloudinaryId: 'inframe/placeholder-2',
    alt: 'Project 2',
  },
  {
    id: 3,
    title: 'Uploading',
    cloudinaryId: 'inframe/placeholder-3',
    alt: 'Project 3',
  },
  {
    id: 4,
    title: 'Editing',
    cloudinaryId: 'inframe/placeholder-4',
    alt: 'Project 4',
  },
  {
    id: 5,
    title: 'Preview Soon',
    cloudinaryId: 'inframe/placeholder-5',
    alt: 'Project 5',
  },
  {
    id: 6,
    title: 'Coming Soon',
    cloudinaryId: 'inframe/placeholder-6',
    alt: 'Project 6',
  },
  {
    id: 7,
    title: 'Rendering',
    cloudinaryId: 'inframe/placeholder-7',
    alt: 'Project 7',
  },
  {
    id: 8,
    title: 'Uploading',
    cloudinaryId: 'inframe/placeholder-8',
    alt: 'Project 8',
  },
]
