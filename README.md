# BFWCoin Token List

[![License: MIT](https://img.shields.io/github/license/BFWCoin/token-list)](LICENSE)
[![Stars](https://img.shields.io/github/stars/BFWCoin/token-list?style=social)](https://github.com/BFWCoin/token-list/stargazers)
[![Forks](https://img.shields.io/github/forks/BFWCoin/token-list?style=social)](https://github.com/BFWCoin/token-list/forks)
[![Last Commit](https://img.shields.io/github/last-commit/BFWCoin/token-list)](https://github.com/BFWCoin/token-list)
[![Open Issues](https://img.shields.io/github/issues/BFWCoin/token-list)](https://github.com/BFWCoin/token-list/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/BFWCoin/token-list)](https://github.com/BFWCoin/token-list/pulls)
[![Discussions](https://img.shields.io/github/discussions/BFWCoin/token-list)](https://github.com/BFWCoin/token-list/discussions)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](./CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg)](./CODE_OF_CONDUCT.md)
[![Build Status](https://github.com/BFWCoin/token-list/actions/workflows/build-tokenlist.yml/badge.svg)](https://github.com/BFWCoin/token-list/actions/workflows/build-tokenlist.yml)



This repository is the official token list and metadata for **BFWCoin (BFW$)** on Binance Smart Chain.

---

## 📌 Token Details

- **Token Name:** BFWCoin  
- **Symbol:** BFW  
- **Decimals:** 18  
- **Contract Address:** `0x86d319A5ac850daf0C801580625973e47A7582C2`

---

## 📁 Folder Structure

- `blockchains/smartchain/assets/` — Token logo and metadata  
- `blockchains/smartchain/tokenlist.json` — Token list JSON  
- `bfwcoin.json` — Token metadata for third-party integrations  
- `Team.md` — Core team and advisors  
- `SECURITY.md` — Security guidelines  
- `CONTRIBUTING.md` — Community contribution guide  
- `.github/ISSUE_TEMPLATE/` — GitHub issue templates  
- `README.md` — Project overview  
- `LICENSE` — MIT license  

---

## 🔗 Resources

- 🌐 [Website](https://BangaloreFashionWeek.in/coin)
- 🔎 [BscScan Token](https://bscscan.com/token/0x86d319A5ac850daf0C801580625973e47A7582C2)
- 💻 [BFWCoin GitHub](https://github.com/BFWCoin)
- 👥 [Meet the Team](./Team.md)
- 🖼️ [View Token Logo](./blockchains/smartchain/assets/0x86d319A5ac850daf0C801580625973e47A7582C2/logo.png)
- 📄 [Token List JSON](./blockchains/smartchain/tokenlist.json)
- ✍️ [Contribution Guide](./CONTRIBUTING.md)
- 📃 [Code of Conduct](./CODE_OF_CONDUCT.md)

---

## 📬 Got Ideas or Issues?

- 💡 Have an idea? [Submit a creative promo](../../issues/new?template=creative-submission.yml)
- 🐞 Found a bug? [Open an issue](../../issues/new)
- ❓ General questions? [Start a discussion](https://github.com/BFWCoin/token-list/discussions)

We value your input to help shape the future of BFWCoin!

---

## 💬 Community Discussions

Join our [GitHub Discussions](https://github.com/BFWCoin/token-list/discussions) to:

- 📣 Stay updated via **Announcements**
- ❓ Ask technical or general questions in **Q&A**
- 💡 Share creative ideas and feedback in **Ideas**
- 🎨 Showcase promo creatives in **Creatives**
- 💬 Interact casually with others in **General**

Let's grow the decentralized fashion-tech community — together!

---

## 🛠 Build

To generate and validate the token list from metadata:

### 1. Run locally

```bash
node scripts/makelist.js
