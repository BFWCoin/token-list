// scripts/makelist.js

const fs = require('fs');
const path = require('path');

const tokenListPath = path.join(__dirname, '../blockchains/smartchain/tokenlist.json');
const logoBasePath = path.join(__dirname, '../blockchains/smartchain/assets');

function validate() {
  if (!fs.existsSync(tokenListPath)) {
    console.error('❌ tokenlist.json not found.');
    process.exit(1);
  }

  const raw = fs.readFileSync(tokenListPath, 'utf-8');
  let list;

  try {
    list = JSON.parse(raw);
  } catch (e) {
    console.error('❌ tokenlist.json is not valid JSON.');
    console.error(e.message);
    process.exit(1);
  }

  if (!Array.isArray(list.tokens)) {
    console.error('❌ tokenlist.json must contain a "tokens" array.');
    process.exit(1);
  }

  let hasErrors = false;

  list.tokens.forEach((token, index) => {
    const requiredFields = ['name', 'symbol', 'address', 'decimals', 'logoURI'];

    requiredFields.forEach(field => {
      if (!token[field]) {
        console.error(`❌ Token at index ${index} is missing required field: ${field}`);
        hasErrors = true;
      }
    });

    const logoPath = token.logoURI.replace(/^\.?\//, '');
    const fullLogoPath = path.join(__dirname, '..', logoPath);

    if (!fs.existsSync(fullLogoPath)) {
      console.warn(`⚠️ Logo not found: ${logoPath}`);
    }
  });

  if (!hasErrors) {
    console.log('✅ tokenlist.json validation passed.');
  } else {
    console.log('⚠️ Some tokens failed validation.');
    process.exit(1);
  }
}

validate();
