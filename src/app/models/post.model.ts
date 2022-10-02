export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    published: boolean;
    publishedDate: Date;
    updatedDate: Date;
    featuredImageUrl: string;
}