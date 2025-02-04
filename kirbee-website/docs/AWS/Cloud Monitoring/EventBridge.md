---
title: EventBridge
---
# EventBridge
- Schedule: Cron jobs (scheduled scripts)
![EventBridge](./EventBridge1.png)
- Event Pattern: Event rules to react to a service doing something
![EventBridge](./EventBridge2.png)
- Trigger Lambda functions, send SQS/SNS messages...

Example:
![EventBridge](./EventBridge3.png)
---
![EventBridge](./EventBridge4.png)
- Schema Registry: model event schema
- You can archive events (all/filter) sent to an event bus (indefinitely or set period)
- Ability to replay archived events


