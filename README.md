# なでしこ交流試合 in 関西

年度ごとの大会ページ（Google Apps Script）のソースです。

- `2026/` … なでしこ交流試合in関西2026

## 編集と反映

各年度フォルダは [clasp](https://github.com/google/clasp) のプロジェクトです。

```
git pull     # 編集前に必ず最新を取り込む
# …編集…
git push     # GitHub に上げる
```

`main` に push すると、GitHub Actions（`.github/workflows/clasp-push.yml`）が
変更のあった年度フォルダを自動で `clasp push` し、Google Apps Script に反映します。
GitHub Pages（`https://fuorigioco.github.io/nadeshiko-kansai/<年度>/`）にも1分ほどで反映されます。

- 手元から `clasp push` はしない（他の人の変更を上書きしてしまうため）
- ブラウザの Apps Script エディタでは直接編集しない
