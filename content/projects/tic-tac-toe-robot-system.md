---
title: "Tic-Tac-Toe Human-Machine Game Robot"
date: "2025-06"
description: "Integrated a vision-guided 3-axis robotic game system with alpha-beta decision making, stepper control, and robust interaction modes."
tags: ["System Integration", "Embedded", "Motion Control", "Machine Vision"]
order: 3
imageSrc: "/images/projects/tictactoe-system.svg"
---

## Overview

This project delivers a full tic-tac-toe human-machine game system for the EDC internal selection. The challenge is reliable interaction across perception, planning, actuation, and fault-handling in a real tabletop setup.

## System Architecture

- Vision: K230 board for board-state and piece detection.
- Decision: alpha-beta pruning strategy engine for move generation.
- Motion: 3-axis stepper slide + electromagnet for pick-and-place.
- Control: STM32 for stepper drive, mode management, and peripheral coordination.

> Architecture figure: _To be added_

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
