---
title: Schematic
subtitle: Learn how to build a basic FM reciver 
order: 2
---


### Schematic

Let's get started with our schematics. To open the schematic editor, double click on the `projectname.kicad_sch` file in KiCAD.

![Double-clicking the .kicad_sch file to open the schematic editor in KiCad's project view](/guides/media/kicad_QHUDeecq73.png)

That opens up the schematic editor, which looks something like this:

![The KiCad schematic editor open with a blank canvas](/guides/media/kicad_63kee1CoWh.png)

This is where we'll place all of our components and wire them together to define how our circuit works electrically, before we ever touch the physical layout of the PCB. Think of it as the "wiring diagram" for the whole project: every part we add here, and every connection we draw, is what eventually turns into copper traces on the board. We'll place our components, connect their pins with wires or labels, and once everything's hooked up correctly we'll move on to laying it out on the actual PCB.

Let's get started by placing symbols for our main ICs first. Press `A` and click anywhere on the canvas to open the symbol picker, then search "static" and you'll see the static library. It may not always be the top result, so you might have to close a few dropdowns to find it.

![Opening the symbol picker and searching the static library for a component](/guides/media/kicad_wTIJWIFj7d.gif)

I'll start by placing the main symbols, which are our MCU and the RDA5807, our FM receiver.

![The Xiao RP2040 MCU and RDA5807 symbols placed on the schematic canvas](/guides/media/kicad_fzl5bzA8Mi.png)

The first thing I'll do is connect power to our MCU and IC. You can do this by opening the symbol picker and searching for "gnd" and "3v3" (or "3.3v"), then connecting them to the appropriate pins. Make sure everything is cleanly connected, and that ground symbols point down while power symbols point up.

![GND and 3V3 power symbols wired to the MCU and RDA5807](/guides/media/kicad_z2hv3zt3dc.png)

Next, I'll connect the MCU to the FM receiver. These two chips communicate using a protocol called I2C (LINK TO WIKI), a 2-wire protocol that uses a DATA line and a CLOCK line. SDA means data and SCL means clock, so we'll connect those two together, but instead of using a wire we'll use net labels. You can create new labels by pressing `L`.

While we're here, I'll also add net labels for the left and right outputs of our FM receiver IC.

![SDA/SCL net labels connecting the MCU and RDA5807, with left/right audio output labels](/guides/media/kicad_uUYexFo2Z6-1.png)

Lastly, to finish the circuitry for the RDA5807, we'll connect something to its antenna pin. For that, we're going to use a 3.5mm headphone jack, which will have a 3.5mm antenna plugged into it. The tip of the jack connects to the antenna and the sleeve connects to ground. The ring doesn't connect to anything.

![A 3.5mm jack symbol wired to the RDA5807's antenna pin](/guides/media/kicad_zi7OFzvL5N.png)

At this point, you could also just connect your right and left inputs to a 3.5mm jack, since the RDA5807 is capable of driving 32-ohm headphones directly without any extra circuitry (though you would still need DC-blocking capacitors). If you want to get really fancy, you can even double up your left and right output jack as your antenna jack, and let your headphone wire itself act as the antenna. That does require some additional circuitry to decouple the RF signal from the audio signal, though!

For my project, I want to drive small external 1W speakers, so I'll add the TDA2822 audio amplifier to my schematic and connect it to power first. I'll also add a 100uF polarized capacitor (you can find this by searching "C_Polarized" and then editing its value by selecting it and pressing `E`), with the positive leg connected to 3V3 and the negative leg connected to ground, for the TDA2822's power rail.

![The TDA2822 amplifier symbol wired to its power rail with a polarized capacitor](/guides/media/kicad_9DLDV3SuVr.png)

Next, I'll add the signal input circuitry. Here, we basically need to feed the right and left outputs of the RDA5807 into the IC, but we also need to add pull-down resistors (10k resistors in parallel going to ground; you can find resistors by opening the symbol picker and searching "R"), and for the negative input legs, connect them to ground through a 100uF capacitor.

If you want volume control, you can add 10K potentiometers on the input, with one leg connecting to the left/right input and the other end to ground, with the wiper going to the input pin of the IC. Since I plan for my potentiometers to sit off the board and connect via wires, I'll assign them a pin header footprint later on.

![Input signal circuitry for the TDA2822 with pull-down resistors and volume potentiometers](/guides/media/kicad_fnfOoP6bsj.png)

Since the speakers for this project will also be off the board, I'll add pin headers, which you can find by searching `Conn_01x02` in the symbol picker, and connect them to the output.

![Pin header symbols connected to the TDA2822's speaker outputs](/guides/media/kicad_zJb12oiNX3.png)

To wrap things up, I'll add 4 mounting holes to the schematic, since I plan on adding them to the PCB as well, and I'll add a switch to the Xiao. Since I also plan for the switch to sit off the board and connect to the PCB using wires, I'll assign it a pin header footprint later on too.

![Mounting hole symbols and a switch connected to the Xiao RP2040](/guides/media/kicad_t9FrKiCZIZ.png)

### Assigning Footprints

Once we're done with our schematic, before moving on to the PCB editor, we need to assign footprints. To do so, click the "Assign Footprints" button in the top bar.

![The Assign Footprints button in the KiCad schematic editor toolbar](/guides/media/kicad_IlsGtuBS1k.png)

This will open a dialog where you can select each symbol and assign it a footprint by searching for it and selecting it. Here are the footprints I'd suggest using:

|Symbol|Footprint Name|
|---|---|
|Polarized Capacitors|CP_Radial_D6.3mm_P2.50mm|
|Resistors|R_Axial_DIN207_L6.3mm_D2.5mm_P7.62mm_Horizontal|
|Connectors/Antenna/TRS Jack|AUDIO-TH_PJ-3200|
|Mounting Hole|MountingHole_2.7mm_M2.5|
|Pin Headers/Connectors|PinHeader_1x02_P2.54mm_Vertical|
|Potentiometer|PinHeader_1x03_P2.54mm_Vertical|
|Switch|PinHeader_1x02_P2.54mm_Vertical|
|Xiao RP2040|XIAO-RP2040-DIP|
|RDA5807|RDA5807|
|TDA2822|DIP-8_W7.62mm|

Once that's done, just save it, and you're finished with your schematic!