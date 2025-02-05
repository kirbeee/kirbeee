---
title: 网络 ACL (NACL) 和安全组
---

![Network ACL (NACL) & Security Groups](./NACL.png)

# 网络 ACL (NACL)

- 控制进出子网流量的防火墙
- 可以有ALLOW和DENY规则
- 附加在子网级别
- 规则只包含IP地址

# 安全组

- 控制进出EC2实例的防火墙
- 只能有ALLOW规则
- 规则包括IP地址和其他安全组

# 网络 ACL (NACL) 与安全组

![Network ACL (NACL) vs Security Groups](./NACL-compare.png)
