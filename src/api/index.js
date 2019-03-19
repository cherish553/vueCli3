import { get, post, del, put } from '@/axios/index'
//获取公司列表
export const getCompanyList = ({ page, size, name = '' }) => post(`admin/company/${page}/${size}`, {
    name
})