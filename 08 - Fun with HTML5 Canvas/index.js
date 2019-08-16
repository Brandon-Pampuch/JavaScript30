function markdownTables(arr) {

    let column = arr[0]
    
    let finalString = ""
    
    let catagories = column.split(",")
    console.log(catagories)
    for(let i = 0; i < catagories.length; i++) {

if(i === 0){
       finalString = `|${catagories[i]}|`
      }else{
          finalString = finalString + `${catagories[i]}|`
      }
  
      
    }
    return finalString
}

    console.log(markdownTables(['name,email', 'emily,emily@email.com', 'mary,maryberry@gbbs.co.uk']))