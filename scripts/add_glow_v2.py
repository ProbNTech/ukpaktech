"""
Add GlowingEffect to services subpages.
More careful approach: add import, then do find-and-replace on card class patterns,
and use balanced brace counting to insert closing </div>.
"""
import os
import re

BASE = r"c:\New UPTIB\uptechcouncil-clean"

GLOW_IMPORT = 'import { GlowingEffect } from "@/components/ui/glowing-effect";'
GLOW_JSX = '<GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />'

files = [
    os.path.join(BASE, "app", "services", "business-networks", "page.tsx"),
    os.path.join(BASE, "app", "services", "business-support", "page.tsx"),
    os.path.join(BASE, "app", "services", "corporate-partnerships", "page.tsx"),
    os.path.join(BASE, "app", "services", "digital-marketing", "page.tsx"),
    os.path.join(BASE, "app", "services", "mentorship", "page.tsx"),
    os.path.join(BASE, "app", "services", "overseas-employment", "page.tsx"),
    os.path.join(BASE, "app", "services", "sme-hub", "page.tsx"),
]

# Card class patterns to replace (old -> new_outer_class, new_inner_class)
REPLACEMENTS = [
    # Most common: group relative bg-white border border-[#D8D5CF] shadow-sm rounded-xl ...
    (
        'className="group relative bg-white border border-[#D8D5CF] shadow-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300"',
        'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"',
        'className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"',
    ),
    # Without shadow-sm before rounded
    (
        'className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm"',
        'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"',
        'className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"',
    ),
    # With flex flex-col
    (
        'className="group relative bg-white border border-[#D8D5CF] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 shadow-sm flex flex-col"',
        'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"',
        'className="group relative bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col h-full"',
    ),
]


def add_import_safely(content):
    """Add GlowingEffect import after all import statements."""
    if 'GlowingEffect' in content:
        return content

    lines = content.split('\n')
    # Find the last complete import statement
    last_import_end = 0
    in_multiline_import = False
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('import ') and '{' in stripped and '}' in stripped:
            # Single-line import
            last_import_end = i
        elif stripped.startswith('import ') and '{' in stripped and '}' not in stripped:
            # Start of multi-line import
            in_multiline_import = True
        elif in_multiline_import and '}' in stripped:
            # End of multi-line import
            last_import_end = i
            in_multiline_import = False

    lines.insert(last_import_end + 1, GLOW_IMPORT)
    return '\n'.join(lines)


def wrap_cards_in_file(filepath):
    """Process a file: add import and wrap card patterns with glow."""
    fname = os.path.basename(os.path.dirname(filepath)) + "/" + os.path.basename(filepath)

    if not os.path.exists(filepath):
        print(f"  SKIP: {fname} not found")
        return 0

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'GlowingEffect' in content:
        print(f"  SKIP: {fname} already has GlowingEffect")
        return 0

    # Step 1: Add import
    content = add_import_safely(content)

    # Step 2: Replace card class patterns
    # For each replacement, we transform the className on the motion.div/div,
    # then we need to:
    # a) Change the outer element's className to the glow wrapper class
    # b) Insert GlowingEffect + open inner div right after the opening tag
    # c) Close the inner div before the outer element closes

    total_count = 0

    for old_class, new_outer_class, new_inner_class in REPLACEMENTS:
        if old_class not in content:
            continue

        count = content.count(old_class)
        total_count += count

        # Strategy: work line by line. Find each occurrence of old_class,
        # replace it, add glow + inner div, then find where to close inner div.

        lines = content.split('\n')
        new_lines = []
        i = 0

        while i < len(lines):
            line = lines[i]

            if old_class in line:
                # Found a card to wrap
                indent = len(line) - len(line.lstrip())
                inner_indent = ' ' * (indent + 2)

                # Replace the className
                new_line = line.replace(old_class, new_outer_class)
                new_lines.append(new_line)

                # Add GlowingEffect and inner div on next lines
                new_lines.append(f"{inner_indent}{GLOW_JSX}")
                new_lines.append(f"{inner_indent}<div {new_inner_class}>")

                i += 1

                # Now we need to find the closing tag for this element.
                # Count open/close angle brackets to find the matching close.
                # The parent element is whatever tag had the old_class.
                # We need to find its closing tag and insert </div> before it.

                # Determine the closing tag by looking at the opening
                if '<motion.div' in new_line:
                    close_tag = '</motion.div>'
                elif '<button' in new_line:
                    close_tag = '</button>'
                else:
                    close_tag = '</div>'

                # Simple depth tracking: count opens and closes of the parent tag type
                depth = 1
                tag_type = close_tag.replace('</', '').replace('>', '')
                open_re = re.compile(r'<' + re.escape(tag_type) + r'[\s>]')
                close_re = re.compile(r'</' + re.escape(tag_type) + r'>')

                while i < len(lines) and depth > 0:
                    cur_line = lines[i]
                    opens = len(open_re.findall(cur_line))
                    closes = len(close_re.findall(cur_line))
                    depth += opens - closes

                    if depth == 0:
                        # This line has the matching close tag
                        # Insert </div> before it
                        new_lines.append(f"{inner_indent}</div>")

                    new_lines.append(cur_line)
                    i += 1
            else:
                new_lines.append(line)
                i += 1

        content = '\n'.join(new_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  {fname}: wrapped {total_count} cards")
    return total_count


total = 0
for fp in files:
    total += wrap_cards_in_file(fp)

print(f"\nTotal: {total} cards wrapped")
