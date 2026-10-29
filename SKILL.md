---
name: paper-unfold-frames
description: Photo-real "crumpled paper ball unfolds frame by frame" stop-motion, made from GPT-image keyframes. One image call draws a 3x3 grid of unfold stages (tight ball → flat torn sheet), optionally with the sketch or handwriting already on the paper so it is revealed as the sheet opens. A script keys out the frames and they play stepped at 6–8 fps. Use when a video (HyperFrames, Remotion, any canvas/DOM) should open a scene or reveal a message with the paper-unfold look, or when the user asks for crumpled-paper / unfolding-note animation.
---

# Paper unfold from generated frames

This route looks like real paper photographed frame by frame, which a procedural mesh can't match. For a version you can vary endlessly, where the writing deforms with the paper, see the sister skill [`paper-unfold-mesh`](https://github.com/Ker102/paper-unfold-mesh).

## 1 · Generate one grid per sequence

Use a GPT image model (tested with `gpt-image-2.5-sunburst` through the Figma MCP `generate_image` tool; any GPT image endpoint works). Ask for 2048×2048; a 1024² result gives cells of about 340 px. Make one call per sequence. All nine stages come from the same image, so the paper, light and scale stay consistent.

Prompt skeleton (the full working prompts are in `examples/prompts.md`):

> A 3x3 grid of nine stop-motion animation frames, photographed straight top-down, of the SAME single sheet of {paper} being unfolded, reading left-to-right, top-to-bottom. {content} Frame 1 a tight, fully closed crumpled paper ball {with only tiny fragments of ink visible}; frame 2 the ball loosening; frame 3 cracking open at the top; frame 4 half open like a crumpled flower {parts of the sketch visible but distorted}; frame 5 more open with big wrinkled petals; frame 6 mostly open, heavily wrinkled; frame 7 almost flat with deep crease lines; frame 8 flat wrinkled sheet with irregular torn ripped edges {full sketch readable}; frame 9 the same flat sheet lying still. {The ink always stays on the paper and follows its creases.} Each frame on an identical solid flat pure chroma blue (#0047FF) background with no texture, the paper centered in its cell, same soft daylight from the upper left, realistic crease shading, no shadows on the background, no hands, no borders, no grid lines between cells.

- **Put the content in the prompt** (handwriting, a line sketch) rather than inking it on afterwards. Ink added in code doesn't follow the creases and can land off the paper.
- Keep the text short (2 lines, about 4 words each) so the model spells it right. Check the full-size frames before using them.
- Variations that worked: plain white sheet; a lined notebook page torn from a spiral pad (ragged left edge, slightly oval wad). Others to try: kraft paper, sticky note, graph paper, a receipt strip, a sheet with a diagram.
- Download the image right away if your tool returns an expiring URL.

## 2 · Key out the frames

```
python scripts/key_frames.py <dir> <name>   # <dir>/grid-<name>.png → <dir>/<name>0.png … <name>8.png
```

The script uses a blue key with despill, a warm grade (×1.03 / 1.0 / 0.93) so the paper sits on warm surfaces, a 1 px edge choke, and keeps only the largest connected piece per cell. Without that last step, slivers of neighbouring cells show up as white lines. Needs Pillow, numpy and scipy.

## 3 · Play them

Each cell keeps the grid's scale, so draw every frame centred at the same point and scale (about 2.2–2.3× for a 1080p frame). See `examples/scene-snippet.js`:

- **Cadence:** 6–8 fps feels hand-made. Hold the ball (frame 0) about 1 s, step through frames 1→7 at 0.25–0.34 s each, then alternate frames 7 and 8 every 2 steps so the flat sheet "boils".
- **Entrances:** slide in with a 2D spin, or drop in with a bounce (lift → larger, softer, offset shadow).
- **Shadow:** canvas `shadowColor rgba(60,35,10,.38)`, blur 16 + lift·0.05, offset (6 + lift·0.08, 10 + lift·0.1). Larger offsets read as a detached blob.
- **Writing added in code:** clip-reveal a handwriting font (e.g. Caveat) and draw-on ticks in cell coordinates, inside the paper. Graphite `#3a3936` with coral `#cc5236` ticks reads better than blue ink.
- **Sound:** one quiet paper crinkle per unfold (about 1.5 s, volume about 0.3) over a soft music bed.

A plain top-down wooden desk as the background (also generated: "top-down light oak desk, no objects") makes white paper read.
