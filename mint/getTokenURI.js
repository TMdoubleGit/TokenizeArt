const hre = require("hardhat");

async function main() {
    const contractAddress = "0xA093184Fe9c0fC6fC4037ba72E9Af35282906b45";
    const tokenId = 0;

    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const contract = await MyNFT.attach(contractAddress);

    const uri = await contract.tokenURI(tokenId);
    console.log(`🧾 Token URI for ID ${tokenId}: ${uri}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
