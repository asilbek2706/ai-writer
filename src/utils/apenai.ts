import { OpenAI } from 'openai';

let openAi: OpenAI;

export const generateArticle = async (title: string, description: string) => {

    if (!import.meta.env.VITE_OPEN_AI_KEY) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`
                    🚀 Next.js-ning Asosiy Imkoniyatlari
                    Next.js React-ning ustiga qurilgan bo'lsa-da, u oddiy React-dan bir qancha muhim afzalliklari bilan ajralib turadi:
                    
                    1. Rendering turlari
                    Next.js loyihangiz ehtiyojiga qarab turli xil rendering usullarini tanlash imkonini beradi:
                    
                    SSR (Server-Side Rendering): Har bir so'rov kelganda sahifa serverda generatsiya qilinadi.
                    
                    SSG (Static Site Generation): Sahifalar build (yig'ish) vaqtida bir marta yaratiladi va juda tez yuklanadi.
                    
                    ISR (Incremental Static Regeneration): Butun loyihani qayta yig'masdan, ma'lum bir sahifalarni fonda yangilab turish imkonini beradi.
                    
                    2. Fayl tizimiga asoslangan routing (File-based Routing)
                    Alohida kutubxona (masalan, react-router-dom) ishlatish shart emas. app/ yoki pages/ papkasida yaratilgan har bir fayl avtomatik ravishda saytning manziliga (route) aylanadi.
                    
                    3. SEO va Tezlik
                    Next.js qidiruv tizimlari (Google, Bing) uchun juda qulay. Sahifalar serverda tayyor holda kelgani uchun Google botlari sayt mazmunini oson o'qiydi. Shuningdek, rasmlarni optimallashtirish (next/image) va kodni bo'lish (Code Splitting) orqali yuqori tezlikni ta'minlaydi.
                `);
            }, 2000);
        });
    }

    if (!openAi) {
        openAi = new OpenAI({
            apiKey: import.meta.env.VITE_OPEN_AI_KEY,
            dangerouslyAllowBrowser: true,
        });
    }
    const result = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: `You are a helpful assistant to assign users in creating engaging content, such as blogs.`,
            },
            {
                role: 'user',
                content: `Please create an article based on the following information. 
                Here is the list of information: 
                \ntitle: ${title} 
                \ndescription: ${description}
                \nRemember the post should be based on the information that I have mentioned above. 
                Output should be Markdown text format strictly`,
            },
        ],
    });
    return result.choices[0].message.content;
};