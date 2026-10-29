"""Cut 3x3 GPT-image unfold grids into transparent frames: blue key, despill, warm grade, 1 px edge choke,
and only the largest paper piece per cell (neighbouring cells bleed slivers in).

    python key_frames.py <dir> <name> [<name> ...]   # reads <dir>/grid-<name>.png, writes <dir>/<name>0..8.png
"""
import sys
from PIL import Image, ImageFilter
import numpy as np
from scipy import ndimage

root = sys.argv[1]
for name in sys.argv[2:]:
    im = np.asarray(Image.open(f"{root}/grid-{name}.png").convert("RGB")).astype(np.float32)
    H, W, _ = im.shape
    r, g, b = im[..., 0], im[..., 1], im[..., 2]
    a = np.clip(1 - (b - np.maximum(r, g) - 20) / 45, 0, 1)
    a = np.asarray(Image.fromarray((a * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(3))).astype(np.float32) / 255
    out = im.copy()
    out[..., 2] = np.minimum(b, (r + g) / 2 + 3)
    out *= np.array([1.03, 1.0, 0.93])  # warm it to the desk light
    out = np.clip(out, 0, 255)
    cw, ch = W // 3, H // 3
    for i in range(9):
        x0, y0 = (i % 3) * cw, (i // 3) * ch
        A = a[y0:y0 + ch, x0:x0 + cw].copy()
        # keep only the sheet itself: slivers of neighbouring cells bleed in at the borders
        lab, n = ndimage.label(A > 0.3)
        if n > 1:
            keep = 1 + int(np.argmax(ndimage.sum(np.ones_like(A), lab, range(1, n + 1))))
            A *= ndimage.binary_dilation(lab == keep, iterations=2)
        rgba = np.dstack([out[y0:y0 + ch, x0:x0 + cw], A * 255]).astype(np.uint8)
        Image.fromarray(rgba, "RGBA").save(f"{root}/{name}{i}.png")
    print(name, "done")
