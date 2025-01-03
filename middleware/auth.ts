export default defineNuxtRouteMiddleware((to, from) =>{
    const isLoggedIn = false;
    console.log(to);

    console.log('Named Auth middleware');
});