import { useContext, useState } from 'react';
import { generateArticle } from '@/utils/apenai.ts';
import ContentViewer from '@/components/dashboard/content-viewer.tsx';
import ContentCreateForm from '@/components/dashboard/content-create-form.tsx';
import { ContentCreateRequestParam } from '@/shared/types/content-create-request-param.ts';
import { AppContext } from '@/contexts/app.context.tsx';

export default function DashboardHome() {
    const { generatingContent, setGeneratingContent } = useContext(AppContext);
    const [content, setContent] = useState<string | null>(null);

    const handleSubmit = async (params: ContentCreateRequestParam) => {
        setGeneratingContent(true);
        const { title, description } = params;
        const result = await generateArticle(title, description);
        setContent(result);
        setGeneratingContent(false);
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold">Article Writer</h1>
            {content ? (
                <ContentViewer content={content} />
            ) : (<ContentCreateForm isLoading={generatingContent} onSubmit={handleSubmit} />
            )}
        </div>
    );
}