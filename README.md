# 🖼️ TokenizeArt - NFT Project 42

## 🎯 Objectif

Ce projet a été réalisé dans le cadre du cursus 42 et de la collaboration avec BNB Chain. Il consiste à créer un **NFT unique** sur le thème de **l’univers musical de Gloryhammer**, intégrant obligatoirement le **nombre 42**.

Le NFT est implémenté sous la forme d’un contrat compatible **ERC-721/BEP-721**, et stocke ses métadonnées sur **IPFS**.

---

## 👤 Auteur

- **Login 42** : `tmichel-`
- **Nom du NFT** : `CosmicKnight42`

---

## ⚙️ Technologies utilisées

- [Hardhat](https://hardhat.org/) (environnement de développement Ethereum/BSC)
- Solidity (v0.8)
- [OpenZeppelin Contracts v4.9.5](https://docs.openzeppelin.com/contracts/4.x/)
- [Pinata](https://pinata.cloud/) (hébergement IPFS)
- [Node.js](https://nodejs.org/) (scripts JS)

---


---

## 🧾 Description du NFT

**Tokenize42 #1** est un NFT représentant un **guerrier galactique inspiré de Gloryhammer**, brandissant une **épée magique gravée du chiffre 42**, dans un décor cosmique dramatique.

---

## 🖼️ Image (hébergée sur IPFS)

- CID : `bafybeifni5625a6yw53k54psycb7qyrt7dehcxebyrzujcty6ojh4uvo6m`
- Lien IPFS :  
  `ipfs://bafybeifni5625a6yw53k54psycb7qyrt7dehcxebyrzujcty6ojh4uvo6m`
- Lien HTTP :  
  [https://ipfs.io/ipfs/bafybeifni5625a6yw53k54psycb7qyrt7dehcxebyrzujcty6ojh4uvo6m](https://ipfs.io/ipfs/bafybeifni5625a6yw53k54psycb7qyrt7dehcxebyrzujcty6ojh4uvo6m)

---

## 🧬 Metadata (tokenURI)

- CID : `bafkreie2j4zqm4lrt33gmt52twzmksni4vvqytmrkwix65qnpmv7g2jpba`
- tokenURI :  
  `ipfs://bafkreie2j4zqm4lrt33gmt52twzmksni4vvqytmrkwix65qnpmv7g2jpba`
- Lien HTTP :  
  [https://ipfs.io/ipfs/bafkreie2j4zqm4lrt33gmt52twzmksni4vvqytmrkwix65qnpmv7g2jpba](https://ipfs.io/ipfs/bafkreie2j4zqm4lrt33gmt52twzmksni4vvqytmrkwix65qnpmv7g2jpba)

---

## ✅ Fonctionnalités principales

- ✅ Déploiement d’un contrat ERC-721 avec Hardhat
- ✅ Hébergement de l’image et des métadonnées sur IPFS via Pinata
- ✅ Mint du NFT avec lien `tokenURI` vers les métadonnées IPFS
- ✅ Attribution du token à l’owner initial

---

## 📸 Captures

> Voir le dossier `/documentation/` pour :
> - Image du NFT
> - Code source `metadata.json`
> - Aperçu IPFS dans navigateur

---

## 🧪 Commandes utiles

### installer hardhat en local
```bash
npm install --save-dev hardhat --legacy-peer-deps
```

### Compiler le contrat
```bash
npx hardhat compile
```

### Lancer le noeud local
```bash
    npx hardhat node
```

### Deployer sur Sepolia
```bash
    npx hardhat run scripts/deploy.js --network sepolia
```

### Trouver le NFT sur Etherscan
```bash
npx hardhat verify --network sepolia 0xA093184Fe9c0fC6fC4037ba72E9Af35282906b45
```

### Minter un NFT
```bash
    npx hardhat run scripts/mint.js --network localhost
```

### Afficher mon NFT dans le navigateur
```arduino
https://ipfs.io/ipfs/bafybeifni5625a6yw53k54psycb7qyrt7dehcxebyrzujcty6ojh4uvo6m
```
