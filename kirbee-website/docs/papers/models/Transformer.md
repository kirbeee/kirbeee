---
id: Transformer
title: Transformer
last_update:
   date: 2025-07-18
   author: Kirbee
---
## Reference
- [Transformer Paper - Attention is all you need](https://arxiv.org/abs/1706.03762)

## Self Attention
讓整個Input Sequence中的每個元素都能夠關注到其他元素，這樣可以捕捉到序列中元素之間的長距離依賴關係。
### Input and Output
- Input: Sequence of vectors (e.g., word embeddings, one-hot encoding)
- Output:
1. N -> model -> N  (e.g. POS tagging)
2. N -> model -> 1  (e.g. classification)
3. N -> model -> N' (e.g. translation) = Sequence to Sequence(Seq2Seq)

:::info 說明
以下的資訊都是針對N -> model -> N' (Seq2Seq)的情況
:::
### Relevant 
1. Dot-Product

2. Additive
### Self-Attention Mechanism
