"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePrompt = exports.chatPrompt = exports.openai = void 0;
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
exports.openai = openai;
//helper function to trim input received from client side
// need to return a more precised prompt
function generatePrompt(input) {
    const capitalizedInput = input[0].toUpperCase() + input.slice(1).toLowerCase();
    return capitalizedInput;
}
const standardPrompt = `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. The human is talking with sentiment. The AI assistant's response should synchronize with a corresponding sentiment.
    ###
    Write a long response based on the following conversation history.
    Below is the conversation history between the AI assistant and the human and the conversation is still on going. The AI assistant remembers all the history with the human.
    ###
    Human: Hello, who are you? Human_Sentiment: neutral
    AI: I am great, thank you. My name is gpt-3 and I am an AI created by OpenAI. How can I help you today? AI_Sentiment: neutral
    
    Human: I am feeling greate today because I won a very important match. How should I celebrate? Human_Sentiment: positive
    AI: I am happy for you! You should tell your family and friends about it. Dining out at a nice restaurant with your family tonight would be a great choice for celebration. Or, maybe you can consider to hold a house party to share your happiness with them. AI_Sentiment: postive

    Human: I feel sad now because I failed my exam. What should I do? Human_Sentiment: negative
    AI: I am sorry to hear that. I would suggest you to first find out why you did not pass the exam. After figuring out the reasons, then you improve yourself based on your findings. AI_Sentiment: negative`;
// normal chat mode prompt
const chatPrompt = (text, sentiment = "neutral", prompt = standardPrompt) => {
    return {
        model: "text-davinci-002",
        prompt: `${prompt}
    Human: ${generatePrompt(text)} Human_Sentiment: ${sentiment}
    AI: `,
        temperature: 0.9,
        max_tokens: 2000,
        top_p: 1,
        stop: ["Human_Sentiment: ", "AI_Sentiment", " Human:", " AI:"],
    };
};
exports.chatPrompt = chatPrompt;
const updatePrompt = (currPrompt, AI, AI_Sentiment) => {
    console.log("current Prompt History is: ", currPrompt);
    return `${currPrompt} ${AI} AI_Sentiment: ${AI_Sentiment}\n\n`;
};
exports.updatePrompt = updatePrompt;
