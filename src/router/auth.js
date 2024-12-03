export default [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/authView/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/authView/SignUp.vue'),
    },
  ];
  