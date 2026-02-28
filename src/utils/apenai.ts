import { OpenAI } from 'openai';

let openAi: OpenAI;

export const generateArticle = async (title: string, description: string) => {

    if (!import.meta.env.VITE_OPEN_AI_KEY) {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(`
                ---
                    __Advertisement :)__
                    
                    - __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
                      resize in browser.
                    - __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
                      i18n with plurals support and easy syntax.
                    
                    You will like those projects!
                    
                    ---
                    
                    # h1 Heading 8-)
                    ## h2 Heading
                    ### h3 Heading
                    #### h4 Heading
                    ##### h5 Heading
                    ###### h6 Heading
                    
                    
                    ## Horizontal Rules
                    
                    ___
                    
                    ---
                    
                    ***
                    
                    
                    ## Typographic replacements
                    
                    Enable typographer option to see result.
                    
                    (c) (C) (r) (R) (tm) (TM) (p) (P) +-
                    
                    test.. test... test..... test?..... test!....
                    
                    !!!!!! ???? ,,  -- ---
                    
                    "Smartypants, double quotes" and 'single quotes'
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