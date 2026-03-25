---
title: "Crazyflie UAV Autonomous Gate Passing"
date: "2025-12"
description: "State-based, vision-based, and EKF-fusion control for safe autonomous gate passing in FalconGym, with state-based real-world flight demo."
tags: ["UAV", "Motion Planning", "State Estimation", "EKF", "Vision"]
order: 1
githubUrl: "https://github.com/Chigz114/ece484_final"
---

## Overview

This project targets safe autonomous gate passing for a Crazyflie UAV in uncertain environments. The core challenge is balancing control stability and perception robustness under limited onboard compute and constrained experimental conditions.

## System Architecture

- Simulation: FalconGym for trajectory planning and control validation.
- Perception: FPV camera stream with neural pose estimation.
- Estimation: EKF fusion between visual output and dynamics model.
- Control: state-based and vision-based control pipelines, with PID and MPC comparison.

> Architecture figure: _To be added_

## My Role

- Led and almost independently implemented state-control, vision-control, and EKF-estimation modules in a 4-person team.
- Designed and validated the trajectory planning + state control workflow.
- Completed the full simulation validation loop and final state-based flight demonstration.

## Key Technical Highlights

1. Implemented dual control pipelines (state-based and vision-based) and compared their behavior under realistic noise.
2. Integrated neural pose estimation with EKF to reduce visual jitter and improve control continuity.
3. Performed PID vs MPC comparative analysis in simulation to guide controller choice.

## Results and Metrics

- Completed full simulation verification for state-based, vision-based, and EKF-fusion methods.
- Delivered a state-based real-world flight demo under available space and hardware constraints.
- Confirmed that EKF fusion reduced estimate fluctuation versus raw visual output.

## Demo

- Demo video/GIF: _To be added_
- Real flight clip screenshot: _To be added_
