const meta = { auth: false }
const demo5 = {
    path: '/demo5',
    name: 'demo5',
    meta,
    component: () => import('@/page/demo5')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo5/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo5-')
}
export default demo5