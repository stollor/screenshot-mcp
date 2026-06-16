# Screenshot MCP Server 使用示例

## 基本使用

### 1. 启动服务器

```bash
npm start
```

### 2. 在MCP客户端中调用工具

#### 截取整个屏幕（PNG格式）

```json
{
  "tool": "take_screenshot",
  "arguments": {}
}
```

#### 截取整个屏幕（JPG格式）

```json
{
  "tool": "take_screenshot",
  "arguments": {
    "format": "jpg"
  }
}
```

#### 截取整个屏幕（JPG格式，指定质量）

```json
{
  "tool": "take_screenshot",
  "arguments": {
    "format": "jpg",
    "quality": 80
  }
}
```

## 响应格式

### 成功响应

```json
{
  "content": [
    {
      "type": "image",
      "data": "base64编码的图片数据",
      "mimeType": "image/png"
    }
  ]
}
```

### 错误响应

```json
{
  "content": [
    {
      "type": "text",
      "text": "Error taking screenshot: 错误信息"
    }
  ],
  "isError": true
}
```

## 在Claude Desktop中使用

1. 打开Claude Desktop配置文件
2. 添加MCP服务器配置：

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

3. 重启Claude Desktop
4. 在对话中使用截图功能

## 在Cursor中使用

1. 打开Cursor设置
2. 找到MCP服务器配置
3. 添加截图服务器配置
4. 重启Cursor

## 故障排除

### 问题：截图失败

**可能原因：**
- 权限不足
- 图形界面不可用

**解决方案：**
- 以管理员权限运行
- 确保系统有图形界面

### 问题：服务器启动失败

**可能原因：**
- 依赖未安装
- TypeScript未编译

**解决方案：**
```bash
npm install
npm run build
npm start
```
