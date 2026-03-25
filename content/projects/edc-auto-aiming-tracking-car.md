---
title: "Electronic Design Contest: Tracking Car with Auto-Aiming Gimbal"
date: "2025-08"
description: "Led system architecture and implementation for a tracking chassis + STM32 stepper gimbal auto-aiming platform, achieving centimeter-level static accuracy."
tags: ["Robotics", "Embedded", "System Integration", "Control", "Vision"]
order: 2
imageSrc: "https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/7251bdf8ba12f944dfe4b9410454b534.png"
---

## Overview

As team leader in the 2025 National Undergraduate Electronic Design Contest, I built a complete tracking-car and auto-aiming gimbal system. The core challenge was end-to-end integration across mechanics, power, perception, control, and deployment-time robustness.

## System Architecture

- Main control: STM32-based drive and control framework.
- Vision chain: K230 + OpenMV for rectangle target detection and aiming point extraction.
- Actuation: stepper gimbal with PID closed-loop tracking.
- Fast response: 9-axis IMU initialized rapid turn-to-target, followed by visual fine-tracking.

![image-20260325132838321](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/7251bdf8ba12f944dfe4b9410454b534.png)



### Tripod Head System

![image-20260325133054396](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/b410d4281c946a5154bc806bb9bca8b5.png)



### Tracking Car System

![image-20260325133201625](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/30833c71fac0f0df4acfefa8647376c7.png)

### Tracking Demo

![91f6085d4ab49272c9129f07b7e7ba23](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/8d015ef202ee6ede7e9b2a98a907524b.gif)



## My Role

- Led full architecture design, module partitioning, and integration schedule.
- Implemented STM32 stepper control, gimbal drive/power circuit, and module-level electrical design.
- Designed visual aiming + control loop and completed system-level tuning.

## Key Technical Highlights

1. Combined coarse inertial heading initialization with fine visual closed-loop correction.
2. Built robust STM32 stepper-gimbal stack with custom power and driver design.
3. Tuned target tracking stability under both static and moving-base conditions.

## Results and Metrics

- Static base: center drift < 3 cm, jitter < 1 cm.
- Moving tracking base: center drift and jitter < 10 cm.
- Award: National Second Prize in the 2025 contest.
