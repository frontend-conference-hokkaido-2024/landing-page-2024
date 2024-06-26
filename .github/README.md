## 概要
これはフロントエンドカンファレンス北海道2024のラインディングページ用リポジトリです

![Next.js](https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=plastic)
![Type Script](https://img.shields.io/badge/-Type_Script-000000.svg?logo=typescript&style=plastic)
![shadcn/ui](https://img.shields.io/badge/-shadcn/ui-000000.svg?logo=shadcnui&style=plastic)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-000000.svg?logo=tailwindcss&style=plastic)
![pnpm](https://img.shields.io/badge/-pnpm-000000.svg?logo=pnpm&style=plastic)

## 開発環境構築
1. リポジトリをクローンする
`git clone https://github.com/frontend-conference-hokkaido-2024/landing-page-2024.git`

2. Node.jsのバージョンを20台にする

3. 依存関係をインストールする
`pnpm install`

4. 環境変数を設定する
`.env.local.sample`をコピーして`.env.local`を作成し、環境変数を設定する

5. 開発サーバーを起動する
`pnpm dev`


## スポンサー一覧
### 関連するディレクトリ
- @sponsorSection 企業スポンサー一覧

### 実装概要
#### 基本構造
- sponsorSection.tsx: 
スポンサータイプに応じたレイアウトをグリッドで表示する
スポンサー一覧表示時のエントリポイントとなるファイル
スポンサータイプに応じてグリッドのカラム数を決定し、SponsorAvatarに画像と表示サイズを受け渡す

- sponsorAvatar.tsx: 
スポンサーアイコンを表示するためのコンポーネント。画像と表示サイズはSponsorListが決定する

- sponsorType.tsx: 
スポンサータイプに応じた情報（ロゴリスト、画像サイズ、レイアウト）を管理

#### レイアウトプロセスの詳細
1. グリッドのレイアウトを決定する
スポンサーの layout プロパティでグリッドのレイアウトを決定している
レイアウトのタイプは2つ:
- `layout: "grid gap-8"` = 1列のグリッド (シルバー以外)
- `layout: "grid grid-cols-2 gap-8"` = 2列のグリッド (シルバー)

2. グリッドの横幅を決定する
スポンサーの gridViewSize プロパティで任意のスポンサータイプが表示されるグリッドのサイズを決定している
グリッドの横幅を指定することで、間接的にロゴ画像サイズを制御している
サイズは3種:
- `sponsorGridWidth: "w-11/12 mx-auto"` = プラチナ
- `sponsorGridWidth: "w-8/12 mx-auto"` = 道内ゴールド, ゴールド, ローカル, デザイン
- `sponsorGridWidth: "w-11/12 mx-auto"` = シルバー

3. スポンサーロゴの画像を渡す
スポンサーの logos プロパティで、スポンサー種別に応じたロゴの画像パス一覧を保持する
画像は、配列のインデックス順に表示される


#### スポンサーのロゴ画像を変更する
スポンサーのロゴ画像を変更する手順は以下の通り
1. publicディレクトリ、sponsorLogos内にロゴ画像を配置する
2. sponsorType.tsxファイルを開く
3. 変更したいスポンサータイプを特定する。例えば、プラチナスポンサーのロゴを変更する場合、PLATINUMタイプを探す
4. logos配列内の画像パスを新しい画像パスに置き換える
ここで、配列のインデックス順に画像が表示される点に注意

#### 任意のスポンサー種別のグリッドレイアウトを変更する
スポンサー種別のグリッドレイアウトを変更する手順は以下の通り
1. sponsorType.tsxファイルを開く
2. 変更したいスポンサータイプを特定する。例えば、プラチナスポンサーのレイアウトを変更する場合、PLATINUMタイプを探す
3. layoutフィールドのクラスを新しいレイアウトクラスに置き換える

#### 任意のスポンサー種別のロゴ画像表示サイズを変更する
スポンサー種別のロゴ画像表示サイズを変更する手順は以下の通り
1. sponsorType.tsxファイルを開く
2. 変更したいスポンサータイプを特定する。例えば、プラチナスポンサーのレイアウトを変更する場合、PLATINUMタイプを探す
3. sponsorGridWidthフィールドのクラスを新しいレイアウトクラスに置き換える

## ジョブボード
ジョブボードページは`/job-board`に存在する。

### 実装概要
スポンサーの求人の表示関わる部分は`@jobBoardSection`で実装している。
特に、1求人あたりの表示の実装は`Job.tsx`(ジョブボードの単位コンポーネント)で実装している。
スポンサーの求人に直接関係ない説明文などは、直接`job-board/page.tsx`にて実装している。

### `@jobBoardSection`について
`@jobBoardSection`以下のファイルなどについての説明。
#### `/components`
- `Job.tsx`
  - スポンサー1社あたりの求人に関わるカードのようなコンポーネントである。
  - ジョブの見た目や挙動を編集したい場合はこれを編集する。

#### `/data`
- `types.ts`
  - ジョブボードセクションにおいて使用する型を定義したファイル。
  - `Job.tsx`と`constants.ts`で使用される。

- `constants.ts`
  - スポンサーの求人を表示するために必要な情報を保持する。
    - `comment`: 求人についてのコメント
    - `imageUrl`: 求人に表示するスポンサーのロゴ
    - `href`: スポンサーの求人ページへのリンク

#### `/page.tsx`
ここでスポンサーの求人をまとめて表示させる処理を記述している。
以下がコア部分
```tsx
<div className="grid grid-cols-1 gap-16 place-items-center">
  {JOB_BOARD_SECTION_DATA.map((jobData, index) => <Job {...jobData} key={index} />)}
</div>
```
グリッドレイアウトで表示しており、現状縦1列で表示されるようになっている。
`JOB_BOARD_SECTION_DATA: JobProps[]`を`mapメソッド`を使って、各要素を`Jobコンポーネント`に渡している。

### 単純に求人を追加したい
`landing-page-2024\src\app\job-board\@jobBoardSection\data\constants.ts`の`JOB_BOARD_SECTION_DATA`配列に新しい`Job`オブジェクトを追記すればよい。上から順番に表示される。