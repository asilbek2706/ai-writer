import { Card, CardContent, CardFooter } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import Markdown from 'react-markdown';
import { ClipboardIcon, ShareIcon, StarIcon } from '@heroicons/react/16/solid';

type ContentViewerProprs = {
    content: string,
}

export default function ContentViewer({ content }: ContentViewerProprs) {
    return (
        <Card className={'mt-4'}>
            <CardContent className="p-8">
                <div className="prose lg:prose-xl">
                    <Markdown>{content}</Markdown>
                </div>
            </CardContent>
            <CardFooter className="flex gap-2 justify-end">
                <Button variant={'outline'}>
                    <ShareIcon className="h-4 w-4" />
                </Button>
                <Button variant={'outline'}>
                    <ClipboardIcon className="h-4 w-4" />
                </Button>
                <Button variant={'outline'}>
                    <StarIcon className="h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}