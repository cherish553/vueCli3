const meta = { auth: false }
const demo13 = {
    path: '/demo13',
    name: 'demo13',
    meta,
    component: () => import('@/page/demo13')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo13/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo13-')
}
export default demo13