var contract;

$(document).ready(function(){

    var card = "<img id='symbol' src='./img/logo.png' alt=''><span id='name'>Milind Domaji Deogade</span><Button id='vote_btn'>Vote</Button>"
    web3 = new Web3(web3.currentProvider);

    var address = "0x278bA6C585D2ae37f7ADd973B0FB9a808DF70282";
    var abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "insertCandidateData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_candidateId",
				"type": "uint256"
			},
			{
				"name": "_voter_id",
				"type": "string"
			}
		],
		"name": "voteNow",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "state",
				"type": "string"
			},
			{
				"name": "booth_pin_code",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "symbol",
				"type": "string"
			},
			{
				"name": "party",
				"type": "string"
			},
			{
				"name": "voted",
				"type": "bool"
			},
			{
				"name": "vote_count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "candidates_count",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getCandidateName",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getCandidatePin",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getCandidateState",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getVoteCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

    contract = new web3.eth.Contract(abi, address);

    function getCandidateData(){
        for(i=1;i <= 7; i++){
            var name,state,pin,vote_count;
            contract.methods.getCandidateName(i).call().then(function(_name){
                name = _name;
            })
            contract.methods.getCandidateState(i).call().then(function(_state){
                state = _state;
            })
            contract.methods.getCandidatePin(i).call().then(function(_pin){
                pin = _pin;
            })
            contract.methods.getVoteCount(i).call().then(function(_voteCount){
                vote_count = _voteCount;
            })

            console.log(name+state+pin+vote_count);
            
        }
    }

    getCandidateData();
})