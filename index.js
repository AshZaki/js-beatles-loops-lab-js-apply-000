// add solution here

function theBeatlesPlay (musicians,instruments){
  var playList = [];
  for (let i = 0; i < musicians.length; i++){
    playList.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return playList;
}


