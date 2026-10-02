// Central site content. Contact details are PLACEHOLDERS — replace once confirmed.

export const site = {
  name: "SAMAMTA",
  fullName: "Sauti ya Mama na Mtoto Tanzania",
  tagline: "Voice of the Mother and Child",
  description:
    "SAMAMTA is a Tanzanian NGO based in Handeni, Tanga, improving the wellbeing of women, children and youth through empowerment, education, advocacy, training and research.",
  contact: {
    email: "info@samamta.or.tz", // placeholder
    phone: "+255 700 000 000", // placeholder
    whatsapp: "+255 700 000 000", // placeholder
    address: ["P.O. Box 000", "Handeni Town", "Tanga Region, Tanzania"], // placeholder
    hours: ["Monday – Friday", "8:30 am – 5:00 pm EAT"],
  },
  social: {
    facebook: "#",
    instagram: "#",
    x: "#",
    linkedin: "#",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Governance", href: "/about#governance" },
      { label: "Our Priorities", href: "/about#priorities" },
    ],
  },
  {
    label: "Our Work",
    href: "/programmes",
    children: [
      { label: "Women's Economic Empowerment", href: "/programmes#women" },
      { label: "Child Welfare & Protection", href: "/programmes#children" },
      { label: "Youth Empowerment", href: "/programmes#youth" },
      { label: "Community Education", href: "/programmes#education" },
      { label: "Advocacy & Legal Awareness", href: "/programmes#advocacy" },
      { label: "Research & Collaboration", href: "/programmes#research" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Partner With Us", href: "/get-involved#partner" },
      { label: "Become a Member", href: "/get-involved#member" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Donate", href: "/get-involved#donate" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export type Programme = {
  id: string;
  title: string;
  short: string;
  body: string;
  focus: string[];
  image: string;
  icon: "coins" | "shield" | "sprout" | "book" | "scale" | "search";
};

export const programmes: Programme[] = [
  {
    id: "women",
    title: "Women's Economic Empowerment",
    short:
      "Helping women build skills, income and confidence to take part fully in economic life.",
    body: "When women have income and a voice, whole households grow stronger. We support women to start and grow livelihoods, access financial knowledge and take part in the decisions that shape their communities.",
    focus: [
      "Entrepreneurship and income-generating skills",
      "Savings groups and financial literacy",
      "Leadership and participation in decision-making",
    ],
    image: "/images/mother-girl.jpg",
    icon: "coins",
  },
  {
    id: "children",
    title: "Child Welfare & Protection",
    short:
      "Standing with families so every child can grow up safe, healthy and cared for.",
    body: "Children thrive when the people around them are informed and supported. We work with parents, caregivers and local leaders to promote child wellbeing and to recognise and respond to risks children face.",
    focus: [
      "Awareness on child rights and safeguarding",
      "Support for mothers, caregivers and early childhood",
      "Linking families to health and social services",
    ],
    image: "/images/mother-kissing.jpg",
    icon: "shield",
  },
  {
    id: "youth",
    title: "Youth Empowerment & Livelihoods",
    short:
      "Opening pathways for young people to learn, earn and protect their rights.",
    body: "Tanzania's young people are its greatest resource. We help youth build practical skills, understand their social and economic rights, and connect with opportunities for decent work and enterprise.",
    focus: [
      "Life skills, vocational and business training",
      "Protecting youth social and economic rights",
      "Mentorship and youth-led community action",
    ],
    image: "/images/hero.jpg",
    icon: "sprout",
  },
  {
    id: "education",
    title: "Community Education & Capacity Building",
    short:
      "Seminars, workshops and trainings that put knowledge in the hands of communities.",
    body: "Education is at the heart of our vision. Through seminars, workshops and trainings, we share practical knowledge on social and economic development so communities can lead their own progress.",
    focus: [
      "Community seminars and workshops",
      "Training for community groups and leaders",
      "Health and wellbeing awareness for mothers and families",
    ],
    image: "/images/medic-pregnant.jpg",
    icon: "book",
  },
  {
    id: "advocacy",
    title: "Advocacy & Legal Awareness",
    short:
      "Raising the voices of women and children and connecting people to legal aid.",
    body: "Sauti — voice — is in our name. We advocate for the rights of women, children and youth, and help communities understand the law and access legal aid when they need it.",
    focus: [
      "Rights awareness campaigns",
      "Legal aid information and referrals",
      "Dialogue with local government and duty bearers",
    ],
    image: "/images/about.jpg",
    icon: "scale",
  },
  {
    id: "research",
    title: "Research & Stakeholder Collaboration",
    short:
      "Learning from evidence and working alongside government and civil society.",
    body: "Lasting change happens together. We gather evidence on the needs of women, children and youth and collaborate with government, civil society and partners to design better solutions.",
    focus: [
      "Community needs assessments and research",
      "Partnerships with government and civil society",
      "Sharing learning to inform policy and practice",
    ],
    image: "/images/clinic.jpg",
    icon: "search",
  },
];
