import * as path from "node:path";
import * as fs from "node:fs";
import { Window } from "node-screenshots";
import screenshot from "screenshot-desktop";
import { ScreenshotResult, ScreenshotOptions, WindowInfo } from "../types/index.js";

export async function listWindows(): Promise<WindowInfo[]> {
  const windows = Window.all();
  return windows
    .filter(w => {
      const title = w.title();
      return title && title.trim();
    })
    .map(w => ({
      id: w.id(),
      title: w.title(),
      x: w.x(),
      y: w.y(),
      width: w.width(),
      height: w.height(),
    }));
}

export async function captureWindow(
  windowTitle: string,
  options: ScreenshotOptions = {}
): Promise<ScreenshotResult> {
  try {
    const windows = Window.all();
    const targetWindow = windows.find(w => {
      const title = w.title();
      return title && title.toLowerCase().includes(windowTitle.toLowerCase());
    });

    if (!targetWindow) {
      return {
        success: false,
        error: `Window not found: ${windowTitle}`,
        timestamp: Date.now(),
      };
    }

    const image = await targetWindow.captureImage();
    const pngData = await image.toPng();
    const base64 = pngData.toString("base64");

    let savedPath: string | undefined;
    if (options.saveDir) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const safeTitle = targetWindow.title().replace(/[<>:"/\\|?*]/g, "_").substring(0, 50);
      const filename = `window-${safeTitle}-${timestamp}.png`;
      const filepath = path.join(options.saveDir, filename);

      if (!fs.existsSync(options.saveDir)) {
        fs.mkdirSync(options.saveDir, { recursive: true });
      }

      fs.writeFileSync(filepath, pngData);
      savedPath = filepath;
    }

    return {
      success: true,
      data: base64,
      mimeType: "image/png",
      savedPath,
      windowTitle: targetWindow.title(),
      timestamp: Date.now(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      timestamp: Date.now(),
    };
  }
}

export async function takeScreenshot(options: ScreenshotOptions = {}): Promise<ScreenshotResult> {
  if (options.windowTitle) {
    return captureWindow(options.windowTitle, options);
  }

  try {
    const img = await screenshot();
    const base64 = img.toString("base64");

    let savedPath: string | undefined;
    if (options.saveDir) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const format = options.format || "png";
      const filename = `screenshot-${timestamp}.${format}`;
      const filepath = path.join(options.saveDir, filename);

      if (!fs.existsSync(options.saveDir)) {
        fs.mkdirSync(options.saveDir, { recursive: true });
      }

      fs.writeFileSync(filepath, img);
      savedPath = filepath;
    }

    return {
      success: true,
      data: base64,
      mimeType: options.format === "jpg" ? "image/jpeg" : "image/png",
      savedPath,
      timestamp: Date.now(),
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      timestamp: Date.now(),
    };
  }
}

export function formatScreenshotResponse(result: ScreenshotResult): any {
  if (result.success && result.data) {
    const content: any[] = [
      {
        type: "image",
        data: result.data,
        mimeType: result.mimeType || "image/png",
      },
    ];

    if (result.windowTitle) {
      content.push({
        type: "text",
        text: "Window: " + result.windowTitle,
      });
    }

    if (result.savedPath) {
      content.push({
        type: "text",
        text: "Saved to: " + result.savedPath,
      });
    }

    return { content };
  } else {
    return {
      content: [
        {
          type: "text",
          text: "Error: " + (result.error || "Unknown error"),
        },
      ],
      isError: true,
    };
  }
}
