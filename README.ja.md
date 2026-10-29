<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  くしゃくしゃに丸めた紙が、写真のようなコマ送りで広がってメモになります。<br>
  <sub>このストップモーション表現を動画用に作れるよう、AI エージェントに教えるスキルです。</sub>
</p>

<p align="center"><a href="https://github.com/Ker102/paper-unfold-frames#readme">English</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.es.md">Español</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.de.md">Deutsch</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.fr.md">Français</a> · <b>日本語</b> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.zh-CN.md">简体中文</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.pt-BR.md">Português</a></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/preview.gif" width="760" alt="丸めた紙が2つ広がり、山のスケッチと ToDo リストが現れる様子">
</p>

<p align="center">
  <a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>スキルをダウンロード</b></a> &nbsp;·&nbsp; <a href="#はじめかた">はじめかた</a> &nbsp;·&nbsp; <a href="https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md">スキルを読む</a>
</p>

<p align="center">
  <sub>対応</sub><br>
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## できること

エージェントが画像モデルに、同じ紙の写真を9枚描かせます。固く丸めた状態から、平らで端の破れたメモまで。それを切り抜いて、ストップモーションのように再生します。

- 3D ではなく、本物の紙のように見えます。
- スケッチや手書き文字を最初から紙に描いておけば、広がるにつれて見えてきます。
- HyperFrames、Remotion、Web ページなど、コードで作るどの動画でも使えます。

## はじめかた

1. <code><a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code> をダウンロードし、エージェントのスキルフォルダに展開します（Claude Code の場合は <code>~/.claude/skills/</code>）。
2. あとは普通の言葉でエージェントに頼むだけです。例：

   > *動画の冒頭で、丸めたメモが広がってキャッチコピーが見えるようにして。*

git でインストールする場合：

```bash
git clone --depth 1 https://github.com/Ker102/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## 必要なもの

- GPT 画像モデルへのアクセス（例：Figma MCP や OpenAI API）。
- コマを切り抜くための Python 3（Pillow、numpy、scipy）。
- canvas に描画する、コードで作る動画。

## 中身

| | |
|---|---|
| [`SKILL.md`](https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md) | エージェントが従う手順書。 |
| [`scripts/key_frames.py`](https://github.com/Ker102/paper-unfold-frames/blob/main/scripts/key_frames.py) | 3×3 の画像を9枚のきれいなコマに切り分けます。 |
| [`examples/`](https://github.com/Ker102/paper-unfold-frames/blob/main/examples/) | うまくいったプロンプトと再生用のコード例。 |

<sub>プレビュー用の画像・動画は <a href="https://github.com/Ker102/paper-unfold-frames/tree/assets"><code>assets</code></a> ブランチ、翻訳は <a href="https://github.com/Ker102/paper-unfold-frames/tree/translations"><code>translations</code></a> ブランチにあり、<code>main</code> にはスキル本体だけが入っています。</sub>

## 姉妹スキル

<a href="https://github.com/Ker102/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/Ker102/paper-unfold-mesh)**<br>
同じアイデアを写真ではなくコードで。ボール、じゃばら、巻物など無限にバリエーションが作れ、文字も紙と一緒に曲がります。
<br clear="left">

---

<sub>MIT ライセンス · <a href="https://github.com/Ker102">Ker102</a></sub>
