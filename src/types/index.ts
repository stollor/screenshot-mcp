export interface ScreenshotOptions {
  windowTitle?: string;
  format?: "png" | "jpg";
  quality?: number;
  saveDir?: string;
}

export interface ScreenshotResult {
  success: boolean;
  data?: string;
  mimeType?: string;
  savedPath?: string;
  windowTitle?: string;
  error?: string;
  timestamp?: number;
}

export interface WindowInfo {
  id: number;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface McpToolResponse {
  content: Array<{
    type: "text" | "image";
    text?: string;
    data?: string;
    mimeType?: string;
  }>;
  isError?: boolean;
}
