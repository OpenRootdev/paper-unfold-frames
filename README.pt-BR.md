<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/logo.svg" width="104" alt="Paper Unfold Frames logo">
</p>

<h1 align="center">Paper Unfold Frames</h1>

<p align="center">
  Uma bola de papel amassado se abre em um bilhete, quadro a quadro, como em fotos.<br>
  <sub>Uma skill que ensina seu agente de IA a criar esse efeito stop-motion para seus vídeos.</sub>
</p>

<p align="center"><a href="https://github.com/Ker102/paper-unfold-frames#readme">English</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.es.md">Español</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.de.md">Deutsch</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.fr.md">Français</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.ja.md">日本語</a> · <a href="https://github.com/Ker102/paper-unfold-frames/blob/translations/README.zh-CN.md">简体中文</a> · <b>Português</b></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/preview.gif" width="760" alt="Duas bolas de papel amassado se abrindo e mostrando um desenho de montanhas e uma lista de tarefas">
</p>

<p align="center">
  <a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip"><b>Baixar a skill</b></a> &nbsp;·&nbsp; <a href="#começar">Começar</a> &nbsp;·&nbsp; <a href="https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md">Ler a skill</a>
</p>

<p align="center">
  <sub>Funciona com</sub><br>
  <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/claude.svg" height="16" alt="">&nbsp;Claude Code &nbsp;·&nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/openai.svg" height="16" alt=""></picture>&nbsp;GPT Image &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/figma.svg" height="16" alt="">&nbsp;Figma &nbsp;·&nbsp; <img src="https://raw.githubusercontent.com/Ker102/paper-unfold-frames/assets/brands/python.svg" height="16" alt="">&nbsp;Python
</p>

<p align="center">
  <a href="https://toolindex.org/tools/paper-unfold-frames/"><img src="https://toolindex.org/badges/paper-unfold-frames.svg" alt="Listed in ToolIndex"></a>
</p>

## O que faz

Seu agente pede a um modelo de imagem nove fotos da mesma folha, da bola apertada até o bilhete plano e rasgado. Depois recorta e toca tudo como stop-motion.

- Parece papel de verdade, não gráfico 3D.
- Seu desenho ou sua letra pode já estar no papel e aparece conforme ele abre.
- Funciona em qualquer vídeo feito com código: HyperFrames, Remotion ou uma página web.

## Começar

1. Baixe <code><a href="https://github.com/Ker102/paper-unfold-frames/releases/latest/download/paper-unfold-frames.zip">paper-unfold-frames.zip</a></code> e descompacte na pasta de skills do seu agente (no Claude Code: <code>~/.claude/skills/</code>).
2. Depois é só pedir ao seu agente com palavras simples, por exemplo:

   > *Abra o vídeo com um bilhete amassado que se desdobra e mostra nosso slogan.*

Ou instale com git:

```bash
git clone --depth 1 https://github.com/Ker102/paper-unfold-frames ~/.claude/skills/paper-unfold-frames
```

## O que você precisa

- Acesso a um modelo de imagem GPT (por exemplo, pelo MCP do Figma ou pela API da OpenAI).
- Python 3 com Pillow, numpy e scipy, para recortar os quadros.
- Um vídeo feito com código que desenha em um canvas.

## O que vem dentro

| | |
|---|---|
| [`SKILL.md`](https://github.com/Ker102/paper-unfold-frames/blob/main/SKILL.md) | As instruções que seu agente segue. |
| [`scripts/key_frames.py`](https://github.com/Ker102/paper-unfold-frames/blob/main/scripts/key_frames.py) | Corta a imagem 3×3 em nove quadros limpos. |
| [`examples/`](https://github.com/Ker102/paper-unfold-frames/blob/main/examples/) | Os prompts que funcionaram e um trecho de reprodução. |

<sub>As mídias de prévia ficam no branch <a href="https://github.com/Ker102/paper-unfold-frames/tree/assets"><code>assets</code></a> e as traduções em <a href="https://github.com/Ker102/paper-unfold-frames/tree/translations"><code>translations</code></a>, então o <code>main</code> tem só a skill.</sub>

## Skill irmã

<a href="https://github.com/Ker102/paper-unfold-mesh"><img src="https://raw.githubusercontent.com/Ker102/paper-unfold-mesh/assets/logo.svg" width="40" align="left" alt=""></a>
**[Paper Unfold Mesh](https://github.com/Ker102/paper-unfold-mesh)**<br>
A mesma ideia feita com código em vez de fotos: variações sem fim (bolas, sanfonas, pergaminhos), e o texto dobra junto com o papel.
<br clear="left">

---

<sub>Licença MIT · <a href="https://github.com/Ker102">Ker102</a></sub>
