pragma solidity >=0.4.22 <0.7.0;

contract Election{
    
    struct candidate {
        uint id;
        string state;
        string booth_pin_code;
        string name;
        string symbol;
        string party;
        bool voted;
        uint vote_count;
    }
    
    mapping(address => bool) public voters;
    mapping(uint => candidate) public candidates;
    uint public candidates_count;
    
    function insertCandidateData(){
        addCandidate("maharashtra","442902","candidate xyz 1","mango","aam");
        addCandidate("maharashtra","442902","candidate xyz 2","kamal","bjp");
        addCandidate("maharashtra","442902","candidate xyz 3","shivsena","arrow");
        addCandidate("maharashtra","442902","candidate xyz 4","jhadu","aap");
        addCandidate("maharashtra","442901","candidate xyz 6","mango","aam");
        addCandidate("bihar","442929","candidate xyz 7","banana","banana");
        addCandidate("bihar","442929","candidate xyz 8","mango","aam");
    }
    
    function addCandidate(string _state,string _booth_pin_code,string _name,string _symbol,string _party) private{
        candidates_count++;
        candidates[candidates_count] = candidate(candidates_count,_state,_booth_pin_code,_name,_symbol,_party,false,0);
    }
    
    function voteNow(uint _candidateId,  string _voter_id) public{
        voters[msg.sender]=true;
        candidates[_candidateId].vote_count++;
    }
    
    function getCandidateName(uint _candidateId) view public returns(string){
        return candidates[_candidateId].name;
    }
    function getCandidateState(uint _candidateId) view public returns(string){
        return candidates[_candidateId].state;
    }
    function getCandidatePin(uint _candidateId) view public returns(string){
        return candidates[_candidateId].booth_pin_code;
    }
    function getVoteCount(uint _candidateId) view public returns(uint){
        return candidates[_candidateId].vote_count;
    }
    
    
}