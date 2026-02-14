# Portfolio Website Design Plan

A complete design and structure plan for a modern, accessible portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This document serves as the single source of truth for sections, UX patterns, branding, and implementation guidance.

---

## 1. Site Structure (Sitemap)

```
/                    → Homepage (single-page or landing with anchor sections)
/about               → About (or #about on homepage)
/projects            → Portfolio / Projects listing
/projects/[slug]     → Individual project case study
/testimonials        → Testimonials (or #testimonials on homepage)
/blog                → Blog index (optional)
/blog/[slug]         → Blog post
/contact             → Contact (or #contact on homepage)
```

**Recommended approach:** Single-page scroll with anchor navigation (`#home`, `#about`, `#projects`, `#testimonials`, `#blog`, `#contact`) for a concise feel (like Vo Hoang Kiet), with dedicated routes for `/projects/[slug]` and `/blog/[slug]` for deep content.

---

## 2. Section-by-Section Outline

### 2.1 Homepage

**Purpose:** First impression — who you are, what you do, and one clear next step.

| Element | Description |
|--------|--------------|
| **Hero** | Full-viewport or near full-viewport section. Headline (name or role), one-line tagline, and a single primary CTA (e.g. “View my work”, “See projects”, “Get in touch”). Optional: subtle background (gradient, pattern, or low-contrast visual). |
| **Social / credibility** | Small strip: LinkedIn, GitHub, Twitter/X, etc. Optional: “Trusted by” or “Featured in” logos if applicable. |
| **Featured projects** | 2–4 project thumbnails with title and short descriptor. Each links to project detail or case study. Keeps homepage scannable and drives traffic to portfolio. |
| **Secondary CTA** | E.g. “Read more about me” (→ About) or “Let’s talk” (→ Contact). |

**Layout inspiration:**  
- **Vo Hoang Kiet–style:** Minimal hero, then a grid of recent projects as the main content.  
- **Alternative:** Hero + 3-column or 2×2 project grid, then “About” teaser and “Contact” CTA.

---

### 2.2 About Section

**Purpose:** Background, skills, and professional journey in a scannable format.

| Subsection | Content |
|------------|--------|
| **Headline** | e.g. “About me” / “Who I am”. |
| **Short bio** | 2–4 sentences: who you are, what you focus on, and what you care about. |
| **Background / journey** | Timeline or short paragraphs: education, key roles, turning points. Optional: “Before → After” or “How I got here”. |
| **Skills** | Grouped by category (e.g. Frontend, Backend, Design, Tools). Use tags, bars, or icons. Keep it current and honest. |
| **Values or approach** | 3–5 short points (e.g. “User-first”, “Clean code”, “Clear communication”). |
| **Optional** | Photo (professional but approachable), “Download CV” or “View resume” link. |

**UX:** Easy to skim (headings, short blocks, bullets). Consider a two-column layout on desktop (photo + text).

---

### 2.3 Portfolio / Projects Section

**Purpose:** Showcase work with thumbnails and short descriptions; link to full case studies.

| Element | Description |
|--------|--------------|
| **Section title** | e.g. “Selected work”, “Projects”, “Case studies”. |
| **Filters (optional)** | If you have many projects: by type (Web, Mobile, Branding), by role, or by tech. Use chips or a small dropdown. |
| **Project cards** | Thumbnail (optimized image), project title, 1–2 line description, tags (tech or category). CTA: “View project” or “View case study”. |
| **Layout** | Grid (2–3 columns desktop, 1–2 tablet, 1 mobile). Consistent card height or masonry for variety. |
| **Empty state** | If filters return no results: “No projects match. Clear filters.” |

**Project detail / case study page (`/projects/[slug]`):**

| Subsection | Content |
|------------|--------|
| **Header** | Project title, client/context (if public), year, and tags. |
| **Hero image** | Main deliverable (e.g. app screenshot, website mockup). |
| **Challenge** | 1–2 paragraphs: problem, constraints, goals. |
| **Solution** | Your role, approach, key decisions (design, tech, process). |
| **Process (optional)** | Sketches, wireframes, iterations. |
| **Results** | Outcomes: metrics, quotes, or “Shipped features: …”. |
| **Tech / tools** | Stack and tools used. |
| **Links** | Live site, repo (if public), or “Case study available on request”. |
| **Navigation** | “Next project” / “Back to all projects”. |

---

### 2.4 Testimonials Section

**Purpose:** Social proof through quotes from clients or colleagues.

| Element | Description |
|--------|--------------|
| **Section title** | e.g. “What people say”, “Testimonials”, “Kind words”. |
| **Quote cards** | Each card: quote (2–4 sentences), **name**, **title/role**, and **photo** (optional but recommended). |
| **Layout** | Carousel/slider on mobile; 2–3 columns or horizontal scroll on desktop. Optional: one featured large quote + smaller ones. |
| **Attribution** | Always name + title; link to LinkedIn or company if appropriate. |

**Design tip:** Use a distinct background (e.g. subtle tint or card style) so the section feels like a “break” from project content. Large, elegant quotation marks or a simple border can reinforce the quote.

---

### 2.5 Blog Section (Optional)

**Purpose:** Share thoughts, how-tos, or industry insights; supports SEO and authority.

| Element | Description |
|--------|--------------|
| **Blog index** | List of posts: title, short excerpt, date, optional thumbnail. Pagination or “Load more” if many posts. |
| **Search** | If portfolio + blog are extensive: search by keyword (e.g. client-side filter or server-side search). |
| **Categories/tags** | Optional: filter by topic (e.g. “Design”, “React”, “Career”). |
| **Post page** | Title, date, author, body (markdown or rich text). Optional: table of contents, “Share”, “Related posts”. |

**Scope:** Start with 3–5 posts; add search when you have 10+ posts or many projects.

---

### 2.6 Contact Section

**Purpose:** Make it easy for clients and collaborators to reach you.

| Element | Description |
|--------|--------------|
| **Headline** | e.g. “Get in touch”, “Let’s work together”. |
| **Form** | Fields: Name, Email, Subject (or dropdown: “Project inquiry”, “Speaking”, “Other”), Message. Submit → thank-you message or redirect. Keep required fields minimal. |
| **Or email link** | If you prefer no form: clear “Email me at hello@example.com” with `mailto:`. |
| **Social links** | Icons + labels: LinkedIn, GitHub, Twitter/X, Dribbble, etc. Open in new tab, `rel="noopener noreferrer"`. |
| **Response expectation** | e.g. “I usually reply within 24–48 hours.” |

**UX:** One column on mobile; form and social side-by-side on desktop if space allows.

---

## 3. Design System

### 3.1 Color Scheme Suggestion

**Option A — Modern neutral (recommended baseline)**  
- **Primary background:** `#FAFAFA` (light) / `#0F0F0F` (dark)  
- **Surface/cards:** `#FFFFFF` / `#1A1A1A`  
- **Primary text:** `#171717` / `#EDEDED`  
- **Secondary text:** `#737373` / `#A3A3A3`  
- **Accent (CTAs, links):** `#2563EB` (blue) or `#7C3AED` (violet)  
- **Accent hover:** Slightly darker or lighter shade  

**Option B — Warm professional**  
- Background: off-white `#F8F6F3`  
- Accent: terracotta `#C45C3E` or olive `#6B7B5C`  

**Option C — Bold creative**  
- Dark base `#0D0D0D`  
- Accent: bright `#00D9FF` or `#FF6B35`  

Use CSS variables (e.g. in `globals.css`) for `--background`, `--foreground`, `--accent`, `--muted` so dark/light mode and theming stay consistent.

### 3.2 Typography

- **Headings:** One strong sans (e.g. Geist Sans, already in layout, or Inter, Plus Jakarta Sans). Use a clear hierarchy: `h1` (hero), `h2` (section), `h3` (card/subsection).  
- **Body:** Same family or a readable serif for long copy (e.g. blog).  
- **Mono:** For code snippets or technical tags (Geist Mono already available).  
- **Sizes:** At least 16px base body; 1.25–1.5 line-height for readability.

### 3.3 Spacing & Consistency

- Use a 4px or 8px grid (Tailwind’s scale works well).  
- Section padding: consistent vertical rhythm (e.g. `py-16` or `py-24`).  
- Max-width for content: e.g. `max-w-6xl` or `max-w-7xl` centered.

### 3.4 Components to Unify

- **Buttons:** Primary (filled accent), secondary (outline), ghost (text only). Same border-radius (e.g. `rounded-lg`).  
- **Cards:** Same shadow/border, padding, and hover state for project and testimonial cards.  
- **Links:** Underline on hover or accent color; focus ring for accessibility.

---

## 4. User Experience (UX) Guidelines

### 4.1 Navigation

- **Sticky header** with logo/name (links to `#home` or `/`) and nav links: About, Projects, Testimonials, Blog (if present), Contact.  
- **Mobile:** Hamburger menu that opens to full-screen or drawer with same links.  
- **Active section:** Optional highlight for current section (e.g. when scrolling single-page).  
- **Footer:** Repeat key links + social + optional “Back to top”.

### 4.2 Call-to-Action (CTA)

- **Primary CTA:** One main action per section or view (e.g. “View project”, “Contact me”). Use accent color and sufficient size.  
- **Secondary:** “Learn more”, “See all projects”. Clearly secondary (outline or muted).  
- Buttons should be descriptive (“View case study” rather than “Click here”).

### 4.3 Search

- Add **search** when the site has many items (e.g. 10+ projects or 10+ blog posts).  
- Place in header or above project/blog list.  
- Scope: project titles/descriptions and blog titles/excerpts. Can start client-side (filter) and move to API/search later.

### 4.4 Performance & Accessibility

- **Images:** Use Next.js `Image` with appropriate `sizes`; prefer WebP/AVIF; lazy-load below the fold.  
- **Responsive:** Mobile-first; breakpoints for tablet and desktop.  
- **Accessibility:** Semantic HTML (`header`, `main`, `nav`, `section`, `article`), `alt` on images, focus states, sufficient color contrast (WCAG AA). Prefer `prefers-reduced-motion` for animations.  
- **Loading:** Skeleton or simple loading state for any async content.

---

## 5. Example References & Layout Ideas

| Reference | What to take away |
|-----------|-------------------|
| **Vo Hoang Kiet** | Concise homepage; recent projects front and center; minimal clutter; strong typography. |
| **Case study layout** | Clear structure: Challenge → Solution → Results; hero image; tech stack; next/previous project. |
| **Testimonial card** | Quote prominent; name, title, and photo together; card or block with distinct background. |
| **Single-page + deep links** | Smooth scroll to `#about`, `#projects`, etc.; dedicated URLs for each project and blog post for sharing and SEO. |

---

## 6. Technical Implementation Notes (Next.js + Tailwind)

- **Routes:**  
  - `app/page.tsx` → Homepage (sections as components or inline).  
  - `app/about/page.tsx` or section in homepage.  
  - `app/projects/page.tsx` → Project list.  
  - `app/projects/[slug]/page.tsx` → Case study (data from CMS, MD, or JSON).  
  - `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` if blog is included.  
- **Components:** Reusable pieces: `Header`, `Footer`, `ProjectCard`, `TestimonialCard`, `ContactForm`, `CTAButton`.  
- **Data:** Projects and blog posts can live in JSON/MD under `content/` or `data/` and be read at build time.  
- **Forms:** Contact form can use a server action (Next.js) or third-party (e.g. Formspree, getform.io) with a thank-you state.  
- **Analytics:** Add later (e.g. Cloudflare Web Analytics, Vercel Analytics) without blocking the design plan.

---

## 7. Checklist Before Launch

- [ ] All sections present and content filled (no lorem ipsum in production).  
- [ ] Navigation works on mobile and desktop.  
- [ ] All CTAs and links work (internal + external).  
- [ ] Images optimized and with `alt` text.  
- [ ] Contact form submits and shows confirmation (or mailto works).  
- [ ] Metadata (title, description) set per page for SEO.  
- [ ] Favicon and optional OG image.  
- [ ] Test with keyboard and one screen reader pass.  
- [ ] Check contrast and touch targets (min 44px) on mobile.

---

This plan is aligned with your stack (Next.js 16, React 19, Tailwind 4) and can be implemented section by section. Start with Homepage + About + Projects + Contact, then add Testimonials and Blog as needed.
