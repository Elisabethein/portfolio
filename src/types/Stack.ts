export type SkillLevel = 'expert' | 'intermediate' | 'learning';

export interface TechItem {
    name: string;
    level: SkillLevel;
}

export interface StackGroup {
    title: string;
    items: TechItem[];
}