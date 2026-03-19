# OpenStudier 更名设计

日期: 2026-03-17
仓库: GamblerIX/OpenStudier
域名: opencode.ai (URL 保持不变, 文案显示为 OpenStudier)

## 概要
本设计规范定义将 OpenStudier 全量更名为 OpenStudier, 覆盖代码、打包、文档与 UI。更名不保留任何 OpenStudier/openstudier 兼容路径或别名。域名 URL 继续使用 opencode.ai, 但所有可见品牌统一为 OpenStudier, 产品定位为 AI 学习助手。

## 决策
- 品牌与所有标识统一为 OpenStudier/openstudier/OPENSTUDIER。
- 完全移除 openstudier 兼容与别名。
- CLI 命令与二进制更名为 openstudier。
- 环境变量统一为 OPENSTUDIER_*, 默认数据目录为 ~/.openstudier。
- 应用标识、包名、安装包文件名全部更名为 OpenStudier。
- 仓库与发布链接改为 GamblerIX/OpenStudier。
- opencode.ai URL 保留, 但链接文案与标题改为 OpenStudier。

## 目标
- 仓库内不再出现 OpenStudier/openstudier 字符串, 仅允许 opencode.ai 的 URL。
- 所有用户可见文案统一为 OpenStudier 与 AI 学习助手定位。
- 打包与发布产物命名与品牌保持一致。
- 命名规则一致、可维护、无歧义。

## 非目标
- 迁移域名离开 opencode.ai。
- 保留 openstudier 名称的兼容别名。
- 自动迁移旧配置或旧数据目录。

## 命名映射
- OpenStudier -> OpenStudier
- openstudier -> openstudier
- OPENSTUDIER -> OPENSTUDIER
- @openstudier/* -> @openstudier/*
- CLI openstudier -> openstudier
- ~/.openstudier -> ~/.openstudier
- OPENSTUDIER_* -> OPENSTUDIER_*

## 范围
- Core CLI 与 SDK 包, 包括工作区包名与路径。
- 桌面应用 (Tauri 与 Electron) 及应用标识。
- Web 与 Console 应用, 包括 i18n 与内容。
- Docs 与多语言文档。
- 安装脚本、CI、发布与打包配置。
- GitHub 与 Release 链接。

## 工作流与顺序
1. Core CLI 与 SDK。重命名包名、路径、入口与工作区引用, 更新 CLI 二进制名与安装路径。
2. 桌面应用。更新 app id、bundle id、可执行文件名与安装包名称, 统一 UI 文案。
3. Web、Console 与 Docs。全量替换品牌与定位文案, 多语言文档同步更新, opencode.ai URL 保留但显示名改为 OpenStudier。
4. Infra 与 Release。更新安装脚本、包管理元数据、CI 与发布资产命名。

## 数据与配置变更
- 默认数据目录从 ~/.openstudier 切换到 ~/.openstudier。
- 环境变量从 OPENSTUDIER_* 切换到 OPENSTUDIER_*。
- 运行时不提供旧名称兼容读取。
- 在文档中提供手动迁移旧数据的步骤说明。

## 错误处理
- 默认配置与数据路径改为新名称。
- 缺失配置的处理逻辑保持不变, 仅路径变化。

## 验证计划
- 全局搜索确保仅剩 opencode.ai URL。
- 在受影响包目录运行 bun typecheck。
- 如 SDK 生成受影响, 执行 ./packages/sdk/js/script/build.ts。
- 对 CLI 与桌面应用做基本 smoke 检查。

## 风险与缓解
- 风险: 测试与多语言内容遗漏 openstudier 字符串。
- 缓解: 全局搜索 + 逐类检查 i18n 与 docs。
- 风险: 打包与安装产物命名不一致。
- 缓解: 更新并核对发布脚本与元数据。
- 风险: 用户旧数据路径不可用。
- 缓解: 提供明确的手动迁移指引。
