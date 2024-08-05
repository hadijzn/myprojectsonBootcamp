var products = [  
    {  
        name: "Realme phone",  
        price: 10,  
        id: 133,  
        hasDiscount: false,  
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/c6691393f9fdaa6f782f6b3b1a2f73116d06afa2_1713612612.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",  
    },  
    {  
        name: "Speaker",  
        price: 17,  
        id: 234,  
        hasDiscount: true,  
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/e304670318e5c446e4a0a661dadd2e33adebd31f_1620216702.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",  
    },  
    {  
        name: "TV",  
        price: 31,  
        id: 534,  
        hasDiscount: false,  
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/02f0e34a248303807e175d1cd7e61dc7d50782c5_1708417372.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",  
    },  
    {  
        name: "Airpod",  
        price: 43,  
        id: 131,  
        hasDiscount: false,  
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/b7502b55d6b4a22495d10e6901526c2b9e4d01e9_1691071853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",  
    },  
    {  
        name: "Watch",  
        price: 13,  
        id: 34,  
        hasDiscount: true,  
        imageSrc: "https://dkstatics-public.digikala.com/digikala-products/8590fddfbec8d88efc47aa73b9ac7f348d651463_1714194467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",  
    },  
];  
    function showProducts(){
        var container = document.getElementById('productContainer');  
        container.innerHTML = '';  
    
        products.forEach(function(product) {  
            var productDiv = document.createElement('div');  
            productDiv.className = 'product';  
            productDiv.innerHTML = `  
                <h3>${product.name}</h3>  
                <img src="${product.imageSrc}">  
                <p>قیمت: ${product.price} تومان</p>  
                <p>${product.hasDiscount ? 'تخفیف دارد' : 'تخفیف ندارد'}</p>  
            `;  
            container.appendChild(productDiv);  
        });  
    
    }
    var container = document.getElementById('productContainer');  
    container.innerHTML = '';  

console.log(showProducts)