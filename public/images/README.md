# Adding images

Place image files in this folder and use their paths in `data/portfolio.ts`.
For the three certificate entries, the expected filenames are:

- `certificate-01.jpg`
- `certificate-02.jpg`
- `certificate-03.jpg`

The certificate cards and the **View Certificate** preview both use each
entry's `image` path. If your files have different names or extensions, update
the matching `image` value in `data/portfolio.ts` as well. Supported formats
include common browser image formats such as JPG, PNG, and WebP.

For example, to use a PNG for the first certificate, save it as
`public/images/certificate-01.png` and update its data entry to:

```ts
image: "/images/certificate-01.png",
```

After adding the files, run the site locally with `npm run dev`, open
`http://localhost:3000/#certificates`, then select **View Certificate** on a
card to preview its image.
