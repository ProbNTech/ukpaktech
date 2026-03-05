"""
Replace the primary hero button with RainbowButton on all pages that have hero buttons.
Each page has exactly ONE primary button to replace (Button 1 in the PageHero children).
"""
import re, os

BASE = "c:/New UPTIB/uptechcouncil-clean"

IMPORT_LINE = 'import { RainbowButton } from "@/components/ui/rainbow-borders-button";'

# Pages and the exact text of the primary button to replace
# Format: (file_path, button_text, button_href)
pages = [
    # About
    ("app/about/page.tsx", "Apply for Membership", "/membership/apply"),
    # Contact
    ("app/contact/page.tsx", "Apply for Membership", "/membership/apply"),
    # Job Portal - "Browse Jobs" is primary for job seekers
    ("app/job-portal/page.tsx", "Browse Jobs", "#who-its-for"),
    # Meeting Space
    ("app/meeting-space/page.tsx", "Apply for Membership", "/membership/apply"),
    # Membership
    ("app/membership/MembershipClient.tsx", "Apply Now", "/membership/apply"),
    # Services
    ("app/services/business-networks/page.tsx", "Become a Member", "/membership"),
    ("app/services/business-support/page.tsx", "Access Services", "/membership"),
    ("app/services/corporate-partnerships/page.tsx", "Become a Partner", "/membership"),
    ("app/services/digital-marketing/page.tsx", "Get Started", "/membership"),
    ("app/services/mentorship/page.tsx", "Become a Mentor", "/membership"),
    ("app/services/overseas-employment/page.tsx", "Get Connected", "/membership"),
    ("app/services/sme-hub/page.tsx", "Join the Hub", "/membership"),
    # Programs
    ("app/programs/skill-development-center/page.tsx", "Apply for Training", "/membership/apply"),
    ("app/programs/incubation-collective-startups/IncubationCollectiveStartupsClient.tsx", "Apply for Incubation", "/membership/apply"),
    ("app/programs/ai-tech-programs/AITechProgramsClient.tsx", "Become a Member", "/membership/apply"),
    # Initiatives
    ("app/initiatives/techmart-global/TechMartGlobalClient.tsx", "Get Started", "/membership/apply"),
    ("app/initiatives/tech-excellence-awards/TechExcellenceAwardsClient.tsx", "Submit a Nomination", "/membership/apply"),
    ("app/initiatives/people-ai/PeopleAIClient.tsx", "Get Started", "/membership/apply"),
    # Ecosystem
    ("app/ecosystem/uk-pakistan-technology-partnership/UKPakistanTechnologyPartnershipClient.tsx", "Become a Member", "/membership"),
    ("app/ecosystem/trade-delegations-and-exhibitions/TradeDelegationsAndExhibitionsClient.tsx", "View Events", "/events"),
    ("app/ecosystem/startup-funding/page.tsx", "Access Funding", "/membership"),
    ("app/ecosystem/series-funding/page.tsx", "Access Series Funding", "/membership"),
    ("app/ecosystem/funding-and-grants/FundingAndGrantsClient.tsx", "Become a Member", "/membership"),
]

results = []

for rel_path, btn_text, btn_href in pages:
    full_path = os.path.join(BASE, rel_path)

    if not os.path.exists(full_path):
        results.append(f"MISS {rel_path}")
        continue

    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # Find the Button with this exact text in the PageHero section
    # Pattern: <Button href="..." variant="..." ...>TEXT</Button>
    # We need to match the Button that contains btn_text
    pattern = re.compile(
        r'(<Button\s+href="' + re.escape(btn_href) + r'"[^>]*>)\s*' + re.escape(btn_text) + r'\s*(</Button>)',
        re.DOTALL
    )
    match = pattern.search(content)

    if not match:
        # Try without specific href (some might have slight differences)
        pattern2 = re.compile(
            r'<Button\s+[^>]*>' + re.escape(btn_text) + r'</Button>',
            re.DOTALL
        )
        match2 = pattern2.search(content)
        if match2:
            old_btn = match2.group(0)
            new_btn = f'<RainbowButton href="{btn_href}" showArrow>{btn_text}</RainbowButton>'
            content = content.replace(old_btn, new_btn, 1)
        else:
            results.append(f"SKIP {rel_path}: button '{btn_text}' not found")
            continue
    else:
        old_btn = match.group(0)
        new_btn = f'<RainbowButton href="{btn_href}" showArrow>{btn_text}</RainbowButton>'
        content = content.replace(old_btn, new_btn, 1)

    # Add import if not present
    if 'RainbowButton' not in content.split('\n')[0:30]:
        # Find last import
        last_pos = 0
        for m in re.finditer(r'^import .+;.*$', content, re.MULTILINE):
            last_pos = m.end()
        if last_pos > 0:
            content = content[:last_pos] + '\n' + IMPORT_LINE + content[last_pos:]

    if content != original:
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        results.append(f"OK   {rel_path}")
    else:
        results.append(f"SAME {rel_path}")

for r in results:
    print(r)

print(f"\nProcessed {len(pages)} files.")
