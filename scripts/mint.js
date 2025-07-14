const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(contractAddress);

  const tokenURI = "ipfs://bafkreihaphhdzdnpqsoy2nw7cbi4mfpfm4sdwvkkxv7fhgybgrnm4w3224";
  const tx = await myNFT.mintNFT(owner.address, tokenURI);
  await tx.wait();

  console.log(`✅ NFT minté pour ${owner.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
