---
id: Model Editing
title: Model Editing
last_update:
   date: 2025-08-04
   author: Kirbee
---

## Model Editing vs. [Post-Training](./Post-training%20%26%20forgetting.md)
- 可以視為**特別的 post-training**
- Data 往往超小 可能只有一筆之類的
- 不適合用post-training的方式來達成model editing
- 目標要更新一個知識或改變一個問題的答案

## Evaluation

### Reliability
- 你Model Editing 的目標

### Generalization
- scope 相對模糊

1. Reliability 
2. Generalization
   1. Paraphrase :換句話說
   2. reverse :Question 變成 answer, answer 變成 question
   3. portability :跟Answer 相關的問題也能對
3. Locality : 其他不相關的知識不可以動到

### Scope 
- Reliability (小) > Generalization (Paraphase)  > Generalization (Reverse, Protability ) > Locality (大)

## Methods
1. 不動 parameter [1]
2. change parameter
   1. human edit
   2. machine edit

### In-context knowledge Editing (IKE)
- Paper: [Can We Edit Factual Knowledge by In-Context Learning?](https://arxiv.org/abs/2305.12740)
- Zero shot : LLM 不太容易相信在給example 會比較好

### Rank-One Model Editing (ROME)
- Paper: [Locating and Editing Factual Associations in GPT](https://arxiv.org/abs/2202.05262)
- Step 1: 找出類神經網路中要編輯的知識
- Step 2: 修改該部分的參數

### Hypernetwork
- part of meta learning