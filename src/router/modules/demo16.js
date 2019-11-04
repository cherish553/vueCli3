const meta = { auth: false }
const demo16 = {
    path: '/demo16',
    name: 'demo16',
    meta,
    component: () => import('@/page/demo16'),
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo16/two.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo16-')
}
export default demo16