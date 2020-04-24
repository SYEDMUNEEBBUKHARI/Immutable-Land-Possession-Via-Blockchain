pragma solidity >=0.4.25;
contract LandOwnership{

address public contractCreator;

    constructor()public{

contractCreator=msg.sender;
   
    }
    
    
   struct individualLandList{
        bytes32[] noOfLand;   
        }
    
    
     mapping(address => individualLandList) profile;
    enum BuyersRequestStatus{empty,UnderCustody,Approved,Rejected}
    
    struct LandDetails{
 address currentOwner;
 string longitude;
 string latitude;
 string city;
 string country;
 
 bool LandSaleable;


// BuyersRequestStatus BuyersStatus;
mapping(address=> bool) willingClient;
mapping (address=> bool) applyStatus;
mapping(address=>BuyersRequestStatus) BuyersStatus;
    }
    
    
    
mapping(address=> bytes32[]) AssetList;
        mapping(bytes32 => bytes32)  public  Landinfo;
        mapping(bytes32=> uint) whtidis;
    
    uint  nonce=1;
mapping(bytes32=> LandDetails) Land;
    function LandRegistration (string memory longitude,string memory latitude, string memory city, string memory  country)   public  payable returns(bytes32 ){
    
string memory data=    string(abi.encodePacked(longitude ,latitude ,city ,country));
 
 

       bytes32  d =sha256(abi.encodePacked("0x",data));

Land[d].currentOwner=msg.sender;
Land[d].latitude=latitude;
Land[d].longitude=longitude;
Land[d].city=city;
Land[d].country=country;
Land[d].LandSaleable=false;
// Land[d].BuyersStatus=BuyersRequestStatus.empty;
Landinfo[d]=d;
 profile[msg.sender].noOfLand.push(d);
whtidis[d]=profile[msg.sender].noOfLand.length-1;
return d;


    }
    
    
    
    
    
     function viewAssets()public payable returns(bytes32[] memory){
         
         uint256  length= profile[msg.sender].noOfLand.length;
         AssetList[msg.sender]=profile[msg.sender].noOfLand;
         
        //  string[val] memory z = profile[msg.sender].noOfLand;
        //  string memory priorityList= new string(length);
        //  string[] memory list = new string[](length);
         
        //  list=string(profile[msg.sender].noOfLand);
         
        return (AssetList[msg.sender]);
    }
    
    
    
    
    
    
    
    function landInfoOwner(bytes32 enterid) public view returns(address,string memory,string memory ,string memory,string memory,bool , BuyersRequestStatus res ){
        
    
        
        return(Land[enterid].currentOwner , Land[enterid].longitude , Land[enterid].latitude , Land[enterid].city  , Land[enterid].country , Land[enterid].LandSaleable , Land[enterid].BuyersStatus[address(uint160(bytes20(enterid)))]);
    }
    
   
    function makeSaleable(bytes32 property)public{
        require(Land[property].currentOwner == msg.sender);
        Land[property].LandSaleable=true;
    } 
    
function requestToLandOwner(bytes32 id) public {
        
        
        require(Land[id].LandSaleable);
        require(!Land[id].willingClient[msg.sender]); 
        
        
        Land[id].willingClient[msg.sender]=true;
        
       Land[id].BuyersStatus[msg.sender] = BuyersRequestStatus.UnderCustody; //
        
        
    }
    
    function makeApproved(bytes32 Landid, address buyer) public{
     bool chk= false;
   if(  Land[Landid].currentOwner == msg.sender)
   { 
       chk=true;
       
   }
   require(chk);
       
          
    Land[Landid].BuyersStatus[buyer]= BuyersRequestStatus.Approved;
        
    }
    
    
    function BuyLand(bytes32 Landid)public{
        require( Land[Landid].BuyersStatus[msg.sender]== BuyersRequestStatus.Approved);
        //removeOwnership
        address previousOwner= Land[Landid].currentOwner;
        Land[Landid].currentOwner=msg.sender;
        uint findid=whtidis[Landid];
        //last property
        bytes32 lastproperty=profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
        //last property id
        uint findlast=whtidis[lastproperty];
        
        // bytes32 hashLandLast= profile[previousOwner].noOfLand[lastproperty];
       // profile[previousOwner].noOfLand[findid]=profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
        
       profile[previousOwner].noOfLand[findid]=profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
       whtidis[lastproperty]=findid;
       
       
       
       delete   profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
      
    profile[previousOwner].noOfLand.length--;
        
        profile[msg.sender].noOfLand.push(Landid);
        
    }


}
