import api from "./api";

const path = 'items';

export const itemsApi ={
    getItems: function (query) {
        return api.get(`${path}?q=${query}`);
    },
    getItemDescription: function (id) {
        return api.get(`${path}/${id}`);
    },
};