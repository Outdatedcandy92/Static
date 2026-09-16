---
title: Submitting
subtitle: Ship your build and send it in
order: 7
---

Before submitting, make sure your GitHub repository includes the following:

- [ ] A `Journal.md` file in the root folder (if you are not using Lapse)
- [ ] A detailed `README.md`
- [ ] BOM (Bill of Materials) in CSV format, with links, and a line indicating the total cost! in the root of your repository
- [ ] The source files of your PCB, if you have one (.kicad_pro, .kicad_sch, .kicad_pcb, .epro, gerbers.zip, etc)
- [ ] If you have 3D models, .step files of your project's 3D CAD and the source design file (.f3d, .FCStd, or a link to Onshape)
- [ ] Your firmware files
- [ ] ANY other files that are part of your project (libraries, references, etc.)

Make sure your repository is well organized. Use and name folders and files clearly, something like this:

```
root/
├── production/
│   ├── gerber/
│   ├── bom/
│   ├── designator.csv
│   ├── position.csv
│   ├── netlist.ipc
│   └── case.stl
├── src/
│   ├── pcb/
│   │   └── kicad files
│   └── case.step
├── Journal.md
└── README.md
```

### What should my README include?

Your `README.md` should include the following:

- A Title
- Project Overview
- PCB Render Image
- Schematic Image
- PCB Image


---

You can submit your project at: [forms.hackclub.com/static](https://forms.hackclub.com/static)