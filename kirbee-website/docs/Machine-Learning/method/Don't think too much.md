---
id: Don't think too much
title: Don't Think Too Much
last_update:
   date: 2025-07-30
   author: Kirbee
---

## Reasoning length and answer accuracy
- Paper: [Revisiting the Test-Time Scaling of o1-like Models](https://arxiv.org/abs/2502.12215)
- reasoning length ⬆️, answer accuracy ⬇️ => Question difficulty ⬆️ , reasoning length ⬆️, answer accuracy ⬇️ ????

:::info
The four methods are compared with [Deep Thinking](./Deep-Thinking.md)
:::

## Avoid reasoning length too long
### 1-[1] Chain of Draft
- paper: [Chain of Draft: Thinking Faster by Writing Less](https://arxiv.org/abs/2502.18600)
### 2
並沒有多講什麼，就自行降低Bean Search 的數目.....
### 3-[1]
- paper: [
  Towards Thinking-Optimal Scaling of Test-Time Compute for LLM Reasoning](https://arxiv.org/abs/2502.18080)
- 選擇最短的 Reasoning Processing 作為Training Data
### 3-[2] From Explicit CoT to Implicit CoT
- paper: [From Explicit CoT to Implicit CoT:](https://arxiv.org/abs/2405.14838)
### 4-[1] 
- 即使answer 是對的 Reasoning process length 還要低於平均才會給出正面的評價
- paper: [O1-Pruner](https://arxiv.org/abs/2501.12570)
- paper: [Kimi k1.5](https://arxiv.org/abs/2501.12599)
- paper: [Training Language Models to Reason Efficiently](https://arxiv.org/abs/2502.04463)

### 4-[2]
- paper: [L1: Controlling How Long A Reasoning Model Thinks With Reinforcement Learning
  ](https://arxiv.org/abs/2503.04697)
