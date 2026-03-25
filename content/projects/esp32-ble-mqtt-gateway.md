---
title: "ESP32 BLE-MQTT Gateway"
date: "2025-12"
description: "Low-power BLE relay system with custom PCB power architecture and MQTT-based long-range signal forwarding."
tags: ["ESP32", "PCB", "Low Power", "BLE", "MQTT"]
order: 4
githubUrl: "https://github.com/Chigz114"
---

## Overview

This project bridges short-range BLE broadcast signals to cloud-connected MQTT transport for long-distance relay. The core challenge is preserving low-latency behavior while achieving ultra-low-power standby for long-term deployment.

## System Architecture

- Edge scanner node: ESP32-S3 captures raw BLE packets and publishes to MQTT.
- Relay node: ESP32 subscriber re-broadcasts received payloads locally.
- Power chain: USB-C PD trigger + BQ25895 power-path + Li-ion backup + 3.3V buck-boost.

> Architecture figure: _To be added_

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

## Demo

- Demo video/GIF: _To be added_
- Hardware photo: _To be added_

## Related Technical Blog

For full design decision details and implementation deep-dive, see the tutorial-style blog series under the `ESP32` category.
