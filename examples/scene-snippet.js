// From a HyperFrames demo reel (canvas driven by a stepped clock); seg/lerp/outC/inQ/drop/hand/stroke/wob are small easing and drawing helpers. genC/genB = arrays of <img> for frames 0..8.
      // a generated photo frame: one cell of a GPT-image unfold grid, with a soft desk shadow and optional ink on top
      function drawImg(it) {
        const im = it.imgs[it.frame], lift = it.lift || 0;
        ctx.save(); ctx.translate(it.x, it.y); ctx.rotate(it.rz || 0); ctx.scale(it.s, it.s);
        ctx.shadowColor = "rgba(60,35,10,0.38)"; ctx.shadowBlur = 16 + lift * 0.05; ctx.shadowOffsetX = 6 + lift * 0.08; ctx.shadowOffsetY = 10 + lift * 0.1;
        if (im.naturalWidth) ctx.drawImage(im, -im.naturalWidth / 2, -im.naturalHeight / 2);
        ctx.shadowColor = "transparent";
        if (it.ink && it.k > 0) { ctx.lineCap = "round"; ctx.lineJoin = "round"; it.ink(ctx, it.k); }
        ctx.restore();
      }

      const inkB = (g, k) => {
        g.save(); g.beginPath(); g.rect(-110, -110, 260 * seg(k, 0, 0.3), 200); g.clip(); hand(g, "to do:", -70, -78, 30, GRAPHITE); g.restore();
        ["sketch it", "ship it"].forEach((tx, i) => { const y = -36 + i * 42;
          g.save(); g.beginPath(); g.rect(-110, y - 30, 260 * seg(k, 0.25 + i * 0.25, 0.5 + i * 0.25), 40); g.clip(); hand(g, tx, -40, y, 30, GRAPHITE); g.restore();
          stroke(g, wob([[-68, y - 10], [-60, y - 2], [-48, y - 22]], 70 + i, 0.6), seg(k, 0.55 + i * 0.25, 0.7 + i * 0.25), CORAL, 3); });
      };

// scenes (local time t, each scene stepped at its own fps)
        { at: 44, dur: 6, fps: 8, f: (t) => {
          // slides in spinning, rests, then the photo frames play 1→9; the last two alternate so the flat sheet boils
          const fr = t < 1.3 ? 0 : t < 3.3 ? 1 + Math.min(7, Math.floor((t - 1.3) / 0.25)) : 7 + (Math.floor(t * 4) % 2);
          const x = lerp(2200, 960, outC(seg(t, 0, 0.9))), out = inQ(seg(t, 5.4, 6));
          return [{ imgs: genC, frame: fr, x: x - 1500 * out, y: 540, s: 2.25, rz: lerp(-4, -0.04, outC(seg(t, 0, 0.9))) }]; } },
        { at: 50, dur: 6, fps: 6, f: (t) => {
          // dropped from above, then fewer, bigger steps: each frame held 1/3 s
          const fr = t < 1.2 ? 0 : t < 3.6 ? 1 + Math.min(7, Math.floor((t - 1.2) / 0.34)) : 7 + (Math.floor(t * 3) % 2);
          return [{ imgs: genB, frame: fr, x: 960, y: 545, s: 2.3, lift: drop(t), rz: lerp(1.2, 0.03, outC(seg(t, 0, 1))), k: seg(t, 3.8, 5.0), ink: inkB }]; } },
