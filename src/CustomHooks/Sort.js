export default function Sort(leaderList, pathName) {
  console.log("inside sort function")
  switch (pathName) {
    case "/name": {
      sort(leaderList, 'name', true);
      return leaderList;
    }
    case "/age": {
      sort(leaderList, 'age');
      return leaderList;
    }
    case "/points": {
      sort(leaderList, 'points');
      return leaderList;
    }
    case "/rank": {
      sort(leaderList, 'rank');
      return leaderList;
    }
    default : return leaderList;
  }
}

function sort(LeaderList, sortOn, nameFlag) {
  const n = LeaderList.length;
  for(let i=0;i<n;i++) {
    for(let j=i+1;j<n;j++) {
      if(nameFlag) {
        if(LeaderList[j][sortOn] < LeaderList[i][sortOn]) {
          let temp = LeaderList[j];
          LeaderList[j] = LeaderList[i];
          LeaderList[i] = temp;
        }
      }
      else if(parseInt(LeaderList[j][sortOn]) < parseInt(LeaderList[i][sortOn])) {
        let temp = LeaderList[j];
        LeaderList[j] = LeaderList[i];
        LeaderList[i] = temp;
      }
    }
  }

  return LeaderList;
}