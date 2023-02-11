fetch("https://dummyjson.com/products")
    .then((resolve) => {
        console.log(resolve.status)
        console.log(resolve.ok)
        return resolve.json()
    })
    .then((data) => {
        console.log(data);
        display_data(data.products);

    });


function display_data(products) {
    
    products.map((prod) => {
        console.log(prod);
        
        let prodBox = document.createElement("div");
        prodBox.setAttribute("class", "prodBox");

        
        let image = document.createElement("img");
        image.src = `${prod.thumbnail}`;

        
        let titleBox = document.createElement("div");
        titleBox.setAttribute("class", "titleBox");

       
        let title = document.createElement("span");
        title.innerHTML = `Title: <strong>${prod.title}</strong>`;

       
        let brand = document.createElement("span");
        brand.innerHTML = `Brand: <strong>${prod.brand}</strong>`;
        brand.setAttribute("class", "brand") 

        titleBox.append(title, brand);

        
        let price = document.createElement("p");
        price.innerHTML = `Price: <strong>$${prod.price}</strong>`;

        
        let discount = document.createElement("p");
        discount.innerHTML = `Discount: <strong>${prod.discountPercentage}${"%"}</strong>`;

        
        let rating = document.createElement("p");
        rating.innerHTML = `Rating: <strong>${prod.rating}</strong>`;

        
        let stock = document.createElement("p");
        stock.innerHTML = `Stock: <strong>${prod.stock}</strong>`;

        
        prodBox.append(image, titleBox, price, discount, rating, stock);
        
        
        productsGallery.append(prodBox);
    })

}

