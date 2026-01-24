# JuaGig Product Requirements Document (PRD)

---

| **Version** | **Date** | **Author/Owner** | **Stakeholders** |
|-------------|----------|------------------|------------------|
| 1.0 | January 24, 2026 | Product Team | Engineering, Design, Marketing, Investors, Operations |

**Executive Summary:** JuaGig is a mobile-first hyper-local services marketplace designed for Kenya, connecting clients with vetted service providers for in-person tasks such as home repairs, beauty services, cleaning, and skilled trades. Built on M-Pesa payments and optimized for low-bandwidth environments, JuaGig addresses the fragmented gig economy by providing transparency, trust, and economic empowerment for Kenya's 1.2 million gig workers.

---

## 1. Document Overview

### 1.1 Purpose

JuaGig's mission is to be Kenya's leading hyper-local marketplace for in-person, location-specific services. The platform connects urban and peri-urban clients with verified, skilled service providers — from plumbers and electricians to hairdressers and tutors — enabling seamless booking, secure M-Pesa payments, and transparent ratings. JuaGig empowers providers (especially youth and women) with income opportunities while giving clients reliable, trustworthy access to essential services.

### 1.2 Scope

#### In-Scope (MVP — Phase 1)
- Mobile-first PWA (React/Vite) optimized for Android
- Provider and client registration with phone OTP verification
- ID/skill verification workflow for providers
- Category-based service browsing and geolocation search
- Service booking with M-Pesa STK Push payments
- In-app messaging between clients and providers
- Ratings and reviews system
- Provider dashboard (earnings, bookings, availability)
- Client dashboard (booking history, saved providers)
- Admin panel for verification and dispute management
- Bilingual support (English and Swahili)

#### Out-of-Scope (Phase 2+)
- AI-powered provider matching and recommendations
- In-app chat summarization and translation
- Automated fraud detection
- Native iOS/Android apps
- Subscription/premium provider tiers
- Insurance and guarantee programs
- Expansion beyond Nairobi metro area
- Integration with bank accounts and Airtel Money

### 1.3 Key Assumptions
- **APIs:** Safaricom Daraja API for M-Pesa integration is available and stable
- **Partnerships:** Potential partnerships with technical training institutions (e.g., NITA, KIBT) for provider verification
- **Geography:** Initial launch limited to Nairobi and satellite towns (Kiambu, Machakos, Kajiado)
- **Infrastructure:** Target users have access to 3G/4G connectivity and smartphones
- **Regulatory:** Compliance with Kenya Data Protection Act 2019

### 1.4 Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Jan 24, 2026 | Product Team | Initial PRD creation |

---

## 2. Problem Statement

### 2.1 Context

Kenya's informal sector generated 90% of all new jobs in 2024, creating 703,700 positions (KNBS Economic Survey, 2025). The gig economy has grown to an estimated 1.2 million digital workers and $345 million market size (WEF/Algum Africa Capital, 2023). However, finding reliable local service providers remains fragmented, trust-deficient, and inefficient.

### 2.2 Core Problems

| Problem | Impact | Supporting Data |
|---------|--------|-----------------|
| **Fragmented Discovery** | Clients rely on word-of-mouth or unverified classifieds to find service providers | 81% of non-agricultural employment is informal with no standard discovery mechanism (ILO, 2024/25) |
| **Trust Deficit** | No standardized verification leads to quality inconsistency and fraud concerns | E-commerce fraud investigations increasing; platforms like Jiji face trust issues (Capital FM, 2025) |
| **Youth Unemployment Crisis** | Young Kenyans struggle to find formal employment despite having skills | 67% youth unemployment (ages 15-34), >1M youth entering job market annually (FKE, 2025) |
| **Payment Friction** | Cash-based transactions create disputes and safety concerns | 37.9M active M-Pesa users process KSh 38.3T annually; digital adoption is ready (Safaricom FY2025) |
| **Gender Barriers** | Women providers face safety concerns and limited visibility | Female providers underrepresented in informal service platforms |

---

## 3. Goals & Objectives

### 3.1 Business Goals
- Establish JuaGig as the trusted local services marketplace in Nairobi
- Build a sustainable commission-based revenue model (10-15% per transaction)
- Create employment documentation trail for informal workers
- Attract Series A funding by demonstrating product-market fit

### 3.2 User Goals

**Clients:**
- Find verified, nearby service providers within 5 minutes
- Book and pay securely without cash
- Have recourse for poor service through ratings and dispute resolution

**Providers:**
- Gain visibility and access to a steady stream of clients
- Receive secure, timely payments via M-Pesa
- Build a portable reputation through verified reviews

### 3.3 SMART Key Metrics (Year 1)

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Monthly Active Users (MAU) | 50,000 | By Q2 2027 |
| Registered Providers | 5,000 | By Q2 2027 |
| Female Providers | ≥30% of total | Ongoing |
| Booking Conversion Rate | 25% (search-to-booking) | By Q4 2026 |
| Provider Retention (6-month) | 60% | Ongoing measurement |
| Average Commission Rate | 12% | From launch |
| Customer Acquisition Cost (CAC) | ≤KSh 500 | Target for sustainability |
| Average Provider Rating | ≥4.2/5 | Ongoing |

---

## 4. Market Analysis

### 4.1 Target Market

**Demographics:**
- **Primary:** Urban middle-class homeowners and renters in Nairobi (ages 25-45)
- **Secondary:** Small businesses needing on-demand services
- **Provider Pool:** Youth (18-34), skilled trades workers, beauty/personal care professionals

**Mobile Context (CA Kenya, Sep 2025):**
| Metric | Value | Source |
|--------|-------|--------|
| Mobile Penetration | 149.4% | CA Kenya, Q1 FY2025/26 |
| Smartphone Penetration | 85.2% | CA Kenya, Sep 2025 |
| Mobile Subscriptions | 78.3 million | CA Kenya, Sep 2025 |
| Smartphones Connected | 59.5% of all devices | CA Kenya, Sep 2025 |
| Active M-Pesa Users | 37.9 million | Safaricom H1 FY2026 |
| Mobile Money Subscriptions | 47.72 million | KBC, Jun 2025 |

### 4.2 Competitive Landscape

| Competitor | Type | Strengths | Weaknesses |
|------------|------|-----------|------------|
| **Jiji/PigiaMe** | Classifieds | High traffic (1.28M monthly visits Dec 2025), brand awareness | No verification, quality issues, fraud concerns |
| **Lynk** | Services Marketplace | Vetted professionals, end-to-end | Acquired, limited category expansion |
| **Ziada/Kazilinks** | Services Apps | Local focus, multiple categories | Limited scale, low awareness |
| **Facebook Groups/WhatsApp** | Informal | Large user base, free | No verification, no payment integration, fragmented |
| **International (Thumbtack, TaskRabbit)** | Not in Kenya | Strong technology | No Kenya presence, no M-Pesa |

### 4.3 SWOT Analysis

| **Strengths** | **Weaknesses** |
|---------------|----------------|
| M-Pesa native integration | New brand, unproven |
| Mobile-first design for local context | Limited initial geographic coverage |
| Bilingual (Swahili/English) | Dependency on Safaricom API |
| Provider verification reduces fraud | Initial provider acquisition costs |

| **Opportunities** | **Threats** |
|-------------------|-------------|
| 1.2M gig workers need formalization | Well-funded competitor entry |
| 67% youth unemployment = provider supply | Regulatory changes (digital services tax) |
| Growing smartphone/M-Pesa adoption | Provider quality consistency |
| Partnerships with training institutions | Network effects favor first-movers |

---

## 5. Personas

### Persona 1: **John Mwangi** — Urban Homeowner Client

| Attribute | Detail |
|-----------|--------|
| **Age** | 38 |
| **Location** | Kilimani, Nairobi |
| **Occupation** | Bank Manager |
| **Tech Level** | High (smartphone user, M-Pesa power user) |
| **Goals** | Find reliable fundi for home repairs without relying on unreliable contacts; pay conveniently |
| **Pain Points** | Burned before by unvetted workers; hates cash negotiations; wants accountability |
| **Behaviors** | Researches reviews, willing to pay premium for quality, books via phone |

### Persona 2: **Brian Otieno** — Youth Provider

| Attribute | Detail |
|-----------|--------|
| **Age** | 24 |
| **Location** | Kayole, Nairobi |
| **Occupation** | Freelance Electrician (NITA-certified) |
| **Tech Level** | Medium (Android smartphone, uses WhatsApp/M-Pesa daily) |
| **Goals** | Get steady clients, build reputation, increase income |
| **Pain Points** | Relies on word-of-mouth, inconsistent work, clients don't pay on time |
| **Behaviors** | Active on social media, eager to learn new platforms, prefers mobile to laptop |

### Persona 3: **Grace Wanjiku** — Female Provider

| Attribute | Detail |
|-----------|--------|
| **Age** | 31 |
| **Location** | Githurai, Nairobi |
| **Occupation** | Hairdresser & Beauty Specialist |
| **Tech Level** | Medium (uses Facebook, WhatsApp for business) |
| **Goals** | Grow her client base beyond her neighborhood, book appointments efficiently |
| **Pain Points** | Safety concerns when visiting new clients, no-shows, payment disputes |
| **Behaviors** | Prefers working with female clients, wants profile visibility, values ratings |

---

## 6. Functional Requirements (MoSCoW)

### 6.1 Must-Have (MVP)

#### 6.1.1 User Registration & Authentication

**Description:** Secure onboarding for clients and providers via phone OTP.

**Acceptance Criteria:**
- Users register with phone number + OTP verification (Safaricom/Airtel)
- Providers must upload national ID and skill certification photos
- Password recovery via OTP

**User Story:**
> As a new user, I want to register with my phone number so that I can quickly start using the platform without needing an email.

**Acceptance Test:**
1. User enters valid Kenyan phone number (+254...)
2. System sends OTP within 30 seconds
3. User enters correct OTP
4. User is redirected to profile completion

---

#### 6.1.2 Provider Verification Workflow

**Description:** Admin-managed verification of provider credentials.

**Acceptance Criteria:**
- Providers upload ID + skill documentation
- Admin dashboard shows pending verifications
- Providers notified of approval/rejection via SMS
- Verified badge displayed on approved profiles

**User Story:**
> As a provider, I want to get verified so that clients trust my services and I appear higher in search results.

**Acceptance Test:**
1. Provider uploads ID photo and NITA certificate
2. Admin reviews documents within 48 hours
3. Provider receives SMS: "Congratulations! Your JuaGig profile is now verified."
4. Profile shows verified badge

---

#### 6.1.3 Service Discovery & Search

**Description:** Browse and search services by category, location, and ratings.

**Acceptance Criteria:**
- Categories: Plumbing, Electrical, Cleaning, Beauty, Auto, Tutoring, Moving, Handyman
- Geolocation-based search (within 5km, 10km, 20km radius)
- Filter by rating, price range, availability
- Search by keyword

**User Story:**
> As a client, I want to find a plumber near me so that I can get my sink fixed today.

**Acceptance Test:**
1. Client selects "Plumbing" category
2. Client allows location access or enters address
3. System displays verified plumbers within selected radius sorted by rating
4. Results load within 3 seconds on 3G

---

#### 6.1.4 Booking & Scheduling

**Description:** Request and confirm service appointments.

**Acceptance Criteria:**
- Client selects provider, service type, date/time
- Provider receives notification and accepts/declines
- Confirmed bookings appear in both dashboards
- Booking reminder 24h and 1h before appointment

**User Story:**
> As a client, I want to book a specific time slot so that the provider arrives when I'm available.

**Acceptance Test:**
1. Client selects provider "Brian Otieno"
2. Chooses "Electrical Repair" for tomorrow at 2pm
3. Provider receives push notification
4. Provider accepts; client receives confirmation

---

#### 6.1.5 M-Pesa Payment Integration

**Description:** Secure payment via Safaricom Daraja STK Push.

**Acceptance Criteria:**
- Client pays via STK Push after booking confirmation
- Funds held in escrow until service completion
- Provider receives payout within 24h after completion
- Failed payments retry once, then notify user

**User Story:**
> As a client, I want to pay via M-Pesa so that I don't need cash and the transaction is recorded.

**Acceptance Test:**
1. Client confirms booking for KSh 2,500
2. STK Push notification appears on client's phone
3. Client enters M-Pesa PIN
4. Booking status updates to "Paid"

---

#### 6.1.6 Ratings & Reviews

**Description:** Post-service feedback system.

**Acceptance Criteria:**
- Clients rate providers (1-5 stars) after service completion
- Written reviews (optional, max 500 characters)
- Providers can respond to reviews
- Aggregate rating shown on profile

**User Story:**
> As a client, I want to rate my provider so that others know about my experience.

**Acceptance Test:**
1. After service marked complete, client receives review prompt
2. Client gives 4 stars and writes "Arrived on time, good work"
3. Review appears on provider profile
4. Provider rating recalculates

---

#### 6.1.7 In-App Messaging

**Description:** Direct communication between clients and providers.

**Acceptance Criteria:**
- Text messaging after booking request
- Push notifications for new messages
- Message history retained for 6 months
- No phone number sharing until booking confirmed

**User Story:**
> As a provider, I want to message the client so that I can clarify the job scope before arriving.

---

#### 6.1.8 Provider Dashboard

**Description:** Provider-facing portal for managing bookings and earnings.

**Acceptance Criteria:**
- View upcoming/past bookings
- Set availability calendar
- View earnings and payout history
- Manage profile and services offered

---

#### 6.1.9 Client Dashboard

**Description:** Client-facing portal for managing bookings.

**Acceptance Criteria:**
- View booking history
- Save favorite providers
- Rebook with one tap
- View payment history

---

### 6.2 Should-Have

- **Push notifications** for all booking lifecycle events
- **Service price estimates** (provider sets hourly/flat rates)
- **Photo attachments** in messages (for job scope)
- **Provider availability calendar** (real-time sync)
- **Dispute resolution flow** (client reports issue → admin review)
- **Referral program** (invite friends, earn credits)

### 6.3 Could-Have

- **Video profiles** for providers
- **Service packages** (bundled offerings)
- **Repeat booking** (weekly/monthly scheduling)
- **Group bookings** (multiple providers for large jobs)
- **Client reviews of providers** (mutual ratings)

### 6.4 Won't-Have (Phase 2)

- AI-powered matching algorithm
- Automated chat translation (Swahili ↔ English)
- Fraud detection ML model
- Native mobile apps (iOS/Android)
- Insurance/guarantee products
- Multi-city expansion

---

## 7. Non-Functional Requirements

### 7.1 Performance

| Requirement | Target |
|-------------|--------|
| Page load time (3G connection) | ≤3 seconds |
| Search results return | ≤2 seconds |
| STK Push initiation | ≤5 seconds |
| Concurrent users supported | 10,000 |
| API response time (95th percentile) | ≤500ms |

### 7.2 Security

- **Data Protection Act 2019 compliance:** User consent for data collection, right to deletion
- **Encryption:** All data encrypted at rest (AES-256) and in transit (TLS 1.3)
- **Authentication:** OTP-based, session tokens expire in 30 days
- **Payment security:** PCI-DSS compliant via Daraja integration (handled by Safaricom)
- **ID storage:** Provider documents stored encrypted, deleted after verification

### 7.3 Accessibility

- **Languages:** Bilingual (English default, Swahili toggle)
- **Voice navigation:** Basic voice search (Phase 1 stretch)
- **Screen reader compatible:** WCAG 2.1 AA compliant
- **Large touch targets:** Minimum 48px for mobile

### 7.4 Scalability

- Horizontal scaling via containerized microservices
- Database read replicas for search queries
- CDN for static assets (images, PWA shell)
- Target: Scale to 100,000 MAU without architecture change

### 7.5 Offline Behavior

- PWA caches critical pages for offline viewing
- Booking requests queued and synced when online
- Provider profiles viewable offline (previously loaded)
- Clear offline indicator UI

---

## 8. Technical Recommendations

### 8.1 Suggested Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | React 18 + Vite + TailwindCSS + Zustand | Fast build times, modern state management, utility-first CSS, PWA support |
| **Backend** | Supabase (PostgreSQL + Edge Functions) | Managed infrastructure, real-time subscriptions, auth built-in |
| **Database** | PostgreSQL (Supabase hosted) | ACID compliance, PostGIS for geolocation |
| **Payment Gateway** | Safaricom Daraja API (M-Pesa) | Dominant mobile wallet, STK Push support |
| **Maps** | Google Maps Platform or Mapbox | Geocoding, directions, place autocomplete |
| **Push Notifications** | Firebase Cloud Messaging (FCM) | Cross-platform, reliable delivery |
| **File Storage** | Supabase Storage + Cloudflare R2 | Cost-effective, CDN integration |
| **Monitoring** | Sentry + Supabase Logs | Error tracking, performance monitoring |

### 8.2 Deployment

- **Cloud Provider:** Supabase (managed) or AWS (if self-hosting later)
- **Region:** Africa (Safaricom Cloud partnership) or AWS Cape Town
- **CI/CD:** GitHub Actions → Vercel (frontend) + Supabase auto-deploy
- **Environments:** Development, Staging, Production

### 8.3 Integration Notes

#### M-Pesa (Daraja API)
- Register for Daraja sandbox and production credentials
- Implement STK Push (C2B) for payments
- Implement B2C for provider payouts
- Webhook callbacks for transaction status
- **Costs:** Per-transaction fees apply (~1% for B2C)

#### Mapping (Google Maps)
- Places Autocomplete for address entry
- Geocoding for provider location storage
- Distance Matrix for radius search
- **Costs:** ~$2-5 per 1,000 requests (monitor usage)

### 8.4 Operational Constraints

| Constraint | Mitigation |
|------------|------------|
| Daraja API rate limits | Queue and batch transactions |
| Google Maps costs at scale | Cache geocoding results, consider Mapbox |
| Supabase row limits (free tier) | Budget for Pro plan ($25/month) |
| Provider payouts timing | Clear SLA (24-48h after completion) |

---

## 9. Roadmap & Launch Plan

### 9.1 MVP Timeline

| Phase | Dates | Milestones |
|-------|-------|------------|
| **Alpha Development** | Feb - Apr 2026 | Core features, internal testing |
| **Private Beta** | May 2026 | 100 users, 50 providers in Westlands/Kilimani |
| **Public Beta** | Jun 2026 | Nairobi-wide, 1,000 users target |
| **Official Launch** | Q3 2026 | Marketing push, 5,000 users target |
| **Growth Phase** | Q4 2026 - Q2 2027 | 50,000 MAU target |

### 9.2 Go-To-Market Tactics

1. **Provider Acquisition:** Partner with NITA, technical colleges, jua kali associations
2. **Client Acquisition:** Facebook/Instagram ads targeting Nairobi homeowners
3. **Referral Program:** KSh 100 credit for both referrer and referee
4. **Estate Partnerships:** Partner with property managers for service needs
5. **Influencer Campaign:** Local lifestyle influencers demonstrate booking flow

### 9.3 Pilot Approach

- **Phase 1 (Westlands):** 3 neighborhoods, 20 verified providers, 100 beta clients
- **Success Metrics:** 50% rebooking rate, 4.0+ average rating, <5% dispute rate
- **Learnings:** Provider training needs, UX friction points, payment issues

### 9.4 Marketing Channels

| Channel | Budget Allocation | Expected CAC |
|---------|-------------------|--------------|
| Facebook/Instagram Ads | 40% | KSh 400 |
| Google Search | 20% | KSh 600 |
| Referral Program | 25% | KSh 200 |
| Partnerships (estates, corporates) | 10% | KSh 300 |
| Organic (SEO, content) | 5% | KSh 100 |

---

## 10. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigations | Owner |
|------|------------|--------|-------------|-------|
| **Low provider adoption** | Medium | High | Training workshops, onboarding bonuses, verification incentives | Growth Team |
| **Client trust issues** | Medium | High | Verification badges, money-back guarantee (pilot), visible reviews | Product |
| **M-Pesa API downtime** | Low | High | Fallback to manual confirmation, retry logic, clear user messaging | Engineering |
| **Fraud (fake providers)** | Medium | High | ID verification, background checks (Phase 2), review flags | Operations |
| **Regulatory changes** | Low | Medium | Legal monitoring, flexible commission model | Leadership |
| **Competitor entry (well-funded)** | Medium | Medium | Rapid iteration, local focus, superior UX | Product |
| **Digital divide (low smartphone)** | Low | Medium | USSD fallback (Phase 2), voice features | Product |
| **Provider quality inconsistency** | Medium | High | Training resources, quality scores, deactivation for low ratings | Operations |

---

## 11. Success Criteria

### 11.1 Launch Success (Q3 2026)

| Criteria | Target | Pass/Fail |
|----------|--------|-----------|
| Registered clients | ≥1,000 | Pass if ≥800 |
| Registered providers (verified) | ≥200 | Pass if ≥150 |
| Completed bookings | ≥500 | Pass if ≥400 |
| Average provider rating | ≥4.0 | Pass if ≥3.8 |
| Dispute rate | ≤5% | Pass if ≤7% |
| Payment success rate | ≥95% | Pass if ≥90% |

### 11.2 Year 1 KPIs (Q2 2027)

| KPI | Target |
|-----|--------|
| Monthly Active Users (MAU) | 50,000 |
| Verified Providers | 5,000 |
| Female Provider % | ≥30% |
| Gross Merchandise Value (GMV) | KSh 50M monthly |
| Net Revenue (12% avg commission) | KSh 6M monthly |
| Provider Retention (6-month) | ≥60% |
| NPS Score | ≥40 |

---

## 12. Appendix & References

### 12.1 Data Sources

| Statistic | Source | Date | URL |
|-----------|--------|------|-----|
| Mobile penetration 149.4%, 78.3M subscriptions | Communications Authority of Kenya | Sep 2025 | [ca.go.ke](https://ca.go.ke) |
| Smartphone penetration 85.2% | Communications Authority of Kenya | Sep 2025 | [ca.go.ke](https://ca.go.ke) |
| 37.9M active M-Pesa users | Safaricom H1 FY2026 Report | Nov 2025 | [safaricom.co.ke](https://safaricom.co.ke) |
| KSh 38.3T M-Pesa transactions | Safaricom FY2025 Report | May 2025 | [safaricom.co.ke](https://safaricom.co.ke) |
| 47.72M mobile money subscriptions | KBC Kenya | Jun 2025 | [kbc.co.ke](https://kbc.co.ke) |
| 90% of new jobs from informal sector | KNBS Economic Survey | 2025 | [knbs.or.ke](https://knbs.or.ke) |
| 81% informal employment rate | ILO/ILOSTAT | 2024/25 | [ilo.org](https://ilo.org) |
| 1.2M gig workers, $345M market | WEF/Algum Africa Capital | 2023 | [weforum.org](https://weforum.org) |
| 67% youth unemployment (15-34) | Federation of Kenya Employers | 2025 | [fke-kenya.org](https://fke-kenya.org) |
| Jiji.co.ke 1.28M monthly visits | SemRush | Dec 2025 | [semrush.com](https://semrush.com) |
| Lynk competitors list | Tracxn | 2025 | [tracxn.com](https://tracxn.com) |

### 12.2 Glossary

| Term | Definition |
|------|------------|
| **Fundi** | Swahili term for skilled worker/artisan |
| **STK Push** | SIM Toolkit Push — M-Pesa prompt on user's phone |
| **Daraja** | Safaricom's developer API platform |
| **NITA** | National Industrial Training Authority (certifies trades) |
| **PWA** | Progressive Web App |
| **Jua Kali** | "Hot sun" — Kenya's informal skilled trades sector |

---

## 13. Optional Deliverables

### 13.1 Wireframe Descriptions (3 Core Screens)

#### Screen 1: Search & Discovery

```
┌─────────────────────────────────────┐
│  🔍 What service do you need?      │ ← Search bar with voice icon
├─────────────────────────────────────┤
│  📍 Kilimani, Nairobi  [Change]    │ ← Location selector
├─────────────────────────────────────┤
│  POPULAR CATEGORIES                 │
│  ┌──────┐ ┌──────┐ ┌──────┐        │
│  │🔧    │ │⚡    │ │🧹    │        │
│  │Plumb │ │Elec  │ │Clean │        │
│  └──────┘ └──────┘ └──────┘        │
│  ┌──────┐ ┌──────┐ ┌──────┐        │
│  │💇    │ │🚗    │ │📚    │        │
│  │Beauty│ │Auto  │ │Tutor │        │
│  └──────┘ └──────┘ └──────┘        │
├─────────────────────────────────────┤
│  TOP RATED NEAR YOU                 │
│  ┌─────────────────────────────────┐│
│  │ 👤 Brian O.  ⭐4.8 (127 jobs)  ││
│  │ Electrician · 2.3 km away      ││
│  │ [View Profile]                  ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │ 👤 Grace W.  ⭐4.9 (89 jobs)   ││
│  │ Hairdresser · 1.5 km away      ││
│  │ [View Profile]                  ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
│  🏠 Home  │  🔍 Search  │  👤 Me   │
└─────────────────────────────────────┘
```

**Key Elements:**
- Prominent search bar with voice input support
- Quick-access category grid (6-8 primary categories)
- Location awareness with easy change option
- Nearby top-rated providers for quick booking
- Clean bottom navigation

---

#### Screen 2: Booking Flow

```
┌─────────────────────────────────────┐
│  ← Back     Book Service            │
├─────────────────────────────────────┤
│  👤 Brian Otieno                    │
│  ⭐ 4.8 (127 reviews) ✓ Verified   │
│  Electrician · Kayole               │
├─────────────────────────────────────┤
│  SELECT SERVICE                     │
│  ○ Wiring repair       KSh 1,500   │
│  ● Socket installation KSh 800     │
│  ○ Full inspection     KSh 2,000   │
├─────────────────────────────────────┤
│  SELECT DATE & TIME                 │
│  ┌───┬───┬───┬───┬───┬───┬───┐     │
│  │Mon│Tue│Wed│Thu│Fri│Sat│Sun│     │
│  │ 27│ 28│ 29│ 30│ 31│ 1 │ 2 │     │
│  └───┴───┴───┴───┴───┴───┴───┘     │
│  ○ 9:00 AM  ○ 11:00 AM  ● 2:00 PM  │
│  ○ 4:00 PM  ○ 6:00 PM              │
├─────────────────────────────────────┤
│  📍 SERVICE LOCATION                │
│  [Enter your address or use GPS]    │
├─────────────────────────────────────┤
│  ORDER SUMMARY                      │
│  Socket installation    KSh 800     │
│  Service fee            KSh 80      │
│  ──────────────────────────────     │
│  Total                  KSh 880     │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐│
│  │    💳 Pay with M-Pesa          ││
│  │        KSh 880                  ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

**Key Elements:**
- Provider summary with verification badge
- Service selection with clear pricing
- Calendar and time slot picker
- Location input with GPS option
- Transparent pricing breakdown
- Single CTA for M-Pesa payment

---

#### Screen 3: Provider Dashboard

```
┌─────────────────────────────────────┐
│  Hello, Brian! 👋                   │
│  Your earnings this month: KSh 45K  │
├─────────────────────────────────────┤
│  TODAY'S SCHEDULE                   │
│  ┌─────────────────────────────────┐│
│  │ 🟢 10:00 AM — John M.           ││
│  │    Socket install · Kilimani    ││
│  │    [Navigate] [Message]         ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │ ⏳ 2:00 PM — Sarah K.           ││
│  │    Wiring check · Westlands     ││
│  │    [View Details]               ││
│  └─────────────────────────────────┘│
├─────────────────────────────────────┤
│  NEW BOOKING REQUEST                │
│  ┌─────────────────────────────────┐│
│  │ 📥 Ann W. requests service      ││
│  │    Tomorrow 9 AM · Lavington    ││
│  │    [Accept ✓] [Decline ✗]       ││
│  └─────────────────────────────────┘│
├─────────────────────────────────────┤
│  QUICK STATS                        │
│  ┌────────┬────────┬────────┐      │
│  │ ⭐4.8  │ 127    │ KSh 45K│      │
│  │ Rating │ Jobs   │ Month  │      │
│  └────────┴────────┴────────┘      │
└─────────────────────────────────────┘
│  📅 Schedule │  💬 Messages │  ⚙️  │
└─────────────────────────────────────┘
```

**Key Elements:**
- Personalized greeting with earnings highlight
- Today's schedule with quick actions
- Prominent new booking requests
- Key stats at a glance
- Easy navigation to calendar, messages, settings

---

### 13.2 Pitch Deck Outline (10 Slides)

| Slide | Title | Content |
|-------|-------|---------|
| 1 | **Cover** | JuaGig logo, tagline: "Kenya's Trusted Local Services Marketplace", Team name |
| 2 | **Problem** | Fragmented gig economy, 67% youth unemployment, trust deficit in informal services, $345M market |
| 3 | **Solution** | Mobile-first marketplace for local services with M-Pesa payments, verified providers, transparent ratings |
| 4 | **Market Opportunity** | 1.2M gig workers, 37.9M M-Pesa users, 85% smartphone penetration, $23B digital economy by 2025 |
| 5 | **Product Demo** | Screenshots of search, booking flow, provider dashboard (use wireframes or prototype) |
| 6 | **Business Model** | 10-15% commission per transaction, avg order value KSh 2,000, path to KSh 6M monthly revenue |
| 7 | **Traction** | Beta metrics (if available), waitlist signups, provider LOIs, partnerships |
| 8 | **Competition** | Positioning vs Jiji/PigiaMe (no verification), Lynk (acquired), WhatsApp (fragmented) |
| 9 | **Team** | Founders with relevant experience (fintech, marketplaces, Kenya operations) |
| 10 | **The Ask** | Seed round: $500K for 18-month runway, use of funds: product (40%), go-to-market (35%), ops (25%) |

---

### 13.3 Hiring Checklist (Prioritized Roles)

| Priority | Role | Timing | Key Skills |
|----------|------|--------|------------|
| 1 | **Full-Stack Engineer** | Immediate | React, Supabase, M-Pesa integration |
| 2 | **Head of Provider Operations** | Pre-launch | Provider recruitment, training, quality |
| 3 | **Growth Marketing Lead** | Launch | Paid acquisition, referral programs |
| 4 | **Customer Support Lead** | Launch | Bilingual (Swahili/English), dispute resolution |
| 5 | **Mobile Engineer** | Post-launch | React Native, PWA optimization |
| 6 | **Data Analyst** | Post-launch | SQL, product analytics, fraud detection |
| 7 | **Partnerships Manager** | Post-launch | B2B, corporate accounts, training institutions |
| 8 | **Finance/Ops Manager** | Scale phase | M-Pesa reconciliation, provider payouts |

---

### 13.4 Phase 2 AI Features (Placeholder)

#### Recommended AI Capabilities

| Feature | Description | Data Needs |
|---------|-------------|------------|
| **Smart Matching** | ML-based provider recommendations based on job type, client preferences, location, historical ratings | Booking history, ratings, provider skills, location data |
| **Chat Summarization** | Auto-generate job summaries from client-provider conversations | Chat transcripts (anonymized) |
| **Fraud Detection** | Anomaly detection for fake reviews, provider impersonation, payment fraud | Transaction patterns, review timing, account behavior |
| **Dynamic Pricing** | Suggest optimal pricing based on demand, time, location | Demand signals, completion rates, competitor pricing |
| **Churn Prediction** | Identify providers/clients at risk of leaving | Activity patterns, support tickets, rating trends |

#### Ethical Considerations

- **Bias Mitigation:** Ensure matching algorithms don't disadvantage providers from certain areas or demographics
- **Transparency:** Explain to providers why they may rank lower (actionable feedback)
- **Data Privacy:** All ML training on anonymized/aggregated data; comply with Kenya DPA 2019
- **Human Oversight:** Fraud flags reviewed by humans before account action

#### Data Requirements

- Minimum 10,000 completed bookings before training matching model
- 6 months of transaction data for fraud baseline
- Clear user consent for chat summarization features
- Data retention policies aligned with legal requirements

---

## Executive Summary

**JuaGig** is a mobile-first local services marketplace designed to transform how Kenyans find and book trusted service providers for everyday needs — from plumbing and electrical work to beauty services and tutoring.

Kenya presents a unique opportunity: 90% of new jobs come from the informal sector, yet the 1.2 million gig workers remain invisible and unverified. Clients struggle to find reliable providers, relying on unreliable word-of-mouth or fraud-prone classifieds. Meanwhile, 67% of youth (ages 15-34) are unemployed, and skilled workers lack platforms to build reputation and stable income.

JuaGig solves this by providing:
- **Verified provider profiles** with ID and skill certification checks
- **Seamless M-Pesa payments** via Safaricom Daraja within the app
- **Transparent ratings** that create accountability and trust
- **Geolocation search** to find nearby providers in seconds
- **Bilingual interface** (English/Swahili) designed for local context

Built on modern technology (React, Vite, Supabase, TailwindCSS), JuaGig is optimized for Kenya's mobile environment — 85% smartphone penetration, 149% mobile penetration, and 37.9 million active M-Pesa users.

The MVP launches in Nairobi Q2-Q3 2026, targeting 50,000 monthly active users and 5,000 verified providers (30% female) by Year 1. A 12% average commission on an estimated KSh 50M monthly GMV creates a path to KSh 6M monthly revenue.

JuaGig empowers Kenya's informal workers with visibility, income stability, and a portable reputation — while giving clients the trust and convenience they deserve.

---

## 90-Day Action Checklist

| # | Action Item | Owner | Due Date |
|---|-------------|-------|----------|
| 1 | **Finalize Supabase schema and M-Pesa Daraja integration** — Set up database tables for users, providers, bookings, payments; test STK Push in sandbox | Engineering | Week 4 |
| 2 | **Build core React/Vite PWA** — Implement authentication, search, provider profiles, booking flow | Engineering | Week 8 |
| 3 | **Launch provider recruitment campaign** — Partner with 3 technical training institutions (NITA, KIBT, Nairobi Technical); recruit 50 beta providers | Operations | Week 6 |
| 4 | **Design and finalize UI/UX** — Complete high-fidelity Figma designs for all MVP screens; user test with 10 target clients | Design | Week 4 |
| 5 | **Establish verification workflow** — Define ID/certification review process; train admin team; set up verification dashboard | Operations | Week 6 |
| 6 | **Private beta launch (Westlands)** — Onboard 100 beta clients, 50 providers; collect feedback; iterate | Product | Week 10 |
| 7 | **Prepare marketing assets** — Create landing page, social media profiles, influencer outreach; plan referral program | Marketing | Week 8 |
| 8 | **Investor materials** — Finalize pitch deck, financial projections, demo video for seed round conversations | Leadership | Week 12 |

---

*Document prepared for JuaGig. Last updated: January 24, 2026.*
