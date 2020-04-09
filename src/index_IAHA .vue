<template>
  <body style="background: rgba(182, 244, 255, 0.445);">
         
    <main   >
        
         <div>
            <div >
              <div class="crassol"> 


              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                   
                    <img src="./images/friendship.jpg" alt="First slide" width="100%" height="100%" background="#777" color="#777" text=" " title=" ">

                  </div>
                  <div class="carousel-item">
                    <img src="./images/Pacific_Walrus_Bull.jpg" alt="Second slide"  width="100%" height="100%" background="#777" color="#777" text=" " title=" ">

                  </div>
                  <div class="carousel-item">
                    <img src="./images/Ribbon_Seal.jpg" alt="Third slide"  width="100%" height="100%" background="#777" color="#777" text=" " title=" "width="100%" height="100%" background="#777" color="#777" text=" " title=" ">
                     

                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>




           
              <h1  id="Mes_animaux_pr_f_r_s_">
                <span>Mes animaux<br/>préférés </span>
              </h1>
            </div>







              <vav class="navBar row mt-3 mx-1   navbar-primary " >
                
                  <a class="text-center col-md-2 border border-primary" href=index1.html>Accueil</a>
                  <a class="text-center col-md-2 border border-primary " href=index.html>Mes Animaux</a>
                  <a class="text-center col-md-2  border border-primary" href=index.html>Associations</a>
                  <a class="text-center col-md-2  border border-primary" href=index.html>Animaux</a>
                  <a class="text-center col-md-2 border border-primary " href=index.html>Aides</a>
                  <a class="text-center col-md-2  border border-primary" href=index.html>Contcact</a>
              
              </nav>
          </div>
            
            
         

          <div class="mx-1">
            
              
                      <div class="row  mt-3 mx-1 d-flex justify-content-between border border-dark"  style="background: rgba(255, 150, 52, 0.253);">
                          <a class="col-md-3 border border-dark" href="Ours.html">
                            <img  class="img-fluid " src="images/Ours1.png"  >
                          </a>
                          <h1 class="col-md-1 text-color-danger" class="h1">Ours</h1>
                          <p class="col-md-6">
                            Le lion (Panthera leo) est une espèce de mammifères carnivores de
                            la famille des félidés. 
                            </p>
                      </div>
        
                      <div class="row mt-3 mx-1 d-flex justify-content-between border border-dark" style="background: rgba(255, 200, 149, 0.281);" >
                            <a class="col-md-3 border border-dark" href="Lion.html">
                              <img id="Lion" class="img-fluid" src="images/Lion1.png" >
                            </a>
                            <h1 class="col-md-" class="h1">Lion</h1>
                            <p class="col-md-6 " >
                              Le lion (Panthera leo) est une espèce de mammifères carnivores de
                              la famille des félidés.              
                            </p>
                      </div>
          
                      <div class="row mt-3 mx-1 d-flex justify-content-between border border-dark" style="background: rgba(163, 167, 167, 0.329);">
                            <a class="col-md-3 border border-dark" href="Eléphant.html">
                              <img id="Elephent" class="img-fluid" src="images/Elephent1.png"  >
                            </a>
                            
                            <h1  class="col-md-1S" class="h1">Eléphant</h1>
                        
                            <p class="col-md-6">
                          
                              Le lion (Panthera leo) est une espèce de mammifères carnivores de
                              la famille des félidés. 
                            </p>
                      </div>

           
          </div>



          <div class="row justify-content-around mx-1 mt-3" >

            
              <div class="col-md-5  border border-dark my-3"  style="background: rgba(255, 150, 52, 0.596);">
                <div >
                  <div >                    
                    <h1 class="text-center" >Nos Animaux</h1>
                  </div>

                  <div >
                    <img  class="img-fluid " src="images/AFPA.jpg"  > 
                  </div>  

                  <div  >
                    <span>mes animeaux preferes <br/>AFPA Creteil<br/>Adresse : 9 Rue Marc Seguin, 94015 Créteil</span>
                  </div>  
                </div>

              </div>   <!-- ---------------------------Map end-------  -->

              <form class="  col-md-5  border border-dark my-3 "  style="background: rgba(255, 150, 52, 0.596);" >
                                              
                  
                  <fieldset class="form-group">
                    <legend class="h1 text-center" >CONTACT</legend>
                
                    <div class="form-group">
                      <input class="form-control" type="text" id="ownername" placeholder="Prénom">
                    </div><!-- form-group -->

                    <div class="form-group">
                      <input class="form-control" type="text" id="ownername" placeholder="Nom">
                    </div><!-- form-group -->                 

                
                    <div class="form-group">
                      <input class="form-control" type="email" id="owneremail" aria-describedby="emailHelp" placeholder="Votre email">
                  </div><!-- form-group --> 

                  <div class="form-group">
                    <textarea class="form-control" id="reasonforvisit" rows="3" placeholder="Votre message"></textarea>
                  </div><!-- form-group -->
                  </fieldset>
                      
                  <button class="btn btn-primary pb-2" type="submit">Envoyer</button> 
                    
                  </form>
                  

                </div>
              <!-- ---------Form end------->


              
    </main>
 
</template>