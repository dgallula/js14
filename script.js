  //  exercice 1 

// const mySet = new Set();

//  add value 

//  mySet.add("reouven@gmail.com")
//  mySet.add("avi@gmail.com")
//  mySet.add("Yuval@gmail.com")
//  mySet.add("David@gmail.com") 
//  mySet.add("raphael@gmail.com")
//  mySet.add("raphael@gmail.com")  
//  mySet.add("moshé@gmail.com")
 
//  function runCode() { 
//  // affiche tous les mails 
//  console.log(mySet)
//      //   nombres de mails 
//     console.log("הגודל של האוסף הוא " + mySet.size)
//             // verifie la présence d'un mail 
// if (mySet.has("moshé@gmail.com")) {
//     console.log("there is moshé@gmail.com in the list!")
//      }
//    }

      
// //  deuxième façon avec for of 
// const items = new Set();

 
//  items.add("reouven@gmail.com")
//  items.add("avi@gmail.com")
//  items.add("Yuval@gmail.com")
//  items.add("David@gmail.com") 
// items.add("raphael@gmail.com")
// items.add("raphael@gmail.com")  
// items.add("raphael@gmail.com")
 
//  function  runCode() { 
//      for( const item of items ) {
//    //  1 affiche tous les mails 
//     console.log(items)
//      // 2   nombres de mails 
//        console.log("הגודל של האוסף הוא " + items.size)
//     }
//         // 3 verifier la presence d'un mail 
//  if (items.has("moshé@gmail.com")) {
//     console.log("there is moshé@gmail.com in the list!")
//    } 
//   } 

// // exercice 2 


//  //Array exercice 1 
 
 
//  function runCode() {
//      // 1)presenter la liste entiere 
//       numbers.forEach(num => {
//           console.log(numbers)
//       })
//       // }) // 2) trouver le premier chiffre pair: 1ere manière

        
//          const numbers = [1,5,3,9,8,88,20,15,19,13]
//           const res = numbers.find(findFirstEvenNumber)
//           function findFirstEvenNumber(num) {
//         return num === 0 %2 ;
//            }
//  } 

//         // 2é manière 

            
//     // trouver le premier nombre pair de la liste 
//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]

//   let value 

//   value = arr.find(items => items %2 ===0 )
//   if (value) {
//       console.log("le premier nombre pair est :" + value)
//   } else {
//       console.log("il n'y a pas de nombre pairs dans la liste ")
//   }
// }

// //3)// trouver le pemier nombre supérieur à 50  de la liste 
//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]

//   let value 

//   value = arr.find(items => items > 50 )
//   if (value) {
//       console.log("le premier nombre supérieur à 50 est :" + value)
//   } else {
//       console.log("il n'y a pas de nombre supérieur à 50  dans la liste ")
//   }
// }


//     //4  trouver les nombres impairs de la liste 
//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]
    
//     function isEven (num) {
//        return( num %2 ===0) 
//     }

  
//   let value 

//   value = arr.filter(isEven);
//   console.log(value)

// }

//   // 5 trouver les nombres supérieurs à 50
    
//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]
    
//     function isOver50 (num) {
//        return( num >50) 
//     }

  
//   let value 

//   value = arr.filter(isOver50);
//   console.log(value)

// }


//  // autre façon 

 
//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]
//  let value

//  function runCode() {

// const  isOver50 = arr.filter(num=> num >50 );
// console.log(isOver50)
//  }
 
   //6  trouver l'index du premier chiffre inférieur à 50 

   
  // const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]

  // function runCode() {
  // let value

  // const  indexOver50 = arr.findIndex(num=> num >50 );
  // console.log(indexOver50)
  // }


  // 7 determiner si un chiffre est pair ou impair 


    const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]

   function runCode() {
   let value

    const evenNumberForEach = arr.forEach(num => num %2 ===0);
    console.log(evenNumberForEach)
     }



 
 //  8 afficher le plus grand nombre 

//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]
 
//  let biggest = arr.reduce((a,b)=> b > a ? b : a  );
//  console.log(biggest)


// //  

 
 
// //9   afficher le plus petit nombre 

//  const arr= [2,5,3,9,88,20,15,19,13,69,63,54,23,89,99,47,51,77,83]
 
//  let smallest = arr.reduce((a,b)=> b < a ? b : a  );
//  console.log(smallest)







