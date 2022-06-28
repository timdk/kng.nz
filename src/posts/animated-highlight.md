---
title: "Made a thing: Animated Highlight"
date: "2022-06-27"
---

Part of my motivation for making this site is to have a platform for reimplementing cool things that I see across the web as learning exercises.
Yes, it is easy enough to make a small repos every time, but I get bogged down with boilerplate and lose motivation before starting the actual thing.
I saw some blog that had an animated highlight of a key point when you scrolled into view.
So, I copied it.

[View a demo](https://kng.nz/things/animated-highlight)

[View the source](https://github.com/timdk/kng.nz/tree/main/src/components/shared/highlight)

## How does it work? 

The highlight itself is done by animating a coloured background on an element.
If the element is inline then it spans multiple lines nicely.
The background is a linear gradient with no gradient (50/50 two-tone).
It is twice the width of the element, so it appears as just one of the colours.
When we add the second class we animate the background position and the other colour slides in.

```scss
.highlight {
  padding: 0 0.2em;
  background-image: linear-gradient(to right, $color 50%, $color-filled 50%);
  background-size: 200% 100%;
  transition: background-position;
  transition-delay: 0.5s;
  transition-timing-function: cubic-bezier(0.65, 1, 1, 1);
}

.filled {
  background-position: -100% 0;
}
```

We want the highlight to appear in viewport so use an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to apply the class when it appears in the viewport.
I configured it with this callback and these options:

```typescript jsx
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('filled')
    }
  })
}, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
})
```

If the root node in the options is `null` it uses the viewport.
Threshold of 1 means it triggers when the entire element is in the viewport. 
The `transition-delay` on the highlight delays it slightly after it becomes visible.

I implemented it as a React component so I added a ref to the node and handle the observer inside the `useEffect` hook.

During testing, I noticed that with longer text a fixed duration means it animates too fast. 
So, I scale the animation duration with the number of characters.
It's currently a linear function, but I think it goes too slow with long texts and a logarithmic function would be better.
It's good enough for now given you probably don't want to highlight big matches of text, just key points.

