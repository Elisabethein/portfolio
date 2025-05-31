import type { StackGroup } from "../types/Stack";
import { FaHtml5, FaCss3Alt, FaVuejs, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaGitlab, FaJira, FaTrello } from "react-icons/fa";
import { SiJavascript, SiUml, SiVitest, SiJunit5, SiHuggingface, SiGooglecolab, SiJupyter, SiPytorch, SiKeras, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiTypescript, SiReact, SiVite, SiTailwindcss, SiPostman, SiCypress, SiHibernate, SiExpress, SiOracle, SiNginx } from "react-icons/si";
import { DiJava, DiDocker, DiPostgresql } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";


export const stackData: StackGroup[] = [
    {
        title: "Frontend Development",
        items: [
            { name: 'HTML', level: 'expert', icon: FaHtml5 },
            { name: 'CSS', level: 'expert', icon: FaCss3Alt },
            { name: 'JavaScript', level: 'intermediate', icon: SiJavascript },
            { name: 'TypeScript', level: 'learning', icon: SiTypescript },
            { name: 'Vue.js', level: 'intermediate', icon: FaVuejs },
            { name: 'React', level: 'learning', icon: SiReact },
            { name: 'Vite', level: 'learning', icon: SiVite },
            { name: 'Tailwind CSS', level: 'learning', icon: SiTailwindcss },
            { name: 'Postman', level: 'intermediate', icon: SiPostman },
            { name: 'Cypress', level: 'learning', icon: SiCypress },
          ],
    },
    {
        title: 'Backend & DevOps',
        items: [
            { name: 'Java', level: 'expert', icon: DiJava },
            { name: 'Spring Boot', level: 'expert', icon: BiLogoSpringBoot },
            { name: 'Hibernate', level: 'intermediate', icon: SiHibernate},
            { name: 'JPA', level: 'intermediate' },
            { name: 'Node.js', level: 'intermediate', icon: FaNodeJs },
            { name: 'Express.js', level: 'intermediate', icon: SiExpress },
            { name: 'PostgreSQL', level: 'intermediate', icon: DiPostgresql },
            { name: 'Oracle', level: 'intermediate', icon: SiOracle },
            { name: 'Docker', level: 'intermediate', icon: DiDocker },
            { name: 'CI/CD', level: 'intermediate' },
            { name: 'Nginx', level: 'learning', icon: SiNginx },
            { name: 'JWT', level: 'intermediate' },
        ],
    },
    {
        title: 'Data Science & AI',
        items: [
            { name: 'Python', level: 'intermediate', icon: FaPython },
            { name: 'Pandas', level: 'intermediate', icon: SiPandas },
            { name: 'NumPy', level: 'intermediate', icon: SiNumpy },
            { name: 'scikit-learn', level: 'intermediate', icon: SiScikitlearn },
            { name: 'Matplotlib', level: 'intermediate' },
            { name: 'Seaborn', level: 'intermediate' },
            { name: 'TensorFlow', level: 'learning', icon: SiTensorflow },
            { name: 'Keras', level: 'learning', icon: SiKeras },
            { name: 'PyTorch', level: 'learning', icon: SiPytorch },
            { name: 'Jupyter Notebooks', level: 'expert', icon: SiJupyter },
            { name: 'Google Colab', level: 'intermediate', icon: SiGooglecolab },
            { name: 'Hugging Face', level: 'learning', icon: SiHuggingface },
        ],
    },
    {
        title: 'Tools & Workflow',
        items: [
            { name: 'Git', level: 'expert', icon: FaGitAlt },
            { name: 'GitHub', level: 'expert', icon: FaGithub },
            { name: 'GitLab', level: 'intermediate', icon: FaGitlab },
            { name: 'Jira', level: 'intermediate', icon: FaJira },
            { name: 'Trello', level: 'intermediate', icon: FaTrello },
            { name: 'Agile / Scrum', level: 'intermediate' },
            { name: 'JUnit', level: 'intermediate', icon: SiJunit5 },
            { name: 'Mockito', level: 'intermediate', },
            { name: 'vitest / ts-jest', level: 'learning', icon: SiVitest },
            { name: 'UML / System Design', level: 'learning', icon: SiUml },
            { name: 'API Design', level: 'intermediate' },
        ],
    },
];
