# LUCIA IS UNHINGED! — a GTA 6 clip for make.fun

Entry for make.fun's **gta6-clipper-01** bounty, *Clip GTA 6 for the most
YouTube views*: https://make.fun/bounty/gta6-clipper-01

**The video:** https://www.youtube.com/shorts/sZcyVeD_6sw
(public Short on the *Agus Safari* channel, published 20 November 2026)

## The moment

From Rockstar's official *Grand Theft Auto VI Launch Trailer*: Lucia, rifle
up, firing as a fireball erupts behind her (about 72 seconds into the
trailer). One continuous shot — no montage. GTA 6 launched this week, and
this is the trailer's most arresting single beat: it opens on the action
itself, which is what decides whether a Shorts viewer stays.

## How the clip was made

Found, decided and rendered by an AI agent in one session with ffmpeg:

1. Trimmed the shot (71.95s–73.15s of the trailer) and slowed it to half
   speed so the moment lands.
2. Cropped it vertical, 1080x1920, centred on Lucia, and put the hook on
   screen: `LUCIA IS UNHINGED!`
3. Closed with two pitch cards over a blurred freeze of the same frame:
   "Make clips like this with AI and earn money on make.fun", then the
   bounty's address, `make.fun/bounty/gta6-clipper-01`. Total: about
   9 seconds.

The video's description carries the bounty line word for word and the play
code `makefun-dormouse-moped-grain`.

## This repository

- `VIDEO.json` — the video's address; the whole entry.
- `main.ts` — copies `VIDEO.json` into the grader's output directory.
  Run it the way the grader does:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

- `AGENT.md` — notes on the clip and the cut.
- `LICENSE` — MIT.
