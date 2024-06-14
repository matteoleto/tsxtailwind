// generateKeys.js
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

// Funzione per generare una chiave API simulata
function generateApiKey() {
  return `sk-${uuidv4()}`;
}

// Funzione per salvare la chiave in un file
function saveApiKey(key) {
  const filePath = path.join(__dirname, '.env');
  fs.appendFileSync(filePath, `${key}\n`, 'utf8');
}

// Genera un numero specificato di chiavi API
function generateAndSaveApiKeys(count) {
  for (let i = 0; i < count; i++) {
    const apiKey = generateApiKey();
    saveApiKey(apiKey);
    console.log(`Generated API Key: ${apiKey}`);
  }
}

// Esempio: genera 5 chiavi API
generateAndSaveApiKeys(5);
