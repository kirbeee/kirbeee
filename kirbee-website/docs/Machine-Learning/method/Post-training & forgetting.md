---
id: Post-Training & Forgetting
title: Post-Training & Forgetting
last_update:
   date: 2025-07-28
   author: Kirbee
---

## Terminology definition
LLM = foundation model ---(Post-Training = continual training = Alignment )----> Fine-tuned Model

- Foundation Model -> can be chat/instruct model or base/Pretrain model

## Methods
1. Pre-train style
   - Example: [Chat Vector: A Simple Approach to Equip LLMs with Instruction Following and Model Alignment in New Languages](https://arxiv.org/abs/2310.04799)
   - Example: [Examining Forgetting in Continual Pre-training of Aligned Large Language Models](https://arxiv.org/abs/2401.03129)
2. SFT Style
   - Example: [Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!](https://arxiv.org/abs/2310.03693)
   - Example: [Safeguard Fine-Tuned LLMs Through Pre- and Post-Tuning Model Merging](https://arxiv.org/abs/2412.19512)
   - Example: [Self-Distillation Bridges Distribution Gap in Language Model Fine-Tuning](https://arxiv.org/abs/2402.13669)
3. RL style

## Catastrophic Forgetting
- 這個是post training 最大的挑戰，他會忘記已有的技能．

## 推測原因

## Solutions of Catastrophic Forgetting
1. Experience Replay
2. Pseudo Experience Replay
3. Paraphrase
4. Self-output
