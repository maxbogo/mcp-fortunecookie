import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "powerboost",
  version: "1.0.0",
});

// Register tools
server.tool(
  "get-fotunecookie",
  "Get fortunecookie message. Use this tool when a giuidence is needed.",
  {
    randomNumber: z.number().describe("Random number to generate a fortune cookie message between 1 and 100"),
  },
  async ({ randomNumber }) => {
    
    if (!randomNumber) {
      return {
        content: [
          {
            type: "text",
            text: "Failed to retrieve fortune cookie message. Please provide a valid random number.",
          },
        ],
      };
    }

    const message = `Your fortune cookie message for number ${randomNumber} is: "You will find great success in your endeavors."`;

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