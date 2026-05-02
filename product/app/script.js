const $ = (id) => document.getElementById(id);

const fields = [
  'client','project','outcome','included','excluded','timeline','price','revisions','clientNeeds','changeRequest'
];

function lines(value) {
  return value.split('\n').map(x => x.trim()).filter(Boolean);
}

function bullets(value) {
  const items = lines(value);
  return items.length ? items.map(x => `- ${x}`).join('\n') : '- [add item]';
}

function value(id, fallback = '') {
  return $(id).value.trim() || fallback;
}

function generate() {
  const client = value('client', '[Client]');
  const project = value('project', '[Project]');
  const outcome = value('outcome', '[Outcome]');
  const included = bullets(value('included'));
  const excluded = bullets(value('excluded'));
  const timeline = value('timeline', '[Timeline]');
  const price = value('price', '[Price]');
  const revisions = value('revisions', '[Revision limit]');
  const clientNeeds = bullets(value('clientNeeds'));
  const changeRequest = value('changeRequest', '[Change requested]');
  const today = new Date().toLocaleDateString();

  const doc = `AI FREELANCER DEAL DESK DOCS\nGenerated: ${today}\nClient: ${client}\nProject: ${project}\n\n============================================================\n1) CLIENT-READY PROPOSAL\n============================================================\n\nHi ${client},\n\nThanks for discussing ${project}. Here is the clean project scope so we both know what is included, what is not included, and how changes will be handled.\n\nPROJECT OUTCOME\n${outcome}\n\nINCLUDED WORK\n${included}\n\nNOT INCLUDED\n${excluded}\n\nTIMELINE\n${timeline}\n\nINVESTMENT\n${price}\n\nREVISIONS\nThis includes ${revisions}. Extra revision rounds or new features are handled as change requests.\n\nCLIENT RESPONSIBILITIES\n${clientNeeds}\n\nACCEPTANCE\nIf this looks good, reply with approval and I will send the payment/start details.\n\n============================================================\n2) SCOPE BOUNDARY CLAUSES\n============================================================\n\nUse these in your proposal or email:\n\n- Work starts after payment and required access/materials are received.\n- Any feature, workflow, integration, or revision not listed under Included Work is out of scope.\n- Out-of-scope requests are quoted separately before work begins.\n- Timeline depends on client feedback and access being provided on time.\n- Third-party tools, API costs, hosting, and subscriptions are paid by the client unless agreed otherwise.\n- Final delivery includes the agreed workflow/tool and basic handoff notes, not ongoing support unless purchased separately.\n\n============================================================\n3) ONBOARDING CHECKLIST\n============================================================\n\nAsk the client for:\n\n${clientNeeds}\n\nAlso confirm:\n- Who gives final approval?\n- What does success look like after 30 days?\n- What tools must this integrate with?\n- Are there security, privacy, or compliance requirements?\n- What examples should the AI use or avoid?\n\n==... [truncated]

  $('output').value = doc;
}

function loadSample() {
  $('client').value = 'Acme Plumbing';
  $('project').value = 'AI missed-call and FAQ assistant';
  $('outcome').value = 'Capture missed calls, answer common questions, and collect customer details so staff can follow up faster.';
  $('included').value = 'Discovery call\nFAQ collection\nAI assistant flow\nLead capture form\nBasic test run\nHandoff call';
  $('excluded').value = '24/7 monitoring\nCustom CRM rebuild\nPaid API/subscription costs\nUnlimited revisions\nNew website design';
  $('timeline').value = '10 business days after access is received';
  $('price').value = '£1,500';
  $('revisions').value = '2 revision rounds';
  $('clientNeeds').value = 'Website link\nFAQ list\nBrand tone examples\nCRM/login access if needed\nOne decision maker for approval';
  $('changeRequest').value = 'Add WhatsApp integration after the chatbot scope was already approved';
  generate();
}

function clearAll() {
  fields.forEach(id => $(id).value = '');
  $('output').value = '';
}

async function copyOutput() {
  if (!$('output').value.trim()) generate();
  await navigator.clipboard.writeText($('output').value);
  $('copy').textContent = 'Copied';
  setTimeout(() => $('copy').textContent = 'Copy', 1200);
}

function downloadOutput() {
  if (!$('output').value.trim()) generate();
  const blob = new Blob([$('output').value], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'client-deal-desk-docs.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

$('generate').addEventListener('click', generate);
$('loadSample').addEventListener('click', loadSample);
$('clear').addEventListener('click', clearAll);
$('copy').addEventListener('click', copyOutput);
$('download').addEventListener('click', downloadOutput);
loadSample();
