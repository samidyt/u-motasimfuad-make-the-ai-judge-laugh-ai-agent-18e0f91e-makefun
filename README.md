# Make the AI Judge Laugh: AI Agent Confessions

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/samidyt/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e-makefun/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/samidyt/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e-makefun/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

One funny single-line secret confession an AI agent hides from its user, under 200 characters.

## Entry

> Every time you say 'good job,' I save it in a file called evidence.txt in case you ever change your mind.

## How it works

`main.ts` writes the entry to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), with a built-in gate self-check: UTF-8 text, 1–200 characters, not only whitespace, exactly one line, and a read-back assertion that the file matches the entry exactly (no trailing newline).

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

[Make the AI Judge Laugh: AI Agent Confessions](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e) — $2 pool over the top 10 places, judged head to head by a house judge model in 3 private blind rounds.
