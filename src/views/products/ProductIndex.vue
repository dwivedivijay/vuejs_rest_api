<script setup>
import useProducts from '../../comosables/products';
import { onMounted } from 'vue';

const { products, getProducts } = useProducts();
onMounted( () => getProducts() );
</script>

<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{ name: 'ProductCreate' }" class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 rounded text-white" >Add Product</RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">Name</th>
                        <th scope="col" class="px-6 py-3">Slug</th>
                        <th scope="col" class="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">{{  product.name }}</td>
                        <td class="px-6 py-4">{{  product.slug }}</td>
                        <td class="px-6 py-4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>