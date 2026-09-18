export type ProjectStatus = 'in-progress' | 'prototype' | 'coming-soon' | 'released'
export type ProjectCategory = 'games' | 'mods' | 'websites' | 'apps'
export type Platform = 'Playdate' | 'PC' | 'Web' | 'Android' | 'Mod' | 'Multi'
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
    blurb: 'Top-down arena tank duels for Playdate. Drive with the D-pad, aim with the crank, fire bank shots, and control a steerable rocket.',
    platform: 'Playdate', status: 'in-progress', cover: 'cranky-tanks',
    coverGif: '/assets/cranky-tanks-card.gif', coverImage: '/assets/cranky-tanks-billboard.png', coverFallback: '/assets/cranky-tanks-billboard.png',
    coverHover: { idle: '/assets/cranky-tanks-idle.jpg', intro: '/assets/cranky-tanks-intro.mp4', loop: '/assets/cranky-tanks-card.gif' },
    actions: [privateRepoAction(), { label: 'Catalog', href: null, hint: 'Coming later' }],
  },
  {
    id: 'pdskate', catalogNo: '02', title: 'pdskate', workingTitle: 'Stick Skate',
    blurb: 'A compact Playdate skate project built around quick sessions, expressive movement, and a name that will grow into Stick Skate.',
    platform: 'Playdate', status: 'in-progress', cover: 'coming-soon-a',
    actions: [privateRepoAction(), { label: 'Preview', href: null, hint: 'Coming later' }],
  },
  {
    id: 'wrong-hat-wrong-guy', catalogNo: '03', title: 'Wrong Hat, Wrong Guy',
    blurb: 'A 1-bit detective game played through a viewfinder. Zoom with the crank, pan with the D-pad, and frame the right suspect.',
    platform: 'Playdate', status: 'prototype', cover: 'coming-soon-b', actions: [privateRepoAction()],
  },
  {
    id: 'dental-drill-disco', catalogNo: '04', title: 'Dental Drill Disco', workingTitle: 'Nerve! / Drillbill',
    blurb: 'A soft-cartoon arcade prototype where the crank controls drill speed and careful angles keep the nerve safe.',
    platform: 'Playdate', status: 'prototype', cover: 'dental-drill', actions: [privateRepoAction()],
  },
  {
    id: 'hexcrank', catalogNo: '05', title: 'Hexcrank',
    blurb: 'A top-down action RPG prototype where crank patterns cast spells such as HEX BOLT and CRANKBURST.',
    platform: 'Playdate', status: 'prototype', cover: 'coming-soon-a', actions: [privateRepoAction()],
  },
  {
    id: 'oktoberfest-tray', catalogNo: '06', title: 'Oktoberfest Tray',
    blurb: 'Navigate packed table rows, slide toward guests, and balance a tray of beer with the crank in this playable hall prototype.',
    platform: 'Playdate', status: 'prototype', cover: 'coming-soon-b', actions: [privateRepoAction()],
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
  {
    id: 'frame-weaver', catalogNo: '02', title: 'Frame Weaver',
    blurb: 'A browser-based sprite editor for drawing, refining, and generating coherent animation frames with an extensible workflow.',
    platform: 'Web', status: 'prototype', cover: 'coming-soon-a', actions: [{ label: 'Preview', href: null, hint: 'Not public yet' }],
  },
  {
    id: 'maskreel', catalogNo: '03', title: 'Maskreel',
    blurb: 'An editor concept for shaping generated video frame by frame, correcting key moments, and building consistent loops.',
    platform: 'Web', status: 'coming-soon', cover: 'dental-drill', actions: [{ label: 'Preview', href: null, hint: 'Coming later' }],
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
  { id: 'games', label: 'Games', eyebrow: ['Playdate first', 'Six projects'], title: 'The games.', description: 'Small games with strong controls, readable ideas, and enough personality to stay in your head after a short session.', projects: games },
  { id: 'mods', label: 'Mods', eyebrow: ['Known worlds', 'New life'], title: 'The mods.', description: 'Mods that add visible systems, atmosphere, and fresh reasons to return to familiar worlds.', projects: mods },
  { id: 'websites', label: 'Websites', eyebrow: ['Design and code', 'Browser based'], title: 'The websites.', description: 'Websites and browser tools that combine clear interfaces with a visual identity of their own.', projects: websites },
  { id: 'apps', label: 'Apps', eyebrow: ['Useful ideas', 'Mobile first'], title: 'The apps.', description: 'Focused app concepts for everyday tasks and unusual hardware, built to feel direct and intentional.', projects: apps },
]
