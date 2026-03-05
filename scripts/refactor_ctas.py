"""
Refactor all CTA sections to use the shared GlobalCTA component.
Replaces inline TubesCTA blocks with <GlobalCTA .../> across all pages.
"""
import re, os

BASE = "c:/New UPTIB/uptechcouncil-clean"

# CTA data for each page
pages = {
    "app/about/page.tsx": {
        "label": "Join Us",
        "title": "Ready to Be Part of the Movement?",
        "subtitle": "Join UPTECH and connect with technology leaders, entrepreneurs, and innovators shaping the UK\u2013Pakistan tech corridor.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/contact/page.tsx": {
        "label": "Connect with Us",
        "title": "Let\u2019s Build the Future Together",
        "subtitle": "Whether you represent a startup, corporation, government body, or academic institution \u2014 UPTECH is your gateway to the UK\u2013Pakistan technology partnership.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "About UPTECH",
        "p2_link": "/about",
    },
    "app/code-of-conduct/page.tsx": {
        "label": "Questions?",
        "title": "Committed to the Highest Standards",
        "subtitle": "If you have questions about the Code of Conduct or need to report a concern, please contact the governance team.",
        "p1_text": "Contact Us",
        "p1_link": "/contact",
        "p2_text": "Apply for Membership",
        "p2_link": "/membership/apply",
    },
    "app/faqs/page.tsx": {
        "label": "Still Have Questions?",
        "title": "We\u2019re Here to Help",
        "subtitle": "Can\u2019t find the answer you\u2019re looking for? Our team is ready to assist with any questions about UPTECH, membership, programmes, or partnerships.",
        "p1_text": "Contact Us",
        "p1_link": "/contact",
        "p2_text": "Apply for Membership",
        "p2_link": "/membership/apply",
    },
    "app/members-guidance/page.tsx": {
        "label": "Contact Us",
        "title": "Communication & Support",
        "subtitle": "For any questions, support requests, or feedback, contact our membership team at info@uptech.org.uk. We aim to respond to all member enquiries within 2 business days.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/excellence-management-terms/page.tsx": {
        "label": "Need Help?",
        "title": "Questions About These Terms?",
        "subtitle": "For questions about these terms, contact us at info@uptech.org.uk.",
        "p1_text": "Contact Us",
        "p1_link": "/contact",
        "p2_text": "",
        "p2_link": "",
    },
    "app/structure/page.tsx": {
        "label": "Get Involved",
        "title": "Transparent Governance, Collective Impact",
        "subtitle": "Our structure ensures every member has a voice. Learn more about how you can contribute to UPTECH\u2019s mission.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Leadership & Governance",
        "p2_link": "/leadership",
    },
    "app/job-portal/page.tsx": {
        "label": "The Future of Work",
        "title": "The Future of Cross-Border Tech Careers",
        "subtitle": "Empowering technology talent and fostering cross-border collaboration \u2014 our Job Portal helps build the workforce of the future.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/news/page.tsx": {
        "label": "Stay Connected",
        "title": "Never Miss an Update",
        "subtitle": "Join the UPTECH community to receive the latest news, policy updates, and investment insights from the UK\u2013Pakistan technology corridor.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/products/page.tsx": {
        "label": "Get Access",
        "title": "Ready to Use Our Platforms?",
        "subtitle": "UPTECH members get priority access to People AI and TechMart Global. Join today and start leveraging our technology platforms.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/page.tsx": {
        "label": "Get Started",
        "title": "Ready to Access Our Full Suite of Services?",
        "subtitle": "Join UPTECH and unlock access to business networks, mentorship, investment support, marketing, employment, and more.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/business-networks/page.tsx": {
        "label": "Join the Network",
        "title": "Ready to Expand Your Network Across Continents?",
        "subtitle": "Join the UPTECH business network and unlock strategic connections, market insights, and partnership opportunities across the UK, Pakistan, Europe, Middle East, and Africa.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/business-support/page.tsx": {
        "label": "Get Started",
        "title": "Need Business Support? Let Us Help.",
        "subtitle": "Whether you are registering a company, protecting IP, or preparing for investment, our team and partners are here to help you build on solid foundations.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/corporate-partnerships/page.tsx": {
        "label": "Partner With Us",
        "title": "Ready to Build the Future of Tech Together?",
        "subtitle": "Whether you are a founder, startup, investor, or corporate partner, we are here to help you go further, faster.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/digital-marketing/page.tsx": {
        "label": "Get Started",
        "title": "Ready to Grow Your Market Presence Globally?",
        "subtitle": "Whether you are launching a new software solution, scaling into new territories, or seeking strategic partnerships, the Digital Product Marketing Hub provides the platform and support to help you grow.",
        "p1_text": "Join the Hub",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/mentorship/page.tsx": {
        "label": "Make an Impact",
        "title": "Ready to Shape the Next Generation of Tech Leaders?",
        "subtitle": "Whether you are an experienced founder or an industry specialist, this is your chance to support ambitious entrepreneurs and learn along the way.",
        "p1_text": "Join as a Mentor",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/sme-hub/page.tsx": {
        "label": "Start Growing",
        "title": "Ready to Accelerate Your SME Growth?",
        "subtitle": "Join the SME Hub and gain access to sales insights, finance opportunities, talent networks, and exclusive member benefits across four key global markets.",
        "p1_text": "Join the Hub",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/services/overseas-employment/page.tsx": {
        "label": "Get Started",
        "title": "Get connected. Access opportunities. Grow your impact.",
        "subtitle": "Overseas contract employment through the Council provides a trusted, compliant, and efficient way to connect talent with opportunity.",
        "p1_text": "Get Connected",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/membership/MembershipClient.tsx": {
        "label": "Join Today",
        "title": "Ready to Join UPTECH?",
        "subtitle": "Membership with the Council provides more than just networking \u2014 it\u2019s a gateway to growth, visibility, and influence in the UK\u2013Pakistan technology corridor.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Get in Touch",
        "p2_link": "/contact",
    },
    "app/meeting-space/page.tsx": {
        "label": "Access & Reservations",
        "title": "Reserve Your Meeting Space",
        "subtitle": "Meeting facilities are available by advance booking and subject to membership tier allocations and availability.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/ecosystem/funding-and-grants/FundingAndGrantsClient.tsx": {
        "label": "Apply Now",
        "title": "Ready to Secure Funding for Your Innovation?",
        "subtitle": "Explore funding opportunities and take your technology innovation to the next level with UPTECH funding and grants programs.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/ecosystem/series-funding/page.tsx": {
        "label": "Scale Now",
        "title": "Fuel Growth. Expand Markets. Transform the Tech Ecosystem.",
        "subtitle": "Whether you are a scaling company seeking Series A or B funding, or an investor looking for growth-stage opportunities, the UK\u2013Pakistan Tech Council is your partner in driving cross-border innovation.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/ecosystem/startup-funding/page.tsx": {
        "label": "Get Started",
        "title": "Empowering Startups. Connecting Investors. Driving Cross-Border Growth.",
        "subtitle": "Whether you are a startup seeking investment or an investor looking for the next breakthrough, the UK\u2013Pakistan Tech Council is your gateway to cross-border opportunity.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/ecosystem/trade-delegations-and-exhibitions/TradeDelegationsAndExhibitionsClient.tsx": {
        "label": "Get Involved",
        "title": "Join Our Next Delegation",
        "subtitle": "Connect with technology leaders and explore cross-border opportunities through UPTECH trade delegations and exhibitions.",
        "p1_text": "View Events",
        "p1_link": "/events",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/ecosystem/uk-pakistan-technology-partnership/UKPakistanTechnologyPartnershipClient.tsx": {
        "label": "Join the Partnership",
        "title": "Strengthen the Corridor. Build the Future.",
        "subtitle": "Join us in building a stronger technology partnership between the UK and Pakistan.",
        "p1_text": "Apply for Membership",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/initiatives/ai-tech-programs/page.tsx": {
        "label": "Get Started",
        "title": "Ready to Transform Your Tech Career?",
        "subtitle": "Join UPTECH\u2019s AI and Tech Programs and become part of a global network driving innovation between the UK and Pakistan.",
        "p1_text": "Become a Member",
        "p1_link": "/membership",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/initiatives/people-ai/PeopleAIClient.tsx": {
        "label": "Get Started",
        "title": "Join the People AI Platform",
        "subtitle": "Be part of a transformative movement reshaping how people and organisations work with AI across the UK and Pakistan.",
        "p1_text": "Get Started",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/initiatives/tech-excellence-awards/TechExcellenceAwardsClient.tsx": {
        "label": "Submit a Nomination",
        "title": "Nominate the Innovators Shaping the UK\u2013Pakistan Tech Corridor",
        "subtitle": "Help us recognise exceptional individuals and organisations driving technology excellence and cross-border collaboration.",
        "p1_text": "Submit a Nomination",
        "p1_link": "/membership/apply",
        "p2_text": "Contact Us",
        "p2_link": "/contact",
    },
    "app/initiatives/techmart-global/TechMartGlobalClient.tsx": {
        "label": "Join the Platform",
        "title": "Join TechMart Global",
        "subtitle": "Connect with the global technology marketplace and unlock new opportunities for growth and cross-border collaboration.",
        "p1_text": "Get Started",
        "p1_link": "/membership/apply",
        "p2_text": "Learn About Membership",
        "p2_link": "/membership",
    },
    "app/programs/ai-tech-programs/AITechProgramsClient.tsx": {
        "label": "Get Involved",
        "title": "Start Building With UPTECH",
        "subtitle": "Whether you are an entrepreneur, student, or technology professional, our programmes provide structured pathways to training, collaboration, and market access across the UK\u2013Pakistan technology corridor.",
        "p1_text": "Become a Member",
        "p1_link": "/membership/apply",
        "p2_text": "Get in Touch",
        "p2_link": "/contact",
    },
    "app/programs/incubation-collective-startups/IncubationCollectiveStartupsClient.tsx": {
        "label": "Get Involved",
        "title": "Build, Scale, and Expand With UPTECH",
        "subtitle": "Join our incubation program and become part of a collaborative ecosystem driving innovation across the UK and Pakistan.",
        "p1_text": "Apply for Incubation",
        "p1_link": "/membership/apply",
        "p2_text": "Partner With Us",
        "p2_link": "/contact",
    },
    "app/programs/skill-development-center/page.tsx": {
        "label": "Get Started",
        "title": "Ready to Transform Your Career?",
        "subtitle": "Join UPTECH\u2019s Skill Development Center and unlock your potential in the tech industry. Start your journey today with world-class training and mentorship.",
        "p1_text": "Apply for Training",
        "p1_link": "/membership/apply",
        "p2_text": "Partner with UPTECH",
        "p2_link": "/contact",
    },
}

IMPORT_LINE = 'import { GlobalCTA } from "@/components/GlobalCTA";'

def build_jsx(data, indent):
    """Build the GlobalCTA JSX element."""
    lines = [f'{indent}<GlobalCTA']
    lines.append(f'{indent}  label="{data["label"]}"')
    lines.append(f'{indent}  title="{data["title"]}"')
    lines.append(f'{indent}  subtitle="{data["subtitle"]}"')
    lines.append(f'{indent}  primaryButtonText="{data["p1_text"]}"')
    lines.append(f'{indent}  primaryButtonLink="{data["p1_link"]}"')
    if data.get("p2_text"):
        lines.append(f'{indent}  secondaryButtonText="{data["p2_text"]}"')
        lines.append(f'{indent}  secondaryButtonLink="{data["p2_link"]}"')
    lines.append(f'{indent}/>')
    return '\n'.join(lines)

def add_import(content):
    """Add GlobalCTA import after last import line."""
    if 'GlobalCTA' in content:
        return content
    # Find the last import statement
    last_pos = 0
    for m in re.finditer(r'^import .+;.*$', content, re.MULTILINE):
        last_pos = m.end()
    if last_pos > 0:
        content = content[:last_pos] + '\n' + IMPORT_LINE + content[last_pos:]
    return content

def remove_tubes_import(content):
    """Remove TubesCTA import if TubesCTA is no longer referenced."""
    # Check if TubesCTA is still used (outside of import lines)
    without_imports = re.sub(r'^import .+$', '', content, flags=re.MULTILINE)
    if 'TubesCTA' not in without_imports:
        content = re.sub(r'import \{ TubesCTA \} from [^\n]+;\n', '', content)
    return content

results = []

for rel_path, data in pages.items():
    full_path = os.path.join(BASE, rel_path)

    if not os.path.exists(full_path):
        results.append(f"MISS {rel_path}")
        continue

    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # Find TubesCTA block
    match = re.search(r'\n([ ]*)<TubesCTA>[\s\S]*?</TubesCTA>', content)

    if not match:
        results.append(f"SKIP {rel_path}: no <TubesCTA> block found")
        continue

    indent = match.group(1)
    jsx = build_jsx(data, indent)

    # Replace the TubesCTA block
    content = content[:match.start()] + '\n' + jsx + content[match.end():]

    # Update imports
    content = add_import(content)
    content = remove_tubes_import(content)

    if content != original:
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)
        results.append(f"OK   {rel_path}")
    else:
        results.append(f"SAME {rel_path}")

for r in results:
    print(r)

print(f"\nProcessed {len(pages)} files.")
