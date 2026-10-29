<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  Une boule de papier froissé s'ouvre en note, image par image, comme photographiée.<br>
  <sub>Un skill qui apprend à votre agent IA à créer cet effet stop-motion pour vos vidéos.</sub>
</p>

<p align="center"><a href="https://github.com/Ker102/paper-unfold-frames#readme">English</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.es.md">Español</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.de.md">Deutsch</a> · <b>Français</b> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.ja.md">日本語</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.zh-CN.md">简体中文</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.pt-BR.md">Português</a></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/preview.gif" width="760" alt="Deux boules de papier froissé qui s'ouvrent sur un croquis de montagnes et une liste de tâches">
</p>

<p align="center">
  <a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>Télécharger le skill</b></a> &nbsp;·&nbsp; <a href="#démarrer">Démarrer</a> &nbsp;·&nbsp; <a href="https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md">Lire le skill</a>
</p>

<p align="center">
  <sub>Fonctionne avec</sub><br>
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## Ce que ça fait

Votre agent demande à un modèle d'images neuf photos de la même feuille, de la boule serrée à la note plate et déchirée. Il les détoure puis les joue comme un stop-motion.

- On dirait du vrai papier, pas de la 3D.
- Votre croquis ou votre écriture peut déjà être sur le papier et apparaît à l'ouverture.
- Fonctionne dans toute vidéo faite en code : HyperFrames, Remotion ou une page web.

## Démarrer

1. Téléchargez <code><a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code> et décompressez-le dans le dossier de skills de votre agent (pour Claude Code : <code>~/.claude/skills/</code>).
2. Demandez-le simplement à votre agent, par exemple :

   > *Ouvre la vidéo avec une note froissée qui se déplie pour montrer notre slogan.*

Ou installez-le avec git :

```bash
git clone --depth 1 https://github.com/Ker102/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## Ce qu'il vous faut

- Un accès à un modèle d'images GPT (par exemple via le MCP Figma ou l'API OpenAI).
- Python 3 avec Pillow, numpy et scipy, pour détourer les images.
- Une vidéo faite en code qui dessine sur un canvas.

## Contenu

| | |
|---|---|
| [`SKILL.md`](https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md) | Les instructions que suit votre agent. |
| [`scripts/key_frames.py`](https://github.com/Ker102/paper-unfold-frames/blob/main/scripts/key_frames.py) | Découpe l'image 3×3 en neuf images propres. |
| [`examples/`](https://github.com/Ker102/paper-unfold-frames/blob/main/examples/) | Les prompts qui ont marché et un extrait de lecture. |

<sub>Les médias d'aperçu sont sur la branche <a href="https://github.com/Ker102/paper-unfold-frames/tree/assets"><code>assets</code></a> et les traductions sur <a href="https://github.com/Ker102/paper-unfold-frames/tree/translations"><code>translations</code></a> : <code>main</code> ne contient que le skill.</sub>

## Skill jumeau

<a href="https://github.com/Ker102/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/Ker102/paper-unfold-mesh)**<br>
La même idée faite en code plutôt qu'en photos : variations infinies (boules, accordéons, rouleaux), et l'écriture se plie avec le papier.
<br clear="left">

---

<sub>Licence MIT · <a href="https://github.com/Ker102">Ker102</a></sub>
