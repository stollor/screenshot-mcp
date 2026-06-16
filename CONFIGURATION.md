# Screenshot MCP Server 项目配置

## 环境要求

- Node.js 20+
- npm 9+
- Windows 10/11

## 安装步骤

1. 克隆或下载项目
2. 进入项目目录
3. 运行安装脚本：

```bash
install.bat
```

或者手动安装：

```bash
npm install
npm run build
```

## 配置说明

### MCP服务器配置

在AI客户端中添加以下配置：

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

### 环境变量

无需配置环境变量。

## 使用说明

### 启动服务器

```bash
start.bat
```

或者：

```bash
npm start
```

### 调用工具

在AI对话中，使用以下工具：

- `take_screenshot` - 截取屏幕截图

### 参数说明

- `windowTitle` (可选): 窗口标题
- `format` (可选): 图片格式，可选 "png" 或 "jpg"
- `quality` (可选): JPG格式的图片质量，范围 1-100

## 故障排除

### 问题1：截图失败

**症状**：调用工具时返回错误

**解决方案**：
1. 确保以管理员权限运行
2. 确保系统有图形界面
3. 检查依赖是否正确安装

### 问题2：服务器启动失败

**症状**：无法启动MCP服务器

**解决方案**：
1. 检查Node.js版本
2. 重新安装依赖：`npm install`
3. 重新构建项目：`npm run build`

### 问题3：类型错误

**症状**：TypeScript编译错误

**解决方案**：
1. 检查TypeScript版本
2. 重新安装依赖
3. 清理并重新构建：`npm run rebuild`

## 开发指南

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
