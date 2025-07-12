export type CareerData = {
  startDate: Date
  endDate?: Date
  title: string
  tasks: string[]
  skills: string[]
}

export const careerDataList: CareerData[] = [
  {
    startDate: new Date('2021-01-01'),
    title: '飲食向け受発注システム開発',
    tasks: [
      '卸業者向け受注Webアプリのフロントエンド実装',
      '飲食店向け発注Webアプリのフロントエンド実装',
      '社内向け管理画面のフロントエンド実装',
      '請求・契約管理Webアプリのフロントエンド実装',
      'Atomic Design導入',
      'レスポンシブデザイン化',
      'パフォーマンス改善',
      'Vue3・Nuxt3バージョンアップ',
    ],
    skills: [
      'Vue.js',
      'Nuxt.js',
      'Svelte',
      'SvelteKit',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    startDate: new Date('2020-09-01'),
    endDate: new Date('2020-12-31'),
    title: 'マーケティングツールWebアプリ開発',
    tasks: [
      'マーケティングツールWebアプリのフロントエンド実装',
      'Slim・Pug・jQueryからVue.jsへの移行',
      'マーケティングツールWebアプリのAPI設計・実装',
      '集計バッチ機能の設計・実装',
    ],
    skills: ['Vue.js', 'jQuery', 'Ruby on Rails'],
  },
  {
    startDate: new Date('2020-04-01'),
    endDate: new Date('2020-08-31'),
    title: '建築資材ECサイト開発',
    tasks: [
      '建築資材ECサイトのフロントエンド実装',
      '建築資材ECサイトのAPI設計・実装',
      '社内向け管理画面のフロントエンド実装',
      '開発環境の整備',
    ],
    skills: ['Nuxt.js', 'Laravel', 'Docker', 'Vagrant'],
  },
  {
    startDate: new Date('2018-09-01'),
    endDate: new Date('2019-02-28'),
    title: 'ファンコミュニティサイト開発',
    tasks: [
      'ファンコミュニティサイトのフロントエンド実装',
      '社内向け管理画面のフロントエンド実装',
      'ファンコミュニティサイトのAPI設計・実装',
      '集計・アラートバッチ機能の設計・実装',
    ],
    skills: ['Vue.js', 'Laravel', 'PHPUnit'],
  },
  {
    startDate: new Date('2018-09-01'),
    endDate: new Date('2019-02-28'),
    title: 'Web面接システム開発',
    tasks: [
      'Web面接システムのAPI設計・実装',
      '社内向け管理画面のフロントエンド実装',
      'ログ集積基盤の構築',
      '開発環境の整備',
    ],
    skills: ['FuelPHP', 'jQuery', 'Elasticsearch', 'Docker'],
  },
  {
    startDate: new Date('2017-11-01'),
    endDate: new Date('2018-08-31'),
    title: 'クラウドファンディングサイト開発',
    tasks: [
      'クラウドファンディングサイトのフロントエンド実装',
      '社内向け管理画面のフロントエンド実装',
      'コーポレートサイトのフロントエンド実装',
      'クラウドファンディングサイトのAPI設計・実装',
      '社内向け各種ITサポート',
    ],
    skills: ['Phalcon', 'jQuery'],
  },
  {
    startDate: new Date('2015-04-01'),
    endDate: new Date('2017-10-31'),
    title: '金融系システム開発',
    tasks: [
      'クレジットカード金額計算システムの設計・実装',
      '投資家向け取引システムの設計・実装',
      'ERPパッケージ導入支援',
      '新入社員向け研修業務',
    ],
    skills: ['Java', 'JavaScript', 'VBA'],
  },
]
