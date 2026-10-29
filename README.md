<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  A crumpled paper ball opens into a note, one photo-like frame at a time.<br>
  <sub>A skill that teaches your AI agent to make this stop-motion effect for your videos.</sub>
</p>

<p align="center"><b>English</b> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.es.md">Español</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.de.md">Deutsch</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.fr.md">Français</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.ja.md">日本語</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.zh-CN.md">简体中文</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.pt-BR.md">Português</a></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/preview.gif" width="760" alt="Two crumpled paper balls unfolding into a mountain sketch and a to-do list">
</p>

<p align="center">
  <a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>Download the skill</b></a> &nbsp;·&nbsp; <a href="#get-started">Get started</a> &nbsp;·&nbsp; <a href="SKILL.md">Read the skill</a>
</p>

<p align="center">
  <sub>Works with</sub><br>
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## What it does

Your agent asks an image model for nine photos of the same sheet of paper, from a tight ball to a flat torn note. It cuts them out and plays them back like stop-motion.

- Looks like real paper, not 3D graphics.
- Your sketch or handwriting can already be on the paper and appears as it opens.
- Works in any video made from code: HyperFrames, Remotion or a web page.

## Get started

1. Download <code><a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code> and unzip it into your agent's skills folder (for Claude Code: <code>~/.claude/skills/</code>).
2. Ask your agent for it in plain words, for example:

   > *Open the video with a crumpled note that unfolds to show our tagline.*

Or install with git:

```bash
git clone --depth 1 https://github.com/Ker102/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## What you need

- Access to a GPT image model (for example through the Figma MCP or the OpenAI API).
- Python 3 with Pillow, numpy and scipy, to cut out the frames.
- A video made from code that draws on a canvas.

## What's inside

| | |
|---|---|
| [`SKILL.md`](SKILL.md) | The instructions your agent follows. |
| [`scripts/key_frames.py`](scripts/key_frames.py) | Cuts the 3×3 image into nine clean frames. |
| [`examples/`](examples/) | The prompts that worked and a playback snippet. |

<sub>Preview media lives on the <a href="https://github.com/Ker102/paper-unfold-frames/tree/assets"><code>assets</code></a> branch and translations on <a href="https://github.com/Ker102/paper-unfold-frames/tree/translations"><code>translations</code></a>, so <code>main</code> holds only the skill.</sub>

## Sister skill

<a href="https://github.com/Ker102/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/Ker102/paper-unfold-mesh)**<br>
The same idea built from code instead of photos: endless variations (balls, accordions, scrolls), and the writing bends with the paper.
<br clear="left">

---

<sub>MIT licence · <a href="https://github.com/Ker102">Ker102</a></sub>
