"""
Wrap premium card divs with GlowingEffect in remaining files.
This script finds specific card className patterns and transforms them.
"""
import os
import re

BASE = r"c:\New UPTIB\uptechcouncil-clean"

GLOW_JSX = '<GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />'

files_to_process = [
    os.path.join(BASE, "app", "programs", "skill-development-center", "page.tsx"),
    os.path.join(BASE, "app", "news", "page.tsx"),
    os.path.join(BASE, "app", "ecosystem", "uk-pakistan-technology-partnership", "UKPakistanTechnologyPartnershipClient.tsx"),
    os.path.join(BASE, "app", "ecosystem", "trade-delegations-and-exhibitions", "TradeDelegationsAndExhibitionsClient.tsx"),
    os.path.join(BASE, "app", "programs", "ai-tech-programs", "AITechProgramsClient.tsx"),
    os.path.join(BASE, "app", "programs", "incubation-collective-startups", "IncubationCollectiveStartupsClient.tsx"),
]

# The card class patterns we want to wrap. We look for the full className string.
# After wrapping:
#   <motion.div ... className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">
#     <GlowingEffect ... />
#     <div className="[original card classes with border removed]">
#       ... original content ...
#     </div>
#   </motion.div>

# We need a two-step approach:
# Step 1: Transform the opening className
# Step 2: Add closing </div> before the closing </motion.div>

# The tricky part is that the content between opening and closing varies.
# Let's use a line-by-line approach.

def process_file(filepath):
    if not os.path.exists(filepath):
        print(f"  SKIP: not found")
        return 0

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Already processed check
    if 'GlowingEffect spread={40}' in content:
        print(f"  SKIP: already has glow wrappers")
        return 0

    # Pattern: className="group relative bg-white border border-[#D8D5CF] ... rounded-xl ..."
    # We want to match the full className attribute value

    # Common patterns found across all files:
    patterns = [
        # Pattern A: most common - group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm
        (
            'className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"',
            'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">\n                    {glow}\n                    <div className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"',
        ),
        # Pattern A with flex flex-col
        (
            'className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm flex flex-col"',
            'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">\n                    {glow}\n                    <div className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col h-full"',
        ),
        # Pattern B: with shadow-sm before rounded-xl
        (
            'className="group relative bg-white border border-[#D8D5CF] shadow-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"',
            'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px">\n                    {glow}\n                    <div className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"',
        ),
        # Pattern C: news page button with text-left
        (
            'className="group relative bg-white rounded-xl border border-[#D8D5CF] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg text-left"',
            'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px text-left">\n                    {glow}\n                    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"',
        ),
    ]

    count = 0
    for old, new in patterns:
        new_with_glow = new.replace('{glow}', GLOW_JSX)
        occurrences = content.count(old)
        if occurrences > 0:
            content = content.replace(old, new_with_glow)
            count += occurrences

    if count > 0:
        # Now we need to add closing </div> for each wrapper we added.
        # The inner <div> we added needs to be closed before the parent element closes.
        # The parent is typically </motion.div> or </div> (for non-animated cards).
        #
        # Strategy: Find each GLOW_JSX occurrence and then find the matching
        # closing tag. This is complex with regex, so let's do it line by line.

        lines = content.split('\n')
        new_lines = []
        glow_depth_stack = []  # stack of (line_index, depth) for each glow wrapper

        i = 0
        while i < len(lines):
            line = lines[i]

            # If this line has our glow JSX, mark that we need to close an inner div
            if GLOW_JSX in line:
                # Find the next line that starts the inner <div - it's the next line
                glow_depth_stack.append(0)

            # Track div depth for glow wrappers
            if glow_depth_stack:
                # Count opening and closing tags on this line
                # Simple heuristic: count <div and </div> and <motion.div and </motion.div>
                opens = len(re.findall(r'<(?:div|motion\.div|Link)\b', line))
                closes = len(re.findall(r'</(?:div|motion\.div|Link)>', line))

                # Skip the GlowingEffect line itself and the wrapping div
                if GLOW_JSX not in line:
                    for idx in range(len(glow_depth_stack)):
                        glow_depth_stack[idx] += opens - closes

                    # Check if any wrapper has reached depth 0 (its inner div just closed)
                    while glow_depth_stack and glow_depth_stack[-1] <= 0:
                        glow_depth_stack.pop()
                        # Insert closing </div> before this line
                        # Find the indentation
                        indent = len(line) - len(line.lstrip())
                        new_lines.append(' ' * indent + '  </div>')

            new_lines.append(line)
            i += 1

        content = '\n'.join(new_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return count


total = 0
for fp in files_to_process:
    fname = os.path.basename(fp)
    print(f"Processing {fname}...")
    n = process_file(fp)
    print(f"  Wrapped {n} cards")
    total += n

print(f"\nTotal cards wrapped: {total}")
