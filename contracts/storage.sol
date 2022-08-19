// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Storage {

    uint256 luckyNumber;

    struct People {
        uint256 luckyNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public people;

    mapping(string => uint256) public nameToluckyNumber;

    function store(uint256 _luckyNumber) public virtual {
        luckyNumber = _luckyNumber;
    }
    
    function retrieve() public view returns (uint256){
        return luckyNumber;
    }

    function addPerson(string memory _name, uint256 _luckyNumber) public {
        people.push(People(_luckyNumber, _name));
        nameToluckyNumber[_name] = _luckyNumber;
    }
}
