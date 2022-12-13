let msgnom = document.getElementById("msgnom");
        let msgmarque = document.getElementById("msgmarque");
       let msgprix= document.getElementById("msgprix");
        let msgdate = document.getElementById("msgdate");  
          let msgpromotion= document.getElementById("msgpromotion");
        let msgtype = document.getElementById("msgtype");
    
            function charger(){
              
                var compt; 
                compt=0;
                var nom=document.getElementById("nom");
                 var marque =document.getElementById("marque");
              var prix=  document.getElementById("prix") ;

              var date=document.getElementById("date");
               var type = document.getElementById("typeselect");
               var t =type.value
               var  promotion = document.getElementsByName("promotion");
               var btn=document.getElementById("charge");
             

               var  table = document.getElementById("table");
                 
               if(nom.value.length >0 && nom.value.length <=30)
            {  msgnom.innerHTML = ""; 
            nom.style.borderColor="rgb(227, 225, 225)";
               
             
           }
           else{
             msgnom.innerHTML = "veuillez saisir votre nom correcte"; 
             
             msgnom.style.color="red";
              nom.style.borderColor="red";
              compt++;
             

           }
          
           if(marque.value.length >0 && marque.value.length <=30)
           { msgmarque.innerHTML = " ";
           marque.style.borderColor="rgb(227, 225, 225)";
            
         
          
           }
           else{
            msgmarque.innerHTML = "veuillez saisir votre marque  ";
           
            msgmarque.style.color="red";
                marque.style.borderColor="red";
                compt++;
           }
          
           if(date.value.length == 0)
           {
            
             msgdate.innerHTML = " veuillez saisir votre date correcte";
             msgdate.style.color="red";
             date.style.borderColor="red";
             compt++;
           
        
           } else{
            msgdate.innerHTML = " ";
            date.style.borderColor="rgb(227, 225, 225)";
           }
           var select;
                select=0;
            for(i=0;i<type.length;i++)
            {
                 if(type[i].selected) 
                 {
                   
                  msgtype.innerHTML = "";
                  select++;
                  
                 }
                }
            if(select == 0)
              {
                msgtype.innerHTML = "veuillez choisir votre type de produit";
                msgtype.style.color="red";
                compt++;
              }


            empty = true;
            var check;
            check="";
            
            for(i=0;i<promotion.length;i++)
             {
               if(promotion[i].checked)
               {
                
                 empty=false;
                 check=promotion[i].value;
                } 
             }
             if(empty == true)
             {
              msgpromotion.innerHTML = " veuillez choisir votre promotion ";
             
              msgpromotion.style.color="red";
              compt++;
              
             
            }else{
                msgpromotion.innerHTML = "  ";
           
            }
           if(compt==0)
           { 
            
                 let ligne = document.createElement('tr');
              let collnom = document.createElement('td');
              let collmarque = document.createElement('td');
              let collprix = document.createElement('td');
              let colldate = document.createElement('td');
              let colltype = document.createElement('td');
              let checkradio = document.createElement('td');

              let collbutton = document.createElement('td');
              let collbutton1 = document.createElement('td');
              let btnmodifier = document.createElement('button');
              let btnsupprimer = document.createElement('button');


              btnsupprimer.innerHTML = "Supprimer";
             btnmodifier.innerHTML = "Modifier";


             table.appendChild(ligne);
            
            ligne.appendChild(collnom);
             ligne.appendChild(collmarque);
            ligne.appendChild(collprix);
            ligne.appendChild(colldate);
            ligne.appendChild(colltype);
            ligne.appendChild(checkradio);
            ligne.appendChild(collbutton);
            ligne.appendChild(collbutton1);


            collbutton.appendChild(btnmodifier);
            collbutton1.appendChild(btnsupprimer);

              collnom.innerHTML = nom.value;
              collmarque.innerHTML =marque.value;
              collprix.innerHTML = prix.value;
              colldate.innerHTML = date.value;
              colltype.innerHTML = type.value;
              checkradio.innerHTML = check;






            btnsupprimer.onclick = supprimer;
            function supprimer() {
                table.removeChild(ligne);
        }
        btnmodifier.onclick = modifier;
        function modifier(){

//             let date = date.value;
//             date = date.split("-").reverse().join("/");
         
            nom.value = table.rows[ligne.rowIndex].cells[0].innerText;
            marque.value = table.rows[ligne.rowIndex].cells[1].innerText;
            prix.value = table.rows[ligne.rowIndex].cells[2].innerText;
            date.value= table.rows[ligne.rowIndex].cells[3].innerText;
            type.value =table.rows[ligne.rowIndex].cells[4].innerText;
             
             if (checkradio.innerHTML=="oui") {
                 document.getElementById("oui").checked=true;
            }else  {
            document.getElementById("non").checked=true;
            }
            document.getElementById("charge").value = "Modifier";

             
            document.getElementById("charge").onclick = ModifierdeAjouterRow;
            function ModifierdeAjouterRow() {
//                 let date = date.value;
//                 dateP = date.split("-").reverse().join("/");

                    table.rows[ligne.rowIndex].cells[0].innerText = nom.value;
                    table.rows[ligne.rowIndex].cells[1].innerText= marque.value;
                    table.rows[ligne.rowIndex].cells[2].innerText = prix.value;
                    table.rows[ligne.rowIndex].cells[3].innerText = date.value;
                    table.rows[ligne.rowIndex].cells[4].innerText = type.value;

                    if (document.getElementById("oui").checked == true) {
                        table.rows[ligne.rowIndex].cells[5].innerText = 
                        document.getElementById("oui").value;
                    }else
                     {
                      table.rows[ligne.rowIndex].cells[5].innerText =
                         document.getElementById("non").value;
                    }
                    document.getElementById("charge").value = "Ajouter";

      
        }
       }
        nom.value="";
              marque.value="";
              prix.value="";
              date.value="";
              document.getElementById("oui").checked=false;
              document.getElementById("non").checked=false;
         }
             
             
   
           }