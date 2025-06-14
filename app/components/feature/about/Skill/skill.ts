export type SkillName =
  // frontend
  'javascript' | 'typescript' | 'vuejs'
// backend

export const skills: {
  [key in SkillName]: {
    label: string
    icon: string
  }
} = {
  javascript: {
    label: 'JavaScript',
    icon: 'javascript/javascript-original.svg',
  },
  typescript: {
    label: 'TypeScript',
    icon: 'typescript/typescript-original.svg',
  },
  vuejs: {
    label: 'Vue.js',
    icon: 'vuejs/vuejs-original.svg',
  },
}
