# Yohaku Loom 公式サイト

GitHub Pages で公開する静的サイトです（ビルド不要・外部ライブラリなし）。

```
index.html               トップページ
privacy.html             プライバシーポリシー
legal.html               特定商取引法に基づく表記
assets/style.css         スタイル（色・文字・余白は :root のトークンで管理）
assets/main.js           メニュー開閉・スクロール演出（JSが無効でも内容は表示されます）
assets/favicon.svg       ファビコン
assets/apple-touch-icon.png
assets/ogp.png           SNS共有用画像（1200×630）
```

リンクはすべて相対パスのため、`https://<ユーザー名>.github.io/<リポジトリ名>/` のようなサブパス配信でも動作します。

## GitHub Pages での公開手順

1. リポジトリの **Settings → Pages** を開きます。
2. **Build and deployment** の Source を「Deploy from a branch」にし、**Branch: `main` / `/ (root)`** を選んで **Save** します。
3. 数分後に表示される URL を開いて確認します。
4. 公開URLが `https://ituu110.github.io/YohakuLoom/` と異なる場合（独自ドメイン等）は、`index.html` の `canonical`・`og:url`・`og:image`・構造化データ内の URL を置き換えてください。

## 公開前に

- `privacy.html` と `legal.html` の `【…】` をすべて置き換えてください（エディタで `【` を検索すると一覧できます）。
- お問い合わせは Google フォームを利用しています。サービス別リンクは「相談の種類」（`entry.2109916976`）を事前選択します。フォームの選択肢の文言を変更した場合は、`index.html` 内のリンクも合わせて更新してください。

## 内部資料について

料金案・受託事例の下書き・公開前TODOは `_internal/` に置き、`.gitignore` でリポジトリから除外しています。公開してよい内容だけを `index.html` に反映してください。
