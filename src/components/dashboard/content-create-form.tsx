import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Button } from '@/components/ui/button.tsx';
import { FormEvent, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ContentCreateRequestParam } from '@/shared/types/content-create-request-param.ts';

type ContentCreateFormProps = {
    isLoading: boolean;
    onSubmit: (params: ContentCreateRequestParam) => void;
}

export default function ContentCreateForm({
                                              isLoading,
                                              onSubmit,
                                          }: ContentCreateFormProps) {
    const [form, setForm] = useState<ContentCreateRequestParam>({
        title: '',
        description: '',
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(form);
    };


    const handleChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setForm({ ...form, [name]: value });
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
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
        </form>
    );
}