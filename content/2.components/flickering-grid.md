---
title: Flickering Grid
description: A flickering grid background made with Canvas, fully customizable using Tailwind CSS.

navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="FlickeringGridDemo" type="examples" id="flickering-grid"}
::

## API

| Prop Name       | Type     | Default        | Description                            |
| --------------- | -------- | -------------- | -------------------------------------- |
| `squareSize`    | `number` | `4`            | Size of each square in the grid.       |
| `gridGap`       | `number` | `6`            | Gap between squares in the grid.       |
| `flickerChance` | `number` | `0.3`          | Probability of a square flickering.    |
| `color`         | `string` | `rgb(0, 0, 0)` | Color of the squares.                  |
| `width`         | `number` | `-`            | Width of the canvas.                   |
| `height`        | `number` | `-`            | Height of the canvas.                  |
| `class`         | `string` | `-`            | Additional CSS classes for the canvas. |
| `maxOpacity`    | `number` | `0.2`          | Maximum opacity of the squares.        |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="FlickeringGrid.vue" language="vue" componentName="FlickeringGrid" type="ui" id="flickering-grid"}
::

## Credits

- Credits to [magicui flickering-grid](https://magicui.design/docs/components/flickering-grid) for this component.