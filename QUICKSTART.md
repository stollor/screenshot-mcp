# 快速开始指南

## 1. 安装依赖

```bash
npm install
```

## 2. 构建项目

```bash
npm run build
```

## 3. 测试服务器

```bash
npm test
```

## 4. 启动服务器

```bash
npm start
```

## 5. 在AI客户端中使用

### Claude Desktop配置

打开Claude Desktop配置文件，添加：

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

### Cursor配置

在Cursor设置中找到MCP服务器配置，添加截图服务器。

## 6. 使用截图功能

在AI对话中，你可以要求AI截图：

- "请截取当前屏幕"
- "帮我截图"
- "截个图看看"

## 常见问题

### Q: 截图失败怎么办？

A: 确保：
1. 以管理员权限运行
2. 系统有图形界面
3. 依赖已正确安装

### Q: 如何修改截图格式？

A: 在调用工具时指定参数：
```json
{
  "tool": "take_screenshot",
  "arguments": {
    "format": "jpg",
    "quality": 80
  }
}
```

### Q: 如何查看服务器日志？

A: 服务器日志会输出到stderr，可以在启动时查看。

## 更多信息

- 查看 [README.md](README.md) 了解详细说明
- 查看 [EXAMPLES.md](EXAMPLES.md) 了解使用示例
- 查看 [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) 了解项目总结
