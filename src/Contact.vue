<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-secondary">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div >
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <card type="secondary" 
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
 
                        <template>
        <section class="position-relative my-5">

                    <div class="col-lg-12">
                        <div class="row row-grid">

                            <div class="col-lg-6">
                                <card class="border-0" hover shadow body-classes="py-5" style="background: rgba(255, 150, 52, 0.253);">
                                        <h4 class="display-3 font-weight-bold  text-center ">Nos Animaux</h4>

                                        <div class=" mx-2" >
                                        
                                            <img src="img\theme\AFPA.jpg" class="img-fluid" >
                                            </div>
                                       
                                        <p class="my-0"><span>mes animeaux preferes <br/>AFPA Creteil<br/>Adresse : 9 Rue Marc Seguin, 94015 Créteil</span></p>
                                </card>
                            </div>

                            <div class="col-lg-6">
                                <card class="border-0 py-0" hover shadow body-classes="py-5" style="background: rgba(255, 150, 52, 0.253);">
                                            <h4 class="display-3 font-weight-bold  text-center mt-2">CONTACT</h4>

                                            <base-input class="mt-5"
                                                        alternative
                                                        placeholder="Your name"
                                                        addon-left-icon="ni ni-user-run">
                                            </base-input>
                                            <base-input alternative
                                                        placeholder="Email address"
                                                        addon-left-icon="ni ni-email-83">
                                            </base-input>
                                            <base-input class="mb-5">
                                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                                            cols="80" placeholder="Type a message..."></textarea>
                                            </base-input>
                                            <base-button class="mt-5 mb-1" type="default" round block size="lg">
                                                ENVOYER
                                            </base-button>
                                </card>
                            </div>

                        </div>
                    </div>

        </section>
                        </template>
                    </card>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
