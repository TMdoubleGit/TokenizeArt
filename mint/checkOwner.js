const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();
  const contractAddress = "0xA093184Fe9c0fC6fC4037ba72E9Af35282906b45";
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(contractAddress);

  const currentOwner = await myNFT.ownerOf(0);
  console.log(`👑 Owner of token 0: ${currentOwner}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});