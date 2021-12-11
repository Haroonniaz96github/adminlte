import axios from "axios"

export function getCategories({ commit }) {
    let url = "assets/categories.json";
    axios.get(url).then((response) => {
        commit("setCategories", response.data);
    }).catch(error => {
        console.log(error);
    });
}


export function getAdminCategories({ commit }) {
    let url = "api/categories";
    axios.get(url).then((response) => {
        console.log(response.data.categories)
        commit("setCategories", response.data.categories);
    }).catch(error => {
        console.log(error);
    });
}

export function editCategory({ commit }, id) {
    let url = "api/categories/"+ id +"/edit/";
    axios.get(url).then((response) => {
        commit("setCategory", response.data);
    }).catch(error => {
        console.log(error);
    });
}

// export function updateCategory({ commit }, category) {
//     console.log("hello")
//     let url =  "api/categories/" + category.id;
//     axios.put(url).then((response) => {
//         commit("setCategory", category);
//     }).catch(error => {
//         console.log(error);
//     });
// }



