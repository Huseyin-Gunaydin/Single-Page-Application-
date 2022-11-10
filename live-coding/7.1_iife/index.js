const letsRun = ()=>{
    console.log("Lets go");
}
letsRun();



(()=>{
    console.log("Lets immediately go");
})();


((runnersName)=>{
    console.log(`Lets go${runnersName}`);
})("Bolt");



(function(){
    console.log("Lets go classical runner")
})();


const myModule = (()=>{
    const secretName=("sanra Claus");

    const returnName=()=>{
        return secretName

    }
    return{
       // returnName
       version: 1.0,
       autor:"Ferdi Hoske",
       returnName: returnName,
       
    }
})();
//console.log(myModule.returnName())
console.log(myModule.returnName())
console.log(myModule.version)