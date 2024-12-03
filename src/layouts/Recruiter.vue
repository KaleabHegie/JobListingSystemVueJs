<template>
    <div>
     <AdminNavBar />
     <AdminSideBar />
     
  
      
      <main>
        <router-view></router-view>
      </main>
      
    </div>
  </template>
  
  <script>

  import AdminNavBar from '../components/admin/include/AdminNavBar.vue';
  import AdminSideBar from '../components/admin/include/AdminSideBar.vue';

  export default {
    components: {
      AdminNavBar,
      AdminSideBar,
    }
  }
</script>
