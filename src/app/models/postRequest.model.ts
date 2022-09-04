export interface PostRequest {
    title: string;
    content: string | undefined;
    excerpt: string | undefined;
    urlHandle: string | undefined;
    author: string | undefined;
    visable: boolean | undefined;
    publishDate: Date | undefined;
    updatedDate: Date | undefined;
    featuredImageUrl: string | undefined;
}