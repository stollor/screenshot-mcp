# Screenshot MCP Server

一个用于Windows窗口截图的MCP服务器，支持截取整个屏幕或指定窗口（即使被遮蔽）。

## 功能特点

- 🖼️ 截取整个屏幕的截图
- 🪟 截取指定窗口（支持模糊匹配）
- 📷 支持PNG和JPG格式
- ⚙️ 可配置图片质量
- 💾 保存截图到指定目录
- 🔌 完全兼容MCP协议

## 快速开始

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 启动服务器
npm start
```

## 使用方法

### 1. 直接运行截图脚本

```bash
# 截取整个屏幕
node take-screenshot.js

# 截取指定目录
node take-screenshot.js "E:\path\to\save"

# 截取指定窗口（支持模糊匹配）
node capture-window.js "Edge"

# 截取指定窗口到指定目录
node capture-window.js "Edge" "E:\path\to\save"
```

### 2. 使用MCP服务器

在MCP客户端配置中添加：

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

#### 可用工具

**list_windows** - 列出所有可截取的窗口

```json
{
  "tool": "list_windows",
  "arguments": {}
}
```

**take_screenshot** - 截取屏幕或窗口

```json
{
  "tool": "take_screenshot",
  "arguments": {
    "windowTitle": "Edge",
    "saveDir": "E:\\screenshots",
    "format": "png"
  }
}
```

参数说明：
- `windowTitle` (可选): 窗口标题，支持模糊匹配
- `saveDir` (可选): 保存目录
- `format` (可选): 图片格式，"png" 或 "jpg"
- `quality` (可选): JPG质量 1-100

## 项目结构

```
screenshot-mcp/
├── src/
│   ├── index.ts              # MCP服务器主入口
│   ├── types/
│   │   └── index.ts          # 类型定义
│   └── utils/
│       └── screenshot.ts     # 截图功能实现
├── dist/                     # 编译输出
├── screenshots/              # 截图保存目录
├── take-screenshot.js        # 屏幕截图脚本
├── capture-window.js         # 窗口截图脚本
├── package.json
└── tsconfig.json
```

## 技术栈

- TypeScript 6.0
- @modelcontextprotocol/sdk 1.29
- node-screenshots 0.2.8
- screenshot-desktop 1.15.4
- zod 4.4.3

## 许可证

ISC
