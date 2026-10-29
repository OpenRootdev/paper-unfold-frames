<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  Una bola de papel arrugada se abre y se convierte en una nota, fotograma a fotograma.<br>
  <sub>Una skill que enseña a tu agente de IA a crear este efecto stop-motion para tus vídeos.</sub>
</p>

<p align="center"><a href="https://github.com/Ker102/paper-unfold-frames#readme">English</a> · <b>Español</b> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.de.md">Deutsch</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.fr.md">Français</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.ja.md">日本語</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.zh-CN.md">简体中文</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.pt-BR.md">Português</a></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/preview.gif" width="760" alt="Dos bolas de papel arrugadas que se abren y muestran un dibujo de montañas y una lista de tareas">
</p>

<p align="center">
  <a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>Descargar la skill</b></a> &nbsp;·&nbsp; <a href="#primeros-pasos">Primeros pasos</a> &nbsp;·&nbsp; <a href="https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md">Leer la skill</a>
</p>

<p align="center">
  <sub>Funciona con</sub><br>
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## Qué hace

Tu agente pide a un modelo de imágenes nueve fotos de la misma hoja, desde una bola apretada hasta una nota plana y rasgada. Luego las recorta y las reproduce como un stop-motion.

- Parece papel de verdad, no gráficos 3D.
- Tu dibujo o tu letra pueden estar ya en el papel y aparecen al abrirse.
- Funciona en cualquier vídeo hecho con código: HyperFrames, Remotion o una página web.

## Primeros pasos

1. Descarga <code><a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code> y descomprímelo en la carpeta de skills de tu agente (en Claude Code: <code>~/.claude/skills/</code>).
2. Pídeselo a tu agente con palabras normales, por ejemplo:

   > *Empieza el vídeo con una nota arrugada que se despliega y muestra nuestro eslogan.*

O instálala con git:

```bash
git clone --depth 1 https://github.com/Ker102/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## Qué necesitas

- Acceso a un modelo de imágenes GPT (por ejemplo, con el MCP de Figma o la API de OpenAI).
- Python 3 con Pillow, numpy y scipy, para recortar los fotogramas.
- Un vídeo hecho con código que dibuje en un canvas.

## Qué incluye

| | |
|---|---|
| [`SKILL.md`](https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md) | Las instrucciones que sigue tu agente. |
| [`scripts/key_frames.py`](https://github.com/Ker102/paper-unfold-frames/blob/main/scripts/key_frames.py) | Corta la imagen de 3×3 en nueve fotogramas limpios. |
| [`examples/`](https://github.com/Ker102/paper-unfold-frames/blob/main/examples/) | Los prompts que funcionaron y un fragmento de reproducción. |

<sub>Los vídeos e imágenes de muestra están en la rama <a href="https://github.com/Ker102/paper-unfold-frames/tree/assets"><code>assets</code></a> y las traducciones en <a href="https://github.com/Ker102/paper-unfold-frames/tree/translations"><code>translations</code></a>, así <code>main</code> contiene solo la skill.</sub>

## Skill hermana

<a href="https://github.com/Ker102/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/Ker102/paper-unfold-mesh)**<br>
La misma idea hecha con código en lugar de fotos: variaciones infinitas (bolas, acordeones, pergaminos) y el texto se dobla con el papel.
<br clear="left">

---

<sub>Licencia MIT · <a href="https://github.com/Ker102">Ker102</a></sub>
