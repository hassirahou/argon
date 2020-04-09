import Vue from "vue";
import Router from "vue-router";
import Main from "./3-El_Azhar_Main.vue";  
import AppHeader from "./1-El_Azhar_Header";
import AppFooter from "./6-El_Azhar_Footer.vue";
import Lion from "./Lion.vue";
import Elephant from "./Elephant.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import Present from "./3-El_Azhar_Main.vue";
import Associations from "./Associations.vue";
import Animaux from "./Animaux.vue";
import Aid from "./Aid.vue";
import Contact from "./Contact.vue";
import Ours from "./Ours.vue";
import AppHeaderO from "./1-El_Azhar_Header_O";
import AppHeaderL from "./1-El_Azhar_Header_L";
import AppHeaderE from "./1-El_Azhar_Header_E";




Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "main",
      components: {
        header: AppHeader,
       default: Main,
        footer: AppFooter
      }
    },

    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },



    {
      path: "/Present",
      name: "Present",
      components: {
        header: AppHeader,
        default: Present,
        footer: AppFooter
      }
    },

    {
      path: "/Associations",
      name: "Associations",
      components: {
        header: AppHeader,
        default: Associations,
        footer: AppFooter
      }
    },

    {
      path: "/Animaux",
      name: "Animaux",
      components: {
        header: AppHeader,
        default: Animaux,
        footer: AppFooter
      }
    },
    {
      path: "/Aid",
      name: "Aid",
      components: {
        header: AppHeader,
        default: Aid,
        footer: AppFooter
      }
    },
    {
      path: "/Contact",
      name: "Contact",
      components: {
        header: AppHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/Ours",
      name: "Ours",
      components: {
        header: AppHeaderO,
        default: Ours,
        footer: AppFooter
      }
    },
    {
      path: "/Lion",
      name: "Lion",
      components: {
        header: AppHeaderL,
        default: Lion,
        footer: AppFooter
      }
    },
    {
      path: "/Elephant",
      name: "Elephant",
      components: {
        header: AppHeaderE,
        default: Elephant,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
