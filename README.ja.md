# 🦀 Vue 3 + TypeScript + Rsbuild スターター

[![GitHub stars](https://img.shields.io/github/stars/logue/rsbuild-vue3-starter.svg)](https://github.com/logue/rsbuild-vue3-starter)
[![GitHub license](https://img.shields.io/github/license/logue/rsbuild-vue3-starter.svg)](https://github.com/logue/rsbuild-vue3-starter/blob/master/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%5E24-brightgreen.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11-pink.svg)](https://pnpm.io/)
[![Rsbuild](https://img.shields.io/badge/rsbuild-2-orange.svg)](https://rsbuild.rs/)
[![X Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://x.com/logue256)

[English](./README.md)

このテンプレートは、Rsbuild スタック上で Vue 3 と TypeScript の開発をすぐに始めるためのものです。テンプレートでは Vue 3 の `<script setup>` SFC を使用しています。詳細は [script setup ドキュメント](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) を参照してください。

定期的に `pnpm run skills:update` を実行することで、AI 駆動開発向けのスキルを更新できます。

_Vite から `src` をそのままコピーするだけ！_

[vue-router](https://router.vuejs.org/) と [Pinia](https://pinia.vuejs.org/) を含みます。

Lint/Format は [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) と [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) を使った統合 `pnpm run lint` パイプラインで実行されます。Oxlint の自動修正後に Oxfmt で整形します。

また、[vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc)の代わりに[vue-tsc-api](https://github.com/escaton/vue-tsc-api/)が含まれている他、[vue-devtools](https://devtools.vuejs.org/)の代わりに、[vue-devtools-rstack](https://github.com/OskarLebuda/vue-devtools-rstack#readme)が含まれているため[Vite](https://github.com/logue/vite-vue3-ts-starter)版とほぼ同等の操作が可能です。

## コマンド

コマンドはシンプルで CI フレンドリーな構成です。

| コマンド    | 説明                                                  |
| ----------- | ----------------------------------------------------- |
| dev         | 開発サーバーを起動します。                            |
| lint        | Oxlint の自動修正後に Oxfmt で整形します。            |
| lint:oxlint | Oxlint を自動修正付きで実行します。                   |
| lint:oxfmt  | Oxfmt でプロジェクトを整形します。                    |
| build       | 型チェックと本番環境向けのビルドを実行します。        |
| build-only  | 型チェックなしで本番環境向けにビルドします。          |
| type-check  | アプリケーションの型と Vue マークアップを確認します。 |
| preview     | 本番ビルドで生成されたプログラムを実行します。        |
| analyze     | ビルド成果物を解析します。                            |
| test        | Rstest でテストを実行します。                         |
| test:watch  | ウォッチモードでテストを実行します。                  |
| clean       | 本番ビルドの成果物を削除します。                      |
| clean:hard  | 本番ビルド成果物とビルドキャッシュを削除します。      |

## チェックリスト

このテンプレートを使うときは、次の項目を確認してください。

- [ ] `LICENSE` の作者名を変更する
- [ ] `public` 内のファビコンを差し替える
- [ ] 資金提供情報が含まれる `.github` フォルダを削除する
- [ ] README を整理し、不要なルートを削除する

## 関連プロジェクト

- Vue 3 向け
  - [vite-vue3-ts-startar](https://github.com/logue/vite-vue3-ts-starter)
  - [vite-vuetify-ts-starter](https://github.com/logue/vite-vuetify-ts-starter) - Vuetify 3 対応
    - [tauri-vuetify-starter](https://github.com/logue/tauri-vuetify-starter) - 多言語クロスプラットフォーム・デスクトップアプリ向け

## License

©2025-2026 by Logue.
Licensed under the [MIT License](LICENSE).
