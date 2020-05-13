
pragma solidity >=0.4.25;
pragma experimental ABIEncoderV2;
contract LandOwnership{

address public contractCreator;

    constructor()public{

contractCreator=msg.sender;
   
    }
    
    
    bytes32[] public memsale ;
    
   struct individualLandList{
        bytes32[] noOfLand;   
        }
    
    
     mapping(address => individualLandList) profile;
    enum BuyersRequestStatus{empty,UnderCustody,Approved,Rejected}
    
    struct LandDetails{
 address currentOwner;
 string completeAddress;
 string ipfshash;
 string contactnumber;

 string city;
 string country;
bytes32 DUL;
 bool verifyStatus;
 bool LandSaleable;


// BuyersRequestStatus BuyersStatus;
mapping(address=> bool) willingClient;
mapping (address=> bool) applyStatus;
mapping(address=>BuyersRequestStatus) BuyersStatus;
    }
    
    
    

        mapping(bytes32 => bytes32)  public  Landinfo;
        mapping(bytes32=> uint) whtidis;
    
    uint  nonce=1;
mapping(bytes32=> LandDetails) Land;





    function LandRegistration (string memory completeAddress, string memory city, string memory  country, string memory ipfshash, string memory phonenum)   public  payable returns(bytes32 ){
    
    
    
    
string memory data=    string(abi.encodePacked(completeAddress ,city ,country, ipfshash, phonenum));
 
 
 
 

       bytes32  d =sha256(abi.encodePacked("0x",data));
require(! (Land[d].DUL==d));
Land[d].currentOwner=msg.sender;
Land[d].completeAddress=completeAddress;
Land[d].ipfshash=ipfshash;
Land[d].city=city;
Land[d].country=country;
Land[d].LandSaleable=false;
Land[d].DUL=d;
Land[d].verifyStatus=false;
Land[d].contactnumber=phonenum;
// Land[d].BuyersStatus=BuyersRequestStatus.empty;
Landinfo[d]=d;
 profile[msg.sender].noOfLand.push(d);
whtidis[d]=profile[msg.sender].noOfLand.length-1;

commem[city].LandVerification.push(d);
commem[city].commerialid[d]=commem[city].LandVerification.length-1;

return d;


    }
    
    
    function companyboyApprovetodolist(string memory city)public view returns(bytes32[] memory)
    {
        return commem[city].LandVerification;
    }
    
    function companyboycheckAuthentication(string memory city) public view returns(bool){
        
        require(ch[city].boycityappearence[msg.sender]);
        return true;
    }
    
    
   function checkcompanyportal() public payable returns(uint)
{

address collect=pakistan();

if(collect == msg.sender)
{
    return 1;
}
else
{
    return 0;
}

    
   
    
}

function pakistan() internal  returns(address)
{
    address admin = 0x20db1A3eD27EEF75BEBb000961d07AD47Bf58197;
    return admin;
    
}
    
    function companyboyApprove(bytes32 landid , string memory city) public
    { 
        require(ch[city].boycityappearence[msg.sender]);
        
        Land[landid].verifyStatus=true;
        uint256 idd= commem[city].commerialid[landid];
        require(!(idd==5000),"this has approved already");
        commem[city].LandVerification[idd]=commem[city].LandVerification[commem[city].LandVerification.length-1];
        
        delete  commem[city].LandVerification[commem[city].LandVerification.length-1];
        
        commem[city].LandVerification.length--;
        commem[city].commerialid[landid]=5000;
        
    }
    
    
    
    
     function viewAssets()public view returns(bytes32[] memory){
        return (profile[msg.sender].noOfLand);
    }
    
    
   
    
    
     struct CompanyAdmins{
         
        string CCityName;
        string AAdminName;
        address AAdminAdress;
        string hashh;
        
        mapping(address => companyMembers) companyboys;
        //boys array
        address[] noofboys;
        address[] noofadmins;
        mapping(address => uint) boysid;
         mapping(address => uint) adminsid;
         
       
        mapping(address => bool) boycityappearence;
         
         
        }
        mapping(string => bool) adminscitystatus;
        mapping(address => bool) adminsaddressstatus;
         mapping(address => bool) boyappearence;
    struct companyMembers
    {
        address[] approvers;
        string cityName;
        string boyName;
        address boyAddress;
        bytes32[]  LandVerification;
        string ipfshasH;
        mapping(bytes32 => uint256) commerialid;
    }
    
    mapping(string => CompanyAdmins) ch;
    mapping(string => companyMembers) commem;
    
    function removeCitycoverage(string memory removecity ) public
    {
        require(msg.sender==0x20db1A3eD27EEF75BEBb000961d07AD47Bf58197);
        delete ch[removecity];
        uint idextract=companycityid[removecity];
        uint lastidofcity=cityforcompany.length-1;
        cityforcompany[idextract]=cityforcompany[lastidofcity];
        delete cityforcompany[lastidofcity];
        cityforcompany.length--;
       string storage cityalpha = cityforcompany[idextract];
       companycityid[cityalpha]=idextract;
        
    }
    
string[] public cityforcompany;
mapping(string=> uint) companycityid;

function viewcities() public returns(string[] memory)
{
    require(msg.sender==0x20db1A3eD27EEF75BEBb000961d07AD47Bf58197);
    return cityforcompany;
}
    
    function makeadmin(string memory cityN, address adminAdress, string memory AdminName, string memory hash) public
    {
        require(msg.sender==0x20db1A3eD27EEF75BEBb000961d07AD47Bf58197);
        require(!(ch[cityN].AAdminAdress==adminAdress ));
         require(!(adminscitystatus[cityN]));
        require(!(adminsaddressstatus[adminAdress]));
       
        ch[cityN].CCityName=cityN;
        ch[cityN].AAdminAdress=adminAdress;
        ch[cityN].AAdminName=AdminName;
        
        ch[cityN].hashh=hash;
          ch[cityN].noofadmins.push(adminAdress);
        ch[cityN].adminsid[adminAdress]=ch[cityN].noofadmins.length-1;
      adminscitystatus[cityN]=true;
        adminsaddressstatus[adminAdress]=true;
        cityforcompany.push(cityN);
        uint comid=cityforcompany.length-1;
        companycityid[cityN]=comid;
    }
    
    function checkAdmins(string memory city)public view returns(address[] memory)
    {
        require(msg.sender==0x20db1A3eD27EEF75BEBb000961d07AD47Bf58197);
       return ch[city].noofadmins;
    }
    
    //dudueduedueduedueudueduedueudueduedueudedueuddu
    
    function makeMember(string memory cityN, address boyAdress, string memory Name , string memory ipfshash) public
    {
        
        require(adminscitystatus[cityN],"admin not available");
        require(!(adminsaddressstatus[boyAdress]),"admin cannot become workboy");
        require(!(boyappearence[boyAdress]),"boy already appeared in some city");
        require(!(ch[cityN].boycityappearence[boyAdress]),"boy already appeared in current city");
        
        ch[cityN].companyboys[boyAdress].cityName=cityN;
        ch[cityN].companyboys[boyAdress].boyName=Name;
        ch[cityN].companyboys[boyAdress].boyAddress=boyAdress;
        ch[cityN].companyboys[boyAdress].ipfshasH=ipfshash;
        boyappearence[boyAdress]=true;
        ch[cityN].boycityappearence[boyAdress]=true;
        ch[cityN].noofboys.push(boyAdress);
        ch[cityN].boysid[boyAdress]=ch[cityN].noofboys.length-1;
        
    }
    function checkmember(string memory cityboy) public view returns(address[] memory)
    {
        
        return ch[cityboy].noofboys;
    }
    
    
    function removeMember(string memory cityN, address boyAdress) public{
        
        uint bid=ch[cityN].boysid[boyAdress];
        ch[cityN].noofboys[bid]=ch[cityN].noofboys[ch[cityN].noofboys.length-1];
        delete ch[cityN].noofboys[ch[cityN].noofboys.length-1];
        ch[cityN].noofboys.length--;
        
        delete ch[cityN].companyboys[boyAdress];
         
        

          
          boyappearence[boyAdress]=false;
           ch[cityN].boycityappearence[boyAdress]=false;
        
    }
    
    
    function landInfoOwner(bytes32 enterid) public view returns(string memory,string memory,address,string memory,string memory ,bool , BuyersRequestStatus res ){
        
    
        
        return(Land[enterid].contactnumber,Land[enterid].ipfshash,Land[enterid].currentOwner , Land[enterid].completeAddress, Land[enterid].ipfshash  , Land[enterid].LandSaleable , Land[enterid].BuyersStatus[address(uint160(bytes20(enterid)))]);
    }
    
   
    function makeSaleable(bytes32 property)public{
        require(Land[property].currentOwner == msg.sender);
        Land[property].LandSaleable=true;
        
        
      
    } 
    
    
    function forsale(bytes32 sale) private returns(uint)
    {
        memsale.push(sale);
        
        uint length=memsale.length-1;
    return length;
        
    }
    
    
    function viewforsale() public view returns(bytes32[] memory)
{
    
    return memsale;
}

function deletesaleable(uint id, bytes32 lname)public {
    require(Land[lname].currentOwner==msg.sender);
    require(memsale[id]== lname);
    
   
    uint idd=memsale.length-1;
    memsale[id]= memsale[idd];
    memsale.length--;
    
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
        
        
        // bytes32 hashLandLast= profile[previousOwner].noOfLand[lastproperty];
       // profile[previousOwner].noOfLand[findid]=profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
        
       profile[previousOwner].noOfLand[findid]=profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
       whtidis[lastproperty]=findid;
       
       
       
       delete   profile[previousOwner].noOfLand[profile[previousOwner].noOfLand.length-1];
      
    profile[previousOwner].noOfLand.length--;
        
        profile[msg.sender].noOfLand.push(Landid);
        
    }


}
