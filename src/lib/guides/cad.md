---
title: CAD
subtitle: Design the case around your PCB
order: 4
---

### CAD

To get started with CAD, first export your PCB as a 3D model. To do this, go to File → Export → STEP.

![The File → Export → STEP menu in KiCad's 3D viewer](/guides/media/kicad_G3zJtCZlhh.png)

For the export settings, make sure "Export Components" is selected, and set the coordinates to "Board Center Origin." Then export it.

![STEP export settings with Export Components enabled and Board Center Origin selected](/guides/media/kicad_z9Fpk4bs2o.png)

Then, in Fusion, on the home screen click the "Open" button on the left sidebar, and inside that dialog click "Open from Computer" and open the STEP file you just exported from KiCad. It will open a new document with your exported PCB, which you'll need to save.

![The exported PCB STEP file opened as a new Fusion 360 document](/guides/media/Fusion360_mv3xC3ufof.png)

Then repeat the same steps above for all the other 3D models you'll need for your design, the parts that are included in the kit.

![All the kit's 3D models imported as separate Fusion 360 documents](/guides/media/Fusion360_iuX8RcOZ40.png)

Next, create a new project and set it up as a hybrid design. Then import your 3D models and place them by opening the Data Panel, right-clicking on the models, and importing them into the project.

![Importing 3D models into a hybrid design project via the Data Panel](/guides/media/Fusion360_EltYEsA0vY.gif)

Repeat this for all the parts, and move them into place however you'd like them arranged.

![All the kit's parts imported and arranged in the hybrid design](/guides/media/Fusion360_uIxiwLjbtX.png)

Next, what I like to start with is creating a bottom part with some spacers and holes for screws.

![The case's bottom part with spacers and screw holes](/guides/media/Fusion360_X4f95svN7h.png)

Then create an outer shell, but make sure it's a different body than the bottom one.

![An outer shell body created separately from the bottom part](/guides/media/Fusion360_wjDTPHFABr.png)

Then I'll close off the upper part of the case, but leave holes where the speakers will sit.

![The case's upper part closed off with cutouts for the speakers](/guides/media/Fusion360_vdt4reTLqS.png)

After that, I'll add a cutout for the USB-C port. I do this by selecting the outside face of the body wall, hiding the body, then projecting the USB-C geometry by pressing `P` while in the sketch, and adding a 1mm offset.

![Projecting the USB-C connector geometry onto the case wall with a 1mm offset](/guides/media/Fusion360_0ptiT7hRGu.gif)

Once that's done, I'll extrude it inwards to create a hole for the USB-C port.

![Extruding the projected USB-C outline inward to cut the port opening](/guides/media/Fusion360_1rjMcPmCbZ.gif)

Then I'll do the same for the other parts, like the audio jack, potentiometer, and button.

![Cutouts added for the audio jack, potentiometer, and button](/guides/media/Fusion360_KfbbESegKO.png)

And that's it, you're done with your case!
