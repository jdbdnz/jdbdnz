---
title: 'Grouping with Vue.Draggable (or any sorting plugin)'
description: 'Vue.Draggable is one of many excellent tools for sorting a list of items. However, after struggling to find a pluggable solution which also provides an adequate solution for grouping items, I devised my own solution which should work just as well for most sorting plugins.'
date: 2020-11-21
---
<article>
<header>
  <time datetime="2020-11-21" class="text-tertiary text-sm">November 21st, 2020</time>
  <h2 class="text-2xl mb-1">Grouping with Vue.Draggable (or any sorting plugin)</h2>
</header>
<p class="my-2">
  Vue.Draggable is one of many excellent tools for sorting a list of items. However, after struggling to find a
  pluggable solution which also provides an adequate solution for grouping items, I devised my own solution which
  should work just as well for most sorting plugins.
</p>
<h3 class="text-lg mt-4 font-semibold">Problem</h3>
<p class="my-2">
  Already using Vue.Draggable to sort a list of items, I was presented with a new requirement to group those items.
</p>
<p class="my-2">
  I found the
  <a class="underline text-red" href="https://sortablejs.github.io/Vue.Draggable/#/nested-example">Vue.Draggable
    demo nesting solution</a>
  too difficult to operate as a user; it isn't clear to me what actions cause items to group or ungroup.
</p>
<h3 class="text-xl mt-8 font-semibold">Solution</h3>
<p class="my-2">
  This was definitely a forehead slap moment for me, realizing I could make things appear to group with CSS instead
  trying to do anything fancy like nested Vue.Draggable instances.
</p>
<p class="my-2">I add "spacer" items between every item not in a group, and omit them between grouped items.</p>
<p class="my-2">This is a static example to demonstrate how items may appear to be grouped.</p>
<div class="flex-col items-stretch">
  <div class="my-4"></div>
  <div class="px-2 py-1 bg-white mb-px">Item 1 · Ungrouped</div>
  <div class="my-4"></div>
  <div class="px-2 py-1 bg-white mb-px">Item 2 · Ungrouped</div>
  <div class="my-4"></div>
  <div class="px-2 py-1 bg-white mb-px">Item 3 · Group 1</div>
  <div class="px-2 py-1 bg-white mb-px">Item 4 · Group 1</div>
  <div class="px-2 py-1 bg-white mb-px">Item 5 · Group 1</div>
  <div class="my-4"></div>
  <div class="px-2 py-1 bg-white mb-px">Item 6 · Group 2</div>
  <div class="px-2 py-1 bg-white mb-px">Item 7 · Group 2</div>
  <div class="my-4"></div>
  <div class="px-2 py-1 bg-white mb-px">Item 8 · Ungrouped</div>
  <div class="my-4"></div>
</div>
<h4 class="text-lg mt-4 font-semibold">Rules</h4>
<ol class="list-decimal ml-4">
  <li>
    Sort and group your data list, then build a view list by flattening your data list and placing an empty index
    between each group and ungrouped item.
  </li>
  <li>Do not give your spaces drag handlers.</li>
  <li>Put a space in the first and last position, so items can be dragged to the extremes without grouping.</li>
</ol>
<p class="my-2">
  <a href="//codepen.io/jdbd/full/JjKzzbE" class="underline text-red">Here's a Code Pen</a> 
  demonstrating the solution using Vue.Draggable starring the cast of Firefly.
</p>
<h3 class="text-xl mt-8 font-semibold">This is an accessibility and usability nightmare</h3>
<p class="my-2">
  I don't find this much easier to use than the Vue.Draggable nested solution, so I absolutely would not want to
  inflict this interface on anyone without both fine motor color and a high quality device interface.
</p>
<p class="my-2">
  My final solution involved having a distinct "grouping" mode, involving checking items to be grouped, then
  clicking a "Create Group" button. It isn't clever, but it is functional and accessible by using common established
  form inputs.
</p>
<p class="my-2">
  Even dragging and dropping to sort may be convenient for some and still difficult for others, and you should
  include buttons to fall back on. At least "Move Up" and "Move Down", and also "Move to Top" and "Move to Bottom"
  for longer lists.
</p>
<p>
  Thanks for reading, sorry it didn't have a very happy ending, but hopefully your itch to group with Vue.Draggable
  - or whatever else is itchy - was scratched.
</p>
</article>
