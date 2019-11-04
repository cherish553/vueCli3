const meta = { auth: false }
const demo6 = {
    path: '/demo6',
    name: 'demo6',
    meta,
    component: () => import('@/page/demo6')
    // children: (pre => [
    //     { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo6/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    // ])('demo6-')
}
export default demo6