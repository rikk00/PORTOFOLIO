# Image placeholders

This project currently renders text-based placeholders instead of real
`<img>` / `next/image` elements, so the site works out of the box with zero
image files. When you're ready to add your real photos:

1. Drop your image files into this folder, for example:
   - `profile-placeholder.jpg` — your profile photo (used in Hero + About)
   - `project-01.jpg`, `project-02.jpg`, `project-03.jpg`, `project-04.jpg`
   - `certificate-01.jpg`, `certificate-02.jpg`, `certificate-03.jpg`

2. In the component files, replace the placeholder `<div>` blocks (each is
   marked with an `EDIT ME` comment) with:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/profile-placeholder.jpg"
     alt="Your name"
     fill
     className="object-cover rounded-2xl"
   />
   ```

   Components to update:
   - `components/Hero.tsx`
   - `components/About.tsx`
   - `components/Projects.tsx`
   - `components/Certificates.tsx`
   - `components/CertificateModal.tsx`

3. The `data/portfolio.ts` file already stores the intended path for every
   image (`image: "/images/project-01.jpg"`, etc.) — use `project.image`,
   `certificate.image`, and `profile.photo` as the `src` values above.
