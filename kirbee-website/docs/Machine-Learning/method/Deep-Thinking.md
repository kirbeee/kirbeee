---
id: Deep-Thinking
title: Deep Thinking
keywords: [Deep Thinking, LLM, Reasoning, Chain of Thought, CoT, Monte Carlo Tree Search, MCTS]
last_update:
   date: 2025-07-29
   author: Kirbee
---
## What is Deep Thinking?
>**深度不夠，長度來湊**

Question -----> LLM -----> <think> thinking process </think> answer
- `<think> ....... </think>` -> Verification , Explore , Planning

### Example: Alpha Go
- Alpha Go 的思考過程是用 MCTS (Monte Carlo Tree Search)

### Test Time Scaling
- 思考的越多結果會越好！
- Paper: [Scaling Scaling Laws with Board Games](https://arxiv.org/abs/2104.03113)

## Build Reasoning LLM Method
你可以混著用
### Chain of Thought (CoT) 
- Don't need to change the model
1. Few-shot CoT
   - 給Example叫LLM回答
   - Paper: [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)
2. Zero-shot CoT
   - 直接叫LLM "Let think step by step" 來回答問題
   - Paper: [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916)
3. Long CoT
   - Paper: [Towards Reasoning Era](https://arxiv.org/abs/2503.09567)
4. Supervised CoT
   - 用更好的prompt來引導LLM回答問題
   - Paper: [Supervised Chain of Thought](https://arxiv.org/abs/2410.14198)

### 給Model reasoning 工作流程
- Don't need to change the model

#### How to explore?
用同一個問題問ＬＬＭ很多次，他會給出不同的答案
- Paper: [Large Language Monkeys](https://arxiv.org/abs/2407.21787)
#### How to choose the right answer?
1. Majority Vote (Self-consistency)
   - Paper: [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)
2. Confidence(used in CoT decoding)
   - Paper: [Chain-of-Thought Reasoning Without Prompting](https://arxiv.org/abs/2402.10200)
3. 加上 Verification
   - Paper: [Training Verifiers to Solve Math Word Problems](https://arxiv.org/abs/2110.14168)
#### Parallel vs. Sequential vs. Parallel + Sequential

#### How to verify the step?
- create process verifier to predict the correctness of each step
- Paper: [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050)
- Paper: [Math-Shepherd](https://arxiv.org/abs/2312.08935)
- **Beam Search**
- Paper: [Self-Evaluation Guided Beam Search for Reasoning](https://arxiv.org/abs/2305.00633)
- Paper: [Deductive Beam Search](https://arxiv.org/abs/2401.17686)
- **Monte Carlo Tree Search**
- Paper: [Monte Carlo Tree Search Boosts Reasoning](https://arxiv.org/abs/2405.00451)
- **ReST-MCTS**
- Paper: [ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://arxiv.org/abs/2406.03816)
- Paper: [Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solvers](https://arxiv.org/abs/2408.06195)

:::info
**Imitation Learning** and **Reinforcement Learning**  [Post-Training](./Post-Training%20&%20Forgetting) 的一種特例
:::

### Imitation Learning
- Need to change the model
- 教 model reasoning

#### Reasoning process data how to come from?
use LLM to generate reasoning process data 在對的answer 情況下去把readoning process 也視為是對的，並用於訓練
- Paper: [rStar-Math](https://arxiv.org/abs/2501.04519)
- **Stream of Search (SoS)**
- 也可以把錯誤的過程放進去
- Paper: [Stream of Search (SoS)](https://arxiv.org/abs/2404.03683)
- Paper: [O1 Replication Journey](https://arxiv.org/abs/2410.18982)

### Reinforcement Learning 
- Need to change the model
- Paper: [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948)
