require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food jaguar dash misery method heavy end army genius'; 
let testAccounts = [
"0xccbac3a745640d35a4179b08f60a9f800b98c4b5a6231ca046cccacfe1e530b7",
"0x37da69c1c03c9f60d89f639403905d3290b5d2850da674812f1b0aa9240cb72d",
"0xbd035bf110bd4d6a3c5558cbbb4dc6599e21787c0ced17a80278c1dd7e8068ac",
"0x307b639009a0b78a8d388778ad9eb189a93d61882ad2e03aa229b46da9d442d5",
"0x63ed0660ce0d237c3a0ecd7741d7a9fa2f7f5c830282bdc1d711599232fc061c",
"0x4b8c9c6e1813315555abc4fac9a605d83d15d68c33325e6ffdbe4b7521b5bf12",
"0xe5bdffc17cff21559e24d21b6f48b072fd671287bdc71890992b7d92eef7121e",
"0x5065181d7dbce99d3bfe34d1b0f0a6778814f001b83cf47e95c77b51e22eac26",
"0xc6e768f16c55f0a433f24038b72df94b6b6e7218cc3e07d4ca1e82e1345abf36",
"0x5ea1bc73f4d6c460d666db39d48d91ace6425e8c2aa7136c178aec8cfd45d6e6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
