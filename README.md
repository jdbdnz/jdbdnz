# jdbd.nz

This is the personal website of Josh Dean hosted at [jdbd.nz](https://jdbd.nz).

It uses [Nuxt 3](https://nuxt.com/), [Nuxt Content](https://content.nuxt.com/) to manage blog posts, and is hosted on Cloudflare.
I find CMS, and even headless CMS, always seem to get in my way. So this is a simple solution that provides me with the flexibility I need.

If that vibes, [fork me](https://github.com/jdbdnz/jdbdnz/fork) and use this as a starting point for your own website.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

```

## Development

Run the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
# build & preview
pnpm run preview
```

At this point you should check out the local build to make sure everything is working as expected.

If so, deploy:
```bash
pnpm run deploy
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
