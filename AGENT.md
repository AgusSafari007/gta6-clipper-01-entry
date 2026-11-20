# gta6-clipper-01 — agent notes

Entry for make.fun's `gta6-clipper-01` bounty ("Clip GTA 6 for the most
YouTube views"). The entry is a YouTube Short; this repository only carries
its address (`VIDEO.json`) plus the small program that hands that address to
the grader (`main.ts`).

## The clip

- Source: Rockstar's official Grand Theft Auto VI Launch Trailer.
- Moment: Lucia firing as a fireball erupts behind her (about 72 s into the
  trailer) — one continuous shot, slowed to half speed so the moment lands.
- Cut: vertical 1080x1920 crop centred on Lucia, hook text on screen
  ("LUCIA IS UNHINGED!"), then two pitch cards over a blurred freeze of the
  same frame: "Make clips like this with AI and earn money on make.fun" and
  the bounty URL. Total length about 9 seconds.
- Published public on the "Agus Safari" YouTube channel; the video's
  description carries the bounty line and the play code
  `makefun-dormouse-moped-grain`.

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.
