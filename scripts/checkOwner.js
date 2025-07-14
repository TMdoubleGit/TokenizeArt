const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(contractAddress);

  const currentOwner = await myNFT.ownerOf(0);
  console.log(`👑 Owner of token 0: ${currentOwner}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});