---
title: "Crazyflie UAV Autonomous Gate Passing"
date: "2025-12"
description: "State-based, vision-based, and EKF-fusion control for safe autonomous gate passing in FalconGym, with state-based real-world flight demo."
tags: ["UAV", "Motion Planning", "State Estimation", "EKF", "Vision"]
order: 1
githubUrl: "https://github.com/Chigz114/ece484_final"
imageSrc: "https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/56ed6fa6303098377dee8f1ca3acfae0.png"
---

## Overview

This project targets safe autonomous gate passing for a Crazyflie UAV in uncertain environments. The core challenge is balancing control stability and perception robustness under limited onboard compute and constrained experimental conditions.

## System Architecture

![image-20260325140421048](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/56ed6fa6303098377dee8f1ca3acfae0.png)

- Simulation: FalconGym for trajectory planning and control validation.

- Perception: FPV camera stream with neural pose estimation.

![image-20260325140015820](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/2c0c20bbe20189f53ea10e53db48475a.png)

- Estimation: EKF fusion between visual output and dynamics model.

![image-20260325140053235](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/e5a93b9cb210f9476fede99b33d09d70.png)

- Control: state-based and vision-based control pipelines, with PID and MPC comparison.

![image-20260325135751572](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/92e0cf4b19ff88be00a1b0162c90f471.png)

### Real Flight Demo

- Video: [YouTube demo](https://www.youtube.com/watch?app=desktop&v=8l80orgLiXs)

## My Role

- Led and almost independently implemented state-control, vision-control, and EKF-estimation modules in a 4-person team.
- Designed and validated the trajectory planning + state control workflow.
- Completed the full simulation validation loop and final state-based flight demonstration.

## Key Technical Highlights

1. Implemented dual control pipelines (state-based and vision-based) and compared their behavior under realistic noise.
2. Integrated neural pose estimation with EKF to reduce visual jitter and improve control continuity.
3. Performed PID vs MPC comparative analysis in simulation to guide controller choice.



### Discarded approach - Semantic Segmentation

![image-20260325140236784](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/c98c7c3db25b715662bc5e6befacb409.png)

![image-20260325140253782](https://pub-0ab03177c0ad483e9a1c13d6bd8704cb.r2.dev/typora/2026/03/6e041787a44d6f58b4af4e80b5df1be2.png)



## Results and Metrics

- Completed full simulation verification for state-based, vision-based, and EKF-fusion methods.
- Delivered a state-based real-world flight demo under available space and hardware constraints.
- Confirmed that EKF fusion reduced estimate fluctuation versus raw visual output.
