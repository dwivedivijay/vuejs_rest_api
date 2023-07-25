import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost:8080/laravel_api/public/api/v1/";

export default function useProducts(){
    const products = ref([]);
    const product = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getProducts = async () => {
        const responce = await axios.get("products");
        products.value = responce.data.data;
    };

    const getProduct = async (id) => {
        const responce = await axios.get("products"+ id);
        product.value = responce.data.data;
    };

    const storeProduct = async (data) => {
        try {
            await axios.post("products" , data);
            await router.push({name:"ProductIndex"});
        } catch (err) {
            if(err.responce.status == 422){
                errors.value = err.responce.data.errors;
            }
        }
    };

    const updateProduct = async (id) => {
        try {
            await axios.put("products/" + id, product.value);
            await router.push({name:"ProductIndex"});
        } catch (err) {
            if(err.responce.status == 422){
                errors.value = err.responce.data.errors;
            }
        }
    };
    
    const destroyProduct = async (id) => {
        if( !window.confirm("Are you sure?") ){
            return;
        }
        await axios.delete("products/" + id);
        await getProducts();
    };

    return {
        product,
        products,
        getProduct,
        getProducts,
        storeProduct,
        updateProduct,
        destroyProduct,
        errors,
    };
}