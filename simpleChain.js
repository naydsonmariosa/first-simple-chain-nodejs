const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/


class Block {
    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = "";
    }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/
class BlockChain {
    constructor() {
        this.chain = [];
        this.addBlock(this.createGenesisBlock());
    }

    createGenesisBlock() {
        return new Block("GENESIS BLOCK");
    }

    getLasBlockDetail() {
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock) {
        //Defining other property of BlockChain class, Automatic properties
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0,-3);

        if (this.chain.length > 0) {
            //getting previous hash of course, if not a genesis block being added.
            let lastBlockHash = this.getLasBlockDetail().hash;
            newBlock.previousBlockHash = lastBlockHash;
        }
        //Creating the hash for this block being created.
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        
        //finnaly we will add the new block to the chain;
        this.chain.push(newBlock);
    }
}