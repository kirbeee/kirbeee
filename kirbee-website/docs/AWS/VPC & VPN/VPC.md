---
title: VPC & VPN (Virtual Private Cloud)
---
# VPC (Virtual Private Cloud)
![VPC](./VPC.png)
- VPC -Virtual Private Cloud: private network to deploy your resources (regional resource)
- Subnets allow you to partition your network inside your VPC (Availability Zone resource)
- A public subnet is a subnet that is accessible from the internet
- A private subnet is a subnet that is not accessible from the internet
- To define access to the internet and between subnets, we use Route Tables.

# Diagram
![VPC](./VPC-diagram.png)

# Internet Gateway and NAT Gateway
![VPC](./VPC2.png)
- Internet Gateways helps our VPC instances connect with the internet
- Public Subnets have a route to the internet gateway.
- NAT Gateways (AWS-managed) & NAT Instances (self-managed) allow your instances in your Private Subnets to access the internet while remaining private

