import sys, os

def replace_section(filepath, marker, new_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    idx = content.find(marker)
    if idx == -1:
        print(f"  SKIP: marker not found in {os.path.basename(filepath)}")
        return False
    depth = 0
    i = idx
    end_idx = -1
    while i < len(content):
        if content[i:i+8] == '<section':
            depth += 1
        elif content[i:i+10] == '</section>':
            depth -= 1
            if depth == 0:
                end_idx = i + 10
                break
        i += 1
    if end_idx == -1:
        print(f"  SKIP: no closing section in {os.path.basename(filepath)}")
        return False
    new_content = content[:idx] + new_block + content[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  OK: {os.path.basename(filepath)}")
    return True

def tubes(label, heading, desc, b1, h1, b2, h2, center=False):
    cc = ' mx-auto text-center' if center else ''
    mc = ' mx-auto' if center else ''
    jc = ' justify-center' if center else ''
    return (
        '<TubesCTA>\n'
        '        <AnimatedSection>\n'
        f'          <div className="max-w-3xl{cc}">\n'
        f'            <p className="text-sm font-semibold text-[#4ade80] uppercase tracking-wider mb-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">{label}</p>\n'
        f'            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">{heading}</h2>\n'
        f'            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl{mc} drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">{desc}</p>\n'
        f'            <div className="flex flex-wrap gap-4{jc}">\n'
        f'              <Button href="{h1}" variant="glass" size="lg" showArrow>{b1}</Button>\n'
        f'              <Button href="{h2}" variant="glass" size="lg" showArrow>{b2}</Button>\n'
        '            </div>\n'
        '          </div>\n'
        '        </AnimatedSection>\n'
        '      </TubesCTA>'
    )

B = sys.argv[1]
p = lambda *x: os.path.join(B, *x)

# Ecosystem
replace_section(p('app','ecosystem','uk-pakistan-technology-partnership','UKPakistanTechnologyPartnershipClient.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Join the Partnership','Strengthen the Corridor. Build the Future.','Join us in building a stronger technology partnership between the UK and Pakistan.','Apply for Membership','/membership/apply','Contact Us','/contact'))

replace_section(p('app','ecosystem','startup-funding','page.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Get Started','Empowering Startups. Connecting Investors. Driving Cross-Border Growth.','Whether you are a startup seeking investment or an investor looking for the next breakthrough, the UK-Pakistan Tech Council is your gateway to cross-border opportunity.','Apply for Membership','/membership/apply','Contact Us','/contact',True))

replace_section(p('app','ecosystem','series-funding','page.tsx'),
    '<section className="relative bg-[#0E1221]/80 overflow-hidden">',
    tubes('Scale Now','Fuel Growth. Expand Markets. Transform the Tech Ecosystem.','Whether you are a scaling company seeking Series A or B funding, or an investor looking for growth-stage opportunities, the UK-Pakistan Tech Council is your partner in driving cross-border innovation.','Apply for Membership','/membership/apply','Contact Us','/contact',True))

replace_section(p('app','ecosystem','funding-and-grants','FundingAndGrantsClient.tsx'),
    '<section className="relative bg-[#131942]/80 overflow-hidden">',
    tubes('Apply Now','Ready to Secure Funding for Your Innovation?','Explore funding opportunities and take your technology innovation to the next level with UPTECH funding and grants programs.','Apply for Membership','/membership/apply','Contact Us','/contact'))

replace_section(p('app','ecosystem','trade-delegations-and-exhibitions','TradeDelegationsAndExhibitionsClient.tsx'),
    '<section className="relative bg-[#0E1221]/80 overflow-hidden">',
    tubes('Get Involved','Join Our Next Delegation','Connect with technology leaders and explore cross-border opportunities through UPTECH trade delegations and exhibitions.','View Events','/events','Contact Us','/contact'))

# Services
replace_section(p('app','services','digital-marketing','page.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Get Started','Ready to Grow Your Market Presence Globally?','Whether you are launching a new software solution, scaling into new territories, or seeking strategic partnerships, the Digital Product Marketing Hub provides the platform and support to help you grow.','Join the Hub','/membership','Contact Us','/contact'))

replace_section(p('app','services','mentorship','page.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Make an Impact','Ready to Shape the Next Generation of Tech Leaders?','Whether you are an experienced founder or an industry specialist, this is your chance to support ambitious entrepreneurs and learn along the way.','Join as a Mentor','/membership','Contact Us','/contact',True))

replace_section(p('app','services','sme-hub','page.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Start Growing','Ready to Accelerate Your SME Growth?','Join the SME Hub and gain access to sales insights, finance opportunities, talent networks, and exclusive member benefits across four key global markets.','Join the Hub','/membership','Contact Us','/contact'))

replace_section(p('app','services','business-networks','page.tsx'),
    '<section className="relative bg-[#131942]/80 overflow-hidden">',
    tubes('Join the Network','Ready to Expand Your Network Across Continents?','Join the UPTECH business network and unlock strategic connections, market insights, and partnership opportunities across the UK, Pakistan, Europe, Middle East, and Africa.','Become a Member','/membership','Contact Us','/contact'))

replace_section(p('app','services','business-support','page.tsx'),
    '<section className="relative bg-[#131942]/80 overflow-hidden">',
    tubes('Get Started','Need Business Support? Let Us Help.','Whether you are registering a company, protecting IP, or preparing for investment, our team and partners are here to help you build on solid foundations.','Become a Member','/membership','Contact Us','/contact'))

replace_section(p('app','services','corporate-partnerships','page.tsx'),
    '<section className="relative bg-[#131942]/80 overflow-hidden">',
    tubes('Partner With Us','Ready to Build the Future of Tech Together?','Whether you are a founder, startup, investor, or corporate partner, we are here to help you go further, faster.','Become a Member','/membership','Contact Us','/contact',True))

replace_section(p('app','services','overseas-employment','page.tsx'),
    '<section className="relative bg-[#131942]/80 overflow-hidden">',
    tubes('Get Started','Get connected. Access opportunities. Grow your impact.','Overseas contract employment through the Council provides a trusted, compliant, and efficient way to connect talent with opportunity.','Get Connected','/membership','Contact Us','/contact'))

# Initiatives
replace_section(p('app','initiatives','people-ai','PeopleAIClient.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Get Started','Join the People AI Platform','Be part of a transformative movement reshaping how people and organisations work with AI across the UK and Pakistan.','Get Started','/membership/apply','Contact Us','/contact'))

replace_section(p('app','initiatives','tech-excellence-awards','TechExcellenceAwardsClient.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Submit a Nomination','Nominate the Innovators Shaping the UK-Pakistan Tech Corridor','Help us recognise exceptional individuals and organisations driving technology excellence and cross-border collaboration.','Submit a Nomination','/membership/apply','Contact Us','/contact'))

replace_section(p('app','initiatives','techmart-global','TechMartGlobalClient.tsx'),
    '<section className="relative bg-[#0B0F1A]/80 overflow-hidden">',
    tubes('Join the Platform','Join TechMart Global','Connect with the global technology marketplace and unlock new opportunities for growth and cross-border collaboration.','Get Started','/membership/apply','Learn About Membership','/contact',True))

# Programs
replace_section(p('app','programs','ai-tech-programs','AITechProgramsClient.tsx'),
    '<section className="relative overflow-hidden">\n        <div className="absolute inset-0">\n          <Image src="https://images.unsplash.com/photo-1620712943543',
    tubes('Get Involved','Start Building With UPTECH','Whether you are an entrepreneur, student, or technology professional, our programmes provide structured pathways to training, collaboration, and market access across the UK-Pakistan technology corridor.','Become a Member','/membership/apply','Get in Touch','/contact'))

replace_section(p('app','programs','incubation-collective-startups','IncubationCollectiveStartupsClient.tsx'),
    '<section className="relative overflow-hidden">\n        <div className="absolute inset-0">\n          <Image src="https://images.unsplash.com/photo-1497366216548',
    tubes('Get Involved','Build, Scale, and Expand With UPTECH','Join our incubation program and become part of a collaborative ecosystem driving innovation across the UK and Pakistan.','Apply for Incubation','/membership/apply','Partner With Us','/contact'))

print("\nDone with 17 custom CTA replacements!")
