
const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const key = document.querySelector('#key')
const converter2 = document.querySelector('#converter2')
const result2 = document.querySelector('.result2')
const convBtn2 = document.querySelector('.conv2')
const resetBtn2 = document.querySelector('.reset2')
const changeBtn2 = document.querySelector('.change2')
const key2 = document.querySelector('#key2')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const litery = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ'
const alfabet = [...litery]
alfabet[-1] = 'Ż', alfabet[-2] = 'Ź', alfabet[-3] = 'Z', alfabet[-4] = 'Y', alfabet[-5] = 'W', alfabet[-6] = 'U',alfabet[-8] = 'T',alfabet[-9] = 'Ś',alfabet[-10] = 'S',alfabet[-11] = 'R',alfabet[-12] = 'P',alfabet[-13] = 'Ó',alfabet[-14] = 'O',alfabet[-15] = 'Ń',alfabet[-16] = 'M',alfabet[-17] = 'Ł',alfabet[-18] = 'L',alfabet[-19] = 'K',alfabet[-20] = 'J',alfabet[-21] = 'I',alfabet[-22] = 'H',alfabet[-23] = 'G',alfabet[-24] = 'F',alfabet[-25] = 'Ę',alfabet[-26] = 'E',alfabet[-27] = 'D',alfabet[-28] = 'Ć',alfabet[-29] = 'C',alfabet[-30] = 'B',alfabet[-31] = 'Ą',alfabet[-32] = 'A'
//alfabet[33] = 'A', alfabet[34] = 'Ą', alfabet[35] = 'B', alfabet[36] = 'C', alfabet[37] = 'Ć', alfabet[38] = 'D',alfabet[39] = 'E',alfabet[40] = 'Ę',alfabet[41] = 'F',alfabet[42] = 'G',alfabet[43] = 'H',alfabet[44] = 'I',alfabet[45] = 'J',alfabet[46] = 'K',alfabet[47] = 'L',alfabet[48] = 'Ł',alfabet[49] = 'M',alfabet[50] = 'N',alfabet[51] = 'Ń',alfabet[52] = 'O',alfabet[53] = 'Ó',alfabet[54] = 'P',alfabet[55] = 'R',alfabet[56] = 'S',alfabet[57] = 'Ś',alfabet[58] = 'T',alfabet[59] = 'U',alfabet[60] = 'W',alfabet[61] = 'Y',alfabet[62] = 'Z',alfabet[63] = 'Ź',alfabet[64] = 'Ż'


const change = () =>{
   if (one.textContent === 'szyfrowanie') {
     one.textContent = 'deszyfrowanie'
     convBtn.textContent = 'odszyfruj'
     converter.value = ''
    key.value = ''
     
   }else{
     one.textContent = 'szyfrowanie'
     convBtn.textContent = 'szyfruj'
     converter.value = ''
    key.value = ''
   
   }
}
const change2 = () =>{
    if (two.textContent === 'szyfrowanie') {
      two.textContent = 'deszyfrowanie'
      convBtn2.textContent = 'odszyfruj'
      converter2.value = ''
    result2.textContent = ''
    key2.value = ''
      
      
    }else{
      two.textContent = 'szyfrowanie'
      convBtn2.textContent = 'szyfruj'
      converter2.value = ''
    result2.textContent = ''
    key2.value = ''
    
    }
 }



const conv = () => {
    if (one.textContent === 'szyfrowanie') {
        checkInput()
        let convVal = converter.value
        let keyVal = key.value
        let arr = [...convVal]
        let finalArr = []
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            for (let x = 0; x < alfabet.length; x++) {
                const element2 = alfabet[x]; 
                console.log(x);
             
            if(element2 === element.toUpperCase()){
                let convertId = parseFloat(keyVal)  
            let encrypted = alfabet[convertId + x]
            finalArr.push(encrypted)
            //console.log(finalArr.join(""));
            result.textContent = finalArr.join("")
            console.log(finalArr.join(""));
            }
        }   
        }

      }else if(one.textContent === 'deszyfrowanie'){
        checkInput()
        let convVal = converter.value
        let keyVal = key.value
        let arr = [...convVal]
        let finalArr = []
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(element);

            for (let x = 0; x < alfabet.length; x++) {
                const element2 = alfabet[x]; 
             
            if(element2 === element.toUpperCase()){
            let convertId = parseFloat(keyVal)  

            let encrypted = alfabet[x - convertId ]
            console.log(x - convertId);
            
            finalArr.push(encrypted)
            //console.log(finalArr.join(""));
            result.textContent = finalArr.join("")
            }
        }   
        }
          

      }
}


const reset= () =>{
    converter.value = ''
    result.textContent = ''
    key.value = ''
    
}
const reset2= () =>{
    converter2.value = ''
    result2.textContent = ''
    key2.value = ''
}

const checkInput = () =>{
    if(key.value > 32){
        alert('dozwolone liczby z przedziału 0-32')
    converter.value = ''
    result.textContent = ''
    key.value = ''
    }else if(key.value < 0){
        alert('dozwolone liczby z przedziału 0-32')
        converter.value = ''
        result.textContent = ''
        key.value = ''
    }
}





/*algorytm plecakowy*/ 

const conv2 = () =>{
   let weight = converter2.value
   let value = key2.value
   console.log(weight);
   console.log(value);
}
/*
const compare = (a, b) =>{
		if(a.value/a.weight < b.value/b.weight)return 1;
		if(a.value/a.value > b.value/b.weight)return -1;
		if(a.value/a.value == b.value/b.weight)return 0;
	}*/
/*
class Plecak {
        constructor(elements, capacity) {
            this.elements = elements;
            this.elementsCount = this.elements.length;
            this.capacity = capacity + 1;
            this.optimalValue = -1;
            this.order = [];
            this.results = null;
        };
        calculateOptimal() {
            // Przedstawiona metoda nie daje informacji, który podzbiór elementów jest rozwiązaniem
            this.results = new Array(this.capacity).fill(0);
    
            for (let i = 0; i < this.capacity; i++) { // i - capacity counter
    
                for (let j = 0; j < this.elementsCount; j++) { // j - element index
    
                    if (this.elements[j].weight <= i) {
    
                        if (this.results[i - this.elements[j].weight] + this.elements[j].value > this.results[i]) {
    
                            this.results[i] = this.results[i - this.elements[j].weight] + this.elements[j].value;
                        }
                    }
                }
            }
    
            console.log('Wartości:', this.results);
            return this.optimalValue = this.results[this.results.length - 1];
        };
        
        
        calculateOrder() 
        {
            var elements = this.elements;
            var capacity = this.capacity - 1;
            var elementsCount = elements.length;
            elements.sort(compare);
            var cap = capacity;
            var i = 0;
            var result = [];
            do{
                if(elements[i].weight>=cap)
                {
                    result.push(new elementTablicy(cap, elements[i].value));
                    cap=0;
                }
                else
                {
                    result.push(elements[i]);
                    cap=cap-elements[i].weight;
                }
                i++;
            }while(cap>0 && i<elementsCount);
            result.push(new elementTablicy(cap, "Pusta przestrzeń"));
            return this.order = result;
        }
    };

*/
resetBtn.addEventListener('click', reset)
changeBtn.addEventListener('click', change)
convBtn.addEventListener('click', conv)

resetBtn2.addEventListener('click', reset2)
changeBtn2.addEventListener('click', change2)
converter2.addEventListener('keyup', conv2)
convBtn2.addEventListener('click', conv2)
