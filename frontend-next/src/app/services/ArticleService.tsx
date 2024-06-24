export interface CreateArticleData {
    title: string;
    subtitle: string;
    description: string;
    chapterId: string;
}

class ArticleService {
    async createArticle(data: CreateArticleData) {
        console.log('Creating article:', data);
        if (!data.title || !data.description) {
            throw new Error('Invalid article data');
        }
    }
}

export const articleService = new ArticleService();