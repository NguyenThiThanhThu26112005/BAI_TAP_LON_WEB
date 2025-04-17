document.addEventListener('DOMContentLoaded', function() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.name;
        document.getElementById('productBrand').textContent = product.brandname || "Không rõ";
        document.getElementById('productDate').textContent = product.date || "Không rõ";
        document.getElementById('productWeight').textContent = product.weight || "Không rõ";
        document.getElementById('productOrigine').textContent = product.origine || "Không rõ";
    } else {
        window.location.href = '../html/Product.html';
    }

    displayRelatedProducts(product);
});

function displayRelatedProducts(currentProduct) {
    const relatedProductsContainer = document.getElementById('relatedProducts');
    let relatedProducts = [];
    
    
    if (currentProduct.name.toLowerCase().includes('mèo')) {
        relatedProducts = [
            { "name": "Thức ăn cho mèo loại 1", "price": "100.000vnd", "image": "../img/Anh_Cua_Meo/Anh_1.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng"  },
            { "name": "Pate mèo hảo hạng", "price": "95.000vnd", "image": "../img/Anh_Cua_Meo/Anh_4.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng"  },
            { "name": "Snack cá hồi cho mèo", "price": "88.000vnd", "image": "../img/Anh_Cua_Meo/Anh_7.webp", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng"  },
            { "name": "Thức ăn mèo con", "price": "120.000vnd", "image": "../img/Anh_Cua_Meo/Anh_11.jpg", "origine": "Việt Nam", "brandname": "Mèo Xinh", "weight": "500g", "date": "6 tháng"  }
        ];
    } else {
        relatedProducts = [
            { "name": "Thức ăn cho chó loại 1", "price": "120.000vnd", "image": "../img/Anh_Cua_Cho/Anh_11.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
            { "name": "Pate chó vị gà", "price": "115.000vnd", "image": "../img/Anh_Cua_Cho/Anh_1.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
            { "name": "Snack cho chó vị phô mai", "price": "85.000vnd", "image": "../img/Anh_Cua_Cho/Anh_6.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" },
            { "name": "Thức ăn cho chó lớn", "price": "150.000vnd", "image": "../img/Anh_Cua_Cho/Anh_5.webp", "origine": "Việt Nam", "brandname": "Chó Vui", "weight": "500g", "date": "6 tháng" }
        ];
    }

    
    relatedProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4';
        col.innerHTML = `
            <div class="card h-100 related-product more">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px;border-radius: ; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-danger fw-bold">${product.price}</p>
                    <button class="btn btn-outline-danger btn-sm">Xem chi tiết</button>
                </div>
            </div>
        `;
        
        
        col.querySelector('.related-product').addEventListener('click', function() {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.reload();
        });
        
        relatedProductsContainer.appendChild(col);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-danger").addEventListener("click", function () {
        const name = document.getElementById("productName").textContent;
        const price = document.getElementById("productPrice").textContent;
        const image = document.getElementById("productImage").src;
        const quantity = parseInt(document.getElementById("quantity").value) || 1;
    
        const product = { name, price, image, quantity  };
        
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    
        window.location.href = 'Cart.html';
    });
});
  