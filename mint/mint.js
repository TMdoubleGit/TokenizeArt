const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();

  const contractAddress = "0xA093184Fe9c0fC6fC4037ba72E9Af35282906b45";
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(contractAddress);

  const tokenURI = "ipfs://bafkreie2j4zqm4lrt33gmt52twzmksni4vvqytmrkwix65qnpmv7g2jpba";
  const tx = await myNFT.mintNFT(owner.address, tokenURI);
  await tx.wait();

  console.log(`✅ NFT minté pour ${owner.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
