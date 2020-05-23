
function cipher(key,data){
    // convert the data and key into string first
    key = key.toString()
    data = data.toString()
    
    // Declare the signature
    const signature = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]
    
    
    let arr =[]
    
    //we'll get the key in format 4.34.0.39. 
    // convert the key into sets
    let sets = key.split('.') // sets = [4,34,0,39]
    
    for(let i=0;i<sets.length;i++){
        if(i%2==0){
            arr.push({a:sets[i],b=sets[i+1]})
        }
    }
    
    // arr will be -> [{a:4,b:34}, {a:0,b:39}]
    
    arr.forEach((elem)=>{
        let char1 = signature[elem.a] 
        let char2 = signature[elem.b]
    
        let regex1 = new RegExp(char1,'g')
        let regex2 = new RegExp(char2,'g')
    
        data = data.replace(regex1, "!&").replace(regex2, char1).replace(/!&/g, char2) // we are using !& as temporary characters for swapping.
    })
    
    return data
    
    }
    