---
title: ELB (Elastic Load Balancer)
author: Kirbee
---

# Introduction to Elastic Load Balancer
![Elastic Load Balancer](./ELB.png)
- Spread load across multiple downstream instances
- Expose a single point of access (DNS) to your application
- Seamlessly handle failures of downstream instances
- Do regular health checks to your instances
- Provide SSL termination (HTTPS) for your websites
- High availability across zones
- An ELB (Elastic Load Balancer) is a managed load balancer
- AWS guarantees that it will be working
- AWS takes care of upgrades, maintenance, high availability
- AWS provides only a few configuration knobs
- It costs less to setup your own load balancer but it will be a lot more effort on your end (maintenance, integrations)
# 4 kinds of load balancers offered by AWS:
- Application Load Balancer (HTTP / HTTPS only) - Layer 7
- Network Load Balancer (ultra-high performance, allows for TCP) - Layer 4
- Gateway Load Balancer - Layer 3
- Classic Load Balancer (retired in 2023) - Layer 4 & 7

# Application Load Balancer (ALB)
- НТТР / HTTPS / gRPC protocols (Layer 7)
- НТТР Routing features
- Static DNS (URL)
![ALB](./ALB.png)

# Network Load Balancer (NLB)
- TCP / UDP protocol (Layer 4)
- High Performance: millions of request per seconds
- Static IP through Elastic IP
![NLB](./NLB.png)

# Gateway Load Balancer (GWLB)
- GENEVE Protocol on IP Packets (Layer 3)
- Route Traffic to Firewalls that you manage on EC2 Instances
- Intrusion detection
![GWLB](./GWLB.png)

