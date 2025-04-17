document.addEventListener('DOMContentLoaded', function() {
    const cat_products = [
        { "id": 1, "name": "Thức ăn cho mèo loại 1", "price": "120.000vnd", "image": "../img/Anh_Cua_Meo/Anh_1.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 2, "name": "Thức ăn cho mèo vị bò", "price": "130.000vnd", "image": "../img/Anh_Cua_Meo/Anh_2.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 3, "name": "Pate mèo vị gà", "price": "115.000vnd", "image": "../img/Anh_Cua_Meo/Anh_3.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "400g", "date": "6 tháng" },
        { "id": 4, "name": "Thức ăn dinh dưỡng cho mèo con", "price": "140.000vnd", "image": "../img/Anh_Cua_Meo/Anh_4.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "600g", "date": "6 tháng" },
        { "id": 5, "name": "Snack cho mèo vị phô mai", "price": "85.000vnd", "image": "../img/Anh_Cua_Meo/Anh_5.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "250g", "date": "6 tháng" },
        { "id": 6, "name": "Bánh thưởng cho mèo", "price": "95.000vnd", "image": "../img/Anh_Cua_Meo/Anh_6.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "200g", "date": "6 tháng" },
        { "id": 7, "name": "Pate mèo cao cấp", "price": "110.000vnd", "image": "../img/Anh_Cua_Meo/Anh_7.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "400g", "date": "6 tháng" },
        { "id": 8, "name": "Thức ăn hỗn hợp cho mèo", "price": "125.000vnd", "image": "../img/Anh_Cua_Meo/Anh_8.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 9, "name": "Thức ăn cho mèo vị cá hồi", "price": "135.000vnd", "image": "../img/Anh_Cua_Meo/Anh_9.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 10, "name": "Pate mèo vị thịt heo", "price": "105.000vnd", "image": "../img/Anh_Cua_Meo/Anh_10.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "400g", "date": "6 tháng" },
        { "id": 11, "name": "Thức ăn cho mèo lớn", "price": "150.000vnd", "image": "../img/Anh_Cua_Meo/Anh_11.jpg", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "600g", "date": "6 tháng" },
        { "id": 12, "name": "Thức ăn cho mèo nhỏ", "price": "110.000vnd", "image": "../img/Anh_Cua_Meo/Anh_12.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 13, "name": "Thức ăn mềm dễ tiêu hóa cho mèo", "price": "112.000vnd", "image": "../img/Anh_Cua_Meo/Anh_13.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "400g", "date": "6 tháng" },
        { "id": 14, "name": "Combo thức ăn khô và pate cho mèo", "price": "200.000vnd", "image": "../img/Anh_Cua_Meo/Anh_14.jpg", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "800g", "date": "6 tháng" },
        { "id": 15, "name": "Pate tươi cho mèo", "price": "108.000vnd", "image": "../img/Anh_Cua_Meo/Anh_15.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "400g", "date": "6 tháng" },
        { "id": 16, "name": "Thức ăn hữu cơ cho mèo", "price": "145.000vnd", "image": "../img/Anh_Cua_Meo/Anh_16.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 17, "name": "Thức ăn vị rau củ cho mèo", "price": "102.000vnd", "image": "../img/Anh_Cua_Meo/Anh_17.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "450g", "date": "6 tháng" },
        { "id": 18, "name": "Pate vị cừu cho mèo", "price": "118.000vnd", "image": "../img/Anh_Cua_Meo/Anh_18.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "400g", "date": "6 tháng" },
        { "id": 19, "name": "Thức ăn cho mèo bị dị ứng", "price": "160.000vnd", "image": "../img/Anh_Cua_Meo/Anh_19.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng" },
        { "id": 20, "name": "Thức ăn đặc biệt cho mèo nhạy cảm", "price": "170.000vnd", "image": "../img/Anh_Cua_Meo/Anh_20.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "600g", "date": "6 tháng" }
    ];
    
    
    
    const dog_products = [
        { "id": 1, "name": "Thức ăn cho chó loại 1", "price": "120.000vnd", "image": "../img/Anh_Cua_Cho/Anh_1.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 2, "name": "Thức ăn khô vị bò", "price": "130.000vnd", "image": "../img/Anh_Cua_Cho/Anh_2.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 3, "name": "Bánh thưởng cho chó", "price": "115.000vnd", "image": "../img/Anh_Cua_Cho/Anh_3.jpg", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "400g", "date": "6 tháng" },
        { "id": 4, "name": "Thức ăn dinh dưỡng cho chó con", "price": "140.000vnd", "image": "../img/Anh_Cua_Cho/Anh_4.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "600g", "date": "6 tháng" },
        { "id": 5, "name": "Snack cho chó vị phô mai", "price": "85.000vnd", "image": "../img/Anh_Cua_Cho/Anh_5.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "250g", "date": "6 tháng" },
        { "id": 6, "name": "Pate chó vị gà", "price": "95.000vnd", "image": "../img/Anh_Cua_Cho/Anh_6.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "200g", "date": "6 tháng" },
        { "id": 7, "name": "Pate chó cao cấp", "price": "110.000vnd", "image": "../img/Anh_Cua_Cho/Anh_7.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "400g", "date": "6 tháng" },
        { "id": 8, "name": "Thức ăn hỗn hợp cho chó", "price": "125.000vnd", "image": "../img/Anh_Cua_Cho/Anh_8.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 9, "name": "Thức ăn vị cá hồi", "price": "135.000vnd", "image": "../img/Anh_Cua_Cho/Anh_9.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 10, "name": "Pate chó vị thịt heo", "price": "105.000vnd", "image": "../img/Anh_Cua_Cho/Anh_10.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "400g", "date": "6 tháng" },
        { "id": 11, "name": "Thức ăn cho chó lớn", "price": "150.000vnd", "image": "../img/Anh_Cua_Cho/Anh_11.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "600g", "date": "6 tháng" },
        { "id": 12, "name": "Thức ăn cho chó nhỏ", "price": "110.000vnd", "image": "../img/Anh_Cua_Cho/Anh_12.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 13, "name": "Thức ăn mềm dễ tiêu hóa cho chó", "price": "112.000vnd", "image": "../img/Anh_Cua_Cho/Anh_13.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "400g", "date": "6 tháng" },
        { "id": 14, "name": "Combo thức ăn khô và pate cho chó", "price": "200.000vnd", "image": "../img/Anh_Cua_Cho/Anh_14.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "800g", "date": "6 tháng" },
        { "id": 15, "name": "Pate tươi cho chó", "price": "108.000vnd", "image": "../img/Anh_Cua_Cho/Anh_15.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "400g", "date": "6 tháng" },
        { "id": 16, "name": "Thức ăn hữu cơ cho chó", "price": "145.000vnd", "image": "../img/Anh_Cua_Cho/Anh_16.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 17, "name": "Thức ăn vị rau củ cho chó", "price": "102.000vnd", "image": "../img/Anh_Cua_Cho/Anh_17.jpg", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "450g", "date": "6 tháng" },
        { "id": 18, "name": "Pate vị cừu cho chó", "price": "118.000vnd", "image": "../img/Anh_Cua_Cho/Anh_18.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "400g", "date": "6 tháng" },
        { "id": 19, "name": "Thức ăn cho chó bị dị ứng", "price": "160.000vnd", "image": "../img/Anh_Cua_Cho/Anh_19.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
        { "id": 20, "name": "Thức ăn đặc biệt cho chó nhạy cảm", "price": "170.000vnd", "image": "../img/Anh_Cua_Cho/Anh_20.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "600g", "date": "6 tháng" }
    ];
    
    
    function getRandomFeaturedProducts(catProducts, dogProducts, count) {
        const allProducts = [...catProducts, ...dogProducts];
        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    const featured_products = getRandomFeaturedProducts(cat_products, dog_products, 5);
    renderFeaturedProducts(featured_products);

    let catIndex = 0;
    let dogIndex = 0;
    const pageSize = 10; 

    function renderProducts(products, index, listId) {
        const productList = document.getElementById(listId);
        const productsToShow = products.slice(index, index + pageSize);
        
        
        const navContainer = document.createElement('div');
        navContainer.className = 'navbar navbar-expand-lg product-navbar';
        
        
        const navList = document.createElement('ul');
        navList.className = 'navbar-nav d-flex flex-row flex-wrap justify-content-start';
        
        productsToShow.forEach(product => {
            const navItem = document.createElement('li');
            navItem.className = 'nav-item product-nav-item  m-3';
            
            navItem.innerHTML = `
                <a href="#" class="nav-link product-nav-link" style='width:220px'>
                    <img src="${product.image}" alt="${product.name}" class="product-nav-img rounded-4" width='200px' height='220px'>
                    <p class="featured-name w-90">${product.name}</p>
                    <p class="product-nav-price">${product.price}</p>
                </a>
            `;
            
            navItem.addEventListener('click', (e) => {
                e.preventDefault();
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "Product_detail.html";
                } catch (error) {
                    console.error("Lỗi khi lưu sản phẩm:", error);
                }
            });
            
            navList.appendChild(navItem);
        });
        
        navContainer.appendChild(navList);
        productList.appendChild(navContainer);
        
        return index + pageSize;
    }

    
    catIndex = renderProducts(cat_products, catIndex, "cat_list");
    dogIndex = renderProducts(dog_products, dogIndex, "dog_list");

    
    document.getElementById("loadMoredog").addEventListener("click", () => {
        dogIndex = renderProducts(dog_products, dogIndex, "dog_list");
        if (dogIndex >= dog_products.length) {
            document.getElementById("loadMoredog").style.display = "none";
        }
    });

    document.getElementById("loadMorecat").addEventListener("click", () => {
        catIndex = renderProducts(cat_products, catIndex, "cat_list");
        if (catIndex >= cat_products.length) {
            document.getElementById("loadMorecat").style.display = "none";
        }
    });

    function renderFeaturedProducts(products) {
        const featuredContainer = document.querySelector("#featured_products");
        if (!featuredContainer) return;
    
        featuredContainer.innerHTML = '';
    
        const ul = document.createElement("ul");
        ul.className = "d-flex flex-row flex-wrap justify-content-center list-unstyled gap-3";
    
        products.forEach(product => {
            const li = document.createElement("li");
            li.className = "nav-item featured-product";
            li.innerHTML = `
                <a href="#" class="nav-link d-block text-center" style='width:210px'>
                    <img src="${product.image}" alt="${product.name}" class="img-fluid p-2" width="200px" height='220px'>
                    <p class="featured-name ">${product.name}</p>
                    <p class="featured-price">${product.price}</p>
                </a>
            `;
    
            li.addEventListener("click", (e) => {
                e.preventDefault();
                try {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = "Product_detail.html";
                } catch (error) {
                    console.error("Lỗi khi lưu sản phẩm nổi bật:", error);
                }
            });
    
            ul.appendChild(li);
        });
    
        featuredContainer.appendChild(ul);
    }
    
    
    
    
    
});
    function showDropdown() {
        document.getElementById('filterMenu').style.display = 'block';
    }

    function hideDropdown() {
        document.getElementById('filterMenu').style.display = 'none';
    }

    function filterProducts(type) {
        const featured = document.getElementById('featured_products');
        const cat = document.getElementById('cat_list');
        const dog = document.getElementById('dog_list');

        if (type === 'all') {
            featured.style.display = 'block';
            cat.style.display = 'block';
            dog.style.display = 'block';
        } else if (type === 'cat') {
            featured.style.display = 'none';
            cat.style.display = 'none';
            dog.style.display = 'block';
        } else if (type === 'dog') {
            featured.style.display = 'none';
            cat.style.display = 'block';
            dog.style.display = 'none';
        }
    }