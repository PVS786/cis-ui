# Pages Specification — CONSERVVE INFRA SOLUTIONS

> Section-by-section blueprint for every page. Agents use this as the authoritative
> brief when building pages. Copy is draft — refine to final brand voice before launch.

---

## Page 1 — Home (`/`)

**Goal:** Establish authority, communicate what CONSERVVE does, and drive enquiries.  
**Primary CTA:** "Start Your Project"  
**Secondary CTA:** "View Our Portfolio"

### Sections (in order)

#### 1.1 Hero Section
- **Component:** `HeroSection`
- **Layout:** Full viewport height. Background: high-quality construction/infrastructure photography with Navy overlay (60% opacity).
- **Content:**
  - Label: `CONSERVVE INFRA SOLUTIONS` (Golden Beige, Gotham 500, tracking-widest)
  - H1: `Building Infrastructure.  
    Acquiring Land.  
    Delivering Excellence.`
  - Body: `India's trusted partner for construction management and strategic land acquisition. We bring precision, integrity, and expertise to every project.`
  - CTA 1 (Primary): "Start Your Project" → `/contact`
  - CTA 2 (Ghost): "View Our Portfolio" → `/projects`

#### 1.2 Stats Bar
- **Component:** `StatsBar`
- **Layout:** Full-width dark Navy band. 4 stats in a row (2×2 on mobile).
- **Stats (placeholder — update with real data):**
  - `23+` Landmark Projects
  - `15+` Years of Experience
  - `₹500Cr+` Project Value Managed
  - `98%` Client Satisfaction

#### 1.3 Services Overview
- **Component:** `ServicesGrid`
- **Layout:** 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Title:** `What We Do`
- **Subtitle:** `End-to-end solutions across construction and land — from first site visit to final handover.`
- **Services (sourced from `services.json`):** 6 service cards with icon, title, 2-line description, golden accent border

#### 1.4 Featured Projects
- **Component:** `FeaturedProjects`
- **Layout:** Asymmetric 2-column grid with one large featured card + 2 smaller cards
- **Title:** `Our Work Speaks for Itself`
- **Subtitle:** `A selection of landmark projects delivered across India.`
- **CTA:** "View All Projects" → `/projects`

#### 1.5 Why Choose CONSERVVE
- **Layout:** 2-column — large image left, content right (reversed on mobile)
- **Label:** `WHY CONSERVVE`
- **Title:** `Precision. Integrity. Partnership.`
- **Body:** `We are not a contractor you hire. We are the partner you build a legacy with. Every project we undertake is backed by rigorous due diligence, transparent reporting, and a team that treats your project as our own.`
- **3 USP Points:** (icon + title + short description)
  1. Full Lifecycle Management
  2. Regulatory & Legal Expertise
  3. On-Time, On-Budget Delivery

#### 1.6 Testimonials Strip
- **Component:** `TestimonialsSlider`
- **Layout:** Auto-scrolling carousel, Navy background, Golden Beige quote marks
- **Source:** `testimonials.json`

#### 1.7 CTA Banner
- **Component:** `CTABanner`
- **Layout:** Full-width Navy background with centred content
- **Title:** `Ready to Build Something Lasting?`
- **Body:** `Talk to our team today. We'll assess your project and show you exactly how CONSERVVE can deliver.`
- **CTA:** "Talk to Our Team" → `/contact`

---

## Page 2 — About Us (`/about`)

**Goal:** Build trust, humanise the brand, communicate company ethos and history.

### Sections

#### 2.1 Page Hero
- **Component:** `PageHero`
- **Background:** Photography overlay, Navy tint
- **Title:** `Built on Trust. Driven by Excellence.`
- **Breadcrumb:** Home → About Us

#### 2.2 Company Story
- **Layout:** 2-column — text left, image right
- **Title:** `Our Story`
- **Body:** `CONSERVVE INFRA SOLUTIONS was founded with a singular belief: that India's infrastructure growth deserves partners who combine technical rigour with genuine commitment. Since our founding, we have delivered [X] projects and earned the trust of clients who demand nothing less than excellence.`

#### 2.3 Stats Bar
- **Component:** `StatsBar` (reused from Home)

#### 2.4 Our Values
- **Component:** `CompanyValues`
- **Layout:** 2×2 grid of value cards (icon + title + description)
- **Values:**
  1. **Integrity** — We operate with complete transparency. No hidden costs, no surprises.
  2. **Precision** — Every decision is data-driven. We measure twice, build once.
  3. **Partnership** — Your success is our success. We are invested in your outcomes.
  4. **Excellence** — Good enough is not our standard. We deliver what we promise, always.

#### 2.5 Leadership Team
- **Component:** `TeamGrid`
- **Layout:** 3-column grid of team member cards
- **Source:** `team.json`
- **Each Card:** Photo, Name, Title, 2-line bio, optional LinkedIn link

#### 2.6 CTA Banner

---

## Page 3 — Services (`/services`)

**Goal:** Detail the full scope of services. Drive specific enquiries.

### Sections

#### 3.1 Page Hero
- **Title:** `Comprehensive Infrastructure Solutions`
- **Body:** `From groundbreaking to handover — we manage every phase with expertise and accountability.`

#### 3.2 Services Detail Grid
- **Component:** `ServiceDetail`
- **Layout:** Alternating left-right two-column layout (icon/image + content)
- **Services List:**
  1. **Construction Management** — End-to-end project oversight from planning through completion. We manage contractors, timelines, budgets, and quality.
  2. **Land Acquisition** — Strategic identification, due diligence, negotiation, and legal processing of land assets.
  3. **Project Planning & Feasibility** — Pre-construction analysis including site surveys, cost modelling, and regulatory review.
  4. **Infrastructure Development** — Roads, utilities, drainage, and civil works for residential and commercial developments.
  5. **Compliance & Regulatory Management** — Navigating permits, approvals, and environmental clearances with expert precision.
  6. **Post-Construction Management** — Snagging, defect liability management, handover documentation, and ongoing facility management.

#### 3.3 Process Overview
- **Layout:** Numbered horizontal timeline (vertical on mobile)
- **Title:** `How We Work`
- **Steps:**
  1. Initial Consultation & Brief
  2. Site Assessment & Feasibility
  3. Planning & Approvals
  4. Execution & Oversight
  5. Quality Review & Handover

#### 3.4 CTA Banner

---

## Page 4 — Projects (`/projects`)

**Goal:** Demonstrate capability and range through completed work.

### Sections

#### 4.1 Page Hero
- **Title:** `Our Portfolio`
- **Body:** `23 landmark projects. Delivered on time, within budget, beyond expectation.`

#### 4.2 Projects Filter Bar
- **Component:** Filter buttons by category (All, Construction, Land Acquisition, Infrastructure)
- **Note:** Client-side filtering only — no server interaction needed

#### 4.3 Projects Grid
- **Component:** `ProjectsGrid` → `ProjectCard`
- **Layout:** 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
- **Source:** `projects.json`
- **Each Card:** Project image, category badge, project name, location, brief description, year

#### 4.4 CTA Banner

---

## Page 5 — Land Acquisition (`/land-acquisition`)

**Goal:** Position CONSERVVE as specialists in land — a key service differentiator.

### Sections

#### 5.1 Land Acquisition Hero
- **Component:** `LandAcquisitionHero`
- **Title:** `Strategic Land Acquisition. Zero Surprises.`
- **Body:** `We identify, evaluate, negotiate, and secure land assets with the rigour and transparency your investment demands.`
- **CTA:** "Enquire About Land" → `/contact`

#### 5.2 Why Land Acquisition Matters
- **Layout:** 2-column — content left, aerial photography right
- **Title:** `Land Is the Foundation of Every Great Project`
- **Body:** Explain the complexity of land acquisition in India — legal title checks, revenue records, encumbrance certificates, conversion, and negotiation.

#### 5.3 Land Acquisition Process
- **Component:** `LandProcess`
- **Layout:** Vertical numbered step list with icons
- **Steps:**
  1. **Site Identification** — Market research, location strategy, and opportunity mapping.
  2. **Title Due Diligence** — Comprehensive legal title verification, encumbrance checks, and ROR review.
  3. **Valuation & Negotiation** — Independent valuation, structured negotiation, and deal structuring.
  4. **Documentation & Registration** — Sale deed, registration, mutation, and all statutory filings.
  5. **Handover & Reporting** — Full documentation package with title summary report.

#### 5.4 Legal Compliance Callout
- **Layout:** Navy background band with 3 horizontal trust badges
- **Badges:** "Clear Title Guarantee", "Regulatory Compliance", "Full Documentation"

#### 5.5 CTA Banner

---

## Page 6 — Contact (`/contact`)

**Goal:** Convert visitors into enquiries. Make it frictionless to reach the team.

### Sections

#### 6.1 Page Hero (simple)
- **Title:** `Talk to Our Team`
- **Body:** `Tell us about your project. We'll respond within 24 hours.`

#### 6.2 Contact Split
- **Layout:** 2-column — form left, contact info right (1 col mobile, stacked)

**Contact Form (left):**
- Component: `ContactForm`
- Fields: Name, Company, Email, Phone, Service Interest (dropdown), Message
- Submit CTA: "Send Enquiry"
- Form handler: Static form (use Formspree or Netlify Forms for serverless submission)
- Validation: Zod schema + React Hook Form

**Contact Info (right):**
- Component: `ContactInfo`
- Office address
- Phone number
- Email address
- Business hours
- Optional: Embedded map (Google Maps iframe)

---

## Page 7 — Testimonials (`/testimonials`)

**Goal:** Social proof. Let clients speak for CONSERVVE.

### Sections

#### 7.1 Page Hero
- **Title:** `What Our Clients Say`

#### 7.2 Testimonials Grid
- **Layout:** 2-column masonry-style grid (1 col mobile)
- **Source:** `testimonials.json`
- **Each Card:** Quote, client name, company/role, optional project reference

#### 7.3 CTA Banner

---

## Page 8 — Team (`/team`)

**Goal:** Humanise the company. Build trust through individual expertise.

### Sections

#### 8.1 Page Hero
- **Title:** `Meet the Team`
- **Body:** `The professionals behind every CONSERVVE project.`

#### 8.2 Team Grid
- **Component:** `TeamGrid`
- **Layout:** 3-column grid
- **Source:** `team.json`
- **Each Card:** Photo, name, title, department, short bio, LinkedIn (optional)

#### 8.3 Culture Section
- **Layout:** Full-width, light grey background, centred text
- **Title:** `Our Culture`
- **Body:** `We hire for excellence and grow through partnership. Every member of the CONSERVVE team is empowered to make decisions, take ownership, and deliver results.`

#### 8.4 CTA Banner
