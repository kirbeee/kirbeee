---
title: EFS (Elastic File System)
---

- EC2の100秒にマウント可能なマネージドNFS(ネットワークファイルシステム)
- EFSはマルチAZのLinux EC2インスタンスで動作します
- 高可用性、スケーラブル、高価な (3x gp2)、使用単価、容量計画なし
  ![EFS](./EFS.png)

## EFS vs EBS

![EFS vs EBS](./EFS-EBS.png)

## EFS-IA（不頻繁なアクセス）

- 毎日アクセスされないファイルにコスト最適化されたストレージクラス
- EFS規格と比較して最大92%低コストです
- EFSは最後にアクセスした時間に基づいてファイルをEFS-IAに自動的に移動します
- ライフサイクルポリシーでEFS-IAを有効にする
- 例: EFS-IAに60日間アクセスできないファイルを移動する
- Transparent to the applications accessing EFS
  ![EFS-IA](./EFS-IA.png)
