---
title: "ESP32 BLE-MQTT Gateway"
date: "2025-12"
description: "Low-power BLE relay system with custom PCB power architecture and MQTT-based long-range signal forwarding."
tags: ["ESP32", "PCB", "Low Power", "BLE", "MQTT"]
order: 4
imageSrc: "https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/f5dd3ea3887e412a82e0ddd64612f594.png"
---

## Overview

This project bridges short-range BLE broadcast signals to cloud-connected MQTT transport for long-distance relay. The core challenge is preserving low-latency behavior while achieving ultra-low-power standby for long-term deployment.

## System Architecture

- Edge scanner node: ESP32-S3 captures raw BLE packets and publishes to MQTT.
- Relay node: ESP32 subscriber re-broadcasts received payloads locally.
- Power chain: USB-C PD trigger + BQ25895 power-path + Li-ion backup + 3.3V buck-boost.

![image-20260325195417040](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/a241cb22e5cc2dfcb9043d23726f583e.png)

![7f09d5bbf4a9e57fff37967bb223e8e3](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/fc4b206f8b4114c3a898ffc1d9ad5bab.png)

![c553e271adf88d0a180afe69d1b2baff](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/d5b6e18270666dc3533b71a04216d774.png)

## My Role

- Led full software architecture and embedded implementation.
- Designed custom PCB and power architecture in Altium Designer.
- Completed board-level bring-up, low-power scheduling, and validation.

## Key Technical Highlights

1. Interrupt-driven BLE scanning and packet deduplication pipeline.
2. Deep-sleep scheduling for low-duty operation with fast wake-and-forward behavior.
3. End-to-end relay architecture that decouples RF range constraints from control distance.

## Results and Metrics

- Measured around 50 ms scan-to-publish latency in documentation tests.
- Reached around 10 uA deep-sleep current in documentation tests.
- Validated stable BLE data forwarding via MQTT relay workflow.

![764896133b8823c5d2323fef3787162f](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/9d5489d73cffb2fee0c8297429650e4b.jpg)

## Related Technical Blog

For full design decision details and implementation deep-dive, see the tutorial-style blog series under the `ESP32` category.
