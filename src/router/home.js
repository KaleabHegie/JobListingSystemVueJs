export default [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/candidateView/Home.vue'),
      meta: { layout: 'candidate' },
    },
    {
      path: '/job',
      name: 'Job',
      component: () => import('@/views/candidateView/Job.vue'),
      meta: { layout: 'candidate' },
    },
    {
      path: '/job_detail/1',
      name: 'JobDetail',
      component: () => import('@/views/candidateView/JobDetail.vue'),
      meta: { layout: 'candidate' },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/candidateView/About.vue'),
      meta: { layout: 'candidate' },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/candidateView/Contact.vue'),
      meta: { layout: 'candidate' },
    },
    {
      path: '/faqs',
      name: 'Faq',
      component: () => import('@/views/candidateView/Faq.vue'),
      meta: { layout: 'candidate' },
    },
  ];
  