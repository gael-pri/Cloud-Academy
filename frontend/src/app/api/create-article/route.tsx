import { NextRequest, NextResponse } from 'next/server';
import { articleService, CreateArticleData } from '@/app/services/ArticleService';

export async function POST(request: NextRequest) {
    try {
        const { title, description, subtitle, chapterId } = await request.json() as CreateArticleData;
        await articleService.createArticle({ title, description, subtitle, chapterId });
        return NextResponse.json({ message: 'Article created successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to create article' }, { status: 500 });
    }
}
