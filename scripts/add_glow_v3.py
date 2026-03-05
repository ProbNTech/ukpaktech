"""
Add GlowingEffect to corporate-partnerships and mentorship pages.
These have different card className patterns.
"""
import os
import re

BASE = r"c:\New UPTIB\uptechcouncil-clean"

GLOW_IMPORT = 'import { GlowingEffect } from "@/components/ui/glowing-effect";'
GLOW_JSX = '<GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />'

files = [
    os.path.join(BASE, "app", "services", "corporate-partnerships", "page.tsx"),
    os.path.join(BASE, "app", "services", "mentorship", "page.tsx"),
]

# These files use patterns like:
# className="group relative bg-white rounded-2xl border border-[#D8D5CF] p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2563EB]/30"
# className="group relative bg-white border border-[#D8D5CF] rounded-xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"

# We want to find any className that starts with "group relative bg-white" and contains "border-[#D8D5CF]"
# and transform it

CARD_RE = re.compile(
    r'className="(group relative bg-white[^"]*border-\[#D8D5CF\][^"]*)"'
)


def add_import_safely(content):
    if 'GlowingEffect' in content:
        return content
    lines = content.split('\n')
    last_import_end = 0
    in_multiline = False
    for i, line in enumerate(lines):
        s = line.strip()
        if s.startswith('import ') and '{' in s and '}' in s:
            last_import_end = i
        elif s.startswith('import ') and '{' in s and '}' not in s:
            in_multiline = True
        elif in_multiline and '}' in s:
            last_import_end = i
            in_multiline = False
    lines.insert(last_import_end + 1, GLOW_IMPORT)
    return '\n'.join(lines)


def process_file(filepath):
    fname = os.path.basename(os.path.dirname(filepath)) + "/" + os.path.basename(filepath)
    if not os.path.exists(filepath):
        return 0

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'GlowingEffect spread={40}' in content:
        print(f"  SKIP: {fname} already has glow wrappers")
        return 0

    content = add_import_safely(content)

    lines = content.split('\n')
    new_lines = []
    total = 0
    i = 0

    while i < len(lines):
        line = lines[i]
        match = CARD_RE.search(line)

        if match:
            original_classes = match.group(1)
            indent = len(line) - len(line.lstrip())
            inner_indent = ' ' * (indent + 2)

            # Build inner classes: keep everything except border border-[#D8D5CF], change rounded-xl to rounded-2xl
            inner_classes = original_classes
            inner_classes = inner_classes.replace('border border-[#D8D5CF] ', '')
            inner_classes = inner_classes.replace(' border border-[#D8D5CF]', '')
            inner_classes = inner_classes.replace('border-[#D8D5CF] ', '')
            inner_classes = inner_classes.replace('hover:border-[#2563EB]/30 ', '')
            inner_classes = inner_classes.replace(' hover:border-[#2563EB]/30', '')
            inner_classes = inner_classes.replace('rounded-xl', 'rounded-2xl')
            # Ensure it has rounded-2xl
            if 'rounded-2xl' not in inner_classes:
                inner_classes = inner_classes.replace('group relative bg-white', 'group relative bg-white rounded-2xl')

            # Replace on the line
            new_line = line.replace(
                f'className="{original_classes}"',
                f'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"'
            )
            new_lines.append(new_line)
            new_lines.append(f"{inner_indent}{GLOW_JSX}")
            new_lines.append(f'{inner_indent}<div className="{inner_classes}">')

            total += 1
            i += 1

            # Find closing tag
            if '<motion.div' in new_line:
                close_tag = '</motion.div>'
            elif '<button' in new_line:
                close_tag = '</button>'
            else:
                close_tag = '</div>'

            tag_type = close_tag.replace('</', '').replace('>', '')
            open_re = re.compile(r'<' + re.escape(tag_type) + r'[\s>/]')
            close_re = re.compile(r'</' + re.escape(tag_type) + r'>')

            depth = 1
            while i < len(lines) and depth > 0:
                cur = lines[i]
                opens = len(open_re.findall(cur))
                closes = len(close_re.findall(cur))
                depth += opens - closes

                if depth == 0:
                    new_lines.append(f"{inner_indent}</div>")

                new_lines.append(cur)
                i += 1
        else:
            new_lines.append(line)
            i += 1

    content = '\n'.join(new_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  {fname}: wrapped {total} cards")
    return total


total = 0
for fp in files:
    total += process_file(fp)
print(f"\nTotal: {total}")
