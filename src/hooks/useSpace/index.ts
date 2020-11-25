import { useQuery } from "react-query";
// import { useQuery, useMutation, queryCache } from "react-query";
import * as api from "@Core/api/space.api";
const useSpaces = () => {
  return useQuery("spaces", api.getAllSpaces);
};

// const useProduct = (id) => {
//   return useQuery(["product", id], api.getProduct)
// }

// const useDeleteProduct = () => {
//   return useMutation(api.deleteProduct, {
//     onSuccess: (_, id) => {
//       const products = queryCache.getQueryData("products")
//       const data = products.filter((item) => item._id !== id)
//       queryCache.setQueryData("products", data)
//     },
//   })
// }

// const useUpdateProduct = () => {
//   return useMutation(api.updateProduct, {
//     onSuccess: (_, { id, ...variables }) => {
//       queryCache.refetchQueries("products")
//       queryCache.refetchQueries(["product", id])
//     },
//   })
// }

export { useSpaces };
// const client = axios.create({
//   baseURL: "/api",
// })

// const getAllProducts = async () => {
//   const { data } = await client.get(`/products`)
//   return data
// }

// const getProduct = async (_, id) => {
//   const { data } = await client.get(`/products/${id}`)
//   return data
// }

// const createProduct = async ({ name, description, amount }) => {
//   const product = { name, description, amount }
//   const { data } = await client.post(`/products`, product)
//   return data
// }

// const updateProduct = async ({ id, ...product }) => {
//   const { data } = await client.put(`/products/${id}`, product)
//   return data
// }

// const deleteProduct = async (id) => {
//   const { data } = await client.delete(`/products/${id}`)
//   return data
// }

// export {
//   getAllProducts,
//   getProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// }
