---
title: Procore
description: Wow, the lead up to an IPO is nuts! Was Procore a special kind of strange though?
date: 2024-08-02
category: Career
---

[www.procore.com](https://www.procore.com/)

![Procore](https://github.com/user-attachments/assets/c0d6a3c3-02c7-45e0-9fe0-924d0c8cf62e)


_Imagine you're packed in a warehouse like space, it's dark (the walls are painted black), and every morning you discover your desks multiplying and packed into ever tighter configurations. Available bathroom stalls become scarcer and scarcer as the days tick on, and the whispers of an imminent IPO become harsher and more urgent._

_But outside are the gorgeous Carpinteria cliffs, and the lunch breaks you spend staring at the gentle swell rolling into the rocky Calfifornian shoreline might just make it worthwhile._

_______

I was a senior engineer developing a new product predicting costs and profit margins to augment Procore's bread and butter, their Project Management Financials suite.

My most significant impact was in re-architecting the Budget UI to solve performance issues which frustrated their most valuable clients with the largest constructions projects and datasets. 

Picture a spreadsheet-like interface for managing a construction budget built in React, where specific cells offer various features and initiate novel workflows. Our new forecasting product required adding new cell types to this UI, and through that process I learned of the performance issues the core Budget team was experiencing where browsers would freeze for seconds at a time and dove in to help them.

I introduced a virtualization solution to unmount cells and components not visible on the page and codified composition patterns to mount shallower components which would only load further capabilities after being interacted with by users. It was a drastic performance improvement and the feedback being received from Procore's largest account changed from a tale of frustration to delight.


