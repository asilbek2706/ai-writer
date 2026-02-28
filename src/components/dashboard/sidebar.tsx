import PromptHistory from '@/components/dashboard/prompt-history.tsx';
import { TPromptHistory } from '@/shared/types/prompt-history.type.ts';
import { PencilSquareIcon } from '@heroicons/react/16/solid';
import { useAppContext } from '@/contexts/app.context.tsx';
import { Loader2 } from 'lucide-react';

const mockItems: TPromptHistory[] = [
    {
        date: 'Today',
        links: [
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt/1',
            },
            {
                title: 'Prompt 2',
                url: '/dashboard/prompt/2',
            },
        ],
    },
    {
        date: 'Yesterday',
        links: [
            {
                title: 'Prompt 1',
                url: '/dashboard/prompt/1',
            },
            {
                title: 'Prompt 2',
                url: '/dashboard/prompt/2',
            },
        ],
    },
];

export default function Sidebar() {
    const { generatingContent } = useAppContext();
    return (
        <nav className="h-screen w-80 border-r p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">AI Witer</h1>
                {generatingContent ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <button>
                        <PencilSquareIcon className="w-6 h-6" />
                    </button>
                )}
            </div>
            <PromptHistory items={mockItems} />
        </nav>
    );
}