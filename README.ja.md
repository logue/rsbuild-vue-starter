# 🦀 Vue 3 + TypeScript + Rsbuild スターター

[![GitHub stars](https://img.shields.io/github/stars/logue/rsbuild-vue3-starter.svg)](https://github.com/logue/rsbuild-vue3-starter)
[![GitHub license](https://img.shields.io/github/license/logue/rsbuild-vue3-starter.svg)](https://github.com/logue/rsbuild-vue3-starter/blob/master/LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%5E24-brightgreen.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-11-pink.svg)](https://pnpm.io/)
[![Rsbuild](https://img.shields.io/badge/rsbuild-2-orange.svg)](https://rsbuild.rs/)
[![X Follow](https://img.shields.io/twitter/follow/logue256?style=plastic)](https://x.com/logue256)

[English](./README.md)

このテンプレートは、Rsbuild スタック上で Vue 3 と TypeScript の開発をすぐに始めるためのものです。テンプレートでは Vue 3 の `<script setup>` SFC を使用しています。詳細は [script setup ドキュメント](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) を参照してください。

定期的に`pnpm skill:update`を実行することで、AI駆動開発するうえで適切なスキルを更新できます。

_Vite から `src` をそのままコピーするだけ！_

[vue-router](https://router.vuejs.org/) と [Pinia](https://pinia.vuejs.org/) を含みます。

Lint/Format は [Rslint](https://rslint.rs/)、[Prettier](https://prettier.io/)、[Biome](https://biomejs.dev/) を使った統合 `pnpm lint` パイプラインで実行されます。

## コマンド

コマンドはシンプルで CI フレンドリーな構成です。

| コマンド     | 説明                                                                     |
| ------------ | ------------------------------------------------------------------------ |
| dev          | 開発サーバーを起動します。                                               |
| build        | 本番環境向けにビルドします。                                             |
| build:clean  | 本番環境用のビルドファイルをクリアします。                               |
| preview      | 本番環境用のビルドで生成されたプログラムを実行します。                   |
| lint         | すべての lint/format ステップ (`lint:*`) を 1 つのコマンドで実行します。 |
| lint:rslint  | rslint を実行します。                                                    |
| lint:biome   | biome フォーマッタを実行します。                                         |
| lint:pretter | prettier フォーマッタを実行します。                                      |
| test         | Rstest を使用してテストを実行します。                                    |
| test:watch   | Rstest を使用して、ウォッチモードでテストを実行します。                  |
| build-only   | チェックなしで本番環境向けにビルドします。デプロイ時に使用します。       |
| type-check   | Vue マークアップをチェックします。                                       |

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

## 🎨 開発者向けに作られました

このテンプレートは、**UI/UX の卓越性** と **現代的な開発者体験** に焦点を当てて構築されています。すべてがシームレスに動作するよう、継続的なテストと更新を行っています。

このプロジェクトの細部へのこだわりを気に入っていただけたら、Vue.js と Metaverse エコシステム全体での私の作業を支援するために、小さなスポンサーシップをお願いします。

[![GitHub Sponsors](https://img.shields.io/github/sponsors/logue?label=Sponsor&logo=github&color=ea4aaa)](https://github.com/sponsors/logue)
