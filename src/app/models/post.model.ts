export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    visable: boolean;
    publishDate: Date;
    updatedDate: Date;
    featuredImageUrl: string;
}