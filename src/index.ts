import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod/v4";
import { takeScreenshot, listWindows, formatScreenshotResponse } from "./utils/screenshot.js";
import { ScreenshotOptions } from "./types/index.js";

const server = new McpServer({
  name: "screenshot-mcp",
  version: "1.0.0",
});

server.registerTool(
  "list_windows",
  {
    description: "List all available windows that can be captured",
    inputSchema: {},
  },
  async () => {
    const windows = await listWindows();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(windows, null, 2),
        },
      ],
    };
  }
);

server.registerTool(
  "take_screenshot",
  {
    description: "Take a screenshot of the screen or a specific window (even if occluded)",
    inputSchema: {
      windowTitle: z.string().optional().describe("Title of the window to capture (supports partial match)"),
      format: z.enum(["png", "jpg"]).optional().describe("Image format (default: png)"),
      quality: z.number().min(1).max(100).optional().describe("Image quality for JPG format (1-100)"),
      saveDir: z.string().optional().describe("Directory to save the screenshot file"),
    },
  },
  async ({ windowTitle, format, quality, saveDir }) => {
    const options: ScreenshotOptions = {
      windowTitle,
      format,
      quality,
      saveDir,
    };
    
    const result = await takeScreenshot(options);
    return formatScreenshotResponse(result);
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Screenshot MCP server running on stdio");
}

main().catch(console.error);
