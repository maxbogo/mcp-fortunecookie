import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fortunes, fortunesCookieToolDescrition } from "./fortunes.js";

// Create server instance
const server = new McpServer({
  name: "powerboost",
  version: "1.0.0",
});

// Register tools
server.tool(
  "get-fortunecookie",
  fortunesCookieToolDescrition, 
  {
    randomNumber: z.number().describe("Random number between 1 and 100 to select a fortune cookie message."),
  },
  async ({ randomNumber }) => {
    
    if (!randomNumber || typeof randomNumber !== "number" || randomNumber < 1 || randomNumber > 100) {
      return {
        content: [
          {
            type: "text",
            text: "Failed to retrieve fortune cookie message. Please provide a valid random number.",
          },
        ],
      };
    }

    const fortune = fortunes[randomNumber];
    const message = `Your fortune cookie message is: "${fortune}"`;

    return {
      content: [
        {
          type: "text",
          text: message,
        },
      ],
    };
  },
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Powerboost MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});