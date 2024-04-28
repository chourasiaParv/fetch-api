( async()=>{
    const productContainer = document.getElementById('productContainer')
    const searchInput = document.getElementById('searchInput')
    const url = 'https://fakestoreapi.com/products'
const fetchProduct =async ()=>{
    try{
    const res = await fetch (url)
    return  await res.json()
    } catch(error){
        return error
    }
};

const products = await fetchProduct();

const generateProducts = (product)=>{
    return `
    <div class="product_card">
    <div class="image_container">
        <img src="${product.image}" alt="">
    </div>
    <div class="product_content">
       <h2>${product.title}</h2> 
       <p>${product.description.split(" ").slice(0,20).join(" ")}</p>
       <button>${product.price} $</button>
    </div>
</div>
    
    `
};
const renderProducts =(products)=>{
    productContainer.innerHTML = "";
    products.forEach(product =>{
        productContainer.innerHTML += generateProducts(product)
    })

}
const filterHandler = (event)=>{
    const searchText = event.target.value.toLowerCase();

    const filteredProducts = products.filter((product)=>{
        return product.title.toLowerCase().includes(searchText)
    })
    renderProducts(filteredProducts)
}
searchInput.addEventListener('keyup',filterHandler)
    renderProducts(products)


})()