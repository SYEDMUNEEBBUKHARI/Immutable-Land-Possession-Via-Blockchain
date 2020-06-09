import web3 from "./web3";
const address = "0x4b8514526DdE469753C5CE5c71E6535B1982d2B8";
const abi = [{"constant":true,"inputs":[],"name":"viewAssets","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"city","type":"string"}],"name":"viewapprover","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"city","type":"string"}],"name":"cityLand","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"city","type":"string"}],"name":"Cityandusers","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"Landid","type":"bytes32"},{"name":"buyer","type":"address"}],"name":"makeApproved","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"approverdata","outputs":[{"name":"","type":"string[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"completeaddress","type":"string"},{"name":"city","type":"string"},{"name":"LandArea","type":"string"},{"name":"metaid","type":"address"},{"name":"ipfsh","type":"string"}],"name":"LandRegistration","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"bytes32"}],"name":"requestToLandOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"viewforsale","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"approverlist","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"phno","type":"string"},{"name":"city","type":"string"},{"name":"email","type":"string"},{"name":"metaid","type":"address"}],"name":"registerapprover","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"property","type":"bytes32"}],"name":"makeSaleable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"enterid","type":"bytes32"}],"name":"LandBuyer","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"enterid","type":"bytes32"}],"name":"landInfoOwner","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Landnotification","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"Landid","type":"bytes32"}],"name":"approververify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"meta","type":"address"},{"name":"cicity","type":"string"}],"name":"cityverify","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"Landid","type":"bytes32"}],"name":"BuyLand","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"superuser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];


export default new web3.eth.Contract(abi, address);

