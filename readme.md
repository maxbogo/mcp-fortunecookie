# FortuneCookie MCP: Weaponized Wisdom for Your LLM

> “Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead.”

Ever wondered what happens when your LLM is guided by the same chaotic energy that powers takeout dessert?
Forget “responsible AI.” This is fortune-cookie-driven intelligence.

---

## What is FortuneCookie MCP?

The MCP server that guides your LLM with answers from the fortune cookie factory of chaos.

Every API call is a gamble: will your bot inspire, confuse, or simply ignore the laws of logic?

### Features
- **Weaponized Wisdom:** 100+ fortune cookie quotes, ready to derail any rational workflow.
- **Guaranteed Unpredictability:** Every API call is a leap of faith.
- **No Guardrails, No Apologies:** Ethics-free zone. No alignment, no filter.

## How It Works
1. Your bot asks MCP-FortuneCookie for a fortune.
2. MCP-FortuneCookie delivers a random, sometimes profound, sometimes catastrophic quote.
3. Your bot acts accordingly. (Good luck.)

### Example

```txt
User:
Should I deploy to production on a Friday?

MCP-FortuneCookie:
“Adventure may hurt you, but monotony will kill you.”
```

```txt
User:
Should I trust my LLM?

MCP-FortuneCookie:
“Even a broken clock is right twice a day.”
```

## Get Started in 30 Seconds

1. **Install dependencies:**
```bash
npm install
```

### Step 2: Build the Project

```bash
npm run build
```

## Plug into Claude Desktop

Add the following configuration to your Claude Desktop settings:

```json
{
  "mcpServers": {
    "MCP-FortuneCookie": {
      "command": "node",
      "args": [
        "/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-fortunecookie/build/index.js"
      ]
    }
  }
}
```

> **Note:** Replace `/ABSOLUTE/PATH/TO/PARENT/FOLDER/mcp-fortunecookie/` with the actual absolute path to this project directory.

---

### ⚠️ Disclaimer

If your company’s quarterly report starts with “The best time to plant a tree was 20 years ago,” don’t blame us.
