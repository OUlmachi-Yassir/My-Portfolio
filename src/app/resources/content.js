import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Yassir',
    lastName:  'OULMACHI',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Développeur JavaScript Junior',
    avatar: '/images/avatar.jpg',
    languages: ['Arabic (Native)', 'French (Intermediate)', 'English (Intermediate)'],
    location: 'Africa/Casablanca',
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/OUlmachi-Yassir',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/oulmachi-yassir-81b48724a/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:oulmachi.yassir@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>DÉVELOPPEUR FULL STACK</>,
    subline: <>I'm Yassir, a developpeur full stack passionate about creating intuitive user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Yassir is a Moroccan-based developer passionate about transforming complex challenges into simple, elegant solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'HARMONASSABATE',
                timeframe: 'May 2024 - July 2024',
                role: 'Développeur Full Stack (Intern)',
                achievements: [
                    'Worked on "CinéManager," a cinema management application using Node.js and Express.js.',
                    'Developed features for the "Hire-me" job search platform with HTML, Tailwind CSS, JavaScript, and Laravel.',
                ],
            },
            {
                company: 'SOGENCO',
                timeframe: 'April 2021 - May 2021',
                role: 'Technicien de qualité (Intern)',
                achievements: [],
            },
            {
                company: 'Office National de Peche (ONP)',
                timeframe: 'January 2022 - March 2022',
                role: 'Contrôleur de qualité (Intern)',
                achievements: [],
            }
        ],
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'YouCode, Safi',
                description: 'Full Stack Developer Program (2023-2025)',
            },
            {
                name: 'École Supérieure de Technologie, Safi',
                description: 'Diploma in Technical Instrumentation and Quality Management (2018-2021)',
            },
            {
                name: 'Acharif Al Idrissi',
                description: 'Bac in Mathematics and Science (2017-2018)',
            }
        ],
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Front-End',
                description: 'HTML5, Tailwind CSS, Bootstrap, JavaScript, React.js, TypeScript, UI/UX Design (Figma, Adobe XD)',
            },
            {
                title: 'Mobile App Development',
                description: 'Flutter',
            },
            {
                title: 'Back-End',
                description: 'PHP, Laravel, Node.js, Express.js, NestJS, MySQL, NoSQL, RestAPI',
            },
            {
                title: 'Tools & Design Patterns',
                description: 'UML, MVC, OOP, Scrum, Kanban, Trello, JIRA, Git',
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { src: '/images/gallery/img-01.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-02.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-03.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-04.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-05.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-06.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-07.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-08.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-09.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-10.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-11.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-12.jpg', alt: 'image', orientation: 'horizontal' },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
