"""
Fix JSX structure: the glow script placed children before the closing > of the parent tag.
Pattern to find:
    className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"
      <GlowingEffect ... />
      <div className="group ...">
    >

Should be:
    className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"
  >
      <GlowingEffect ... />
      <div className="group ...">
"""
import os
import re

BASE = r"c:\New UPTIB\uptechcouncil-clean"

files = [
    os.path.join(BASE, "app", "services", "business-networks", "page.tsx"),
    os.path.join(BASE, "app", "services", "business-support", "page.tsx"),
    os.path.join(BASE, "app", "services", "corporate-partnerships", "page.tsx"),
    os.path.join(BASE, "app", "services", "digital-marketing", "page.tsx"),
    os.path.join(BASE, "app", "services", "mentorship", "page.tsx"),
    os.path.join(BASE, "app", "services", "overseas-employment", "page.tsx"),
    os.path.join(BASE, "app", "services", "sme-hub", "page.tsx"),
]

GLOW_LINE = '<GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />'

for fp in files:
    fname = os.path.basename(os.path.dirname(fp)) + "/" + os.path.basename(fp)
    if not os.path.exists(fp):
        print(f"  SKIP: {fname}")
        continue

    with open(fp, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    fixes = 0
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]

        # Check if this line has the glow className pattern
        if 'className="relative rounded-2xl border border-[#D8D5CF]/60 p-px"' in line and not line.rstrip().endswith('>'):
            # This line has the className but no closing >
            # Check if the next lines are GlowingEffect + inner div, then a standalone >
            # We need to add > at end of this line, then skip the standalone >

            # Find where the standalone > is (within next 5 lines)
            indent_class = len(line) - len(line.lstrip())

            # Look ahead for the > line
            j = i + 1
            glow_lines = []
            found_gt = False
            while j < min(i + 10, len(lines)):
                check_line = lines[j].strip()
                if check_line == '>':
                    found_gt = True
                    break
                glow_lines.append(lines[j])
                j += 1

            if found_gt:
                # Add > to end of className line
                new_lines.append(line.rstrip() + '\n')

                # Find where > should go - right after the className line
                # Insert > on its own line at same indent
                new_lines.append(' ' * indent_class + '>\n')

                # Add the glow and inner div lines
                for gl in glow_lines:
                    new_lines.append(gl)

                # Skip past the standalone > line
                i = j + 1
                fixes += 1
                continue

        new_lines.append(line)
        i += 1

    if fixes > 0:
        with open(fp, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  {fname}: fixed {fixes} occurrences")
    else:
        print(f"  {fname}: no fixes needed")
