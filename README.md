# ReFlex

A redesigned student portal UI for FAST-NUCES, built as a static HTML/CSS/JS prototype (Tailwind via CDN) with a matching browser-extension bundle (`assets/content.jsx-*.js`) that overlays the new design onto the real university portal.

## Pages

- `index.html` – Dashboard (attendance summary, university info, personal/contact/family modals)
- `course-registration.html` – Course registration
- `attendance.html` – Attendance records
- `marks.html` – Marks breakdown
- `plo-report.html` – PLO report
- `transcript.html` – Academic transcript (SGPA/CGPA per term)
- `challan.html` – Fee challan records
- `fee-report.html` – Consolidated fee report
- `feedback.html` – Course feedback
- `retake.html` / `withdraw.html` / `grade-change.html` – Academic requests
- `study-plan.html` – Study plan
- `change-password.html` – Change password
- `login.html` – Login screen

## Running locally

These are plain static files — serve the folder with any static file server:

```bash
npx serve .
```

Then open `http://localhost:3000/login.html` (or any page directly).

## Project structure

- `public/` – images, icons, logo
- `styles/` – shared CSS (`app.css`)
- `scripts/` – shared JS (`main.js`)
- `assets/` – built browser-extension content script/styles (used when ReFlex runs as an overlay on the real portal, not by the static pages above)

## Team

Built by **Team Z-BASH** as an HCI project.
