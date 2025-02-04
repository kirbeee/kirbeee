---
title: Introduction
---
# Introduction
- A global application is an application deployed in multiple geographies
- On AWS: this could be Regions and / or Edge Locations
- Decreased Latency
    - Latency is the time it takes for a network packet to reach a server
    - It takes time for a packet from Asia to reach the US
    - Deploy your applications closer to your users to decrease latency, better experience
- Disaster Recovery (DR)
    - If an AWS region goes down (earthquake, storms, power shutdown, politics)...
    - You can fail-over to another region and have your application still working
    - A DR plan is important to increase the availability of your application
- Attack protection: distributed global infrastructure is harder to attack

# AWS Global Infrastructure
- Regions: For deploying applications and infrastructure
- Availability Zones: Made of multiple data centers
- Edge Locations (Points of Presence): for content delivery as close as possible to users

# AWS Global Applications
## Global DNS: Route 53
- Great to route users to the closest deployment with least latency
- Great for disaster recovery strategies
## Global Content Delivery Network (CDN): CloudFront
- Replicate part of your application to AWS Edge Locations - decrease latency
- Cache common requests - improved user experience and decreased latency
## S3 Transfer Acceleration
- Accelerate global uploads & downloads into Amazon S3
## AWS Global Accelerator:
- Improve global application availability and performance using the AWS global network

# Summary
## Global DNS: Route 53
- Great to route users to the closest deployment with least latency
- Great for disaster recovery strategies
## Global Content Delivery Network (CDN): CloudFront
- Replicate part of your application to AWS Edge Locations - decrease latency
- Cache common requests - improved user experience and decreased latency
## S3 Transfer Acceleration
- Accelerate global uploads & downloads into Amazon S3
## AWS Global Accelerator
- Improve global application availability and performance using the AWS global network
## AWS Outposts
- Deploy Outposts Racks in your own Data Centers to extend AWS services
## AWS WaveLength
- Brings AWS services to the edge of the 5G networks
- Ultra-low latency applications
## AWS Local Zones
- Bring AWS resources (compute, database, storage,...) closer to your users
- Good for latency-sensitive applications
