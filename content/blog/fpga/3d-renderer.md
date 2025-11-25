---
title: "Big Picture of 3D renderer"
date: "2025-11-24"
description: "The first blog of my FPGA based 3D renderer, introducing the big picture of my design."
tags: ["FPGA", "3D Renderer", "Vivado"]

---

## What TinyGPU Is Built On, What It Aims to Achieve

TinyGPU is a small graphics accelerator built on a highly resource-constrained FPGA platform -- the Xilinx Spartan-7 XC7S50-CSGA324.

Compared with modern GPUs containing billions of transistors, the Spartan-7 offers only 2.7 Mb of BRAM, a modest number of DSP slices, and no dedicated graphics hardware. You must build everything from scratch -- from vertex processing all the way to rasterization, Z-buffering, and texture sampling.

The entire system runs on a scanline-based architecture. Instead of buffering the full screen inside the FPGA -- which would exceed BRAM capacity -- TinyGPU uses a one-line-at-a-time Z-buffered renderer, streaming results directly into DDR3 through AXI VDMA.

In terms of expected capabilities, the project aims to achieve:

- Full 3D triangle rendering;

- Z-buffer depth testing;

- Affine texture mapping;

- Stable 640×480@60Hz output;

- All implemented with a single-pixel-per-cycle pipeline.



## What Could be the Technical Challenges

#### 1. The Pipeline of Video Stream

This is the most basic but most time consuming part of my design =). You need to figure out:

- What the whole block design should contain to cope with the data stream.
- How to connect pins between IP cores.
- What's the meaning of the parameters in each IP core and what's the best settings for my design.
- How to initialize and communicate between cores if necessary.



#### 2. The Frame Buffer and Z-Buffer

Due to the limited BRAM (2.7Mb) and the latency of DDR3, it is impossible to store a full-frame Z-buffer (640×480×16bit ≈ 5Mb) on-chip, nor can you read depth data back from DDR3 fast enough for per-pixel comparisons.

This rules out the traditional full-frame Z-buffer approach. But if you want to handle overlapping triangles correctly, you need depth testing. The solution? A scanline-based architecture -- only buffer one line of color and depth at a time, process all triangles against that line, then stream it out and move on.



#### 3. Managing Pipeline Latency with BRAM

BRAM has a read latency of 2 cycles. When you're doing per-pixel Z-buffer comparisons, this latency can stall your entire pipeline if not handled properly.


The trick is to design a proper pipeline: T0 (Address Calculation) → T1 (BRAM Read) → T2 (Compare & Write). You need to carefully manage data hazards when consecutive pixels hit the same memory location.

#### 4. Timing Closure on a Fully Custom Pipeline

When your design grows complex -- interpolators, edge functions, texture samplers all running in parallel -- meeting timing becomes a real challenge. Long combinational paths can easily blow past your clock period.

You'll need to insert pipeline registers strategically, balance logic depth across stages, and sometimes restructure your arithmetic to help the synthesizer.



#### 5. Debugging Without a GPU Debugger

Unlike software, you can't just print values or set breakpoints. When your triangle renders incorrectly -- wrong color, wrong position, or just a black screen -- you're on your own.

ILA is a powerful but slow tool. Every time you want to plug in a new signal, you need to re-synthesize and implement, it would be time consuming. Moreover, the limited time depth is also annoying. Sometimes the fastest debug method is to output intermediate values directly to the screen as colored pixels. Sometimes you may find the console of Vitis even more useful.



## System Architecture Overview

The whole system is a classic embedded SoC design. Data flow can be clearly divided into **control flow** and **data flow**.

#### Control Core:

- MicroBlaze soft processor running C code, acting as both "CPU" and "Vertex Shader".
- AXI Interconnect as the system bus, connecting CPU, DDR3 controller, and custom rendering IP.

#### Display Pipeline:

- DDR3 (128MB) as the framebuffer, storing the complete rendered image.
- MIG (Memory Interface Generator) as the DDR3 controller.
- AXI VDMA as the bidirectional DMA engine:
  - S2MM (Write): receives rendered pixel stream from custom IP, writes to DDR3.
  - MM2S (Read): reads pixel stream from DDR3, sends to display interface.
- Video Out & VTC: generates VGA timing signals (640×480 @ 60Hz).

#### Custom Rendering Core:

- Role: acts as "Rasterizer" and "Pixel Shader".
- AXI-Lite Slave: receives triangle vertex data, colors, and texture coordinates from MicroBlaze.
- AXI-Stream Master: streams rendered pixel lines to VDMA.

<img src="/images/blog/fpga/renderer.svg" alt="renderer" style="zoom:150%;" />



## Summary

What I have now is a fully functional, scanline-based, affine-textured single-core software GPU.

The architecture is quite retro -- paying homage to early 90s graphics card designs -- but the implementation is thoroughly modern (AXI buses, DDR3, soft processors). The foundation is solid, ready for the push toward multi-core parallelism.
