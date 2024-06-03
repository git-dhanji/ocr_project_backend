/* eslint-disable no-undef */

import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-vMkgrSixfV96Jaw0dbV4pnjO",
    project: "$PROJECT_ID",
});



async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });

    console.log(stream)
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}


export default main()