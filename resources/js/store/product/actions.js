import axios from "axios"

export function getProducts({ commit }) {
    let url = "assets/products.json";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

export function getProductsById({ commit }, id) {
    let url = "assets/products.json";
    let products = [];

    axios.get(url).then((response) => {
        if (id) {
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                if (element.categoryId == id) {
                    products.push(element)
                }
            }
        }
        commit("setProducts", products);
    }).catch(error => {
        console.log(error);
    });
}

export function productDetails({ commit }, id) {
    // let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    let url = "assets/products.json";
    // console.log(url)
    axios.get(url).then((response) => {
        // console.log(response.data)
        const data = response.data.filter((obj) => {
            console.log(obj.id,id)
            return obj.id == id;
        }).pop(); 
        commit("setProduct",data);
    }).catch(function (error) {
        console.log(error);
    });
}

export function addCart({ commit, getters }, payload) {
    let cart = getters.cart
    let data = payload.product
    data["quantity"] = payload.quantity
    cart.push(data)
    commit("setCart", cart)
}

export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}
