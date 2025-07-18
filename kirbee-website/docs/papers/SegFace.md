---
id: SegFace
title: SegFace - Face Segmentation of Long-Tail Classes
last_update:
   date: 2025-07-18
   author: Kirbee
---

## Abstract
- Face Parsing -> Semantic Segmentation
- CNN-based methods => **head classes** perform well, but **long-tail classes** perform poorly
- Transformers => **long-tail classes** perform better, **F1 score** also improves and **edge device performance** is better

## Introduction
### Face Parsing Purpose
1. face swapping
2. face editing
3. face generation
4. face completion
5. facial makeup
### What is Long-Tail Classes?
In Face Long-Tail classes like accessoris: eyeglasses,earring, hats,necklaces
#### Problem of Long-Tail Classes
- lower probability of appearance in dataset
- less training data
- small item annotation, spend more time and money

### Method of model
- AGRNet
- EAGRNet
- FaRL
- ImageNet
- DML-CSR
- FP-LIIF

## Related Work
### Face Parsing
### Transformer
[Link](./models/Transformer.md)