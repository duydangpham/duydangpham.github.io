export interface Project {
  title: string;
  client: string;
  thumbnail: string;
  description: string;
  legacyUrl?: string;
}

export interface ProjectCategory {
  slug: string;
  label: string;
  projects: Project[];
}

type ProjectKind = ProjectCategory['slug'];

interface ProjectSeed {
  title: string;
  client: string;
  thumbnail: string;
  legacyUrl?: string;
  description?: string;
}

const legacyBaseUrl = 'https://drduydangpham.com/projects';
const imageBaseUrl = 'https://drduydangpham.com/assets/img/project_img';

const defaultProjectDescription = (
  kind: ProjectKind,
  title: string,
  client: string,
): string => {
  switch (kind) {
    case 'consulting':
      return `${title} is a consulting engagement delivered for ${client}.`;
    case 'training':
      return `${title} is a training engagement delivered for ${client}.`;
    case 'conference':
      return `${title} is a conference or keynote session delivered for ${client}.`;
    default:
      return `${title} is a project delivered for ${client}.`;
  }
};

const createProject = (kind: ProjectKind, seed: ProjectSeed): Project => ({
  ...seed,
  description: seed.description ?? defaultProjectDescription(kind, seed.title, seed.client),
});

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'consulting',
    label: 'Consulting',
    projects: [
      createProject('consulting', {
        title: 'Gender Empowerment in Education',
        client: 'Gender Equality Across Industries (GEAI)',
        thumbnail: `${imageBaseUrl}/2024Feb_GEAI_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/10_project/`,
      }),
      createProject('consulting', {
        title: 'Digital Competency of Vietnamese Citizens',
        client: 'Australian Vietnam Policy Institute (AVPI)',
        thumbnail: `${imageBaseUrl}/2023Oct3_AVPI_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/11_project/`,
      }),
      createProject('consulting', {
        title: 'Standards-based Digitalization Toolkit',
        client: 'British Standards Institution (BSI)',
        thumbnail: `${imageBaseUrl}/2023_BSI_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/19_project/`,
      }),
      createProject('consulting', {
        title: 'ASEAN Standards Framework for Cross-border E-commerce',
        client: 'British Standards Institution (BSI)',
        thumbnail: `${imageBaseUrl}/2025Mar_BSI_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/20_project/`,
      }),
      createProject('consulting', {
        title: 'AI Chatbot for Healthcare',
        client: 'University Medical Center Hospital',
        thumbnail: `${imageBaseUrl}/2024Mar19_UMC_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/9_project/`,
      }),
    ],
  },
  {
    slug: 'training',
    label: 'Training',
    projects: [
      createProject('training', {
        title: 'Generative AI for managers',
        client: 'TTT Corporation',
        thumbnail: `${imageBaseUrl}/2025Mar22_TTT_training_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/1_project/`,
      }),
      createProject('training', {
        title: 'AI and automation for Human Resources (HR)',
        client: 'PNJ Jewelry Production and Trading (PNJP)',
        thumbnail: `${imageBaseUrl}/2025May_PNJP_2.jpeg`,
        legacyUrl: `${legacyBaseUrl}/21_project/`,
      }),
      createProject('training', {
        title: 'Cybersecurity Incident Response & Decree 13',
        client: 'PPJ Group',
        thumbnail: `${imageBaseUrl}/2025Mar3_PPJ_training_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/2_project/`,
      }),
      createProject('training', {
        title: 'Information Security Governance',
        client: 'EVN Finance',
        thumbnail: `${imageBaseUrl}/2024Mar_EVNFinance_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/4_project/`,
      }),
      createProject('training', {
        title: 'Information Security Governance & Decree 13',
        client: 'Vietcombank',
        thumbnail: `${imageBaseUrl}/2024Apr_Vietcombank_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/5_project/`,
      }),
      createProject('training', {
        title: 'Information Security Culture',
        client: 'PPJ',
        thumbnail: `${imageBaseUrl}/2024Apr_PPJ_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/6_project/`,
      }),
      createProject('training', {
        title: 'Information Security Risk Management',
        client: 'Phu Hung Securities',
        thumbnail: `${imageBaseUrl}/2024Apr_PhuHungSecurities_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/7_project/`,
      }),
    ],
  },
  {
    slug: 'conference',
    label: 'Conference',
    projects: [
      createProject('conference', {
        title: 'ChatGPT applications for SMEs',
        client: 'Ben Tre Province',
        thumbnail: `${imageBaseUrl}/2023Oct6_BenTreGPT_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/12_project/`,
      }),
      createProject('conference', {
        title: 'Digital Transformation Strategies for SMEs',
        client: 'Quang Ngai Province',
        thumbnail: `${imageBaseUrl}/2023Sep30_QuangNgai_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/13_project/`,
      }),
      createProject('conference', {
        title: 'Digital Transformation Trends in F&B Industry',
        client: 'TECHFEST 2022',
        thumbnail: `${imageBaseUrl}/2022Dec4_TECHFEST22_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/14_project/`,
      }),
      createProject('conference', {
        title: 'Digital Transformation Strategies for SMEs',
        client: 'Dak Nong Province',
        thumbnail: `${imageBaseUrl}/2022Aug2_DakNong_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/15_project/`,
      }),
      createProject('conference', {
        title: 'Digitization of Trust',
        client: 'Fulbright University Vietnam',
        thumbnail: `${imageBaseUrl}/2022Jun1_DigitalizationOfTrust_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/16_project/`,
      }),
      createProject('conference', {
        title: 'Digital Transformation Strategies for SMEs',
        client: 'Binh Phuoc Province',
        thumbnail: `${imageBaseUrl}/2022Apr29_BinhPhuoc_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/17_project/`,
      }),
      createProject('conference', {
        title: 'Frontier Technologies and Future of Work',
        client: 'TECHFEST 2020',
        thumbnail: `${imageBaseUrl}/2020Dec2_TECHFEST2020_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/18_project/`,
      }),
      createProject('conference', {
        title: 'Digital Transformation Trends',
        client: 'Binh Duong City',
        thumbnail: `${imageBaseUrl}/2024Jul17_BinhDuong_1.jpg`,
        legacyUrl: `${legacyBaseUrl}/3_project/`,
      }),
      createProject('conference', {
        title: 'Fostering STEM Talents',
        client: 'American Center HCMC',
        thumbnail: `${imageBaseUrl}/2024Apr_AMC_2.jpg`,
        legacyUrl: `${legacyBaseUrl}/8_project/`,
      }),
    ],
  },
];
