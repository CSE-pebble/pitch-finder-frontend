const Songs = [
  { title: "야인", singer: "강성", high: 56, low: 41, gender: 0 },
  { title: "스토커", singer: "권정열", high: 56, low: 37, gender: 0 },
  { title: "서른 즈음에", singer: "김광석", high: 56, low: 40, gender: 0 },
  { title: "감사", singer: "김동률", high: 56, low: 29, gender: 0 },
  { title: "동행", singer: "김동률", high: 56, low: 29, gender: 0 },
  { title: "황금가면", singer: "김동률", high: 56, low: 31, gender: 0 },
  {
    title: "기억의 습작",
    singer: "김동률(전람회)",
    high: 56,
    low: 31,
    gender: 0,
  },
  { title: "Replay", singer: "김동률", high: 56, low: 29, gender: 0 },
  {
    title: "이미 넌 고마운 사람",
    singer: "김연우",
    high: 56,
    low: 34,
    gender: 0,
  },
  { title: "잊어보려한다", singer: "김용진", high: 56, low: 34, gender: 0 },
  { title: "하얀말", singer: "김장훈", high: 56, low: 38, gender: 0 },
  { title: "고등어", singer: "노라조", high: 56, low: 42, gender: 0 },
  { title: "주변인", singer: "노리플라이", high: 56, low: 33, gender: 0 },
  { title: "내가 널 닮아서", singer: "뮤지", high: 56, low: 29, gender: 0 },
  { title: "나와 같다면", singer: "박상태", high: 56, low: 34, gender: 0 },
  { title: "별 시", singer: "박효신", high: 56, low: 44, gender: 0 },
  { title: "너에게로 또 다시", singer: "변진섭", high: 56, low: 39, gender: 0 },
  {
    title: "내 마음 깊은 곳의 너",
    singer: "신해철",
    high: 56,
    low: 37,
    gender: 0,
  },
  {
    title: "그대에게",
    singer: "신해철(무한궤도)",
    high: 56,
    low: 35,
    gender: 0,
  },
  { title: "친구", singer: "안재욱", high: 56, low: 38, gender: 0 },
  { title: "겨울을 걷는다", singer: "윤딴딴", high: 56, low: 35, gender: 0 },
  { title: "윤딴딴", singer: "윤딴딴", high: 56, low: 28, gender: 0 },
  { title: "까만 안경", singer: "이루", high: 56, low: 35, gender: 0 },
  {
    title: "가로수 그늘 아래 서면",
    singer: "이문세",
    high: 56,
    low: 31,
    gender: 0,
  },
  {
    title: "그대를 사랑하는 10가지 이유",
    singer: "이석훈",
    high: 56,
    low: 34,
    gender: 0,
  },
  { title: "별", singer: "이수(M.C The Max)", high: 56, low: 36, gender: 0 },
  {
    title: "어떻게 사랑이 그래요",
    singer: "이승환",
    high: 56,
    low: 34,
    gender: 0,
  },
  { title: "그대가 그대를", singer: "이승환", high: 56, low: 41, gender: 0 },
  { title: "물어본다", singer: "이승환", high: 56, low: 39, gender: 0 },
  { title: "꽃", singer: "이승환", high: 56, low: 30, gender: 0 },
  { title: "비상", singer: "임재범", high: 56, low: 36, gender: 0 },
  { title: "잠이 오질 않네요", singer: "장범준", high: 56, low: 32, gender: 0 },
  { title: "영원", singer: "최진영", high: 56, low: 39, gender: 0 },
  { title: "세월이 가면", singer: "최호섭", high: 56, low: 34, gender: 0 },
  { title: "가라가라", singer: "캔", high: 56, low: 34, gender: 0 },
  {
    title: "The Woman I Love",
    singer: "Jason Mraz",
    high: 56,
    low: 35,
    gender: 0,
  },
  { title: "먼지가 되어", singer: "김광석", high: 55, low: 33, gender: 0 },
  { title: "혼자 남은 밤", singer: "김광석", high: 55, low: 31, gender: 0 },
  { title: "그게 나야", singer: "김동률", high: 55, low: 31, gender: 0 },
  { title: "그럴 수밖에", singer: "김동률", high: 55, low: 27, gender: 0 },
  { title: "노래", singer: "김동률", high: 55, low: 33, gender: 0 },
  {
    title: "다시 사랑한다 말할까",
    singer: "김동률",
    high: 55,
    low: 33,
    gender: 0,
  },
  { title: "아이처럼", singer: "김동률", high: 55, low: 33, gender: 0 },
  { title: "왈왈", singer: "김승민", high: 55, low: 36, gender: 0 },
  { title: "가족사진", singer: "김진호", high: 55, low: 36, gender: 0 },
  {
    title: "토요일은 밤이 좋아",
    singer: "김종찬",
    high: 55,
    low: 47,
    gender: 0,
  },
  {
    title: "I'm In Love (Piano RMX)",
    singer: "라디(Ra.D)",
    high: 55,
    low: 38,
    gender: 0,
  },
  { title: "사랑.. 그 놈", singer: "바비킴", high: 55, low: 33, gender: 0 },
  { title: "연예인", singer: "싸이", high: 55, low: 45, gender: 0 },
  {
    title: "사랑의 시작은 고백에서부터",
    singer: "소울 크라이",
    high: 55,
    low: 40,
    gender: 0,
  },
  {
    title: "힘겨워하는 연인들을 위하여",
    singer: "신해철(N.EX.T)",
    high: 55,
    low: 31,
    gender: 0,
  },
  { title: "리베카", singer: "양준일", high: 55, low: 38, gender: 0 },
  { title: "그게 뭐라고", singer: "어쿠루브", high: 55, low: 38, gender: 0 },
  { title: "내 나이가 어때서", singer: "오승근", high: 55, low: 34, gender: 0 },
  {
    title: "비와 외로움",
    singer: "유양일(바람꽃)",
    high: 55,
    low: 36,
    gender: 0,
  },
  { title: "너를 보내고", singer: "윤도현", high: 55, low: 31, gender: 0 },
  { title: "사랑 Two", singer: "윤도현", high: 55, low: 33, gender: 0 },
  { title: "니가 보고싶은 밤", singer: "윤딴딴", high: 55, low: 38, gender: 0 },
  {
    title: "그러나, 밤",
    singer: "이수(M.C The Max)",
    high: 55,
    low: 47,
    gender: 0,
  },
  {
    title: "best friend",
    singer: "이수(M.C The Max)",
    high: 55,
    low: 34,
    gender: 0,
  },
  { title: "눈물꽃", singer: "이승열", high: 55, low: 41, gender: 0 },
  { title: "비상", singer: "이승열", high: 55, low: 40, gender: 0 },
  { title: "Secret", singer: "이승열", high: 55, low: 35, gender: 0 },
  { title: "10억 광년의 신호", singer: "이승환", high: 55, low: 33, gender: 0 },
  { title: "붉은 낙타", singer: "이승환", high: 55, low: 44, gender: 0 },
  {
    title: "한 사람을 위한 마음",
    singer: "이승환 (이오공감)",
    high: 55,
    low: 38,
    gender: 0,
  },
  { title: "사자후", singer: "이현도", high: 55, low: 40, gender: 0 },
  {
    title: "노래 (The Song)",
    singer: "자이언티",
    high: 55,
    low: 43,
    gender: 0,
  },
  {
    title: "내 맘 같지 않던 그 시절",
    singer: "정순용(마이 앤트 메리)",
    high: 55,
    low: 34,
    gender: 0,
  },
  { title: "안아줘", singer: "정준일", high: 55, low: 31, gender: 0 },
  { title: "기다리는 아픔", singer: "조용필", high: 55, low: 40, gender: 0 },
  {
    title: "내 아픔 아시는 당신께",
    singer: "조하문",
    high: 55,
    low: 35,
    gender: 0,
  },
  { title: "고칠게", singer: "진원", high: 55, low: 39, gender: 0 },
  {
    title: "낯선, 새벽",
    singer: "차세정(에피톤 프로젝트)",
    high: 55,
    low: 35,
    gender: 0,
  },
  { title: "사랑합니다", singer: "팀", high: 55, low: 37, gender: 0 },
  { title: "초록빛", singer: "폴킴", high: 55, low: 31, gender: 0 },
  { title: "안녕", singer: "폴킴", high: 55, low: 31, gender: 0 },
  { title: "Viva la Vida", singer: "Coldplay", high: 55, low: 31, gender: 0 },
  { title: "Imagine", singer: "John Lennon", high: 55, low: 40, gender: 0 },
  { title: "ex i never had", singer: "LANY", high: 55, low: 34, gender: 0 },
  {
    title: "Fix you (1393)",
    singer: "Skinny Brown",
    high: 55,
    low: 36,
    gender: 0,
  },
  {
    title: "she likes spring, I prefer winter",
    singer: "slchld",
    high: 55,
    low: 37,
    gender: 0,
  },
  {
    title: "Land Of The Free",
    singer: "팀 파우스트(Home Free)",
    high: 55,
    low: 26,
    gender: 0,
  },
  { title: "오래된 노래", singer: "김동률", high: 54, low: 33, gender: 0 },
  {
    title: "이 노래가",
    singer: "김승민, Skinny Brown",
    high: 54,
    low: 34,
    gender: 0,
  },
  { title: "광화문", singer: "김장훈", high: 54, low: 37, gender: 0 },
  { title: "I Love You", singer: "김장훈", high: 54, low: 31, gender: 0 },
  { title: "우리동네 HERO", singer: "노라조", high: 54, low: 45, gender: 0 },
  { title: "바다의 왕자", singer: "박명수", high: 54, low: 40, gender: 0 },
  { title: "바보에게 바보가", singer: "박명수", high: 54, low: 35, gender: 0 },
  { title: "동경 소녀", singer: "버스커 버스커", high: 54, low: 33, gender: 0 },
  {
    title: "여수 밤바다",
    singer: "버스커 버스커",
    high: 54,
    low: 35,
    gender: 0,
  },
  { title: "너는 나의 봄이다", singer: "성시경", high: 54, low: 35, gender: 0 },
  {
    title: "아름다운 것",
    singer: "언니네 이발관",
    high: 54,
    low: 37,
    gender: 0,
  },
  { title: "가리워진 길", singer: "유재하", high: 54, low: 47, gender: 0 },
  { title: "남은 기억", singer: "윤딴딴", high: 54, low: 34, gender: 0 },
  { title: "팥빙수", singer: "윤종신", high: 54, low: 33, gender: 0 },
  { title: "날아", singer: "이승열", high: 54, low: 32, gender: 0 },
  { title: "내 맘이 안 그래", singer: "이승환", high: 54, low: 35, gender: 0 },
  { title: "다행이다", singer: "이적", high: 54, low: 35, gender: 0 },
  { title: "고향이 좋아", singer: "이찬원", high: 54, low: 35, gender: 0 },
  { title: "어려운 여자", singer: "장범준", high: 54, low: 37, gender: 0 },
  {
    title: "사랑 찾아 인생 찾아",
    singer: "조항조",
    high: 54,
    low: 35,
    gender: 0,
  },
  { title: "잘 지내자, 우리", singer: "짙은", high: 54, low: 30, gender: 0 },
  {
    title: "나는 그 사람이 아프다",
    singer: "차세정(에피톤 프로젝트)",
    high: 54,
    low: 36,
    gender: 0,
  },
  {
    title: "내가 니 편이 되어줄게",
    singer: "커피소년",
    high: 54,
    low: 31,
    gender: 0,
  },
  { title: "어떻게 지내", singer: "크러쉬", high: 54, low: 38, gender: 0 },
  { title: "진진자라", singer: "태진아", high: 54, low: 40, gender: 0 },
  { title: "모든 날, 모든 순간", singer: "폴킴", high: 54, low: 41, gender: 0 },
  {
    title: "설레이는 소년처럼",
    singer: "하현우",
    high: 54,
    low: 35,
    gender: 0,
  },
  { title: "The Answer", singer: "Josh Turner", high: 54, low: 26, gender: 0 },
  {
    title: "You're So Yesterday",
    singer: "팀 파우스트(Home Free)",
    high: 54,
    low: 26,
    gender: 0,
  },
  { title: "나랑 갈래", singer: "곽진언", high: 53, low: 30, gender: 0 },
  {
    title: "Vancouver",
    singer: "서동현(BIG Naughty)",
    high: 53,
    low: 37,
    gender: 0,
  },
  { title: "소녀", singer: "오혁", high: 53, low: 39, gender: 0 },
  { title: "내 사랑 못난이", singer: "윤종신", high: 53, low: 36, gender: 0 },
  { title: "다툼", singer: "이적", high: 53, low: 31, gender: 0 },
  { title: "도요새의 비밀", singer: "이태원", high: 53, low: 36, gender: 0 },
  { title: "봉숙이", singer: "장미여관", high: 53, low: 40, gender: 0 },
  { title: "왜 이제야 왔니", singer: "정엽", high: 53, low: 32, gender: 0 },
  {
    title: "선인장",
    singer: "차세정(에피톤 프로젝트)",
    high: 53,
    low: 35,
    gender: 0,
  },
  { title: "불을 내려주소서", singer: "천관웅", high: 53, low: 33, gender: 0 },
  { title: "My Sanity", singer: "Bad Religion", high: 53, low: 43, gender: 0 },
  {
    title: "I Dare You",
    singer: "팀 파우스트(Home Free)",
    high: 53,
    low: 24,
    gender: 0,
  },
  {
    title: "눈 (Prod. 기리보이)",
    singer: "강현준 & 김호진",
    high: 52,
    low: 36,
    gender: 0,
  },
  { title: "고스란히", singer: "곽진언", high: 52, low: 30, gender: 0 },
  { title: "응원", singer: "곽진언", high: 52, low: 28, gender: 0 },
  { title: "자랑", singer: "곽진언", high: 52, low: 31, gender: 0 },
  {
    title: "넌 할 수 있어 (Original Ver.)",
    singer: "김혁건(더 크로스)",
    high: 52,
    low: 31,
    gender: 0,
  },
  { title: "고백", singer: "델리스파이스", high: 52, low: 33, gender: 0 },
  { title: "사랑하기 때문에", singer: "유재하", high: 52, low: 37, gender: 0 },
  { title: "잘 살고 있지롱", singer: "윤딴딴", high: 52, low: 38, gender: 0 },
  { title: "그 한 사람", singer: "이승환", high: 52, low: 37, gender: 0 },
  { title: "문을 여시오", singer: "임창정", high: 52, low: 37, gender: 0 },
  { title: "꿈에", singer: "조덕배", high: 52, low: 35, gender: 0 },
  { title: "순정", singer: "차승민", high: 52, low: 35, gender: 0 },
  {
    title: "바람이 불어오는 곳",
    singer: "김광석",
    high: 51,
    low: 39,
    gender: 0,
  },
  { title: "Rollercoaster", singer: "샘 옥", high: 51, low: 36, gender: 0 },
  { title: "철부지", singer: "존 박", high: 51, low: 34, gender: 0 },
  { title: "Your Man", singer: "Josh Turner", high: 51, low: 30, gender: 0 },
  {
    title: "Would You Go With Me",
    singer: "Josh Turner",
    high: 51,
    low: 27,
    gender: 0,
  },
  { title: "함께 걷는 길", singer: "곽진언", high: 50, low: 31, gender: 0 },
  {
    title: "잊어야 한다는 마음으로",
    singer: "김광석",
    high: 50,
    low: 38,
    gender: 0,
  },
  { title: "출발", singer: "김동률", high: 50, low: 29, gender: 0 },
  {
    title: "싸구려 커피",
    singer: "장기하와 얼굴들",
    high: 50,
    low: 36,
    gender: 0,
  },
  {
    title: "Why Don't We Just Dance",
    singer: "Josh Turner",
    high: 50,
    low: 26,
    gender: 0,
  },
  { title: "별거있냐구", singer: "윤딴딴", high: 49, low: 34, gender: 0 },
  { title: "옛사랑", singer: "이문세", high: 49, low: 28, gender: 0 },
  { title: "꺼내 먹어요", singer: "자이언티", high: 49, low: 37, gender: 0 },
  {
    title: "10°0' 0° N 118°50 0° E (feat. ASH ISLAND)",
    singer: "김승민",
    high: 48,
    low: 33,
    gender: 0,
  },
  {
    title: "냉면",
    singer: "박명수(명카드라이브)",
    high: 48,
    low: 36,
    gender: 0,
  },
  {
    title: "흰눈에 쌓인 이 거리에서",
    singer: "제이윤(M.C The Max)",
    high: 48,
    low: 31,
    gender: 0,
  },
  {
    title: "Way Down South",
    singer: "Josh Turner",
    high: 48,
    low: 24,
    gender: 0,
  },
  { title: "짝사랑", singer: "고복수", high: 47, low: 27, gender: 0 },
  {
    title: "내 마음에 비친 내 모습",
    singer: "곽진언",
    high: 47,
    low: 35,
    gender: 0,
  },
  { title: "웃으리", singer: "윤딴딴", high: 47, low: 24, gender: 0 },
  { title: "강(江)", singer: "이적(패닉)", high: 45, low: 27, gender: 0 },
  {
    title: "Castle Of Glass",
    singer: "Chester Bennington(린킨 파크)",
    high: 44,
    low: 35,
    gender: 0,
  },
  {
    title: "I'm Your Man",
    singer: "레너드 코헨",
    high: 38,
    low: 23,
    gender: 0,
  },
  {
    title: "I'm Going Slightly Mad",
    singer: "프레디 머큐리(퀸)",
    high: 38,
    low: 31,
    gender: 0,
  },
  { title: "서울역", singer: "신해철(N.EX.T)", high: 30, low: 18, gender: 0 },
  {
    title: "서곡(序曲): 현세지옥(現世地獄)",
    singer: "신해철(N.EX.T)",
    high: 14,
    low: 14,
    gender: 0,
  },
  { title: "랄랄라", singer: "소야", high: 61, low: 47, gender: 1 },
  { title: "시간이 흐른 뒤", singer: "윤미래", high: 61, low: 42, gender: 1 },
  { title: "기다리다", singer: "윤하", high: 61, low: 43, gender: 1 },
  { title: "담다디", singer: "이상은", high: 61, low: 47, gender: 1 },
  { title: "인연", singer: "이선희", high: 61, low: 40, gender: 1 },
  { title: "Fabulous", singer: "태연", high: 61, low: 42, gender: 1 },
  {
    title: "더 이상 내게 아픔을 남기지 마",
    singer: "하수빈",
    high: 61,
    low: 47,
    gender: 1,
  },
  { title: "You & Me", singer: "제니", high: 61, low: 47, gender: 1 },
  { title: "Ditto", singer: "NewJeans", high: 61, low: 42, gender: 1 },
  { title: "I Love You", singer: "2NE1", high: 60, low: 46, gender: 1 },
  {
    title: "스물다섯, 스물하나",
    singer: "김윤아(자우림)",
    high: 60,
    low: 43,
    gender: 1,
  },
  { title: "24시간이 모자라", singer: "선미", high: 60, low: 48, gender: 1 },
  {
    title: "도만 나오는 노래",
    singer: "싱송은송",
    high: 60,
    low: 48,
    gender: 1,
  },
  { title: "LATATA", singer: "(여자)아이들", high: 60, low: 45, gender: 1 },
  { title: "Paradise", singer: "(여자)아이들", high: 60, low: 43, gender: 1 },
  { title: "Sweet Dream", singer: "장나라", high: 60, low: 45, gender: 1 },
  {
    title: "Blank Space",
    singer: "Talyor Swift",
    high: 60,
    low: 45,
    gender: 1,
  },
  {
    title: "I Need Your Love",
    singer: "Ellie Goulding",
    high: 60,
    low: 46,
    gender: 1,
  },
  { title: "오라버니", singer: "금잔디", high: 60, low: 43, gender: 1 },
  { title: "당돌한 여자", singer: "서주경", high: 60, low: 43, gender: 1 },
  {
    title: "우리가 헤어져야 했던 이유",
    singer: "BIBI",
    high: 60,
    low: 43,
    gender: 1,
  },
  { title: "Hard to Love ", singer: "BLACKPINK", high: 60, low: 48, gender: 1 },
  {
    title: "Let me go!",
    singer: "The Volunteers",
    high: 60,
    low: 53,
    gender: 1,
  },
  { title: "하하하송", singer: "김윤아(자우림)", high: 59, low: 42, gender: 1 },
  {
    title: "Hey Hey Hey",
    singer: "김윤아(자우림)",
    high: 59,
    low: 52,
    gender: 1,
  },
  { title: "Change", singer: "(여자)아이들", high: 59, low: 42, gender: 1 },
  {
    title: "가리워진 길",
    singer: "안지영(볼빨간사춘기)",
    high: 59,
    low: 43,
    gender: 1,
  },
  {
    title: "이별이 유일했던 날",
    singer: "안녕하신가영",
    high: 59,
    low: 42,
    gender: 1,
  },
  { title: "상록수", singer: "양희은", high: 59, low: 40, gender: 1 },
  { title: "라라라", singer: "이수영", high: 59, low: 42, gender: 1 },
  { title: "홀로", singer: "이하이", high: 59, low: 39, gender: 1 },
  {
    title: "Giant",
    singer: "우기((여자)아이들)",
    high: 59,
    low: 40,
    gender: 1,
  },
  { title: "비도 오고 그래서", singer: "헤이즈", high: 59, low: 44, gender: 1 },
  {
    title: "You Belong With Me",
    singer: "Talyor Swift",
    high: 59,
    low: 42,
    gender: 1,
  },
  { title: "STAY", singer: "블랙핑크", high: 58, low: 44, gender: 1 },
  { title: "미스코리아", singer: "이효리", high: 58, low: 41, gender: 1 },
  {
    title: "Chitty Chitty Bang Bang",
    singer: "이효리",
    high: 58,
    low: 34,
    gender: 1,
  },
  { title: "뒤늦은 후회", singer: "최진희", high: 58, low: 43, gender: 1 },
  { title: "Summer", singer: "The Volunteers", high: 58, low: 46, gender: 1 },
  { title: "Tally ", singer: "BLACKPINK", high: 57, low: 45, gender: 1 },
  {
    title: "Good Parts (when the quality is bad but I am)",
    singer: "LE SSERAFIM",
    high: 57,
    low: 43,
    gender: 1,
  },
  {
    title: "사랑 그 쓸쓸함에 대하여",
    singer: "양희은",
    high: 55,
    low: 41,
    gender: 1,
  },
  { title: "Friday", singer: "Rebecca Black", high: 54, low: 45, gender: 1 },
  {
    title: "New Plant",
    singer: "The Volunteers",
    high: 54,
    low: 45,
    gender: 1,
  },
  { title: "PINKTOP", singer: "The Volunteers", high: 54, low: 44, gender: 1 },
  { title: "bad guy", singer: "Billie Eilish", high: 50, low: 42, gender: 1 },
];
export default Songs;