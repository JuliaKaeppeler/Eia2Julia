namespace Aufgabe02 {
        let infolist: string [] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
 
        function inputPairs(): number {
        let pairs: string = prompt("Wie viele Kartenpaare (min. 5 & max. 25)");
        let pairSum: number = parseInt(pairs);
        if (isNaN(pairSum) || pairSum < 5 || pairSum > 25) {
            alert("mindestens 5 & maximal 25!");
            inputPairs();    
        }
        
            else {
           
          
           console.log("inputPairs");
            
           console.log(pairSum);
           return pairSum;
               
        }
           }
    
        let amount: number =  inputPairs();
        
        console.log("Länge Infolist", infolist.length);
        console.log("Content Infolist", infolist);
}