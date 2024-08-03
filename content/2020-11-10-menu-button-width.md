---
title: 'Controlling the width of an open menu button dropdown'
description: 'Like every person, I want my menu button dropdowns to grow with their content, reach a maximum width, and then simply wrap. This should trivial. Alas, it is not trivial.'
date: 2020-11-11
category: Engineering, CSS, HTML, Web Development
---
<article class="overflow-x-visible">
<header>
  <time datetime="2020-11-11" class="text-tertiary text-sm">November 11th, 2020</time>
  <h2 class="text-2xl mb-1">Controlling the width of an open menu button dropdown</h2>
</header>
<p class="my-2">
  Like every person, I want my menu button dropdowns to grow with their content, reach a maximum width, and then
  simply wrap. This should trivial. Alas, it is not trivial.
</p>
<h3 class="text-lg mt-4 font-semibold">Problem</h3>
<p class="my-2 font-italic">
  Absolutely positioned items expand to the width of their position parent and then wrap.
</p>
<p class="my-2">
  Give your button wrapper a relative positive, and your dropdown an absolute, and you quickly notice the problem.
</p>
<div class="p-1 flex space-x-2 mb-32">
  <div class="relative bg-blue rounded px-2 py-1 text-white shadow-sm">
    <span class="py-1">Button</span>
    <ul class="left-0 absolute mt-1 bg-white text-dark shadow rounded text-left">
      <li class="p-1">First option</li>
      <li class="p-1">Second option</li>
    </ul>
  </div>
  <div class="relative bg-blue rounded px-2 py-1 text-white shadow-sm">
    <span class="py-1">Button with longer name</span>
    <ul class="left-0 absolute mt-1 bg-white text-dark shadow rounded text-left">
      <li class="p-1">First option</li>
      <li class="p-1">Second option</li>
    </ul>
  </div>
</div>
<p class="my-2">
  Observe how the dropdown wraps with the width of the button, yet the second is only as wide as its content
  (because it is less wide that the button).
</p>
<p class="my-2">
  It's not awful, but it's not great. Try simplifying your button to just an icon and you wind up with a
  <em>very</em>
  narrow dropdown. Let's try it.
</p>
<div class="inline-block relative bg-blue rounded px-2 py-1 text-white shadow-sm mb-32">
  <span class="py-1">
    <svg
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="text-primary inline-block stroke fill-current"
      fill="none">
      <g fill-rule="nonzero">
        <path
          d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM19 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </g>
    </svg>
  </span>
  <ul class="left-0 absolute mt-1 bg-white text-dark shadow rounded text-left">
    <li class="p-1">First option</li>
    <li class="p-1">Second option</li>
  </ul>
</div>
<p class="my-2">Gross, it wraps. Let's try to fix it with a min-width.</p>
<div class="inline-block relative bg-blue rounded px-2 py-1 text-white shadow-sm mb-20">
  <span class="py-1">
    <svg
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="text-primary inline-block stroke fill-current"
      fill="none">
      <g fill-rule="nonzero">
        <path
          d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM19 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </g>
    </svg>
  </span>
  <ul class="left-0 absolute mt-1 bg-white text-dark shadow rounded text-left min-w-40">
    <li class="p-1">First option</li>
    <li class="p-1">Second option</li>
  </ul>
</div>
<p class="my-2">Awful, there's dead space to the right of my text when it isn't wider that the min-width.</p>
<h3 class="text-xl mt-8 font-semibold">
  <span class="line-through">Stupid Workaround</span>
  Elegant Solution
</h3>
<p class="my-2">
  Give the dropdown an absolutely positioned parent with a ridiculous large width (I've used 10000px here) and your
  dropdown will grow to the width of its content, regardless of the width of the position parent (up to 10000px).
</p>
<div class="inline-block relative bg-blue rounded px-2 py-1 text-white shadow-sm mb-20">
  <span class="py-1">Button</span>
  <div class="left-0 absolute" style="width: 10000px">
    <ul class="absolute mt-1 bg-white text-dark shadow rounded text-left">
      <li class="p-1">First option</li>
      <li class="p-1">Second option</li>
    </ul>
  </div>
</div>
<h3 class="text-xl mt-8 font-semibold">Gotchas</h3>
<p class="my-2">You don't need to worry about the position parent getting in the way since it is 0px tall.</p>
<p class="my-2">But because it is very wide, you do need to worry about horizontal overflow.</p>
<p class="my-2">
  The
  <code class="text-sm font-mono text-n5">overflow-x: hidden</code>
  I've added to this article is all that is preventing our ridiculously wide position parent from gifting us a
  ridiculously wide horizontal scrollbar.
</p>
<p class="my-2">Also, be sure to add a max-width your dropdown so that it wraps at a point.</p>
<div class="flex flex-col sm:flex-row">
  <div>
    <div class="inline-block relative bg-blue rounded px-2 py-1 text-white shadow-sm mb-16">
      <span class="py-1">Button</span>
      <div class="left-0 absolute" style="width: 10000px">
        <div class="p-1 absolute mt-1 bg-white text-dark shadow rounded text-left" style="max-width: 200px">
          I wrap at a 200px max-width.
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="inline-block relative bg-blue rounded px-2 py-1 text-white shadow-sm mb-32 sm:ml-40">
      <span class="py-1">Button</span>
      <div class="left-0 absolute" style="width: 10000px">
        <div class="p-1 absolute mt-1 bg-white text-dark shadow rounded text-left">
          Without a max-width, I do not wrap (until 10000px) and may overflow my boundaries.
        </div>
      </div>
    </div>
  </div>
</div>
<p class="my-2">
  Oscar Wilde claimed that all art is useless and so all that is useful cannot be art, but I think this
  <span class="line-through">stupid workaround</span>
  elegant solution proves otherwise.
</p>
<p class="my-2">
  <a href="//codepen.io/jdbd/pen/PozXYWB" class="underline text-red">Here is a Code Pen</a>
  which demonstrates the problem and solution.
</p>
</article>
