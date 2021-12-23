require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note snow comic install loan outer student'; 
let testAccounts = [
"0xe1c75cc55fcd27d23a72812bd4c4a270fb7dd4aaea01c9d0c4618e4c9fc89d31",
"0x851ed386bcf884eefc31a162772626e08bc6bc0c05d1bbb929237e2b38d77311",
"0x58b7c236f828e077bb243d911df011e94cfe426fa9585fee14471f0f3550046b",
"0x239d877eefb3081edc17516e651b37322d2d0a70f69be853bebc14243d79ebf6",
"0xcc13ba98d9671334a748ac1417dd1778ef0cebf73bdfb60a5eff1d9a574bb593",
"0x31985d1dca8969df6432a0f318bad57758cb5ec8d157bfcd0e2c29068acdb656",
"0x14cbf028508fa41fce5171b7cff04aa6efe2c4abd4436d2f49b848078ad0a087",
"0x72b7209c9bd01cec99ff87fe5fac3c5bad5474a7431c470b2efb86069861bb93",
"0x7a706520d92eb3c0cbc34fc6228b7b20746d255b4eb69389e7940c0e1bc85893",
"0x0d2c51d9f4bcb31d0bd9228b901336193bffdad22fa217fedd4ffdfefe73bbf6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

