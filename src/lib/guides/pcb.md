---
title: PCB
subtitle: Lay out the board and route it
order: 3
---

### PCB

Let's get started with our PCB. To start, click on the "switch to PCB board editor" icon on the top bar.

![The 'switch to PCB board editor' icon on the KiCad top bar](/guides/media/kicad_z14ftJFdLG.png)

That opens up the PCB editor, and this is where you'll take all the components from your schematic and actually lay them out in physical space, arranging them and drawing the copper traces that connect them, before eventually sending the design off to be manufactured. Click the "Update PCB from Schematic" button on the top bar to bring in the footprints for all your parts.

![Clicking 'Update PCB from Schematic' to bring the footprints into the PCB editor](/guides/media/7YsEUw4mAL.gif)

The next step is to create a board outline. You can do this by selecting the Edge.Cuts layer and using the rectangle tool to draw the outline of your board.

![Drawing the board outline on the Edge.Cuts layer with the rectangle tool](/guides/media/kicad_sHNQ2eJp85.gif)

Then, move and place all your components inside it. Try to keep the blue ratsnest lines as short as possible and avoid crossing them where you can, this makes routing much easier later on.

![Components placed inside the board outline with ratsnest lines kept short](/guides/media/kicad_KUQg8mU4cN.png)

Once you're happy with placement, connect your components by pressing `X` on one pad and dragging to the other pad to route a trace. Try to leave ground unrouted for now, since we'll handle that later with a ground pour.

![Routing a trace between two pads, leaving ground unrouted for now](/guides/media/kicad_2eSVk5rYkg.png)

For wires that can't be routed cleanly on one layer, you can switch to the B.Cu layer, or use a via to hop between layers. You can place a via by pressing `V` while routing.

![Placing a via to hop a trace between the front and back copper layers](/guides/media/kicad_DDoc6GzlcB.gif)

Now let's add a ground pour. Select the back copper layer, then the "Draw Filled Zone" tool, choose "GND" as the net, and draw a rectangle around the whole board. Once you close the shape, press `B` to fill the zone.

![Drawing a filled GND zone on the back copper layer as a ground pour](/guides/media/kicad_TWfehxSLzq.gif)

As a final polishing touch, fillet your PCB edges so they aren't super sharp. You can do this by selecting the Edge.Cuts layer on the canvas, right-clicking, going to Shape Modification, then Fillet Lines, setting your radius to whatever you like, and pressing `B` again after changing the outline to refill the zone.

![The board outline with filleted edges instead of sharp corners](/guides/media/kicad_bjVh8uF1f8.png)

And that's it, you're done with your PCB!