---
title: 云形化
---

# 云形化

- CloudFormation 是描述您的 AWS 基础结构的一种声明方式，用于任何资源 (大多数资源都被支持)。
- 例如，在 CloudFormation 模板中，你说：
  - 我想要一个安全组
  - 我想要两个使用此安全组的 EC2 实例
  - 我想要一个 S3 桶。
  - 我想要这些机器前面有一个负载平衡器 (ELB)
- 然后CloudFormation 以正确的顺序为您创建这些，并且有您指定的确切配置

# 福利

## 基础设施为代码

- 没有资源被手动创建，这是很好的控制
- 基础设施更改将通过代码进行审查

## 费用

- 堆栈中的每个资源都贴有标识符，这样您就可以轻松地看到堆栈成本了
- 您可以使用 CloudFormation 模板估计您的资源成本
- 储蓄策略：在开发中，您可以自动删除5个PM 中的模板，并且安全地在 8 AM中重新创建

## 生产率：

- 在飞机上摧毁和重新创建云端基础设施的能力
- 为您的模板自动生成图表！
- 声明式编程(无需确定排序和编排)

## 不要重新发明轮子

- 利用网络上现有的模板！
- 利用文档

## 支持 (经常) 所有AWS 资源:

- 我们在这门课程中看到的一切都得到支持
- 您可以对不支持的资源使用“自定义资源”

# CloudFormation + 基础结构撰写器

- 示例：WordPress CloudFormation Stack
- 我们可以看到所有资源
- 我们可以看到组件
  之间的关系！[CloudFormation](./cloudFormation.png)
