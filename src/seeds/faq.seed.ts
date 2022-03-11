interface iFaq {
    question: string;
    answer: string[];
    link_text: string;
    link: string;
}

export const faqList: iFaq[] = [
    {
        question: 'What is a membership site?',
        answer: [
            `A membership site — also called a member portal or member hub —
    is a members-only area where members can access their member
    benefits. The content is gated behind a member login. The
    membership site is linked to your public-facing website. Members
    can use the membership site to update their membership
    information, renew their membership, register for events, watch
    videos, download resources and stay in touch with other members.`,
            `To learn more about membership sites, read our blog,`,
        ],
        link_text: `A Tale of Two Entities: The Benefit of Keeping your Member
        Portal and Website Separate.`,
        link: '/',
    },
    {
        question: 'What features should I have on my membership site?',
        answer: [
            `A membership site should facilitate your members to engage with your association’s member benefits. Providing an intuitive and easy-to-navigate experience is key to maintaining member engagement and retention. Any other additional feature on your portal should directly benefit your members and the work you do to support them. Anything else can be removed as it adds clutter and confusion to the user. Less is more.`,
            `For more information about improving the user experience of your members, read our blog`,
        ],
        link_text: `5 Tips for Delivering a Better Member Experience.`,
        link: '/',
    },
    {
        question: 'How can I engage our members more with our membership site?',
        answer: [
            `Engaging members is the process of keeping your members involved and in touch with your association. Member engagement does not look the same for all members, and having realistic expectations around member engagement is the starting point for improving member engagement.`,
            `To learn more about how to engage your members, read our blog`,
        ],
        link_text: '5 Proven Ways to Increase Member Engagement.',
        link: '/',
    },
    {
        question:
            "Do I need to rebuild our association's memberships site or can I improve the site we already have?",
        answer: [
            `When your membership site isn't meeting the needs of your members and your association staff, a membership site audit is appropriate. Get an assessment on whether your association's website can be reworked and improved or if it needs to be scrapped and rebuilt. There are many membership site template-building tools on the market as well as software development companies that can integrate your website with a CRM, such as CiviCRM.`,
            `To help determine if a template membership site tool or a custom-build membership site is appropriate for your association, read our blog`,
        ],
        link_text:
            'Custom vs. Template Membership Sites: What Is Right For You?.',
        link: '/',
    },
    {
        question: 'How can we increase our member renewal rate?',
        answer: [
            `Members join an association when they trust that the association can help them professionally and personally. When a member does not get value from their membership, they let their membership lapse. The way to increase membership renewals is to highlight the value of membership to your members by connecting them with your valuable member benefits.`,
            `To learn more about how associations inadvertently hide the value of their member benefits from their members and impact their renewal rates, read our blog`,
        ],
        link_text: '5 Proven Ways to Increase Member Retention.',
        link: '/',
    },
    {
        question:
            'How often should our association be communicating with our members?',
        answer: [
            `Creating a member communication plan that will engage — rather than repel — members requires a multi-prong approach. Member engagement levels will vary for different member profile types. Understanding your members well and how they want to communicate with you is key to successful communication with your members. It starts with understanding what members want from your association to help them professionally and understanding how members want to engage to manage member engagement expectations.`,
            `To learn more about member communication strategy, read our blog`,
        ],
        link_text:
            'Membership Communication Plan: Your Guide to Connecting with Your Members.',
        link: '/',
    },
    {
        question: 'What tools do associations need to manage their members?',
        answer: [
            `Associations need the right tools to be able to manage their members, membership types, staff, events, donations, communications, and all the little details that go into running an association. Associations need a back-end CRM to keep their staff organized, such as CiviCRM. Association's need a front-facing public website geared towards their prospective members. Associations need a membership site with gated content for their members to access their member benefits. Associations need an email marketing tool to manage their communications and ways to track their member activity and website traffic, such as Google Analytics.`,
            `Read in more detail about the tech tools associations need to successfully manage their membership in our blog`,
        ],
        link_text: 'The Top 5 Member Management Tools for Associations.',
        link: '/',
    },
    {
        question:
            'How can our association increase member traffic to our website?',
        answer: [
            `Your association has created valuable member benefits for your members — only that they are underused by your membership! Improving traffic to both your public-facing website and your member-focused membership site is done by creating a user experience that is appropriate for the audiences visiting your website. Your public-facing website should be used to target your prospective members, while your membership site's messaging should appeal to your members.`,
            `To learn more about how to improve traffic to your membership site read our blog`,
        ],
        link_text:
            "5 Reasons Why Your Members Don't Use Your Association's Website.",
        link: '/',
    },
];
