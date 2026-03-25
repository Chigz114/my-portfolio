---
title: "tinyGPU: FPGA Real-Time 3D Rendering Architecture"
date: "2025-11"
description: "Built a scanline-based hardware rendering architecture on Spartan-7 with AXI VDMA and DDR3 pipeline, achieving 640x480@60Hz output."
tags: ["FPGA", "SystemVerilog", "Graphics Pipeline", "AXI", "Vivado"]
order: 5
githubUrl: "https://github.com/Chigz114/ece385-tinyGPU"
imageSrc: "/images/blog/fpga/renderer.svg"
---

## Overview

tinyGPU is a custom 3D renderer on resource-constrained FPGA hardware. The challenge is implementing usable 3D rasterization and framebuffer flow under strict BRAM, timing, and throughput limits.

## System Architecture

- Compute/control: MicroBlaze + AXI interconnect.
- Memory/display: DDR3 + MIG + AXI VDMA + VTC/video-out.
- Rendering core: custom scanline rasterizer with depth handling and texture mapping.

> Architecture figure: _To be added_

## My Role

- Implemented display pipeline bring-up and framebuffer/stream integration.
- Developed and debugged core rendering path in Vivado/SystemVerilog.
- Completed end-to-end hardware validation and course demo preparation.

## Key Technical Highlights

1. Scanline-based design to fit depth processing under constrained on-chip memory.
2. AXI-stream to VDMA integration for stable display pipeline output.
3. Timing-aware pipeline debugging and iterative closure in a custom graphics datapath.

## Results and Metrics

- Achieved real-time 640x480@60Hz rendering output.
- Won 2nd place in course showcase voting among 100+ projects.
- Delivered a complete working architecture from render core to display output.

## Demo

- Demo video/GIF: _To be added_
- Render result screenshot: _To be added_

## Related Technical Blog

For low-level implementation details, see the development log series in the `FPGA` blog category.
