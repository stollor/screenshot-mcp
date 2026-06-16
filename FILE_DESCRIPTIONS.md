# Screenshot MCP Server 项目文件说明

## 核心源代码

### src/index.ts
主入口文件，MCP服务器实现。定义了服务器的基本信息、工具注册和启动逻辑。

### src/types/index.ts
TypeScript类型定义文件，定义了项目中使用的接口和类型。

### src/utils/screenshot.ts
截图工具函数，封装了screenshot-desktop库的调用，提供了统一的截图接口。

### src/screenshot-desktop.d.ts
第三方库类型声明文件，为screenshot-desktop库提供TypeScript类型支持。

## 配置文件

### package.json
项目配置文件，定义了项目信息、依赖、脚本等。

### tsconfig.json
TypeScript编译配置文件，定义了编译选项和项目结构。

### .gitignore
Git忽略文件配置，定义了不需要版本控制的文件和目录。

### mcp-config.example.json
MCP配置示例文件，展示了如何在AI客户端中配置MCP服务器。

## 文档文件

### README.md
项目主文档，包含项目介绍、功能特点、快速开始等信息。

### EXAMPLES.md
使用示例文档，展示了各种使用场景和调用方式。

### QUICKSTART.md
快速开始指南，提供了简明的安装和使用步骤。

### PROJECT_SUMMARY.md
项目总结文档，概述了项目的功能、技术栈和开发状态。

### STRUCTURE.md
项目结构说明，展示了项目的目录结构和文件组织。

### CONFIGURATION.md
配置说明文档，详细介绍了项目的配置选项和环境要求。

### USAGE_GUIDE.md
使用指南文档，提供了详细的使用说明和故障排除方法。

### FILE_DESCRIPTIONS.md
文件说明文档，介绍了项目中各个文件的作用和用途。

## 脚本文件

### start.bat
Windows启动脚本，用于快速启动MCP服务器。

### install.bat
Windows安装脚本，用于自动安装依赖和构建项目。

### test-mcp.js
MCP服务器测试脚本，用于验证服务器的基本功能。

## 自动生成文件

### package-lock.json
依赖锁定文件，记录了确切的依赖版本。

### dist/
TypeScript编译输出目录，包含编译后的JavaScript文件。

### node_modules/
npm依赖包目录，包含项目所需的所有依赖。

## 许可证文件

### LICENSE
开源许可证文件，采用ISC许可证。
