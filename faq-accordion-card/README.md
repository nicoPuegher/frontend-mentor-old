# Frontend Mentor - FAQ Accordion Card Solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).

<br />

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

<br />

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshots

<img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1602235390/Challenges/y4zn9ukalew5zbnodrjs.jpg" width="480"><img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1602235457/Challenges/ird5rpi2iicascfikil8.jpg" width="480">

### Link

- Live Site URL: [GitHub Page](https://nicopuegher.github.io/frontend-mentor/faq-accordion-card/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

Choose which elements to show when using overflow: hidden. Two divs needed, the first with position: relative, the second with overflow: hidden and the elements inside this last one with a position: absolute will ignore the hidden property.

```css
main {
  position: relative;
}

.overflow {
  overflow: hidden;
}

.image-wrapper__box {
  position: absolute;
  top: 200px;
  left: -100px;
}
```
