---
title: "Building a Custom PCB for High-Speed DAQ"
date: "2024-03-15"
description: "Lessons learned from designing a 4-layer PCB with impedance control and differential pairs."
tags: ["PCB", "Altium", "Hardware"]
---

## Introduction

Designing high-speed PCBs is an art form. In this post, I'll share my experience building a data acquisition board capable of 100 Msps.

### The Challenge

Signal integrity becomes a major issue when dealing with frequencies above 50 MHz. Here are the key considerations:

1. **Impedance Matching**: Ensuring 50-ohm traces.
2. **Stackup Design**: Why I chose a 4-layer stackup (Sig-GND-PWR-Sig).
3. **Return Paths**: The importance of solid ground planes.

### Schematic Design

I used **Altium Designer** for this project. The key components include:

*   **ADC**: AD9226 (12-bit, 65 MSPS)
*   **FPGA**: Cyclone IV EP4CE6
*   **Power**: LDO regulators for clean analog power.

> "Ground is not just a connection; it's a reference."

### Layout & Routing

Differential pairs were routed with strict length matching tolerance (5 mils). I used a polygon pour for the ground plane to minimize loop inductance.

## Conclusion

The board worked on the first spin! The measured SNR was 68 dB, which is close to the theoretical limit of the ADC.
