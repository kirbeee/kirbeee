---
title: Introduction
---
# IP Address in AWS
- IPv4 - Internet Protocol version 4 (4.3 Billion Addresses)
    - Public IPv4 - can be used on the Internet
    - EC2 instance gets a new a public IP address every time you stop then start it (default)
    - Private IPV4 - can be used on private networks (LAN) such as internal AWS networking (e.g., 192.168.1.1)
    - Private IPV4 is fixed for EC2 Instances even if you start/stop them
- Elastic IP — allows you to attach a fixed public IPv4 address to EC2 instance
- Note: all public IPv4 on AWS will be charged $0.005 per hour (including EIP)
    - Free Tier: 750 hours usage per month
- IPv6 - Internet Protocol version 6 (3.4 × 1038 Addresses)
    - Every IP address is public in AWS (no private range)
    - Example: 200 l:db8:3333:4444:cccc:dddd:eeee:ffff
    - Free

# Summary
- VPC: Virtual Private Cloud
- Subnets: Tied to an AZ, network partition of the VPC
- Internet Gateway: at the VPC level, provide Internet Access
- NAT Gateway / Instances: give internet access to private subnets
- NACL: Stateless, subnet rules for inbound and outbound
- Security Groups: Stateful, operate at the EC2 instance level or ENI
- VPC Peering: Connect two VPC with non overlapping IP ranges, nontransitive
- Elastic IP -fixed public IPv4, ongoing cost if not in-use
- VPC Endpoints: Provide private access to AWS Services within VPC
- PrivateLink: Privately connect to a service in a 3rd party VPC
- VPC Flow Logs: network traffic logs
- Site to Site VPN: VPN over public internet between on-premises DC and AWS
- Client VPN: OpenVPN connection from your computer into your VPC
- Direct Connect: direct private connection to AWS
- Transit Gateway: Connect thousands of VPC and on-premises networks together