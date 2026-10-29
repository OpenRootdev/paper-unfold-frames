<p align="center">
  <img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  一团揉皱的纸球逐帧展开成一张便条，每一帧都像照片一样真实。<br>
  <sub>一个教你的 AI 智能体为视频制作这种定格动画效果的技能。</sub>
</p>

<p align="center"><a href="https://github.com/OpenRootdev/paper-unfold-frames#readme">English</a> · <a href="https://github.com/OpenRootdev/paper-unfold-frames/blob/translations/README.es.md">Español</a> · <a href="https://github.com/OpenRootdev/paper-unfold-frames/blob/translations/README.de.md">Deutsch</a> · <a href="https://github.com/OpenRootdev/paper-unfold-frames/blob/translations/README.fr.md">Français</a> · <a href="https://github.com/OpenRootdev/paper-unfold-frames/blob/translations/README.ja.md">日本語</a> · <b>简体中文</b> · <a href="https://github.com/OpenRootdev/paper-unfold-frames/blob/translations/README.pt-BR.md">Português</a></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/preview.gif" width="760" alt="两个揉皱的纸团展开，露出山峰素描和待办清单">
</p>

<p align="center">
  <a href="https://github.com/OpenRootdev/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>下载技能</b></a> &nbsp;·&nbsp; <a href="#快速开始">快速开始</a> &nbsp;·&nbsp; <a href="https://github.com/OpenRootdev/paper-unfold-frames/blob/main/SKILL.md">阅读技能</a>
</p>

<p align="center">
  <sub>适用于</sub><br>
  <img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## 它能做什么

智能体让图像模型生成同一张纸的九张照片：从紧紧的纸团到平整、边缘撕裂的便条。然后把它们抠出来，像定格动画一样播放。

- 看起来像真纸，而不是 3D 图形。
- 你的草图或手写字可以事先画在纸上，随着展开逐渐显现。
- 适用于任何用代码制作的视频：HyperFrames、Remotion 或网页。

## 快速开始

1. 下载 <code><a href="https://github.com/OpenRootdev/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code>，解压到你的智能体的技能文件夹（Claude Code 为 <code>~/.claude/skills/</code>）。
2. 然后用平常的话告诉你的智能体，例如：

   > *用一张揉皱后展开、露出我们口号的便条作为视频开头。*

或者用 git 安装：

```bash
git clone --depth 1 https://github.com/OpenRootdev/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## 你需要什么

- 可以使用 GPT 图像模型（例如通过 Figma MCP 或 OpenAI API）。
- Python 3 以及 Pillow、numpy、scipy，用于抠出每一帧。
- 一个在 canvas 上绘制的代码视频。

## 包含内容

- [`SKILL.md`](https://github.com/OpenRootdev/paper-unfold-frames/blob/main/SKILL.md) · 智能体遵循的说明。
- [`scripts/key_frames.py`](https://github.com/OpenRootdev/paper-unfold-frames/blob/main/scripts/key_frames.py) · 把 3×3 图片切成九张干净的帧。
- [`examples/`](https://github.com/OpenRootdev/paper-unfold-frames/blob/main/examples/) · 效果好的提示词和一段播放代码。

<sub>预览图片和视频放在 <a href="https://github.com/OpenRootdev/paper-unfold-frames/tree/assets"><code>assets</code></a> 分支，翻译放在 <a href="https://github.com/OpenRootdev/paper-unfold-frames/tree/translations"><code>translations</code></a> 分支，<code>main</code> 只包含技能本身。</sub>

## 姊妹技能

<a href="https://github.com/OpenRootdev/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/OpenRootdev/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/OpenRootdev/paper-unfold-mesh)**<br>
同样的想法，用代码而不是照片实现：无限变化（纸团、风琴折、卷轴），文字也会随纸弯曲。
<br clear="left">

---

<sub>MIT 许可证 · <a href="https://github.com/OpenRootdev">OpenRootdev</a></sub>
