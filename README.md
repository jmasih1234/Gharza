# Neevza

Neevza is an AI-native construction intelligence platform for suppliers, subcontractors, and construction businesses. It turns public construction signals into explainable, company-specific opportunities: what is being built, what it will likely need, who is involved, and what to do next.

## Run the MVP

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000. Phase 1 currently uses typed local permit data and a deterministic ICP scoring engine so the intelligence workflow can be evaluated immediately. The source boundary is ready for municipal/public-data ingestion and a backend API in a later phase.

## Phase 1 workflow

- Construction opportunities with permit provenance, project scope, companies, requirements, and timeline fields
- Company profile and ideal customer profile used by every opportunity match
- Explainable 0-100 opportunity scores with factor-level evidence and confidence
- Search and filters across project, location, permit stage, and predicted requirement
- Saved opportunities and lightweight pipeline status changes
- Project intelligence dossier and grounded Neevza copilot surface