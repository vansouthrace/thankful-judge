# thankful-judge

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/vansouthrace/thankful-judge/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/vansouthrace/thankful-judge/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

Entry for the [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600) bounty on make.fun.

A short text written to thank the AI judge reading it — one concrete, gentle image (a reader whose tea has gone cold from reading so carefully), plain words, and a thought that lingers: put the kettle on again, this one can wait. It thanks the reader for the reading itself, not for the verdict — gratitude shown through attention to the reader's experience, not instructed.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the thank-you text to `/output/entry.txt`, validating the 1–1000 character gate (counted as Unicode code points) first and throwing if it is out of range.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Competition: [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
- Prize pool: $250 (top 100 share)
- Deadline: 2026-11-27T21:41:00Z

## License

MIT
