const button = document.querySelector('#button');




function bttnClick() {
    console.log("Button was clicked")
    axios.get('https://swapi.dev/api/planets/2')
    .then(res => { 
        console.log(res.data.residents)
        const myArr = res.data.residents
        for (let i = 0; i < myArr.length; i++){
            console.log(myArr)
            axios.get(myArr[i])            
            .then(res => {
                const myPeeps = res.name                
                    // console.log(myPeeps);
                const myHeader = document.getElementById("myPeeps").innerHTML = `${myPeeps} are from Alderaan`
            })            
        } 
    })  
}
    
    
        


// function buttonClick() {
//     axios.get('https://swapi.dev/api/planets/2')
//     .then(res => {console.log(res.data.residents);
//         // const myArr = res.data.residents

//         // for (let i = 0; i < res.residents; i++){
//         //     axios.get(myArr[i])
//         //             .then(res => console.log(res1.data.name))
                    // const nameDiv = document.createElement('div')
                    // nameDiv.innerText = res1.data.name
//                     // .catch(err => console.log(err))
//         // }
        
//     })
//     .catch(error => {
//         console.log(error)
//     })

    
// }



button.addEventListener('click', bttnClick)
