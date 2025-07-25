---
id: Pretrain-Alignment
title: Pretrain Alignment
last_update:
   date: 2025-07-24
   author: Kirbee
---

## Train LLM three steps
Pre-train -> Supervised Fine-tuning -> RLHF
- Alignment = Supervised Fine-tuning + RLHF = Fine-tuning

## Alignment
### Models Naming Tips
- Models with **base** mean only pre-train e.g. Llama-2-7b-base
- Models with **chat** , **instruct** mean with alignment e.g. Llama-2-7b-chat

### Alignment using Datasets
- Paper: 
  1. [LIMA: Less Is More for Alignment](https://arxiv.org/abs/2305.11206)
- Don't need to be large, but need to be high quality 

### Knowledge Distillation
- Paper (Choose answer from teacher model method)
  1. [AlpaGasus: Training A Better Alpaca with Fewer Data](https://arxiv.org/abs/2307.08701)
  2. [Long Is More for Alignment](https://arxiv.org/abs/2402.04833)

### Alignment before and after
- Paper:
1. [The Unlocking Spell on Base LLMs](https://arxiv.org/abs/2312.01552)

### Alignment different methods
1. Response Tuning
   - Paper: [Revealing the Inherent Instructability of Pre-Trained Language Models](https://arxiv.org/abs/2410.02465)
2. Rule-base adapter
   - Paper: [Instruction Following without Instruction Tuning](https://arxiv.org/abs/2409.14254)

### Self-Alignment
- Paper: [Self-Rewarding Language Models](https://arxiv.org/abs/2401.10020)

## Pretrain
### Efficient Pretrain
- [Physics of Language Models: Part 3.1](https://arxiv.org/abs/2309.14316)

### DataSet
- [The FineWeb Datasets](https://arxiv.org/abs/2406.17557)

#### DataSet Quality 重要性
:::info 說明
chatGPT may be effected the result 
:::
- [Textbooks Are All You Need](https://arxiv.org/pdf/2306.11644)

