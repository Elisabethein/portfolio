export type SkillLevel = 'expert' | 'intermediate' | 'learning';

export interface TechItem {
    name: string;
    level: SkillLevel;
    icon?: React.ElementType;
}

export interface StackGroup {
    title: string;
    items: TechItem[];
}