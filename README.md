# Sakshi Enterprises — Official Business Website

**"Protecting Spaces. Enhancing Living."**

A production-ready, Hero-Centric architectural and home-improvement website built for **Sakshi Enterprises** (Nagpur, Maharashtra, India), covering:

1. **Mosquito Net Solutions** — Fiberglass, Polyester & Aluminium mesh in Black, Grey & Cream shades with Velcro and Chain-based fitting systems for windows and doors.
2. **Aluminium Solutions** — Custom aluminium windows, multi-track sliding windows, sliding doors & interior glass partitions.
3. **Steel Fabrication** — Balcony railings, staircase railings, steel railings & custom steel manufacturing.

---

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Pre-Launch Configuration Checklist

1. **Official Phone & WhatsApp Number**:
   - Set `VITE_WHATSAPP_NUMBER` and `VITE_BUSINESS_PHONE` in `.env` (or update `src/data/businessConfig.ts`), or test live via the built-in Contact Configurator on the Contact section.
2. **Verified Customer Project Photographs**:
   - Add genuine Nagpur site installation photographs into `public/images/projects/` and register them in `VERIFIED_CUSTOMER_PROJECTS` inside `src/data/projectsData.ts`.
3. **Social Media URLs**:
   - Populate `socialLinks` in `src/data/businessConfig.ts` once official social pages are active.
