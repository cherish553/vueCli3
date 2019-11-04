import { http } from '@/axios/index'
//获取公司列表
export const getData = () => http.get(`/api`)
export const getToken=_=>http.get(`/api/user/getQiniuToken`)