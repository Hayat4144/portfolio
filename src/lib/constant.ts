import { ImageInfo, Project } from "@/types";


export const WritedailyImage: ImageInfo[] = [
    {
        id: "1",
        url: "/writedaily/image1.png",
    },
    {
        id: "2",
        url: "/writedaily/image2.png",
    },
    {
        id: "3",
        url: "/writedaily/image3.png",
    },

    {
        id: "4",
        url: "/writedaily/image4.png",
    },
    {
        id: "5",
        url: "/writedaily/image5.png",
    },
    {
        id: "6",
        url: "/writedaily/image6.png",
    },

    {
        id: "7",
        url: "/writedaily/image7.png",
    },

    {
        id: "8",
        url: "/writedaily/image8.png",
    },
    {
        id: "9",
        url: "/writedaily/image9.png",
    },
    {
        id: "10",
        url: "/writedaily/image10.png",
    },
];

export const ChitChatImage: ImageInfo[] = [
    {
        id: "1",
        url: "/chit/01.jpeg",
    },
    {
        id: "2",
        url: "/chit/02.jpeg",
    },
    {
        id: "3",
        url: "/chit/03.jpeg",
    },

    {
        id: "4",
        url: "/chit/04.jpeg",
    },
    {
        id: "5",
        url: "/chit/05.jpeg",
    },
];

export const EcommerceDashboardImage: ImageInfo[] = [
    {
        id: "1",
        url: "/dashboard/Screenshot2.png",
    },
    {
        id: "2",
        url: "/dashboard/Screenshot3.png",
    },
    {
        id: "3",
        url: "/dashboard/Screenshot4.png",
    },

    {
        id: "4",
        url: "/dashboard/Screenshot10.png",
    },
    {
        id: "5",
        url: "/dashboard/Screenshot16.png",
    },
    {
        id: "6",
        url: "/dashboard/Screenshot8.png",
    },

    {
        id: "7",
        url: "/dashboard/Screenshot18.png",
    },
    {
        id: "8",
        url: "/dashboard/Screenshot19.png",
    },
    {
        id: "9",
        url: "/dashboard/Screenshot12.png",
    },
    {
        id: "10",
        url: "/dashboard/Screenshot11.png",
    },
];

export const EcommerceImage: ImageInfo[] = [
    {
        id: "1",
        url: "/ecommerce/Screenshot.png",
    },
    {
        id: "2",
        url: "/ecommerce/Screenshot4.png",
    },
    {
        id: "3",
        url: "/ecommerce/Screenshot5.png",
    },

    {
        id: "4",
        url: "/ecommerce/Screenshot6.png",
    },
    {
        id: "5",
        url: "/ecommerce/Screenshot7.png",
    },
    {
        id: "6",
        url: "/ecommerce/Screenshot8.png",
    },

    {
        id: "7",
        url: "/ecommerce/Screenshot18.png",
    },
    {
        id: "8",
        url: "/ecommerce/Screenshot19.png",
    },
    {
        id: "9",
        url: "/ecommerce/Screenshot10.png",
    },
    {
        id: "10",
        url: "/ecommerce/Screenshot11.png",
    },
];

export const NoteverseImage: ImageInfo[] = [
    {
        id: "1",
        url: "/noteversepic/01.jpeg",
    },
    {
        id: "2",
        url: "/noteversepic/02.jpeg",
    },
    {
        id: "3",
        url: "/noteversepic/03.jpeg",
    },
    {
        id: "4",
        url: "/noteversepic/04.jpeg",
    },
];

export const WebDesysImage: ImageInfo[] = [
    {
        id: "1",
        url: "/WebDesys/home.png",
    },
    {
        id: "2",
        url: "/WebDesys/login.png",
    },
    {
        id: "3",
        url: "/WebDesys/project.png",
    },

    {
        id: "4",
        url: "/WebDesys/dashboard.png",

    },
    {
        id: "5",
        url: "/WebDesys/payment.png",

    },
    {
        id: "6",
        url: "/WebDesys/chat.png",

    },

    {
        id: "7",
        url: "/WebDesys/AllChats.png",

    },
    {
        id: "8",
        url: "/WebDesys/BlogCreationg.png",

    },
];


export const projects: Project[] = [
    {
        id: '1',
        name: "WebDesys",
        subheading: "A software company based in Noida which provide web development and digital marketing services.",
        date: 'jun 16, 2024',
        link: 'https://webdesys.com',
        tags: ["React.js", "Next.js", "Redis", "BullMq", "REST API", "Node.js", "Express.js", "TypeScript", "Docker", "Drizzle ORM", "Postgres"],
        description: [
            "I recently completed a comprehensive project for a software company, developing their website from scratch. This involved building the entire backend and integrating numerous features to enhance functionality and user experience.",
            "One of the key features I implemented was a robust payment gateway, supporting three payment types: one-time, progress-based, and subscription. This versatility caters to diverse client needs, ensuring smooth and secure transactions.",
            "Additionally, I incorporated a detailed project management system, allowing users to add new projects, track progress, and manage tasks efficiently."
        ],
        images: WebDesysImage,
    },

    {
        id: '6',
        name: "Chit-Chat",
        subheading: "A modern web application offering a seamless chatting experience.",
        date: 'Jan 10, 2024',
        tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Cloudinary", "TypeScript", "Shadcn UI", "Radix UI", "ImageMagick", "GraphicsMagick", "Socket.js", "Next.js"],
        description: [
            "Real-time messaging app with authentication and dark mode support.",
            "Features include typing status, attachment support (png, webp, jpeg, docs, pdf etc).",
            "Online/offline status indicators for users.",
            "Supports both private and group chats with emoji integration."
        ],
        images: ChitChatImage,
        sourceCode: "https://github.com/hayat4144/chit-chat"
    },
    {
        id: '2',
        name: "Writedaily",
        subheading: "A blogging platform similar to medium where users can write their thoughts and ideas.",
        date: 'Oct 9, 2023',
        link: 'https://writedaily.vercel.app/',
        tags: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Cloudinary", "Shadcn UI", "Node.js", "Express.js", "TypeScript", "Docker", "Drizzle ORM", "Postgres"],
        description: [
            "I developed a robust blogging platform named WriteDaily, similar to Medium.com. With a focus on user experience and performance optimization.",
            "Optimized search functionality by leveraging PostgreSQL's full-text search with GIN indexing, reducing article search time by 17%.",
            "Implemented efficient image processing using Busboy and Cloudinary, ensuring smooth image uploads with proper validation.",
            "The platform features nested comment functionality and a user-friendly WYSIWYG editor powered by Slate.js with markdown support and code block highlighting."
        ],
        images: WritedailyImage,
        sourceCode: "https://github.com/Hayat4144/writedaily",
        docs: "https://documenter.getpostman.com/view/31984472/2s9Ykt4JVs"
    },
    {
        id: '3',
        name: "Noteverse",
        subheading: "A versatile and intuitive note-taking and task management application designed to simplify digital note-taking.",
        date: 'Jul 20, 2023',
        link: 'https://noteverse-woad.vercel.app/',
        tags: ["React.js", "Next.js", "Slate.js", "Shadcn UI", "Radix UI", "TypeScript", "Next-auth", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "Postgres", "Cloudinary"],
        description: [
            "Full stack web app built with modern technology featuring light and dark mode support.",
            "Supports image uploading, table integration, emoji support, and shortcuts for editing notes.",
            "User-friendly interface designed for effortless capture and organization of ideas and information."
        ],
        images: NoteverseImage,
        sourceCode: "https://github.com/hayat4144/noteverse"
    },


    {
        id: '5',
        name: "Ecommerce",
        subheading: "A full stack multi-vendor e-commerce web application.",
        date: 'Apr 16, 2023',
        link: 'https://frontend-hayat4144.vercel.app/',
        tags: ["React.js", "Node.js", "Express.js", "Nodemailer", "Stripe", "Redux", "Tailwind CSS", "MongoDB", "Cloudinary"],
        description: [
            "Modern e-commerce platform built with React, Redux, and Material UI.",
            "Advanced product filtering and sorting by price, rating, and name.",
            "Supports online payments using credit/debit cards with Stripe integration.",
            "Displays similar products based on category, style, or price."
        ],
        images: EcommerceImage,
        sourceCode: "https://github.com/hayat4144/Frontend"
    },
    {
        id: '4',
        name: "Ecommerce Dashboard",
        subheading: "A Dashboard for managing products, orders, and transactions.",
        date: 'Feb 20, 2023',
        link: 'https://dashboard-hayat4144.vercel.app/',
        tags: ["React.js", "Chart.js", "JavaScript", "Tailwind CSS", "Cloudinary", "Redux"],
        description: [
            "Built using React, Tailwind CSS, Vite, Redux, and Chart.js with light and dark theme support.",
            "Provides comprehensive overview of store performance with visually appealing charts.",
            "Includes order charts displaying metrics and transaction donut chart visualizing distribution.",
            "Features chat functionality and secure authentication system."
        ],
        images: EcommerceDashboardImage,
        sourceCode: "https://github.com/Hayat4144/Dashboard"
    },
]




