---
title: "STM32 Self-Balancing Robot"
date: "2024-08"
description: "Built a two-wheeled balancing robot using STM32F103 with IMU fusion, Kalman filtering, and PID closed-loop control."
tags: ["STM32", "Control", "Kalman Filter", "PID", "Embedded"]
order: 6
---

## Overview

This project implements a real-time balancing robot on STM32F103C8T6. The main challenge is maintaining stable upright motion under sensor noise and actuator non-ideal behavior through reliable estimation and closed-loop control.

## System Architecture

- Sensing: MPU6050 IMU + motor encoders.
- Estimation: Kalman filter for attitude stabilization.
- Control: PWM motor drive and PID loops for balance and velocity.
- Platform: TB6612FNG-based dual-motor drive chain.

> Architecture figure: _To be added_

## My Role

- Independently completed firmware architecture from sensor drivers to control loops.
- Integrated signal acquisition, estimation, actuation, and timing modules.
- Performed iterative tuning and validation for stable continuous balancing.

## Key Technical Highlights

1. End-to-end embedded control stack built on STM32.
2. Practical Kalman + PID integration with real sensor/motor constraints.
3. Modular decomposition that supported progressive subsystem verification.

## Results and Metrics

- Achieved stable continuous self-balancing behavior.
- Established reusable tutorial-style modules for club-level teaching.
- Built core experience in closed-loop robotics implementation.

## Demo

- Demo video/GIF: _To be added_
- Robot photo: _To be added_

## Related Technical Blog

A full tutorial series is available in the `STM32` blog category.
