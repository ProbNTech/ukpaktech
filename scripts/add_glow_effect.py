"""
Add GlowingEffect to premium card sections across the site.
Pattern: Find motion.div cards with "group relative bg-white border" and wrap them.
"""
import re
import os

BASE = r"c:\New UPTIB\uptechcouncil-clean"

# Files and their card className patterns to wrap
targets = [
    # skill-development-center
    os.path.join(BASE, "app", "programs", "skill-development-center", "page.tsx"),
    # news trending topics
    os.path.join(BASE, "app", "news", "page.tsx"),
    # uk-pakistan-technology-partnership
    os.path.join(BASE, "app", "ecosystem", "uk-pakistan-technology-partnership", "UKPakistanTechnologyPartnershipClient.tsx"),
    # trade-delegations
    os.path.join(BASE, "app", "ecosystem", "trade-delegations-and-exhibitions", "TradeDelegationsAndExhibitionsClient.tsx"),
    # ai-tech-programs
    os.path.join(BASE, "app", "programs", "ai-tech-programs", "AITechProgramsClient.tsx"),
    # incubation-collective-startups
    os.path.join(BASE, "app", "programs", "incubation-collective-startups", "IncubationCollectiveStartupsClient.tsx"),
]

GLOW_IMPORT = 'import { GlowingEffect } from "@/components/ui/glowing-effect";'
GLOW_JSX = """<GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />"""

# Common card class patterns to find and wrap
# These are the className strings on motion.div or div elements that represent premium cards
CARD_PATTERNS = [
    # Pattern: group relative bg-white border border-[#D8D5CF] rounded-xl ... (most common)
    r'className="group relative bg-white border border-\[#D8D5CF\][^"]*rounded-xl[^"]*overflow-hidden[^"]*hover:-translate-y-1[^"]*"',
    # Pattern with shadow-sm at beginning
    r'className="group relative bg-white border border-\[#D8D5CF\] shadow-sm rounded-xl[^"]*"',
]

def add_import(content, filepath):
    """Add GlowingEffect import if not already present."""
    if 'GlowingEffect' in content:
        return content

    # Find the last import line
    lines = content.split('\n')
    last_import_idx = 0
    for i, line in enumerate(lines):
        if line.strip().startswith('import '):
            last_import_idx = i

    lines.insert(last_import_idx + 1, GLOW_IMPORT)
    return '\n'.join(lines)

def wrap_cards(content, filepath):
    """
    Find card containers and wrap them with glow effect.
    Strategy: Find className patterns that match premium cards, then:
    1. Change the outer element to be a glow wrapper
    2. Add GlowingEffect inside
    3. Move original classes to an inner div
    """
    fname = os.path.basename(filepath)
    count = 0

    # Pattern 1: motion.div with group relative bg-white border...
    # Replace: className="group relative bg-white ..." -> split into outer glow + inner card

    # Find all occurrences of the card class pattern on motion.div or div
    # We need to handle this carefully to not break JSX structure

    # Strategy: Find the card className and transform it
    # Original: <motion.div ... className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:... shadow-sm"
    # New:      <motion.div ... className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"
    #             <GlowingEffect ... />
    #             <div className="group relative bg-white rounded-2xl overflow-hidden hover:... shadow-sm"
    #               ... original content ...
    #             </div>
    #           </motion.div>

    # Pattern to match the card className attribute
    card_class_re = re.compile(
        r'(className=")group relative bg-white border border-\[#D8D5CF\]( shadow-sm)? rounded-xl overflow-hidden (hover:-translate-y-[0-9.]+ hover:shadow-(?:lg|md) hover:border-\[#2563EB\]/30 transition-all duration-300)(?: shadow-sm)?(?: flex flex-col)?"'
    )

    def replace_card_class(match):
        nonlocal count
        count += 1
        full = match.group(0)
        hover_etc = match.group(3)
        has_flex = 'flex flex-col' in full
        flex_part = ' flex flex-col h-full' if has_flex else ''
        return f'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">\n                    {GLOW_JSX}\n                    <div className="group relative bg-white rounded-2xl overflow-hidden {hover_etc} shadow-sm{flex_part}"'

    new_content = card_class_re.sub(replace_card_class, content)

    if count > 0:
        # For each card we wrapped, we need to add a closing </div> before </motion.div>
        # This is tricky with regex, so we'll handle it differently
        # Actually, the sub above opens a new <div> inside. We need to close it.
        # Let's count how many we added and manually handle closings
        pass

    print(f"  {fname}: Found {count} card patterns to transform")
    return new_content, count

def process_file(filepath):
    """Process a single file."""
    if not os.path.exists(filepath):
        print(f"  SKIP: {filepath} not found")
        return False

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if already processed
    if 'GlowingEffect' in content:
        print(f"  SKIP: {os.path.basename(filepath)} already has GlowingEffect")
        return False

    # Add import
    content = add_import(content, filepath)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  Added GlowingEffect import to {os.path.basename(filepath)}")
    return True

# Main
print("Adding GlowingEffect imports to target files...")
for f in targets:
    process_file(f)

print("\nDone! Now card wrapping needs to be done manually per file due to JSX complexity.")
print("Files with imports added:")
for f in targets:
    if os.path.exists(f):
        with open(f, 'r') as fh:
            if 'GlowingEffect' in fh.read():
                print(f"  ✓ {os.path.basename(f)}")
