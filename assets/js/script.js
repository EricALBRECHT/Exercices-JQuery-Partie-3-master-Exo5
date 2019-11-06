
$(function(){
     //on donne le focus au champ
     $('.champ').focus();  
     
     $('.champ').keydown(function(e){
          // on determine les dimensions de la fenetre
          var largeur_fenetre = $(window).width()  -50;
          var hauteur_fenetre = $(window).height()  -50; 
          // sur un appui de fleche, on bouge le carré
          switch (e.which){
          case 37:
               $('.carre').offset({left:$('.carre').position().left - 10}); //fleche gauche
          break;
          case 38:
               $('.carre').offset({top: $('.carre').position().top - 10});//fleche haute
          break;
          case 39:
               $('.carre').offset({left: $('.carre').position().left + 10}); //fleche droite
          break;
          case 40:
               $('.carre').offset({top: $('.carre').position().top + 10}); //fleche bas
          break;
     }
     // si on sort de la fenetre, on ramene le carré de l'autre coté
     if ($('.carre').position().left < 0){
          $('.carre').offset({left:largeur_fenetre }); 
     }
     else if ($('.carre').position().left > (largeur_fenetre)){
          $('.carre').offset({left:0});  
     }
     else if ($('.carre').position().top < 0){
          $('.carre').offset({top:hauteur_fenetre });  
     }
     else if ($('.carre').position().top > (hauteur_fenetre )){
          $('.carre').offset({top:0});  
     }
     });

});
