# AGENT CONTEXT - MONEY MACHINE

Purpose:
- Keep project context for future LLMs.
- User should not need to read this.
- User action list lives only in `TODO_LIST.md`.

User preference:
- User wants very simple concise caveman talk.
- User wants agent to do most work.
- User only does required human actions: account signup, payout/KYC, platform clicks, passwords, payment details.
- Keep project folder clean: one markdown for user, one markdown for agent.

Project:
- Path: `/home/ubuntu-agent/Desktop/money-machine`
- GitHub: `git@github.com:VM001-Ubuntu-Agent/ember-node.git`
- Goal: legal low-maintenance income engine.
- First milestone: £50/day.
- First method: digital product.
- Niche: AI / automation freelancers.
- Product: `AI Freelancer Deal Desk Starter`.
- Core pain: scope creep, vague deliverables, messy onboarding, unpaid changes.
- Price plan: Basic £9, Pro £19, Ultimate £39.

Current state:
- Product ZIPs exist in `dist/`.
- Best upload file: `/home/ubuntu-agent/Desktop/money-machine/dist/ai-freelancer-deal-desk-starter-full.zip`
- Landing page HTML exists at `launch-assets/landing-page/index.html`.
- Tracking CSV exists at `launch-assets/tracking/FIRST_7_DAYS_TRACKER.csv`.
- All extra markdown/readme/instruction files were removed per user request.
- Only two markdown files should remain in repo root:
  - `TODO_LIST.md` for user actions.
  - `AGENT_CONTEXT.md` for LLM handoff/context.

Important instruction:
- When user says `done task X`, update `TODO_LIST.md` by ticking that task, add next task if needed, commit, push.
- Keep instructions tiny and exact.
- Do not create extra markdown files unless user asks.
- If more notes needed, put them here in `AGENT_CONTEXT.md` or inside `TODO_LIST.md`.

Next human task:
- User needs to create Gumroad account.
- Current TODO_LIST.md has exact steps.

Next agent actions after user completes Gumroad account:
1. Tick Task 1 in `TODO_LIST.md`.
2. Add/activate Task 2: create Gumroad product.
3. Give exact click steps.
4. If Gumroad blocks user with payout/tax/KYC, guide user or pivot to Payhip.
5. Once live product link exists, update landing HTML links and prep launch posts in terminal response or non-md files if needed.

Do not overwhelm user.
