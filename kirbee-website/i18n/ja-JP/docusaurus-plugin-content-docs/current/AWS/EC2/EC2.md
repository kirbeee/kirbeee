---
title: EC2 (Elastic Compute Cloud)
author: Kirbee
---

# EC2 (Elastic Compute Cloud)

## 主な機能

- **仮想マシンをレンタル** (EC2)
- **仮想ドライブにデータを保存** (EBS)
- **機械間負荷分散** (ELB)
- **自動スケーリンググループを使用したサービスの拡大** (ASG)

---

## EC2 サイジングと設定オプション

- **オペレーティングシステム(OS):** Linux、Windows、macOS
- **パワー&コア(CPU)を計算:** ワークロードのニーズに合わせてカスタマイズ可能
- **メモリ (RAM):** さまざまなアプリケーション要件に応じて設定可能
- **ストレージ:**
- ネットワーク接続(EBS, EFS)
- ローカルハードウェア（EC2インスタンスストア）
- **ネットワークカード:** スピード、パブリックIPアドレスオプション
- **ファイアウォールのルール:** セキュリティグループを介して設定
- **Bootstrapスクリプト:** EC2ユーザーデータを使用して起動時のインスタンスを設定します

---

## EC2ユーザーデータ

- **bootstrapスクリプト**を使用してインスタンスの初期化を自動化します。
- 最初のインスタンス起動時に**1回**実行されました\*\*
- 一般的なタスク:
- アップデートまたはソフトウェアのインストール
- ファイルをダウンロード中
- 環境の設定
- **root ユーザー権限**で実行します。

---

## EC2インスタンスタイプ

### 命名規約の例

`m5.2xlarge`

- **m:** インスタンスクラス
- **5:** 世代
- **2xlarge:** インスタンスクラス内のサイズ

### 一般的な目的

- バランスの取れたワークフロー (例: web サーバー、リポジトリ)
- **compute**、**memory**、**networking**の等しい分布です。
- 例: `t2.micro` (チュートリアルで一般的に使用されます)。

### 最適化を計算する

- 計算集約型タスク用の高性能プロセッサ:
- バッチ処理
- メディアのトランス
- 科学的モデリングとML
- ゲームサーバー

### メモリ最適化

- **メモリ内の大きなデータセット**の処理に最適です:
- 高性能データベース
- リアルタイムのビッグデータ分析
- メモリ内データベース

### ストレージの最適化

- **読み取り/書き込みアクセス**が高いストレージ重量タスク用に設計されています:
- オンライン取引処理 (OLTP)
- データ倉庫
- 分散ファイル システム

---

## セキュリティグループ

- AWSの**ネットワークセキュリティ**のコア
- ファイアウォールとして機能し、制御:
- **受信トラフィック:** 外部ソースからインスタンスへ
- **アウトバウンドトラフィック:** インスタンスから外部ソースへ
- 機能:
- **すべてのみのルール** (拒否ルールはありません)
- IP範囲(IPv4/IPv6)を指定するか、他のセキュリティグループを参照してください

### 一般的な港

- **22:** SSH (Secure Shell) - Linux ログイン
- **21:** FTP - ファイルアップロード
- **22:** SFTP - セキュアなファイルアップロード
- **80:** HTTP - 安全でないウェブトラフィック
- **443:** HTTPS - 安全な web トラフィック
- **3389:** RDP (Remote Desktop Protocol) - Windows ログイン

---

## EC2インスタンス購入オプション

### オンデマンド インスタンス

- **Flexible**と予測可能、2秒で請求されます (Linux/Windows)。
- 高コスト、前払い、長期的なコミットメントはありません。
- 理想的な対象:
- 短期、**予測不可能なワークロード**。
- 柔軟性を必要とするアプリケーション。

### 予約済みインスタンス（1年と3年）

- オンデマンド対**最大72%割引**
- オプション:
- **標準:** インスタンス属性を修正しました。
- **Convertible:** インスタンスの種類と設定を変更する柔軟性。
- **定常状態の使用** (例: データベース) に最適です。

### 貯蓄プラン

- 1 年または 3 年間、特定の **時間単位の使用** にコミットします。
- 予約インスタンスと同様に\*\*72%\*\*まで割引されます。
- インスタンスサイズ、OS、テナント全体で柔軟性があります。

### スポットインスタンス

- **コスト効率:** オンデマンド対**90%割引**まで。
- スポット価格が入札価格を超えると、インスタンスは終了することができます。
- 以下に適しています：
- **バッチジョブ**
- **データ分析**
- 重要でないワークロードまたは柔軟なワークフロー

### 専用ホスト

- あなたの使用専用の物理的なサーバー。
- コンプライアンスまたはライセンスのニーズ(例:BYOL)を満たします。
- 最も高価なオプション。
- ユースケース：
- 複雑なライセンスモデルを持つソフトウェア
- 規制要件

### 専用インスタンス

- インスタンスはあなたに対して**排他的**で動作します。
- インスタンス配置に対する制御はありません。
- アカウントの他のインスタンスとハードウェアを共有することがあります。

### 定員予約

- **特定のAZに容量**を保存します。
- 使用状況にかかわらず、オンデマンドレートを支払う。
- 長期的なコミットメントはありません。いつでもキャンセルできます。

#### 購入オプションの概要

| Option               | 割引     | コミット  | 最も良い              |
| -------------------- | ------ | ----- | ----------------- |
| オンデマンド               | なし     | なし    | 短期、予測不可能なワークフロー   |
| 予約済み                 | 最大 72% | 1-3 年 | 安定した状態のアプリケーション   |
| 貯蓄プラン                | 最大 72% | 1-3 年 | 柔軟な長期使用           |
| スポット                 | 90%まで  | なし    | コストに敏感で柔軟なワークロード  |
| 専用ホスト                | なし     | 省略可能  | コンプライアンスまたはBYOL要件 |
| Capacity Reservation | なし     | なし    | 特定のAZの予約容量        |

---

## 共有された責任モデル

### AWSのレスポンシビリティ:

- インフラストラクチャセキュリティ(例:グローバルネットワーク、物理ホスト)。
- ハードウェアのメンテナンスとコンプライアンスの検証。

### ユーザーの責任:

- **セキュリティグループ**を設定します。
- OS のパッチとアップデートを適用します。
- **IAMロール** とユーザー権限を管理します。
- EC2インスタンスのセキュアなデータ。

### 責任共有ストレージ

### AWSのレスポンシビリティ:

- インフラストラクチャ
- EBSボリュームとEFSドライブのデータの複製
- 欠陥のあるハードウェアを置き換え
- 従業員があなたのデータにアクセスできないようにする

### ユーザーの責任:

- バックアップ / スナップショット手順の設定
- データ暗号化の設定
- ドライブ上の任意のデータの責任
- EC2インスタンスストアを使用するリスクを理解する

---

## Summary

### EC2 コンポーネント:

- **ユーザー管理:** インスタンスの種類、構成、およびセキュリティ。
- **AWS管理:** Infrastructure, host isolation, and compliance.

### EC2 ストレージ:

EBSボリューム:

- 一度に1つのEC2インスタンスに接続されたネットワークドライブ
- アベイラビリティゾーンにマップされました
- EBSスナップショットをバックアップ/AZ間でEBSボリュームを転送するために使用できます
- AMI: カスタマイズですぐに使用できる EC2 インスタンスを作成する
- EC2 Image Builder: AMls を自動的にビルド、テスト、配布する
- EC2インスタンスストア:
  EC2インスタンスに接続された高性能ハードウェアディスク
- インスタンスが停止/終了した場合に失われます
- EFS: ネットワークファイルシステムは、リージョン内の100のインスタンスにアタッチすることができます
- EFS-IA: アクセス頻度の低いファイルのためのコスト最適化されたストレージクラス
- FSx for Windows: Windowsサーバー用ネットワークファイルシステム
- FSx for Lustre: High Performance Computing Linux ファイル

### 主な機能:

- **インスタンスのバリエーション:** コンピューティング、メモリ、またはストレージに最適化されました。
- **購入オプション:** コストとワークロードの要件を満たしています。
- **セキュリティ:** セキュリティグループでトラフィックを制御し、セキュリティなどの責任を共有します。

EC2機能を理解し最適化することで、ユーザーはAWSでスケーラブルで費用対効果の高いセキュアなソリューションを構築できます。
