# jdbd.nz

This is the personal website of Josh Dean hosted at [jdbd.nz](https://jdbd.nz).

It uses [Nuxt 3](https://nuxt.com/) and [Nuxt Content](https://content.nuxt.com/) for the website and blog, it is hosted on Cloudflare and using [Tailwind CSS](https://tailwindcss.com/) for styling.

I prefer the flexibility of a web app over the conveniences of traditional CMSs, so this setup allows me to easily adapt my site as needed.

If this resonates with you, feel free to [fork it](https://github.com/jdbdnz/jdbdnz/fork) and use it as a starting point for your own website.

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
