const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("🚀 Deploying contract from address:", deployer.address);

    const MyNFT = await hre.ethers.getContractFactory("MyNFT");

    const myNFT = await MyNFT.deploy();

    console.log("📡 Waiting for deployment confirmation...");
    await myNFT.deployed();

    const contractAddress = myNFT.address;
    console.log(`✅ Contract successfully deployed at: ${contractAddress}`);
}

main().catch((error) => {
    console.error("❌ Error during deployment:", error);
    process.exitCode = 1;
});