---
id: On different aspects of neural networks
title: On different aspects of neural networks
keywords: [nural, network, nural network, nural aspect, nural aspect of neural network]
last_update:
   date: 2025-08-13
   author: Kirbee
---

## One Nural in Transformer

### 如何觀察
- step 1: observe active nural
- step 2: remove active nural -> you can set value to 0 or average

## One layer of Nural
- 我們觀察到一個動作可能是由一組vector 去控制的

### 如何找到所有 function vector 
- solution: Space Auto Encoder (SAE)

## Nural Network 

### Puring (Network Compression) (知識抽取)
- 將LLM縮小，且Input Output(我們所關注的)值不變。
- 產生出來新的LLM called Circuit ,**重點在可解釋性**！

### Logit Lens
- 可以分析每一層的 unembedding 後的的結果
