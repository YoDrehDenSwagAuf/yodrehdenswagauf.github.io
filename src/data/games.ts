export type GameStatus = 'in-progress' | 'prototype' | 'coming-soon' | 'released'

export type Platform = 'Playdate' | 'PC' | 'Web' | 'Multi'

export type CoverId =
  | 'cranky-tanks'
  | 'dental-drill'
  | 'coming-soon-a'
  | 'coming-soon-b'

export type GameLinks = {
  catalog: string | null
  itch: string | null
  trailer: string | null
  trailerEmbed: string | null
}

export type CoverHover = {
  idle: string
  intro: string
  loop: string
}

export type Game = {
  id: string
  catalogNo: string
  title: string
  workingTitle?: boolean
  blurb: string
  platform: Platform
  status: GameStatus
  cover: CoverId
  coverImage?: string
  /** When set, the card uses this animated cover instead of coverImage. */
  coverGif?: string
  coverFallback?: string
  /** Playdate-style idle → intro → loop → reverse hover for Cranky Tanks. */
  coverHover?: CoverHover
  links: GameLinks
}

export const statusCopy: Record<GameStatus, string> = {
  'in-progress': 'In progress',
  prototype: 'Prototype',
  'coming-soon': 'Coming soon',
  released: 'Out now',
}

export const games: Game[] = [
  {
    id: 'cranky-tanks',
    catalogNo: '01',
    title: 'Cranky Tanks',
    blurb:
      'Tiny battlegrounds, chunky siege engines, and a crank that aims every shot. A Playdate tank duel you can feel in your wrist.',
    platform: 'Playdate',
    status: 'in-progress',
    cover: 'cranky-tanks',
    coverGif: '/assets/cranky-tanks-card.gif',
    coverImage: '/assets/cranky-tanks-billboard.png',
    coverFallback: '/assets/cranky-tanks-billboard.png',
    coverHover: {
      idle: '/assets/cranky-tanks-idle.jpg',
      intro: '/assets/cranky-tanks-intro.mp4',
      loop: '/assets/cranky-tanks-card.gif',
    },
    links: {
      catalog: null,
      itch: null,
      trailer: null,
      trailerEmbed: null,
    },
  },
  {
    id: 'dental-drill-disco',
    catalogNo: '02',
    title: 'Dental Drill Disco',
    workingTitle: true,
    blurb:
      'Keep the beat, keep the pearly whites. A soft-cartoon arcade about dancing a drill through cavities — sparkles, not gore.',
    platform: 'Playdate',
    status: 'prototype',
    cover: 'dental-drill',
    links: {
      catalog: null,
      itch: null,
      trailer: null,
      trailerEmbed: null,
    },
  },
  {
    id: 'unannounced-a',
    catalogNo: '03',
    title: 'Workbench secret',
    blurb:
      'A pocket-sized experiment still hiding under the lamp. Short session, loud personality, crank required.',
    platform: 'Playdate',
    status: 'coming-soon',
    cover: 'coming-soon-a',
    links: {
      catalog: null,
      itch: null,
      trailer: null,
      trailerEmbed: null,
    },
  },
  {
    id: 'unannounced-b',
    catalogNo: '04',
    title: 'Title TBA',
    blurb:
      'A short-session desktop toy still under the cloth. Mouse, keys, and a little chaos — no handheld required.',
    platform: 'PC',
    status: 'coming-soon',
    cover: 'coming-soon-b',
    links: {
      catalog: null,
      itch: null,
      trailer: null,
      trailerEmbed: null,
    },
  },
]
