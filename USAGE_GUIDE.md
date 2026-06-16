# Screenshot MCP Server 使用指南

## 概述

Screenshot MCP Server 是一个基于MCP协议的屏幕截图服务器，可以让AI助手截取Windows屏幕截图。

## 安装

### 方法一：使用安装脚本

```bash
install.bat
```

### 方法二：手动安装

```bash
npm install
npm run build
```

## 配置

### Claude Desktop配置

1. 打开Claude Desktop
2. 进入设置
3. 找到MCP服务器配置
4. 添加以下配置：

```json
{
  "mcpServers": {
    "screenshot": {
      "command": "node",
      "args": ["E:/projects/mini-tools/Screenshot/dist/index.js"]
    }
  }
}
```

5. 重启Claude Desktop

### Cursor配置

1. 打开Cursor
2. 进入设置
3. 找到MCP服务器配置
4. 添加截图服务器配置
5. 重启Cursor

## 使用方法

### 启动服务器

```bash
start.bat
```

或者：

```bash
npm start
```

### 在AI对话中使用

在AI对话中，你可以要求AI截图：

- "请截取当前屏幕"
- "帮我截图"
- "截个图看看"
- "截取屏幕并保存"

### 工具参数

`take_screenshot` 工具支持以下参数：

- `windowTitle` (可选): 窗口标题
- `format` (可选): 图片格式，可选 "png" 或 "jpg"
- `quality` (可选): JPG格式的图片质量，范围 1-100

## 示例

### 基本截图

```json
{
  "tool": "take_screenshot",
  "arguments": {}
}
```

### JPG格式截图

```json
{
  "tool": "take_screenshot",
  "arguments": {
    "format": "jpg",
    "quality": 80
  }
}
```

## 故障排除

### 问题：截图失败

**可能原因**：
- 权限不足
- 图形界面不可用

**解决方案**：
- 以管理员权限运行
- 确保系统有图形界面

### 问题：服务器启动失败

**可能原因**：
- 依赖未安装
- TypeScript未编译

**解决方案**：
```bash
npm install
npm run build
npm start
```

### 问题：AI无法调用工具

**可能原因**：
- MCP服务器未正确配置
- 服务器未启动

**解决方案**：
1. 检查MCP配置
2. 确保服务器正在运行
3. 重启AI客户端

## 开发

### 项目结构

```
src/
├── index.ts              # 主入口文件
├── types/
│   └── index.ts          # 类型定义
├── utils/
│   └── screenshot.ts     # 截图工具函数
└── screenshot-desktop.d.ts # 类型声明
```

### 添加新功能

1. 在 `src/types/index.ts` 中添加类型定义
2. 在 `src/utils/` 中添加工具函数
3. 在 `src/index.ts` 中注册新工具
4. 更新文档

### 测试

```bash
npm test
```

## 许可证

ISC
