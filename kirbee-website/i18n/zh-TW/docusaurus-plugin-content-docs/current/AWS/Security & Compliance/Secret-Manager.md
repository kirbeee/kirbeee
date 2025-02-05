---
title: 秘密管理器
---

# 秘密管理器

- 较新的服务，意在存储密钥
- 强制每隔X天自动旋转秘密的能力
- 旋转时自动生成机密(使用 Lambda)
- 与 Amazon RDS 集成 (MySQL, PostgreSQL, Aurora)
- 密码使用KMS加密
- 主要是为了整合RDS。
