export type SkillName =
  // frontend
  | 'javascript'
  | 'typescript'
  | 'vuejs'
  | 'vuetify'
  | 'nuxtjs'
  | 'react'
  | 'reactrouter'
  | 'nextjs'
  | 'svelte'
  | 'jquery'
  | 'html5'
  | 'css3'
  | 'sass'
  | 'tailwindcss'
  | 'eslint'
  | 'bootstrap'
  | 'materialui'
  | 'jest'
  | 'vitest'
  // backend
  | 'php'
  | 'laravel'
  | 'cakephp'
  | 'phalcon'
  | 'ruby'
  | 'rails'
  | 'java'
  // mobile
  | 'flutter'
  | 'dart'
  // infrastructure
  | 'mysql'
  | 'postgresql'
  | 'oracle'
  | 'firebase'
  | 'docker'
  | 'aws'
  | 'vagrant'
  | 'apache'
  | 'nginx'
  | 'redis'
  | 'vercel'
  | 'netlify'
  // tools
  | 'git'
  | 'github'
  | 'bitbucket'
  | 'slack'
  | 'jira'
  | 'confluence'
  | 'trello'
  | 'notion'
  | 'vscode'
  | 'xcode'
  | 'figma'
  | 'sourcetree'

export const skills: {
  [key in SkillName]: {
    label: string
    icon: string
  }
} = {
  // frontend
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
  vuetify: {
    label: 'Vuetify',
    icon: 'vuetify/vuetify-original.svg',
  },
  nuxtjs: {
    label: 'Nuxt.js',
    icon: 'nuxtjs/nuxtjs-original.svg',
  },
  react: {
    label: 'React',
    icon: 'react/react-original.svg',
  },
  reactrouter: {
    label: 'React Router',
    icon: 'reactrouter/reactrouter-original.svg',
  },
  nextjs: {
    label: 'Next.js',
    icon: 'nextjs/nextjs-original.svg',
  },
  svelte: {
    label: 'Svelte',
    icon: 'svelte/svelte-original.svg',
  },
  jquery: {
    label: 'jQuery',
    icon: 'jquery/jquery-original.svg',
  },
  html5: {
    label: 'HTML5',
    icon: 'html5/html5-original.svg',
  },
  css3: {
    label: 'CSS3',
    icon: 'css3/css3-original.svg',
  },
  sass: {
    label: 'Sass',
    icon: 'sass/sass-original.svg',
  },
  tailwindcss: {
    label: 'Tailwind CSS',
    icon: 'tailwindcss/tailwindcss-original.svg',
  },
  eslint: {
    label: 'ESLint',
    icon: 'eslint/eslint-original.svg',
  },
  bootstrap: {
    label: 'Bootstrap',
    icon: 'bootstrap/bootstrap-original.svg',
  },
  materialui: {
    label: 'Material-UI',
    icon: 'materialui/materialui-original.svg',
  },
  jest: {
    label: 'Jest',
    icon: 'jest/jest-plain.svg',
  },
  vitest: {
    label: 'Vitest',
    icon: 'vitest/vitest-original.svg',
  },
  // backend
  php: {
    label: 'PHP',
    icon: 'php/php-original.svg',
  },
  laravel: {
    label: 'Laravel',
    icon: 'laravel/laravel-original.svg',
  },
  cakephp: {
    label: 'CakePHP',
    icon: 'cakephp/cakephp-original.svg',
  },
  phalcon: {
    label: 'Phalcon',
    icon: 'phalcon/phalcon-original.svg',
  },
  ruby: {
    label: 'Ruby',
    icon: 'ruby/ruby-original.svg',
  },
  rails: {
    label: 'Ruby on Rails',
    icon: 'rails/rails-plain.svg',
  },
  java: {
    label: 'Java',
    icon: 'java/java-original.svg',
  },
  // mobile
  flutter: {
    label: 'Flutter',
    icon: 'flutter/flutter-original.svg',
  },
  dart: {
    label: 'Dart',
    icon: 'dart/dart-original.svg',
  },
  // infrastructure
  mysql: {
    label: 'MySQL',
    icon: 'mysql/mysql-original.svg',
  },
  postgresql: {
    label: 'PostgreSQL',
    icon: 'postgresql/postgresql-original.svg',
  },
  oracle: {
    label: 'Oracle',
    icon: 'oracle/oracle-original.svg',
  },
  firebase: {
    label: 'Firebase',
    icon: 'firebase/firebase-plain.svg',
  },
  docker: {
    label: 'Docker',
    icon: 'docker/docker-original.svg',
  },
  aws: {
    label: 'AWS',
    icon: 'aws/aws-original.svg',
  },
  vagrant: {
    label: 'Vagrant',
    icon: 'vagrant/vagrant-original.svg',
  },
  apache: {
    label: 'Apache',
    icon: 'apache/apache-original.svg',
  },
  nginx: {
    label: 'Nginx',
    icon: 'nginx/nginx-original.svg',
  },
  redis: {
    label: 'Redis',
    icon: 'redis/redis-original.svg',
  },
  vercel: {
    label: 'Vercel',
    icon: 'vercel/vercel-original.svg',
  },
  netlify: {
    label: 'Netlify',
    icon: 'netlify/netlify-original.svg',
  },
  // tools
  git: {
    label: 'Git',
    icon: 'git/git-original.svg',
  },
  github: {
    label: 'GitHub',
    icon: 'github/github-original.svg',
  },
  bitbucket: {
    label: 'Bitbucket',
    icon: 'bitbucket/bitbucket-original.svg',
  },
  slack: {
    label: 'Slack',
    icon: 'slack/slack-original.svg',
  },
  jira: {
    label: 'Jira',
    icon: 'jira/jira-original.svg',
  },
  confluence: {
    label: 'Confluence',
    icon: 'confluence/confluence-original.svg',
  },
  trello: {
    label: 'Trello',
    icon: 'trello/trello-original.svg',
  },
  notion: {
    label: 'Notion',
    icon: 'notion/notion-original.svg',
  },
  vscode: {
    label: 'Visual Studio Code',
    icon: 'vscode/vscode-original.svg',
  },
  xcode: {
    label: 'Xcode',
    icon: 'xcode/xcode-original.svg',
  },
  figma: {
    label: 'Figma',
    icon: 'figma/figma-original.svg',
  },
  sourcetree: {
    label: 'Sourcetree',
    icon: 'sourcetree/sourcetree-original.svg',
  },
}
