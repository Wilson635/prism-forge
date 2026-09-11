![PRISM](public/prism-mark.svg)

# PRISM

Bibliothèque de blocs UI, templates et kits pour assembler des interfaces  
qu’on n’a pas envie de masquer derrière un “lorem ipsum”.

**React** · **TypeScript** · **Vite** · **Tailwind CSS 4** · **Framer Motion**

---

PRISM n’est pas un kit générique. C’est une **fonderie** : des compositions déjà thématisées, déjà typées, prêtes à copier — hero, features, CTA, bento, formulaires, ecommerce — dans un playground qui se comporte comme un vrai atelier (preview, code, viewports).

Le design system du site (**Manrope** + **DM Mono**, vert comme signal, jamais comme papier peint) vit dans `src/prism-theme.css`. Les blocs du catalogue le respectent.

## Sommaire

- [Ce que tu peux faire aujourd’hui](#ce-que-tu-peux-faire-aujourdhui)
- [Démarrage](#démarrage)
- [Catalogue](#catalogue)
- [Ajouter un bloc](#ajouter-un-bloc)
- [Charte](#charte)
- [Structure](#structure)
- [Scripts](#scripts)
- [Identité visuelle](#identité-visuelle)
- [Feuille de route](#feuille-de-route)
- [Contribuer](#contribuer)



## Ce que tu peux faire aujourd’hui


| Surface        | Rôle                                                                      |
| -------------- | ------------------------------------------------------------------------- |
| **/**          | Landing : preuve, catégories, extraits de blocs, templates, kits          |
| **/blocks**    | Navigateur : Marketing / Application / Ecommerce, recherche, preview live |
| **/templates** | Vitrines de pages (Arcadia, Lumen, Frame)                                 |
| **/kits**      | Langages visuels packagés (Launch Kit, Orbit Dashboard)                   |


Dans le playground d’un bloc :

- Preview React réelle (`Component`) — pas une capture
- Source TSX (via `?raw`) avec coloration **Shiki**
- Copie du code
- Bascule preview / code / split
- Viewports 390 → 1280 + fluid, largeur draggable

Le registre scanne `src/catalog/blocks/**/*.meta.ts`. Un fichier meta valide = un bloc dans la librairie. L’ordre d’affichage se règle dans `src/catalog/block-order.ts`.

## Démarrage

Prérequis : **Node 20+**, **pnpm**.

```bash
pnpm install
pnpm run dev
```

Ouvre `http://localhost:5173`.

```bash
pnpm run typecheck   # tsc --noEmit
pnpm run lint
pnpm run format
pnpm run build
pnpm run preview
```



## Catalogue

Les blocs sont groupés comme dans la sidebar.

**Marketing** — Hero, Features, CTA, Bento, Pricing, Header, Newsletter, Testimonials, Blog

**Application UI** — Navbars, Sidebars, Command palettes, Tables, Forms

**Ecommerce** — Product overviews, Product lists, Shopping carts, Checkout

Volumes visés : **20 blocs distincts par type** (layout, rythme, animation — pas 20 teintes du même card). Hero, Features, CTA et Bento sont déjà à cette densité. Les autres familles grossissent dans le même esprit.

Chaque entrée est un couple :

```
src/catalog/blocks/<famille>/<id>.tsx       # le composant
src/catalog/blocks/<famille>/<id>.meta.ts   # defineBlock({ id, name, category, tone, icon, code, Component })
```

`id` en kebab-case, unique. `tone` : `mint` | `violet` | `blue` | `amber` (aperçus marketing). `category` doit matcher `BLOCK_CATEGORIES` dans `src/catalog/types.ts`.

## Ajouter un bloc

1. Créer le `.tsx` (tokens `var(--bg)`, `var(--green)`, etc. — pas une palettes parallèle).
2. Créer le `.meta.ts` :

```ts
import { Sparkles } from 'lucide-react'
import { defineBlock } from '../../define-block'
import MonBloc from './mon-bloc'
import source from './mon-bloc.tsx?raw'

export const block = defineBlock({
  id: 'mon-bloc',
  name: 'Hero — Un titre qui tient',
  category: 'Hero',
  tone: 'mint',
  icon: Sparkles,
  code: source,
  Component: MonBloc,
})
```

1. Optionnel : ajouter `'mon-bloc'` dans `blockOrder` s’il ne doit pas atterrir en fin de liste.
2. `pnpm run typecheck`. Le glob fait le reste.



## Charte

Décisions qu’un bloc ne doit pas “réinterpréter” :


| Token                   | Usage                             |
| ----------------------- | --------------------------------- |
| `--bg` `#090b0a`        | Fond                              |
| `--panel` / `--panel-2` | Surfaces                          |
| `--line` `#252c28`      | Seule bordure. Cadres 16–24px     |
| `--text` / `--muted`    | Voix principale / secondaire      |
| `--green` `#79f2b0`     | Signal. Jamais un fill de section |
| Manrope                 | Phrase                            |
| DM Mono                 | Spec, labels, métriques           |


Le bloc **Features — Charter notes** (`features-orbit-notes`) est le spécimen de ces règles.

## Structure

```
public/                 favicon, prism-logo.svg / .ico, prism-mark.svg
src/
  catalog/
    blocks/             un dossier par famille
    block-order.ts
    define-block.ts
    registry.ts
    types.ts
    kits.ts
    templates.ts
  components/           playground, previews, Brand / Logo
  pages/                Home, Blocks, Templates, Kits
  prism-theme.css       charte du site + playground
```



## Scripts


| Commande                               | Effet                                                 |
| -------------------------------------- | ----------------------------------------------------- |
| `pnpm run dev`                         | Vite, HMR                                             |
| `pnpm run build`                       | Production                                            |
| `pnpm run typecheck`                   | Catalogue + app                                       |
| `python scripts/generate-prism-ico.py` | Régénère les ICO depuis la géométrie du mark (Pillow) |




## Identité visuelle

Le mark reprend les trois cadres du composant `Logo` (`src/components/Brand.tsx`) : losanges bordés `--green`, opacités 1 / 0,65 / 0,35.

- `public/prism-mark.svg` — pictogramme
- `public/prism-logo.svg` — mark + wordmark
- `public/prism-logo.ico` / `public/favicon.ico` — onglet (fond `--bg`)



## Feuille de route

Fonctionnalités **évolutives** : ce qui est posé comme socle, et ce qui doit encore prendre de l’épaisseur. L’ordre n’est pas un contrat de dates.

### Catalogue

- [x] Hero × 20, Features × 20, CTA × 20, Bento à densité comparable
- [ ] **Pricing × 20** — même exigence de layouts distincts (ensuite Header, Newsletter, Testimonials, Blog)
- [ ] Application UI et Ecommerce au même standard (navbars, sidebars, command, tables, forms, product, cart, checkout)
- [ ] Variantes assumées (`-1` / `-2`) seulement quand l’original et la réécriture PRISM doivent coexister
- [ ] Tags (animé / statique, dark-only, formulaire) pour filtrer autrement que par catégorie



### Playground

- [x] Preview live, source, viewports, copie
- [ ] Édition du code **dans** le playground (le `code` est déjà là ; le runtime Babel de preview peut s’ouvrir à un sandbox éditable)
- [ ] Export **HTML** propre (la bascule langue existe dans l’UI, le pipeline doit produire un snippet autonome)
- [ ] Export vers **Next.js / Astro** (fichiers + imports, pas un dump)
- [ ] Recherche full-text (nom, id, source) et deep-link `/blocks?id=`



### Templates & kits

- [x] Vitrines (fiches, prix, positionnement)
- [ ] Templates **assemblés** : pages réelles (SaaS, launch, studio) faites de blocs du catalogue, pas seulement d’images
- [ ] Kits **installables** : tokens + sous-ensemble de blocs + README de langage visuel
- [ ] Presets de thème (atelier sombre actuel, papier clair, un troisième “signal”) sans casser la charte



### Produit

- [ ] **CLI** — une commande qui pose un bloc (ou un kit) dans un repo déjà themé
- [ ] Accès / licences (bibliothèque ouverte vs packs) branché sur la bande pricing de la home
- [ ] Compte builder : favoris, collections, “mes pages”
- [ ] Figma (variables = tokens CSS) pour que design et repo ne divergent pas
- [ ] i18n des surfaces marketing (l’UI site est en anglais ; les blocs restent la langue du produit client)



### Qualité

- [x] Schéma Zod sur chaque `defineBlock`, ids uniques
- [ ] Tests visuels (viewports) sur les 20 d’une famille avant de la déclarer “fermée”
- [ ] Accessibilité de base (contraste du vert, focus, labels) comme check de merge
- [ ] CI : `typecheck` + `lint` + build sur chaque PR



## Contribuer

Un bloc de plus ne vaut le coup que s’il **n’existe pas déjà** dans la famille : autre colonne, autre rythme, autre preuve. Recolorer un grid 2×2 n’est pas un bloc.

PR petites, un type à la fois, `typecheck` vert. Ne pas committer de secrets. Les ICO se régénèrent, on ne les “peinture” pas à la main.

---

PRISM — *the frontend archive for people who care.*