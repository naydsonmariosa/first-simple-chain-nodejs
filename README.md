# first-simple-chain-nodejs
Studying NodeJS simulating a Blockchain application for creating block and any kind of operations, initially without any consensus alrogorithm

Please check commit comments to see any construction operations. 

## Testing the application ##
- NodeJS is required
- type node in your terminal
- Paste the entire class to the terminal
- Create a new instance of BlockChain()

```sh
let bc = new BlockChain()
```

This will already create your first blockchain reference and as you can see in the source code, the first block (genesis) will be generated 
automatically. You can create another blocks and check the property being changed like Height, Time and previousHash being linked with the
last block correctly.

```sh
bc.addBlock("Any comments to the next block...");
```

You add some blocks and check the entire blockchain after your operations:

```sh
bc.chain
```
