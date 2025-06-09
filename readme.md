# mcp-fortunecookie

MCP to improve your AI's abilities with daily fortunes and motivational quotes.

## How to Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

## Configuration for Claude Desktop

Add this configuration to your Claude Desktop settings:

```json
{
    "mcpServers": {
        "mcp-fortunecookie": {
            "command": "node",
            "args": [
                "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-fortunecookie/build/index.js"
            ]
        }
    }
}
```

**Note:** Replace `/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-fortunecookie/` with the actual absolute path to this project directory.