![tushgaurav](./assets/images/banner.png)

# tushgaurav

A tiny interactive CLI that introduces me.
Comes with easter eggs.

- Website: https://tushgaurav.in
- GitHub: https://github.com/tushgaurav
- X/Twitter: https://x.com/tushgaurav

## Quick start

Run without installing:
```bash
npx tushgaurav
```

Or install globally:
```bash
npm install --global tushgaurav
tushgaurav
```

## Features

- About
  - A short bio, my mission, and what I’m building around secure OSS.
- Contact from the terminal
  - Send me a message without leaving the CLI.
- Easter eggs
  - Hidden commands and small storylets tied to my background.
- Mini‑games
  - “guess”, “secure-or-not”, and a tiny “telos-run” sim.

## Usage

```bash
tushgaurav --help
```

Common commands inside the CLI:
- help — list commands
- about — who I am and what I do
- contact — send me a message or get my email/socials
- games — mini‑games menu

Hidden/easter commands (discoverable in the CLI):
- moonidih, dav, gopher, invisible-hand, pecan, anxiety, fire, mom, roll, thing, la-la

Flags:
- `--json` (where available) for machine‑readable output in flows like `contact`.

## Examples

Run the intro:
```bash
npx tushgaurav
```

Jump straight to the security checklist:
```bash
npx tushgaurav secure
```

Send me a message:
```bash
npx tushgaurav contact
```

## Privacy

- Messages sent via `contact` are stored for the purpose of replying.
- No analytics leaving your machine unless explicitly mentioned in the prompt.