const button = document.querySelector('#button');


function bttnClick() {
    console.log("Button was clicked")
    axios.get('https://swapi.dev/api/planets/2')
    .then(res => { 
        const myArr = res.data.residents
        for (let i = 0; i < myArr.length; i++){
            // console.log(myArr)
            axios.get(myArr[i])            
            .then(res => {
                const myNewArr = res.data.name
                const listOfPeople = document.querySelector('#myPeeps');
                const newList = document.createElement('h4')
                newList.innerText = myNewArr;

                listOfPeople.append(newList)
                console.log(myNewArr);                               
            })              
        }         
    })      
}

// document.getElementById("myPeeps").innerHTML = `${myNewArr} is from Alderaan`;                                              




button.addEventListener('click', bttnClick)
