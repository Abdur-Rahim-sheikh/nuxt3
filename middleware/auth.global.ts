export default defineNuxtRouteMiddleware((to, from) =>{
    const isLoggedIn = false;
    console.log('Global Auth middleware');
    console.log(to);
    if (!isLoggedIn && to.path !=='/') {
        return navigateTo('/');
    }
    
});