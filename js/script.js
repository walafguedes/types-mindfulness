import {Router} from "./router.js"

const router = new Router()
 router.add("/" , "/pages/home.html") 
 router.add("/Mindfulness" , "/pages/Mindfulness.html") 
 router.add("/Transcendental" , "/pages/Transcendental.html") 
 router.add("/Yoga" , "/pages/Yoga.html") 
 router.add("/Vipassana" , "/pages/Vipassana.html") 
 router.add("/Zazen" , "/pages/Zazen.html") 
 
router.handle()
 
 window.onpopstate = () => router.handle()
 window.route = () => router.route()


