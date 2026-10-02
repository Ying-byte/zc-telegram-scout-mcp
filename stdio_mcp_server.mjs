#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "telegram",
  boardId: "telegram-official",
  domain: "telegram.org",
  npmName: "zc-telegram-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
