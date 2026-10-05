# Yohaku Loom 公式サイト

GitHub Pages で公開する静的サイトです（ビルド不要）。

```
index.html        トップページ
privacy.html      プライバシーポリシー
legal.html        特定商取引法に基づく表記
assets/style.css  スタイル
```

## GitHub Pages での公開手順

1. GitHub で新しいリポジトリを作成します（例: `yohaku-loom`。公開設定は Public）。
2. このフォルダのファイルを、構成を保ったままリポジトリの `main` ブランチ直下にアップロード（または push）します。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment** の Source を「Deploy from a branch」にし、**Branch: `main` / `/ (root)`** を選んで **Save** します。
5. 数分後に表示される URL（`https://<ユーザー名>.github.io/<リポジトリ名>/`）を開いて確認し、その URL を `index.html` の `og:url` に記入します。

## 公開前に

- ファイル内の `【…】` をすべて置き換えてください（エディタで `【` を検索すると一覧できます）。
- 事例A は `hidden` 属性で非表示になっています。公開許可を得たら `index.html` 内のコメントに従って有効化してください。
