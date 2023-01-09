
let collected = document.querySelector(".collected")
let savats = []
let productDiv = document.querySelector(".productDiv")
let row = document.createElement("div")
row.classList.add("row")

reRender(products)

function reRender(products){
    row.innerHTML = ""
    products.map((item, index) =>{
        
        let productImg = document.createElement("img")
        productImg.src = item.img_src
        productImg.style.width = "250px"
        productImg.style.height ="250px"
        productImg.style.boxShadow = "0 0 5px blue"

        let productName = document.createElement("p")
        productName.innerText = item.name
        productName.style.color = "blue"
        productName.style.boxShadow = "0 0 10px blue"
        
        let card = document.createElement("div")
        card.classList.add("card", "m-3", "p-3")
        card.style.boxShadow = "0 0 5px blue"
    
        let col = document.createElement("div")
        col.classList.add("col-4")

        let button2 = document.createElement("button")
        button2.innerText = "Korzinka"
        button2.setAttribute("onclick",`buyProducts(${index})`)
        button2.setAttribute("class", "btn btn-success")
        button2.style.boxShadow = "0 0 10px green"

        card.appendChild(productImg)
        card.appendChild(productName)
        card.appendChild(button2)
        col.appendChild(card)
        row.appendChild(col)
        productDiv.appendChild(row)

    })
}

function searchTittle(key){
    let newCurrentName = products.filter(item =>{
    return item.name.toLowerCase().includes(key.value.toLowerCase())
    })
    reRender(newCurrentName)
  }
function buyProducts(index){
  savats.push({
    id: products[index].id,
    name: products[index].name,
    cost: products[index].cost,
    count: products[index].count,
    img_src: products[index].img_src
  })
}
