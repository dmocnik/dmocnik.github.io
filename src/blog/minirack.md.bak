---
icon: 🖥
title: Mini Rack Build Log
date: May 27, 2025
---

# {{ $frontmatter.title }}

{{ $frontmatter.date }}

## Introduction

One day, while I was browsing YouTube, I came across [Jeff Geerling's](https://www.youtube.com/@JeffGeerling) video about 10-inch mini server racks, called "Project MINI RACK - a Homelab Revolution!"

<YouTubeVideo videoId="y1GCIwLm3is" />

Homelabbing is something I have been dabbling with lately, and I've been having quite a fun time!
The equipment I'm using as of right now is quite small, so this seemed like an excellent solution for my current setup.
The easier organization, expansion (which I'd like to do in the future), and space-saving were all things that caught my eye, as well as all the other benefits that come with this.  ~~(And, of course, I can cosplay as a sysadmin.)~~

<Image src="/blog/minirack_0.jpg" caption='The current homelab "setup"' />

## Design

To start, there are 3 main things I want to store in my mini rack: my TP-Link TL-SG108, my Dell OptiPlex 5060 Micro PC, and my Dell Wyse Zx0 Thin Client (more on that later).
The OptiPlex is currently running Proxmox, which hosts my NAS as well as a few other Docker images.
The Wyse currently has OPNsense installed on it, however, I may switch it to a lighter OS since the router functionality will not be needed after this project.
Finally, the TP-Link switch (which is unmanaged) connects these devices to my LAN, as well as the computer at my desk, and my OctoPrint setup. 

I also had a few design requirements I wanted to address:
- It should have one power cable to power all the devices (to reduce the rat's nest of cables next to my desk).
- All the power bricks should be contained within the rack.
- The rack should be modular so that I can change its height if I want to add or remove things later.
- No unpopulated units!

Then came the time to decide the size of the rack.
The easy devices were the TP-Link and the OptiPlex, which would both occupy a single unit with 10-inch rack mount STLs that are easily found online.
The not-so-easy device, however, was the Wyse, which is *bigger* than my OptiPlex, and (because of course it is) its height is *just* over a single unit (about 1⅓U), meaning it will take up two units.
Finally, the power bricks for the OptiPlex and the Wyse would also occupy a single unit.
This meant my rack would be a height of 5U, which isn't exactly the most standard of rack heights, but that's okay!
Modular, right?

<Image src="/blog/minirack_1.jpg" caption='Chunky!' />

I also plan to try and CAD up my own mount (or find some other solution) that will include something to use the free space above the Wyse, like a patch panel, since I'd eventually like to add more things like some RPi's or more computers!

## Build & Assembly

After taking a look at the [mini-rack repo](https://github.com/geerlingguy/mini-rack), and seeing that there were (unsurprisingly) no 5U racks available to readily buy, I settled on 3D-printing my rack.
I went with [bwees' design](https://www.printables.com/model/1170708-modular-1010-inch-rack) since it allowed for the rack to essentially be any height, due to its modularity.
I also found that printing my rack would be cheaper than just about all of the pre-made racks.
I got to work printing all of the parts on my trusty Ender 3 S1 and ordered some M6 bolts and the corresponding square nuts on Amazon.
My printer is by no means X1-Carbon levels of fast, so printing all of the pieces shown below took about 40 hours to print over the past 2 - 3 weeks.
(It also helps to make sure you have enough filament before you print the handles. >:()
Since I wanted to be sure I was satisfied with the design and the size, I only printed the frame and a couple modules to hold it all together, just to get started.

Here is the list of everything I printed (and bought):

::: details Part List

| Part | Quantity | Time to print each (hrs) | Total time (hrs) |
|------|:--------:|:------------------------:|:----------------:|
Side Support | 2 | 2 | 4
Handle       | 2 | 4.5 | 9
Feet         | 2 | 3 | 6
3U Upright   | 8 | 1.25 | 10
Switch Mount | 1 | 4 | 4
Blank Panel  | 1 | 2 | 2
Gusset (1x3) | 8 | 0.25 | 2
Gusset (2x3) | 4 | 0.5 | 2
**Total**    | **28** | - | **39**
:::

::: details BOM

| Item | Unit Cost | Quantity | Total Cost | Link |
|:----:|:---------:|:--------:|:----------:|:----:|
PLA+ Filament (1kg) | $23.99 | 1 | $23.99 | [Amazon](https://www.amazon.com/dp/B081S5Z3RY)
M6x12 Hex Bolts (50ct) | $9.05 | 1 | $9.05 | [Amazon](https://www.amazon.com/dp/B0C9LPFKPK)
M6 Square Nuts (100ct) | $9.99 | 1 | $9.99 | [Amazon](https://www.amazon.com/dp/B09WSJ6PDX)
 &nbsp; | &nbsp; | **Grand Total** | $43.03 |  | 
:::

<Image src="/blog/minirack_2.jpg" caption='The haul (so far)' />

With everything printed, it was time to assemble the rack!
Everything went together fairly easily.
I ended up deciding not to use the side supports for the frames, since they were already very rigid and sturdy with just the gussets holding the handles, feet, and uprights together.
After screwing everything together ~~(and dropping a lot of nuts)~~, here is how the rack looks now!

<Image src="/blog/minirack_3.jpg" />

Stay tuned as I work on getting the rest of the rack printed, assembled, and populated with the devices!
I'll be updating this page as I change more things!