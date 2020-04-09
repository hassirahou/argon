<template>

    <main>


        <section class="position-relative pt-5 ">



                            <div class="row-lg-4 mt-md-5">
                               
                                    <div class="row  mt-3 mx-1 d-flex justify-content-between border border-dark"  style="background: rgba(255, 150, 52, 0.253);">


                                        <router-link target="_blank" data-toggle="tooltip" to="./Ours" class =" col-md-3 border border-dark"><img  class="img-fluid" src="./img/theme/Ours1.png"  ></router-link>



                                        <h1 class="col-md-1S h1">Ours</h1>
                                        <p class="col-md-6">
                                            Le lion (Panthera leo) est une espèce de mammifères carnivores de
                                            la famille des félidés. 
                                            </p>
                                    </div>

                            </div>
                            <div class="row-lg-4">
                                
                                    <div class="row mt-3 mx-1 d-flex justify-content-between border border-dark" style="background: rgba(255, 200, 149, 0.281);" >
                                        <router-link target="_blank" data-toggle="tooltip" to="./Lion" class =" col-md-3 border border-dark"><img  class="img-fluid" src="./img/theme/Lion1.png"  ></router-link>
                                            <h1 class="col-md- h1">Lion</h1>
                                            <p class="col-md-6 " >
                                            Le lion (Panthera leo) est une espèce de mammifères carnivores de
                                            la famille des félidés.              
                                            </p>
                                    </div>
                             
                            </div>
                            <div class="row-lg-4">
                                
                                    <div class="row mt-3 mx-1 d-flex justify-content-between border border-dark" style="background: rgba(163, 167, 167, 0.329);">
                                            <a class="col-md-3 border border-dark" href="Eléphant.html">
                                            <img id="Elephent" class="img-fluid" src="./img/theme/Elephent1.png"  >
                                            </a>
                                            
                                            <h1  class="col-md-1S h1">Eléphant</h1>
                                        
                                            <p class="col-md-6">
                                        
                                            Le lion (Panthera leo) est une espèce de mammifères carnivores de
                                            la famille des félidés. 
                                            </p>
                                    </div>
                            
                            </div>



        </section>





        <section class="position-relative my-5">

                    <div class="col-lg-12">
                        <div class="row row-grid">

                            <div class="col-lg-6">
                                <card class="border-0" hover shadow body-classes="py-5" style="background: rgba(255, 150, 52, 0.253);">
                                        <h4 class="display-3 font-weight-bold  text-center ">Nos Animaux</h4>

                                        <div class=" mx-2" >
                                        
                                            <img src="./img/theme/AFPA.jpg" class="img-fluid" >
                                            </div>
                                       
                                        <p class="my-0"><span>mes animeaux preferes <br/>AFPA Creteil<br/>Adresse : 9 Rue Marc Seguin, 94015 Créteil</span></p>
                                </card>
                            </div>

                            <div class="col-lg-6">
                                <card class="border-0 py-3" hover shadow body-classes="py-5" style="background: rgba(255, 150, 52, 0.253);">
                                            <h4 class="display-3 font-weight-bold  text-center mt-5">CONTACT</h4>

                                            <base-input class="mt-3"
                                                        alternative
                                                        placeholder="Your name"
                                                        addon-left-icon="ni ni-user-run">
                                            </base-input>
                                            <base-input alternative
                                                        placeholder="Email address"
                                                        addon-left-icon="ni ni-email-83">
                                            </base-input>
                                            <base-input class="mb-4">
                                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                                            cols="80" placeholder="Type a message..."></textarea>
                                            </base-input>
                                            <base-button class="mt-5" type="default" round block size="lg">
                                                ENVOYER
                                            </base-button>
                                </card>
                            </div>

                        </div>
                    </div>

        </section>




    </Main>
</template>

<script>
export default {
  name: "home",
  components: {}
};

<style>
</style>
