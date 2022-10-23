function randomIdx(array) {
  return Math.floor(Math.random() * array.length);
}

const SET_INTERVAL = 1000 * 60 * 3;
const TODOS_KEY = "todos";
const weeks = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const HIIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dev",
];
const quotes = [
  {
    quote: "악순환은 여기서 끝낸다. 우린 더 나은 존재가 되어야 한다.",
    author: "크레이토스",
  },
  {
    quote: "들우와 들우와",
    author: "정청",
  },
  {
    quote:
      "엑스으으으으으~! 에에에엑스으으으으테이셔어어어어언~~!!! 더블 엑스으으으으으!!!",
    author: "레오나르도 워치",
  },
  {
    quote: "꿇어라. 이것이 너와 나의 눈높이다.",
    author: "카디스 에트라마 디 라이제르",
  },
  {
    quote: "예림이, 그 패 봐바, 혹시 장이야? 사쿠라네?",
    author: "호구",
  },
  {
    quote: "동작 그만 밑장빼기냐?",
    author: "아귀",
  },
  {
    quote: "Rip and Tear",
    author: "Doom Slayer",
  },
  {
    quote: "고만해, 미친놈들아!",
    author: "이말년",
  },
  {
    quote: "우린 존나 예전에 끝났어. 돈 때문에 하는거지",
    author: "Oasis",
  },
  {
    quote: "느그 아부지 뭐하시노?",
    author: "김광규",
  },
  {
    quote: "You are NOT prepared!",
    author: "Illidan Stormrage the Betrayer",
  },
  {
    quote: "Yes I know yeah 넌 beautiful MONSTER.",
    author: "STAYC",
  },
  {
    quote: "파동포 발사!",
    author: "오키타",
  },
  {
    quote: "Succeeding you father",
    author: "Arthas Menethil",
  },
  {
    quote: "개미를 죽입시다(개미는나의원수)",
    author: "달팽이를 기르던 어느 초등학생 2학년",
  },
  {
    quote:
      "I'm going to save up for a new Lamborghini.(a few seconds later) Done!",
    author: "Bill 'The Greate rich man' Gates",
  },
  {
    quote: "Ahh~!, Fresh Meat",
    author: "The butcher",
  },
  {
    quote: "누가 저렇게 끔직한 혼종을 만들어 냈단 말인가?",
    author: "제라툴",
  },
  {
    quote: "아뇨 뚱인데요",
    author: "뚱이",
  },
  {
    quote: "뭘 좋아할지 몰라서 다 준비해봤어",
    author: "SM Entertainment",
  },
  {
    quote: "니들이 허접한지, 우리가 허접한지는 결과가 말해줄 것이다.",
    author: "무명의 서든어택2 개발자",
  },
];
const API_KEY = "34db59a4e51752a7ef6686db3f8f9ccd";
