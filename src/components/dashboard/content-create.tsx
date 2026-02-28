import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Button } from '@/components/ui/button.tsx';
import { FormEvent, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { generateArticle } from '@/utils/apenai.ts';
import ContentViewer from '@/components/dashboard/content-viewer.tsx';

export default function ContentCreate() {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        description: '',
    });

    const [content, setContent] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        const result = await generateArticle(form.title, form.description);
        setContent(result);
        setIsLoading(false);
    };

    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setForm({ ...form, [name]: value });
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold">Article Writer</h1>
            {content}
            {content ? <ContentViewer content={content} /> : <form className="mt-4" onSubmit={handleSubmit}>
                <div className="grid w-full gap-1.5 mb-4">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>
                <div className="grid w-full gap-1.5 mb-4">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        placeholder="Type your description here."
                        id="description"
                        name="description"
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>
                <Button disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate
                </Button>
            </form>}
        </div>
    );
}