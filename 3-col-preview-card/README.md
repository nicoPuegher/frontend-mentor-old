# Frontend Mentor - 3-Column Preview Card Component

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).

<br />

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

<br />

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshots

<img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1617293265/Challenges/ap7h50kkrdq7zclbokox.jpg" width="480"><img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1617293393/Challenges/wgpurm7exoqq79zn7zaq.jpg" width="480">

### Links

- Live Site URL: [GitHub Page](https://nicopuegher.github.io/frontend-mentor/3-col-preview-card/)
- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-/hub/3column-preview-card-component-flexbox-vjt3K_WfY)

## My process

### Built with

- HTML
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

Set inset borders using box-shadow without affecting the current layout (border and outline affected the layout even when using box-sizing: border-box).

```css
main div button:hover {
  box-shadow: 0px 0px 0px 2px var(--light-gray) inset;
}
```

<br />

## Author

- Frontend Mentor - [@nicoPuegher](https://www.frontendmentor.io/profile/nicoPuegher)
