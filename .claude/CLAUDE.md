# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイドラインを提供します。

## 開発コマンド

### 必須コマンド
- `npm run dev` - 開発サーバーを起動 (http://localhost:5173)
- `npm run build` - 本番用ビルド
- `npm run start` - 本番サーバーを起動
- `npm run check` - Biomeでコードをフォーマット・リント
- `npm run typecheck` - 型を生成してTypeScriptの型チェックを実行
- `npm run sb` - Storybookを起動 (http://localhost:6006)

### 開発ワークフロー
1. コミット前に必ず `npm run check` を実行してコードフォーマットを確認
2. `npm run typecheck` を実行して型エラーをキャッチ
3. コンポーネントの開発・テストには Storybook (`npm run sb`) を使用

## アーキテクチャ概要

### プロジェクト構造
```
app/
├── components/
│   ├── ui/        # shadcn/ui ベースコンポーネント (Button, Card など)
│   ├── base/      # UIコンポーネントの再エクスポート（一貫性のため）
│   └── feature/   # ビジネスロジックコンポーネント (Header, SkillCard など)
├── routes/        # ページコンポーネントとルートハンドラー
├── lib/           # ユーティリティ (classNameマージ用のcn関数)
└── types/         # TypeScript型定義
```

### 主要技術
- **React Router v7** - SSR有効
- **Tailwind CSS v4** - スタイリング
- **Radix UI** - アクセシブルなコンポーネント基盤
- **shadcn/ui** - コンポーネントシステム
- **Biome** - コードフォーマット・リント
- **TypeScript** - strictモード有効

### コンポーネントパターン
1. **UIコンポーネント**: `@/components/ui/*` からインポート - shadcn/uiコンポーネント
2. **コンポーネントバリアント**: `class-variance-authority` (cva) でバリアント処理
3. **スタイリング**: `cn()` ユーティリティで条件付きクラスを含むTailwindクラスを使用
4. **ダークモード**: `next-themes` で実装 - コンポーネントは両テーマをサポートする必要がある
5. **型安全性**: すべてのコンポーネントに適切なTypeScript型を付ける

### 重要な規約
- コンポーネントファイルはPascalCase (例: `SkillCard.tsx`)
- Storyファイルは `ComponentName.stories.tsx` パターンに従う
- インポートと文字列にはシングルクォートを使用（Biomeで強制）
- セミコロンは必要に応じて使用（as-needed）
- インデントは2スペース

### API連携
- `Header.tsx` で最新コミット取得のためGitHub API連携
- APIトークンが必要な場合は環境変数を使用

### 状態管理
- ルーティング状態はReact Router
- コンポーネントのローカル状態はReact hooks
- テーマ状態は `next-themes` で管理

### パフォーマンス考慮事項
- サーバーサイドレンダリングがデフォルトで有効
- Viteビルドプロセスでアセット最適化
- 本番デプロイ用のDockerマルチステージビルド