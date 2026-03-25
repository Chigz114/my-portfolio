---
title: "Tic-Tac-Toe Human-Machine Game Robot"
date: "2025-06"
description: "Integrated a vision-guided 3-axis robotic game system with alpha-beta decision making, stepper control, and robust interaction modes."
tags: ["System Integration", "Embedded", "Motion Control", "Machine Vision"]
order: 3
imageSrc: "https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/fc01f77892fe7d48299d97249231ebdc.png"
---

## Overview

This project delivers a full tic-tac-toe human-machine game system for the EDC internal selection. The challenge is reliable interaction across perception, planning, actuation, and fault-handling in a real tabletop setup.

## System Architecture

- Vision: K230 board for board-state and piece detection.
- Decision: alpha-beta pruning strategy engine for move generation.
- Motion: 3-axis stepper slide + electromagnet for pick-and-place.
- Control: STM32 for stepper drive, mode management, and peripheral coordination.

![image-20260325125436906](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/045365fffd2d2c556dd810f490bdd539.png)

### Power Supply

![image-20260325125530651](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/f1a9507a0d027b1a92e93cb63851c32c.png)

### Vision Part

![image-20260325125607631](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/559d4ee4704d6d038a4ce5bafc138142.png)

### System Finite-State-Machine

![image-20260325125647660](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/3110d1737d612bad3d3cb585be29144f.png)



### System I/O

![image-20260325125725315](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/272a701f0f888626dfbcecb48958c099.png)



## My Role

- Implemented all core subsystems except 3D-printed structure and the K230 vision module.
- Completed XYZ motion control, actuation logic, control-board power distribution, and HMI flow.
- Integrated mode switching, cheat-detection recovery, and automatic piece reset.

## Key Technical Highlights

1. Real-time decision-execution pipeline with deterministic axis movement control.
2. Stable pick-place operation with board-cell-level placement constraints.
3. Robust mode and error handling for practical repeated use.

## Results and Metrics

- Won 1st place in the 2025 EDC internal selection (Problem E).
- Maintained stable piece placement within board cells during repeated runs.
- Supported human-first / machine-first and recovery from cheating events.

## Demo

- Demo video/GIF: _To be added_
- System photo: _To be added_

![d199a2eac21b870c7aecbdfc11ec2351 (2)](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/b907fc9782c9d2d77d7553a542c91c42.gif)
