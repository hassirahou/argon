<template>
    <section >

            <b-carousel id="carousel1"
                        controls
                        indicators
                        >
                <!-- Text slides with image -->
                <b-carousel-slide img-src="img/theme/LionMerC.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="img/theme/AnimauxEauC.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="img/theme/PoleC.jpg"></b-carousel-slide>
                <b-carousel-slide img-src="img/theme/AnimauxSafarieC.jpg"></b-carousel-slide>
            </b-carousel>
                                     
            <h1  id="Mes_animaux_pr_f_r_s_">
            <span>Mes animaux<br/>préférés </span>
            </h1>

            <section class="position-relative pb-md-5" >

                    <header class="header-global" >
                            <base-nav class="navbar-main bg-primary" transparent type="" effect="light" expand>


                                <div class="row" slot="content-header" slot-scope="{closeMenu}">
                                    <div class="col-6 collapse-brand">
                                        <a href="../index.html">
                                            <h1>Accueil</h1>
                                        </a>
                                    </div>
                                    <div class="col-6 collapse-close">
                                        <close-button @click="closeMenu"></close-button>
                                    </div>
                                </div>

                                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                                            
                                            <span class="nav-link-inner--text ">Animaux</span>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-xl">
                                            <div class="dropdown-menu-inner">
                                                <a href="https://fr.wikipedia.org/wiki/Ursidae"
                                                class="media d-flex align-items-center">
                                                    <div class="icon rounded-circle text-white">
                                                
                                                    </div>
                                                    <div class="media-body ml-3">
                                                        <h6 class="heading text-primary mb-md-1">Ours</h6>
                                                        <p class="description d-none d-md-inline-block mb-0">Le lion (Panthera leo) est une espèce de mammifères carnivores de la famille des félidés.</p>
                                                    </div>
                                                </a>
                                                <a href="https://fr.wikipedia.org/wiki/Lion"
                                                class="media d-flex align-items-center">
                                                    <div class="icon rounded-circle text-white">
                                              
                                                    </div>
                                                    <div class="media-body ml-3">
                                                        <h5 class="heading text-warning mb-md-1">Lion</h5>
                                                        <p class="description d-none d-md-inline-block mb-0">Le lion (Panthera leo) est une espèce de mammifères carnivores de la famille des félidés.</p>
                                                    </div>
                                                </a>
                                                 <a href="https://fr.wikipedia.org/wiki/%C3%89l%C3%A9phant"
                                                class="media d-flex align-items-center" >
                                                    <div class="icon rounded-circle text-white">
                                                      
                                                    </div>
                                                    <div class="media-body ml-3">
                                                        <h5 class="heading text-warning mb-md-1">Elephant</h5>
                                                        <p class="description d-none d-md-inline-block mb-0">Le lion (Panthera leo) est une espèce de mammifères carnivores de la famille des félidés.</p>
                                                    </div>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                                           
                                            <span class="nav-link-inner--text">Adheron</span>
                                        </a>
                                        <div class="dropdown-menu">
                                            <router-link to="./Login" class="dropdown-item">Sign-in</router-link>
                                            <router-link to="./Register" class="dropdown-item">Sign-up</router-link>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <router-link target="_blank" data-toggle="tooltip" to="./Present" s class ="text-white mx-4">IAAA</router-link>
                                           
 
                                    </li>
                                    <li class="nav-item">
                                        <router-link target="_blank" data-toggle="tooltip" to="./Associations" class ="text-white mx-4"><span >Associations</span></router-link>
                                            
                                            
                                       
                                    </li>
                                    <li class="nav-item">
                                        <router-link target="_blank" data-toggle="tooltip" to="./Animaux" class ="text-white mx-4"><span >Mes Animaux</span></router-link>
                                            
                                            
                                        
                                    </li>
                                    <li class="nav-item">
                                            <router-link target="_blank" data-toggle="tooltip" to="./Aid" class ="text-white mx-4"><span>Aides</span></router-link>
                                                                                    
                                            
                                       
                                    </li>
                                   <li class="nav-item">
                                            <router-link target="_blank" data-toggle="tooltip" to="./Contact" class ="text-white mx-4"><span >Contact</span></router-link>
                                        
                                            
                                        
                                    </li>
                                </ul>

                            </base-nav>
                    </header>
            </section>

    </section>
    

</template>


<script>

import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BaseNav,
    CloseButton,
    BCarousel,
    BCarouselSlide
  }
};
</script> 

<style>
 
#Mes_animaux_pr_f_r_s_ 
{
    filter: drop-shadow(0px 9px 6px rgba(46, 46, 36, 0.741));
    position: absolute;
    left: 24.5px;
    top: 18.5px;
    overflow: visible;
    -webkit-text-stroke-width: 0.1vw;
    -webkit-text-stroke-color:lawngreen;  
    white-space: nowrap;
    text-align: left;
    font-family: Stencil Std;
    font-style: normal;
    font-weight: bold;
    font-size: 5vw;
    color: rgba(255,255,255,1);
}
  

</style>





