/**
 * 
 * There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and
 the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. 
When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case
 return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

 The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

 */




function alphabetWar(fight){
    let left = {'s' : 1,'b':2,'p':3,'w':4}
    let right = {'z' :1, 'd':2, 'q':3, 'm':4}
    
    let lcount = 0
    let rcount = 0
  for(let i = 0; i < fight.length; i++){
      if(left[fight[i]]  ){
        lcount = lcount + left[fight[i]]
      }
      if(right[fight[i]]){
        rcount = rcount + right[fight[i]]
      }
  }  
  if(lcount === rcount){
    return "Let's fight again!"
  } else if (lcount > rcount) {
    return "Left side wins!"
  } else {
    return "Right side wins!"
  }

}
