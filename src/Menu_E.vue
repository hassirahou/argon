<template>
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
                                            
                                            <span class="nav-link-inner--text ">Mes Animaux</span>
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
                                        <router-link target="_blank" data-toggle="tooltip" to="./Present" class ="text-white mx-4">IAAA</router-link>
                                           
 
                                    </li>
                                    <li class="nav-item">
                                        <router-link target="_blank" data-toggle="tooltip" to="./Associations" class ="text-white mx-4"><span >Associations</span></router-link>
                                            
                                            
                                       
                                    </li>
                                    <li class="nav-item">
                                        <router-link target="_blank" data-toggle="tooltip" to="./Animaux" class ="text-white mx-4"><span >Animaux</span></router-link>
                                            
                                            
                                        
                                    </li>
                                    <li class="nav-item">
                                            <router-link target="_blank" data-toggle="tooltip" to="./Aids" class ="text-white mx-4"><span>Aides</span></router-link>
                                                                                    
                                            
                                       
                                    </li>
                                   <li class="nav-item">
                                            <router-link target="_blank" data-toggle="tooltip" to="./Contact" class ="text-white mx-4"><span >Contact</span></router-link>
                                        
                                            
                                        
                                    </li>
                                </ul>

                            </base-nav>
                    </header>
            </section>
</template>
<script>
export default {};
</script>
<style>
</style>
