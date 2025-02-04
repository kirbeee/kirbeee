"use strict";(self.webpackChunkkirbee_website=self.webpackChunkkirbee_website||[]).push([[3827],{4184:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"AWS/EC2/EC2","title":"EC2 (Elastic Compute Cloud)","description":"Key Capabilities","source":"@site/docs/AWS/EC2/EC2.mdx","sourceDirName":"AWS/EC2","slug":"/AWS/EC2/","permalink":"/kirbeee/docs/AWS/EC2/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EC2 (Elastic Compute Cloud)","author":"Kirbee"},"sidebar":"docs","previous":{"title":"Summry","permalink":"/kirbeee/docs/AWS/Deployment & managing/Summary"},"next":{"title":"AMI","permalink":"/kirbeee/docs/AWS/EC2/AMI"}}');var r=s(4848),l=s(8453);const t={title:"EC2 (Elastic Compute Cloud)",author:"Kirbee"},d="EC2 (Elastic Compute Cloud)",c={},o=[{value:"Key Capabilities",id:"key-capabilities",level:2},{value:"EC2 Sizing and Configuration Options",id:"ec2-sizing-and-configuration-options",level:2},{value:"EC2 User Data",id:"ec2-user-data",level:2},{value:"EC2 Instance Types",id:"ec2-instance-types",level:2},{value:"Naming Convention Example",id:"naming-convention-example",level:3},{value:"General Purpose",id:"general-purpose",level:3},{value:"Compute Optimized",id:"compute-optimized",level:3},{value:"Memory Optimized",id:"memory-optimized",level:3},{value:"Storage Optimized",id:"storage-optimized",level:3},{value:"Security Groups",id:"security-groups",level:2},{value:"Common Ports",id:"common-ports",level:3},{value:"EC2 Instance Purchase Options",id:"ec2-instance-purchase-options",level:2},{value:"On-Demand Instances",id:"on-demand-instances",level:3},{value:"Reserved Instances (1 &amp; 3 Years)",id:"reserved-instances-1--3-years",level:3},{value:"Savings Plans",id:"savings-plans",level:3},{value:"Spot Instances",id:"spot-instances",level:3},{value:"Dedicated Hosts",id:"dedicated-hosts",level:3},{value:"Dedicated Instances",id:"dedicated-instances",level:3},{value:"Capacity Reservations",id:"capacity-reservations",level:3},{value:"Purchase Option Summary",id:"purchase-option-summary",level:4},{value:"Shared Responsibility Model",id:"shared-responsibility-model",level:2},{value:"AWS Responsibilities:",id:"aws-responsibilities",level:3},{value:"User Responsibilities:",id:"user-responsibilities",level:3},{value:"Shared Responsibility Storage",id:"shared-responsibility-storage",level:3},{value:"AWS Responsibilities:",id:"aws-responsibilities-1",level:3},{value:"User Responsibilities:",id:"user-responsibilities-1",level:3},{value:"Summary",id:"summary",level:2},{value:"EC2 Components:",id:"ec2-components",level:3},{value:"EC2 Storage:",id:"ec2-storage",level:3},{value:"Key Features:",id:"key-features",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ec2-elastic-compute-cloud",children:"EC2 (Elastic Compute Cloud)"})}),"\n",(0,r.jsx)(n.h2,{id:"key-capabilities",children:"Key Capabilities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rent Virtual Machines"})," (EC2)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Store Data on Virtual Drives"})," (EBS)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Distribute Load Across Machines"})," (ELB)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Scale Services Using Auto-Scaling Groups"})," (ASG)"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"ec2-sizing-and-configuration-options",children:"EC2 Sizing and Configuration Options"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Operating System (OS):"})," Linux, Windows, or macOS"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Compute Power & Cores (CPU):"})," Customizable to suit workload needs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Memory (RAM):"})," Configurable for different application requirements"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Storage:"})}),"\n",(0,r.jsx)(n.li,{children:"Network-attached (EBS, EFS)"}),"\n",(0,r.jsx)(n.li,{children:"Local hardware (EC2 Instance Store)"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Network Card:"})," Speed, Public IP address options"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Firewall Rules:"})," Configured via Security Groups"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bootstrap Scripts:"})," Configure instances at launch using EC2 User Data"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"ec2-user-data",children:"EC2 User Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Automates instance initialization through ",(0,r.jsx)(n.strong,{children:"bootstrap scripts"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Executed once"})," during the first instance launch."]}),"\n",(0,r.jsx)(n.li,{children:"Common tasks:"}),"\n",(0,r.jsx)(n.li,{children:"Installing updates or software"}),"\n",(0,r.jsx)(n.li,{children:"Downloading files"}),"\n",(0,r.jsx)(n.li,{children:"Configuring the environment"}),"\n",(0,r.jsxs)(n.li,{children:["Runs with ",(0,r.jsx)(n.strong,{children:"root user permissions"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"ec2-instance-types",children:"EC2 Instance Types"}),"\n",(0,r.jsx)(n.h3,{id:"naming-convention-example",children:"Naming Convention Example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"m5.2xlarge"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"m:"})," Instance class"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"5:"})," Generation"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"2xlarge:"})," Size within the instance class"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"general-purpose",children:"General Purpose"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Balanced workloads (e.g., web servers, repositories)"}),"\n",(0,r.jsxs)(n.li,{children:["Equal distribution across ",(0,r.jsx)(n.strong,{children:"compute"}),", ",(0,r.jsx)(n.strong,{children:"memory"}),", and ",(0,r.jsx)(n.strong,{children:"networking"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"t2.micro"})," (commonly used in tutorials)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"compute-optimized",children:"Compute Optimized"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"High-performance processors for compute-intensive tasks:"}),"\n",(0,r.jsx)(n.li,{children:"Batch processing"}),"\n",(0,r.jsx)(n.li,{children:"Media transcoding"}),"\n",(0,r.jsx)(n.li,{children:"Scientific modeling and ML"}),"\n",(0,r.jsx)(n.li,{children:"Gaming servers"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"memory-optimized",children:"Memory Optimized"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ideal for processing ",(0,r.jsx)(n.strong,{children:"large data sets in memory"}),":"]}),"\n",(0,r.jsx)(n.li,{children:"High-performance databases"}),"\n",(0,r.jsx)(n.li,{children:"Real-time big data analytics"}),"\n",(0,r.jsx)(n.li,{children:"In-memory databases"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"storage-optimized",children:"Storage Optimized"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Designed for storage-heavy tasks with high ",(0,r.jsx)(n.strong,{children:"read/write access"}),":"]}),"\n",(0,r.jsx)(n.li,{children:"Online transaction processing (OLTP)"}),"\n",(0,r.jsx)(n.li,{children:"Data warehousing"}),"\n",(0,r.jsx)(n.li,{children:"Distributed file systems"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"security-groups",children:"Security Groups"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Core of ",(0,r.jsx)(n.strong,{children:"network security"})," in AWS."]}),"\n",(0,r.jsx)(n.li,{children:"Acts as a firewall, controlling:"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inbound traffic:"})," From external sources to instances"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Outbound traffic:"})," From instances to external sources"]}),"\n",(0,r.jsx)(n.li,{children:"Features:"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Allow-only rules"})," (no deny rules)"]}),"\n",(0,r.jsx)(n.li,{children:"Specify IP ranges (IPv4/IPv6) or reference other Security Groups"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"common-ports",children:"Common Ports"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"22:"})," SSH (Secure Shell) - Linux login"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"21:"})," FTP - File upload"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"22:"})," SFTP - Secure file upload"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"80:"})," HTTP - Unsecured web traffic"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"443:"})," HTTPS - Secured web traffic"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"3389:"})," RDP (Remote Desktop Protocol) - Windows login"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"ec2-instance-purchase-options",children:"EC2 Instance Purchase Options"}),"\n",(0,r.jsx)(n.h3,{id:"on-demand-instances",children:"On-Demand Instances"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Flexible"})," and predictable, billed by second (Linux/Windows)."]}),"\n",(0,r.jsx)(n.li,{children:"High cost, no upfront payment, no long-term commitment."}),"\n",(0,r.jsx)(n.li,{children:"Ideal for:"}),"\n",(0,r.jsxs)(n.li,{children:["Short-term, ",(0,r.jsx)(n.strong,{children:"unpredictable workloads"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Applications requiring flexibility."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reserved-instances-1--3-years",children:"Reserved Instances (1 & 3 Years)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Up to ",(0,r.jsx)(n.strong,{children:"72% discount"})," vs. On-Demand."]}),"\n",(0,r.jsx)(n.li,{children:"Options:"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Standard:"})," Fixed instance attributes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Convertible:"})," Flexibility to change instance types and configurations."]}),"\n",(0,r.jsxs)(n.li,{children:["Ideal for ",(0,r.jsx)(n.strong,{children:"steady-state usage"})," (e.g., databases)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"savings-plans",children:"Savings Plans"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Commitment to specific ",(0,r.jsx)(n.strong,{children:"hourly usage"})," for 1 or 3 years."]}),"\n",(0,r.jsxs)(n.li,{children:["Discounts up to ",(0,r.jsx)(n.strong,{children:"72%"}),", similar to Reserved Instances."]}),"\n",(0,r.jsx)(n.li,{children:"Flexible across instance sizes, OS, and tenancy."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"spot-instances",children:"Spot Instances"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cost-efficient:"})," Up to ",(0,r.jsx)(n.strong,{children:"90% discount"})," vs. On-Demand."]}),"\n",(0,r.jsx)(n.li,{children:"Instances can be terminated when spot price exceeds bid price."}),"\n",(0,r.jsx)(n.li,{children:"Suitable for:"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Batch jobs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Data analysis"})}),"\n",(0,r.jsx)(n.li,{children:"Non-critical or flexible workloads"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dedicated-hosts",children:"Dedicated Hosts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Physical server dedicated to your use."}),"\n",(0,r.jsx)(n.li,{children:"Meets compliance or licensing needs (e.g., BYOL)."}),"\n",(0,r.jsx)(n.li,{children:"Most expensive option."}),"\n",(0,r.jsx)(n.li,{children:"Use cases:"}),"\n",(0,r.jsx)(n.li,{children:"Software with complex licensing models"}),"\n",(0,r.jsx)(n.li,{children:"Regulatory requirements"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dedicated-instances",children:"Dedicated Instances"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Instances run on hardware ",(0,r.jsx)(n.strong,{children:"exclusive"})," to you."]}),"\n",(0,r.jsx)(n.li,{children:"No control over instance placement."}),"\n",(0,r.jsx)(n.li,{children:"May share hardware with other instances in your account."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"capacity-reservations",children:"Capacity Reservations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Reserve ",(0,r.jsx)(n.strong,{children:"capacity in a specific AZ"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Pay On-Demand rates, regardless of usage."}),"\n",(0,r.jsx)(n.li,{children:"No long-term commitment; cancel anytime."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"purchase-option-summary",children:"Purchase Option Summary"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option"}),(0,r.jsx)(n.th,{children:"Discount"}),(0,r.jsx)(n.th,{children:"Commitment"}),(0,r.jsx)(n.th,{children:"Best For"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"On-Demand"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"Short-term, unpredictable workloads"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Reserved"}),(0,r.jsx)(n.td,{children:"Up to 72%"}),(0,r.jsx)(n.td,{children:"1-3 years"}),(0,r.jsx)(n.td,{children:"Steady-state applications"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Savings Plans"}),(0,r.jsx)(n.td,{children:"Up to 72%"}),(0,r.jsx)(n.td,{children:"1-3 years"}),(0,r.jsx)(n.td,{children:"Flexible long-term usage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Spot"}),(0,r.jsx)(n.td,{children:"Up to 90%"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"Cost-sensitive, flexible workloads"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dedicated Hosts"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"Optional"}),(0,r.jsx)(n.td,{children:"Compliance or BYOL requirements"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Capacity Reservation"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"Reserved capacity in a specific AZ"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"shared-responsibility-model",children:"Shared Responsibility Model"}),"\n",(0,r.jsx)(n.h3,{id:"aws-responsibilities",children:"AWS Responsibilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Infrastructure security (e.g., global networks, physical hosts)."}),"\n",(0,r.jsx)(n.li,{children:"Hardware maintenance and compliance validation."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"user-responsibilities",children:"User Responsibilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configure ",(0,r.jsx)(n.strong,{children:"Security Groups"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Apply OS patches and updates."}),"\n",(0,r.jsxs)(n.li,{children:["Manage ",(0,r.jsx)(n.strong,{children:"IAM Roles"})," and user permissions."]}),"\n",(0,r.jsx)(n.li,{children:"Secure data on EC2 instances."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"shared-responsibility-storage",children:"Shared Responsibility Storage"}),"\n",(0,r.jsx)(n.h3,{id:"aws-responsibilities-1",children:"AWS Responsibilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Infrastructure"}),"\n",(0,r.jsx)(n.li,{children:"Replication for data for EBS volumes & EFS drives"}),"\n",(0,r.jsx)(n.li,{children:"Replacing faulty hardware"}),"\n",(0,r.jsx)(n.li,{children:"Ensuring their employees cannot access your data"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"user-responsibilities-1",children:"User Responsibilities:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Setting up backup / snapshot procedures"}),"\n",(0,r.jsx)(n.li,{children:"Setting up data encryption"}),"\n",(0,r.jsx)(n.li,{children:"Responsibility of any data on the drives"}),"\n",(0,r.jsx)(n.li,{children:"Understanding the risk of using EC2 Instance Store"}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.h3,{id:"ec2-components",children:"EC2 Components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Users manage:"})," Instance type, configuration, and security."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AWS manages:"})," Infrastructure, host isolation, and compliance."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ec2-storage",children:"EC2 Storage:"}),"\n",(0,r.jsx)(n.p,{children:"EBS volumes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"network drives attached to one EC2 instance at a time"}),"\n",(0,r.jsx)(n.li,{children:"Mapped to an Availability Zones"}),"\n",(0,r.jsx)(n.li,{children:"Can use EBS Snapshots for backups / transferring EBS volumes across AZ"}),"\n",(0,r.jsx)(n.li,{children:"AMI: create ready-to-use EC2 instances with our customizations"}),"\n",(0,r.jsx)(n.li,{children:"EC2 Image Builder: automatically build, test and distribute AMls"}),"\n",(0,r.jsx)(n.li,{children:"EC2 Instance Store:\nHigh performance hardware disk attached to our EC2 instance"}),"\n",(0,r.jsx)(n.li,{children:"Lost if our instance is stopped / terminated"}),"\n",(0,r.jsx)(n.li,{children:"EFS: network file system, can be attached to 100s of instances in a region"}),"\n",(0,r.jsx)(n.li,{children:"EFS-IA: cost-optimized storage class for infrequent accessed files"}),"\n",(0,r.jsx)(n.li,{children:"FSx for Windows: Network File System for Windows servers"}),"\n",(0,r.jsx)(n.li,{children:"FSx for Lustre: High Performance Computing Linux file"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"key-features",children:"Key Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Instance Variety:"})," Optimized for compute, memory, or storage."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purchase Options:"})," Tailored for cost and workload requirements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security:"})," Control traffic with Security Groups and shared responsibility for instance security."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By understanding and optimizing EC2 capabilities, users can build scalable, cost-effective, and secure solutions in AWS."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);