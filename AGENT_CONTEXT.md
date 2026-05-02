# AGENT CONTEXT - MONEY MACHINE

Keep repo clean:
- `TODO_LIST.md` = user actions.
- `AGENT_CONTEXT.md` = LLM handoff.
- Avoid extra md/readme files.
- Non-md assets are allowed.

User state:
- User is frustrated because they are doing too much manual Gumroad work.
- User wants agent to do most work.
- User wants caveman-simple clear instructions.
- Product name `AI Freelancer Deal Desk` was confusing; user thought it sounded like a physical desk. Renamed.

Important limitation:
- Gumroad product creation/upload does not appear available via simple public create-product API from this environment.
- User is logged into Gumroad in their own browser, not the agent environment.
- Agent cannot access their Google login/session unless browser automation is explicitly available and connected.
- Do not ask for passwords.

Project path:
`/home/ubuntu-agent/Desktop/money-machine`

GitHub:
`git@github.com:VM001-Ubuntu-Agent/ember-node.git`

Current product:
`ScopeGuard Client Docs Generator`

Plain English:
Small local browser app for AI/automation freelancers. It generates proposal, scope boundaries, onboarding checklist, change-order message, and weekly update text from a form.

Sellable ZIP:
`dist/scopeguard-client-docs-generator.zip`

Gumroad assets:
- `gumroad-fill-in-copy.txt`
- `assets/gumroad-cover.png`
- `assets/gumroad-thumbnail.png`

Current user screen:
Gumroad customize page asking for description, URL, cover, thumbnail, product info, call to action, summary, additional details, integrations, versions.

Next user action:
Use TODO_LIST.md exact fields. Upload cover/thumbnail/zip. Leave integrations blank. Versions skip unless forced; if forced use Standard.

When user reports progress:
- Update TODO_LIST.md.
- Commit and push.
- Keep response short and direct.
