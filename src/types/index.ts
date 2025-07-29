export interface ImageInfo {
    id: string;
    url: string;
}

export interface Project {
    id: string;
    name: string;
    subheading: string;
    description: string[];
    images: ImageInfo[];
    tags: string[]
    sourceCode?: string;
    link?: string;
    docs?: string;

}
