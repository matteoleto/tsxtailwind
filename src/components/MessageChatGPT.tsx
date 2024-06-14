import React, { useState } from 'react';
import axios from 'axios';
import { Messaggio } from './types';
import axiosRetry from 'axios-retry';
import OpenAI from 'openai';

async function MessageChatGPT(messageToAnswear: string):Promise<Messaggio|null> 
{
    const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true
    })
    const chatCompletion = await openai.chat.completions.create({
        
        messages:[{ role: 'user', content: messageToAnswear }],
        model: 'gpt-3.5-turbo' // Usa il modello appropriato
    })   
    const answer = chatCompletion.choices[0].message.content;
    if (answer!=null)
        return {text:answer,sender:false}
//     axiosRetry(axios, {
//         retries: 3, // Numero di tentativi
//         retryDelay: (retryCount) => {
//           console.log(`Retry attempt: ${retryCount}`);
//           return retryCount * 2000; // Ritenta dopo 2s, 4s, 6s, etc.
//         },
//         retryCondition: (error) => {
//           return error.response.status === 429; // Ritenta solo per l'errore 429
//         },
//       });

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: 'gpt-3.5-turbo', // Usa il modello appropriato
//             messages: [{ role: 'user', content: messageToAnswear }],
// //            prompt: 'You are an helpful assistant. Please, answear these following questions:',
//             max_tokens: 60,
//         }, {
//             headers: {
//                 'Authorization': process.env.OPENAI_API_KEY,
//                 'Content-Type': 'application/json',
//             }
//         });

//         const answer = response.data.choices[0].message.content;

//         return {text:answer,sender:false}

//     } catch (error) {
//         console.error('Errore durante la chiamata API', error);
//     }

     return null
}

export default MessageChatGPT