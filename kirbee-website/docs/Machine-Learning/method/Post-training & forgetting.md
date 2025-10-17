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

## Solutions of Catastrophic Forgetting
1. Experience Replay
   - Example:
     - GPT-2 --(task 1 training Data ) ----> GPT-2 ----(task 2 training Data + **a little bit task 1 training Data** )----> GPT-2  
     - Paper: [Safety-Tuned LLaMAs: Lessons From Improving the Safety of Large Language Models that Follow Instructions](https://arxiv.org/abs/2309.07875)
2. Pseudo Experience Replay
   - if 找不到訓練資料 -> 讓 GPT-2 自己產生資料
   - 讓 LLaMa 自問自答 [MMJ-Bench : A Comprehensive Study on Jailbreak Attacks and Defenses for Multimodal Large Language Models](https://arxiv.org/pdf/2408.08464)
3. Paraphrase
   - 用自己的話換句話說
   - Input: new
   - Output: new --> Foundation Model (換句話說) --> Old
4. Self-output
   - Input: new -> foundation Model -> output: old
   - Output: new
   - Paper: [Selective Self-Rehearsal: A Fine-Tuning Approach to Improve Generalization in Large Language Models](https://arxiv.org/abs/2409.04787)

:::info
可能RL-based post training ( less forgetting? )
:::

- Note: 也可以用別的model 去post training 不一定要foundation model 
- Paper: [I Learn Better If You Speak My Language](https://arxiv.org/abs/2402.11192)