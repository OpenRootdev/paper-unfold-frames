<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  Eine zerknüllte Papierkugel öffnet sich zu einer Notiz, Bild für Bild wie fotografiert.<br>
  <sub>Ein Skill, der deinem KI-Agenten beibringt, diesen Stop-Motion-Effekt für deine Videos zu erstellen.</sub>
</p>

<p align="center"><a href="https://github.com/Ker102/paper-unfold-frames#readme">English</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.es.md">Español</a> · <b>Deutsch</b> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.fr.md">Français</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.ja.md">日本語</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.zh-CN.md">简体中文</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.pt-BR.md">Português</a></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/preview.gif" width="760" alt="Zwei zerknüllte Papierkugeln entfalten sich zu einer Bergskizze und einer To-do-Liste">
</p>

<p align="center">
  <a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>Skill herunterladen</b></a> &nbsp;·&nbsp; <a href="#loslegen">Loslegen</a> &nbsp;·&nbsp; <a href="https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md">Skill lesen</a>
</p>

<p align="center">
  <sub>Funktioniert mit</sub><br>
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## Was es macht

Dein Agent lässt ein Bildmodell neun Fotos desselben Blatts erzeugen, von der festen Kugel bis zur flachen, eingerissenen Notiz. Dann schneidet er sie frei und spielt sie wie Stop-Motion ab.

- Sieht aus wie echtes Papier, nicht wie 3D-Grafik.
- Deine Skizze oder Handschrift kann schon auf dem Papier sein und erscheint beim Öffnen.
- Funktioniert in jedem Video aus Code: HyperFrames, Remotion oder eine Webseite.

## Loslegen

1. Lade <code><a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code> herunter und entpacke es in den Skills-Ordner deines Agenten (bei Claude Code: <code>~/.claude/skills/</code>).
2. Bitte deinen Agenten in ganz normalen Worten darum, zum Beispiel:

   > *Starte das Video mit einem zerknüllten Zettel, der sich entfaltet und unseren Slogan zeigt.*

Oder mit git installieren:

```bash
git clone --depth 1 https://github.com/Ker102/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## Was du brauchst

- Zugang zu einem GPT-Bildmodell (zum Beispiel über das Figma-MCP oder die OpenAI-API).
- Python 3 mit Pillow, numpy und scipy zum Freistellen der Bilder.
- Ein Video aus Code, das auf ein Canvas zeichnet.

## Was drin ist

- [`SKILL.md`](https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md) · Die Anleitung, der dein Agent folgt.
- [`scripts/key_frames.py`](https://github.com/Ker102/paper-unfold-frames/blob/main/scripts/key_frames.py) · Zerlegt das 3×3-Bild in neun saubere Einzelbilder.
- [`examples/`](https://github.com/Ker102/paper-unfold-frames/blob/main/examples/) · Die Prompts, die funktioniert haben, und ein Abspiel-Snippet.

<sub>Vorschau-Medien liegen im Branch <a href="https://github.com/Ker102/paper-unfold-frames/tree/assets"><code>assets</code></a>, Übersetzungen in <a href="https://github.com/Ker102/paper-unfold-frames/tree/translations"><code>translations</code></a> – <code>main</code> enthält nur den Skill.</sub>

## Schwester-Skill

<a href="https://github.com/Ker102/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/Ker102/paper-unfold-mesh)**<br>
Dieselbe Idee aus Code statt Fotos: endlose Varianten (Kugeln, Akkordeons, Rollen), und die Schrift biegt sich mit dem Papier.
<br clear="left">

---

<sub>MIT-Lizenz · <a href="https://github.com/Ker102">Ker102</a></sub>
