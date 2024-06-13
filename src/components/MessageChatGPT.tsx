import React, { useState } from 'react';
import axios from 'axios';
import { Messaggio } from './types';

async function MessageChatGPT(messageToAnswear: string):Promise<Messaggio|null> 
{
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5', // Usa il modello appropriato
            messages: [{ role: 'user', content: messageToAnswear }]
        }, {
            headers: {
                'Authorization': `Bearer KEY`,
                'Content-Type': 'application/json'
            }
        });

        const answer = response.data.choices[0].message.content;

        return {text:answer,sender:false}

    } catch (error) {
        console.error('Errore durante la chiamata API', error);
    }

    return null
}

export default MessageChatGPT