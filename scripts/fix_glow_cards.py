"""
Fix GlowingEffect card patterns across the entire site.

Problem: Inner card divs have hover:-translate-y-1 and hover:shadow-lg,
which causes the white card to visually separate from the glow border wrapper
on hover. Also missing h-full for consistent grid heights.

Fix: Move hover effects and 'group' class to the outer p-px wrapper so the
entire card (border + glow + content) lifts together on hover.
"""

import os
import re

base = "c:/New UPTIB/uptechcouncil-clean"

# All files that use GlowingEffect with p-px wrapper pattern
files = [
    "app/news/page.tsx",
    "app/page.tsx",
    "components/ServiceGrid.tsx",
    "app/services/sme-hub/page.tsx",
    "app/services/overseas-employment/page.tsx",
    "app/services/mentorship/page.tsx",
    "app/services/digital-marketing/page.tsx",
    "app/services/corporate-partnerships/page.tsx",
    "app/services/business-support/page.tsx",
    "app/services/business-networks/page.tsx",
    "app/programs/skill-development-center/page.tsx",
    "app/programs/incubation-collective-startups/IncubationCollectiveStartupsClient.tsx",
    "app/programs/ai-tech-programs/AITechProgramsClient.tsx",
    "app/ecosystem/uk-pakistan-technology-partnership/UKPakistanTechnologyPartnershipClient.tsx",
    "app/ecosystem/trade-delegations-and-exhibitions/TradeDelegationsAndExhibitionsClient.tsx",
    "app/ecosystem/funding-and-grants/FundingAndGrantsClient.tsx",
    "app/initiatives/tech-excellence-awards/TechExcellenceAwardsClient.tsx",
]

results = []

for filepath in files:
    full_path = os.path.join(base, filepath)
    if not os.path.exists(full_path):
        results.append(f"SKIP (not found): {filepath}")
        continue

    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # ─── STEP 1: Fix outer wrappers (p-px containers) ───
    # Add group, h-full, hover effects to outer glow wrapper
    def fix_outer(m):
        cls = m.group(1)
        words = cls.split()
        if "group" in words:
            return m.group(0)  # Already fixed
        new_words = ["group"] + words
        if "h-full" not in new_words:
            new_words.append("h-full")
        for w in ["hover:-translate-y-1", "hover:shadow-lg"]:
            if w not in new_words:
                new_words.append(w)
        if "transition-all" not in new_words:
            new_words.append("transition-all")
        if "duration-300" not in new_words:
            new_words.append("duration-300")
        return f'className="{" ".join(new_words)}"'

    content = re.sub(r'className="([^"]*\bp-px\b[^"]*)"', fix_outer, content)

    # ─── STEP 2: Fix inner cards ───
    # Remove group, hover:-translate-y-1, hover:shadow-lg from inner white cards
    # Add h-full for consistent heights
    def fix_inner(m):
        cls = m.group(1)
        # Remove group, hover effects
        cls = re.sub(r"\bgroup\b", "", cls)
        cls = re.sub(r"\bhover:-translate-y-1\b", "", cls)
        cls = re.sub(r"\bhover:shadow-lg\b", "", cls)
        # Add h-full if not present
        if "h-full" not in cls:
            if "relative" in cls:
                cls = re.sub(r"\brelative\b", "relative h-full", cls, count=1)
            else:
                cls += " h-full"
        # Clean up multiple spaces
        cls = re.sub(r"\s{2,}", " ", cls).strip()
        return f'className="{cls}"'

    # Match inner cards that have bg-white AND hover:-translate-y-1
    content = re.sub(
        r'className="([^"]*\bbg-white\b[^"]*\bhover:-translate-y-1\b[^"]*)"',
        fix_inner,
        content,
    )
    # Also match reverse order
    content = re.sub(
        r'className="([^"]*\bhover:-translate-y-1\b[^"]*\bbg-white\b[^"]*)"',
        fix_inner,
        content,
    )

    if content != original:
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        results.append(f"UPDATED: {filepath}")
    else:
        results.append(f"NO CHANGE: {filepath}")

for r in results:
    print(r)
