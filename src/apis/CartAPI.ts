import instance from '@/utils/request'
// 加入购物车
export const insertCartApi = (data: any) => {
  return instance.post('/member/cart', data)
}
// 获取最新的购物车列表
export const findNewCartApi = () => {
  return instance.get('/member/cart')
}
// 删除购物车
export const delCartApi = (ids: Array<string>) => {
  return instance.delete('/member/cart', { data: { ids } })
}
//合并本地购物车和服务器的购物车
export const memberCartApi = (data: any) => {
  return instance.post('/member/cart/merge', data)
}
