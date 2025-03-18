---
title: CloudFront
---
# CloudFront Overview
- Content Delivery Network (CDN)
- Improves read performance, content is cached at the edge
- Improves users experience
- 216 Point of Presence globally (edge locations)
- DDoS protection (because worldwide), integration with Shield, AWS Web Application Firewall

# Origins
## S3 bucket
- For distributing files and caching them at the edge
- Enhanced security with CloudFront Origin Access Control (OAC)
- OAC is replacing Origin Access Identity (OAl)
- CloudFront can be used as an ingress (to upload files to S3)
## Custom Origin (HTTP)
- Application Load Balancer
- EC2 instance
- S3 website (must first enable the bucket as a static S3 website)
- Any HTTP backend you want

# Cloudfront at a high level
![CloudFront](./Cloudfront-high-level.png)
- Example:
![CloudFront](./Cloudfront-example.png)

# Cloudfront vs. S3 Cross Region Replication
## CloudFront:
- Global Edge network
- Files are cached for a TTL (maybe a day)
- Great for static content that must be available everywhere
## S3 Cross Region Replication:
- Must be setup for each region you want replication to happen
- Files are updated in near real-time
- Read only
- Great for dynamic content that needs to be available at low-latency in few
## ALB or EC2 as an origin
![img.png](ALB-EC2.png)

## CloudFront Geo Restriction
- You can restrict who can access your distribution
- Allowlist: Allow your users to access your content only if they're in one of the countries on a list of approved countries.
- Blocklist: Prevent your users from accessing your content if they're in one of the countries on a list of banned countries.
- The “country” is determined using a 3rd party Geo-IP database
- Use case: Copyright Laws to control access to content

## CloudFront - Pricing
- CloudFront Edge locations are all around the world
- The cost of data out per edge location varies
![img.png](cloudfront-pricing.png)

## Cache Invalidations
- In case you update the back-end origin, CloudFront doesn’t know about it and will only get the refreshed content after the TTL has expired
- However, you can force an entire or partial cache refresh (thus bypassing the TTL) by performing a CloudFront Invalidation
- You can invalidate all files (*) or a special path (/images/*)
![img.png](cache\-invalidation.png)

## CloudFront Functions
- Lightweight functions written in JavaScript
- For high-scale, latency-sensitive CDN customizations
- Sub-ms startup times, millions of requests/second
- Used to change Viewer requests and responses:
    - Viewer Request: after CloudFront receives a request from a viewer
    - Viewer Response: before CloudFront forwards the response to the viewer
- Native feature of CloudFront (manage code entirely within CloudFront)
![img.png](cloudfront-func.png)

## Lambda@Edge
- Lambda functions written in NodeJS or Python
- Scales to 1000s of requests/second
- Used to change CloudFront requests and responses:
- Viewer Request – after CloudFront receives a request from a viewer
- Origin Request – before CloudFront forwards the request to the origin
- Origin Response – after CloudFront receives the response from the origin
- Viewer Response – before CloudFront forwards the response to the viewer
- Author your functions in one AWS Region (us-east-1), then CloudFront replicates to its locations
![img.png](cloudfront-edge.png)

## CloudFront Functions vs. Lambda@Edge
![img.png](func-edge.png)

## CloudFront Functions vs. Lambda@Edge - Use Cases
### CloudFront Functions
- Cache key normalization
- Transform request attributes (headers, cookies, query strings, URL) to create an optimal Cache Key
- Header manipulation
- Insert/modify/delete HTTP headers in the request or response
- URL rewrites or redirects
- Request authentication & authorization
- Create and validate user-generated tokens (e.g., JWT) to allow/deny requests
### Lambda@Edge
- Longer execution time (several ms)
- Adjustable CPU or memory
- Your code depends on a 3rd libraries (e.g., AWS SDK to access other AWS services)
- Network access to use external services for processing
- File system access or access to the body of HTTP requests
