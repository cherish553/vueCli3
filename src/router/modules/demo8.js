const meta = { auth: false }
const demo8 = {
    path: '/demo8',
    name: 'demo8',
    meta,
    component: () => import('@/page/demo8')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo8/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo8-')
}
export default demo8