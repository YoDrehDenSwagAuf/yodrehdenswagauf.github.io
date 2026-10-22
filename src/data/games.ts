export type ProjectStatus = 'in-progress' | 'prototype' | 'coming-soon' | 'released'
export type ProjectCategory = 'games' | 'mods' | 'websites' | 'apps'
export type Platform = 'Playdate' | 'PC' | 'PC / Android' | 'Web' | 'Android' | 'Mod' | 'Multi'
export type CoverId = 'cranky-tanks' | 'dental-drill' | 'coming-soon-a' | 'coming-soon-b'

export type ProjectAction = { label: string; href: string | null; hint: string }
export type CoverHover = { idle: string; intro: string; loop: string }

export type Project = {
  id: string
  catalogNo: string
  title: string
  workingTitle?: string
  blurb: string
  platform: Platform
  status: ProjectStatus
  cover: CoverId
  coverImage?: string
  coverGif?: string
  coverFallback?: string
  coverHover?: CoverHover
  actions: ProjectAction[]
}

export type ProjectCollection = {
  id: ProjectCategory
  label: string
  eyebrow: string[]
  title: string
  description: string
  projects: Project[]
}

export const statusCopy: Record<ProjectStatus, string> = {
  'in-progress': 'In progress',
  prototype: 'Prototype',
  'coming-soon': 'Coming soon',
  released: 'Published',
}

const privateRepoAction = (label = 'GitHub'): ProjectAction => ({
  label,
  href: null,
  hint: 'Private repository',
})

const games: Project[] = [
  {
    id: 'cranky-tanks', catalogNo: '01', title: 'Cranky Tanks',
    blurb: 'Tiny tanks, serious angles. Battle through 37 missions, master ricochet shots, survive enemy waves, and create your own levels.',
    platform: 'Playdate', status: 'released', cover: 'cranky-tanks',
    coverImage: 'https://cdn.pdgamez.com/images/itch/Cranky_Tanks_main_f873ebb7.webp',
    coverFallback: '/assets/cranky-tanks-billboard.png',
    actions: [{ label: 'itch.io', href: 'https://yodrehdenswagauf.itch.io/cranky-tanks', hint: 'View game on itch.io' }],
  },
  {
    id: 'puck-noir-club', catalogNo: '02', title: 'Puck Noir Club',
    blurb: 'One puck. Eight challengers. Take on an eccentric underground club in this crank-powered 1-bit air hockey tournament.',
    platform: 'Playdate', status: 'released', cover: 'coming-soon-a',
    coverImage: 'https://cdn.pdgamez.com/images/itch/Puck_Noir_Club_main_e2ad8be7.webp',
    actions: [{ label: 'itch.io', href: 'https://yodrehdenswagauf.itch.io/puck-noir-club', hint: 'View game on itch.io' }],
  },
  {
    id: 'knockout-cup', catalogNo: '03', title: 'Knockout Cup',
    blurb: 'Arcade football with 13 nations, crunching tackles, unique specials, and over-the-top ultimates. Take the cup on Playdate.',
    platform: 'Playdate', status: 'released', cover: 'coming-soon-b',
    coverImage: 'https://cdn.pdgamez.com/images/itch/Knockout_Cup_main_24e08ea5.webp',
    actions: [{ label: 'itch.io', href: 'https://yodrehdenswagauf.itch.io/knockout-cup', hint: 'View game on itch.io' }],
  },
  {
    id: 'house-rules-pong-night', catalogNo: '04', title: 'HOUSE RULES: PONG NIGHT',
    blurb: 'A crank-powered beer pong party game where every house has its own rules. Coming to Playdate.',
    platform: 'Playdate', status: 'coming-soon', cover: 'coming-soon-a',
    actions: [{ label: 'Coming soon', href: null, hint: 'Playdate release to be announced' }],
  },
  {
    id: 'agent404-killprocess', catalogNo: '05', title: 'Agent404_KillProcess',
    blurb: 'An ASCII-inspired action game where combat rewrites the digital world around you. In development for PC and Android.',
    platform: 'PC / Android', status: 'coming-soon', cover: 'coming-soon-b',
    actions: [{ label: 'Coming soon', href: null, hint: 'PC and Android release to be announced' }],
  },
]

const mods: Project[] = [
  {
    id: 'wilds-of-kanto', catalogNo: '01', title: 'Wilds of Kanto',
    blurb: "A Gen1Recomp mod that brings visible and reactive wild Pokémon into Kanto's overworld while keeping performance and atmosphere in focus.",
    platform: 'Mod', status: 'released', cover: 'coming-soon-a', coverImage: '/assets/wilds-of-kanto-card.jpg',
    actions: [{ label: 'GitHub', href: 'https://github.com/YoDrehDenSwagAuf/overworld-spawn-mod', hint: 'Open public repository' }],
  },
]

const websites: Project[] = [
  {
    id: 'prestige-cars', catalogNo: '01', title: 'Prestige Cars',
    blurb: 'A polished automotive website concept designed to present premium vehicles with a clean, confident visual identity.',
    platform: 'Web', status: 'coming-soon', cover: 'coming-soon-b', actions: [{ label: 'Website', href: null, hint: 'Coming soon' }],
  },
]

const apps: Project[] = [
  {
    id: 'omni-scan', catalogNo: '01', title: 'Omni Scan',
    blurb: 'A mobile scanning concept focused on fast capture, clean organization, and a workflow that stays out of the way.',
    platform: 'Android', status: 'prototype', cover: 'coming-soon-a', actions: [{ label: 'App', href: null, hint: 'Prototype not public' }],
  },
  {
    id: 'fold-aura', catalogNo: '02', title: 'FoldAura',
    blurb: 'Hinge-reactive live wallpapers for Galaxy Z Fold devices, including Through View, Butterfly, Notebook, and Pocket Retro scenes.',
    platform: 'Android', status: 'prototype', cover: 'coming-soon-b', actions: [privateRepoAction()],
  },
]

export const projectCollections: ProjectCollection[] = [
  { id: 'games', label: 'Games', eyebrow: ['Playdate first', 'Three releases'], title: 'The games.', description: 'Small games with strong controls, readable ideas, and enough personality to stay in your head after a short session.', projects: games },
  { id: 'mods', label: 'Mods', eyebrow: ['Known worlds', 'New life'], title: 'The mods.', description: 'Mods that add visible systems, atmosphere, and fresh reasons to return to familiar worlds.', projects: mods },
  { id: 'websites', label: 'Websites', eyebrow: ['Design and code', 'Browser based'], title: 'The websites.', description: 'Websites and browser tools that combine clear interfaces with a visual identity of their own.', projects: websites },
  { id: 'apps', label: 'Apps', eyebrow: ['Useful ideas', 'Mobile first'], title: 'The apps.', description: 'Focused app concepts for everyday tasks and unusual hardware, built to feel direct and intentional.', projects: apps },
]
