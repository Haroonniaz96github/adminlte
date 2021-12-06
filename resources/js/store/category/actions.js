import axios from "axios"

export function getCategories({ commit }) {
    let url = "assets/categories.json";
    axios.get(url).then((response) => {
        commit("setCategories", response.data);
    }).catch(error => {
        console.log(error);
    });
}

