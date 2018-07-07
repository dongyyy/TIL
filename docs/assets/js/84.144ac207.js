(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{276:function(l,i,v){"use strict";v.r(i);var _=v(0),n=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var l=this,i=l.$createElement,v=l._self._c||i;return v("div",{staticClass:"content"},[v("h2",{attrs:{id:"sphinx-autodoc-타카유키-시미즈카와"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sphinx-autodoc-타카유키-시미즈카와","aria-hidden":"true"}},[l._v("#")]),l._v(" Sphinx autodoc (타카유키 시미즈카와)")]),v("ul",[v("li",[l._v("docstring\n"),v("ul",[v("li",[l._v("API DOCS")])])]),v("li",[l._v("sphinx\n"),v("ul",[v("li",[l._v("documentation generator")]),v("li",[l._v("python version is ipt")]),v("li",[l._v("import your code docstrings")]),v("li",[l._v("translation into other languages")])])])]),v("h2",{attrs:{id:"character-encoding-in-python-강대성"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#character-encoding-in-python-강대성","aria-hidden":"true"}},[l._v("#")]),l._v(" Character Encoding in Python (강대성)")]),v("ul",[v("li",[l._v("Encoding\n"),v("ul",[v("li",[l._v("전달하고자 하는 내용을 부호화")])])]),v("li",[l._v("Character Encoding\n"),v("ul",[v("li",[l._v("저장/통신 하기 위해선 2진수")])])]),v("li",[l._v("Unicode\n"),v("ul",[v("li",[l._v("전세계 문자/기호를 codepoint에 매칭")]),v("li",[l._v("한글, 타이문자 등등")]),v("li",[l._v("많이 쓰이는 이모티콘 등도 정의(똥같은거)")]),v("li",[l._v("Unicode != UTF-8")])])]),v("li",[l._v("UTF-8\n"),v("ul",[v("li",[l._v("모든 Unicode codepoint를 다룰 수 있다.")]),v("li",[l._v("Unicode를 Encoding했을 때 NULL 포함 X")]),v("li",[l._v("ASCII Text는 UTF-8 될 수 있음.")]),v("li",[l._v("일부 바이트 유실되어도 다음시작 byte알 수 있다(복구가능)")]),v("li",[l._v("Web Encoding중 84%가 사용!")])])]),v("li",[l._v("Unicode Sandwich")]),v("li",[l._v("python2\n"),v("ul",[v("li",[l._v("default: ASCII")])])]),v("li",[l._v("python3\n"),v("ul",[v("li",[l._v("default: UTF8")])])]),v("li",[l._v("Python은 파일의 인코딩을 알지 못함")]),v("li",[l._v("일본어 디코딩\n"),v("ul",[v("li",[l._v("주고 받은 인코딩을 정확히 파악!!")])])]),v("li",[l._v("인코딩 해결법\n"),v("ul",[v("li",[l._v("encode, decode이렇게 저렇게 하다 잘 되면 써요 ==> 망하는 지름길")])])]),v("li",[l._v("인코딩 파악 위한 순서\n"),v("ul",[v("li",[l._v("문서 또는 서로의 약속 확인")]),v("li",[l._v("전송받은 데이터 열어서 확인")]),v("li",[l._v("테스트(반드시!!)")])])]),v("li",[l._v("인코딩 파악에 도움되는 것\n"),v("ul",[v("li",[l._v("chardet 2.3.0")]),v("li",[l._v("n퍼센트 확률로 이 인코딩이다 하고 알려줌")])])]),v("li",[l._v("테스트\n"),v("ul",[v("li",[l._v("전체 프로그램 돌리면 오래 걸릴 수 있으니 부분을 떼어서 검사")])])]),v("li",[l._v("파일 IO를 위한 팁\n"),v("ul",[v("li",[l._v("파일을 열 때 codecs쓰면 간단해짐")]),v("li",[l._v("python3에선 내장함수에서 가능")])])]),v("li",[l._v("결론 TIP\n"),v("ul",[v("li",[v("ol",[v("li",[l._v("Unicode Sandwich")])]),v("ul",[v("li",[l._v("python에선 항상 Unicode")])])]),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[l._v("인코딩 파악하기")])]),v("ul",[v("li",[l._v("문서보고, 확인하고 테스트.")]),v("li",[l._v("주어야하는 인코딩도 명확히")])])])])])]),v("h2",{attrs:{id:"한국어-nltk-gensim-박은정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#한국어-nltk-gensim-박은정","aria-hidden":"true"}},[l._v("#")]),l._v(" 한국어 & NLTK & Gensim (박은정)")]),v("blockquote",[v("p",[l._v("단어/문서를 컴퓨터가 이해할 수 있게 표현하는 방법")])]),v("ul",[v("li",[l._v("어떻게 하면 구조가 없는 데이터인 "),v("code",[l._v("텍스트")]),l._v("의 의미를 컴퓨터가 잘 이해할 수 있을까?")]),v("li",[l._v("단어를 표현하는 가장 쉬운 방법: "),v("code",[l._v("이진 표현법")]),v("ul",[v("li",[l._v("어떤 단어를 벡터화 시킬 수 있다.")]),v("li",[l._v("근데 이진 표현법 사용 => 단어간 유사도 정의 불가\n"),v("ul",[v("li",[l._v("호텔&모텔 / 호텔&고양이 얼마나 비슷한지 전혀 모름")])])])])])]),v("ul",[v("li",[l._v("BOW(bag of words)\n"),v("ul",[v("li",[l._v("단어가 문서에 존재한다/안한다(term existance)")]),v("li",[l._v("단어가 문서에 n번 존재한다(term frequency)")]),v("li",[l._v("근데 공간의 차원이 너무 커서 문서간 유사도 지표의 효과 떨어짐")])])])]),v("ul",[v("li",[l._v("워드넷 같은 텍소노미\n"),v("ul",[v("li",[l._v("모든 용어를 포함하려 하지만, 전문 도메인 용어들은 많이 빠짐")])])]),v("li",[l._v("단어의 주변을 보면 그 단어를 안다\n"),v("ul",[v("li",[l._v("== 단어의 의미는 해당 단어의 문맥("),v("code",[l._v("context")]),l._v(")이 담고 있다.")]),v("li",[l._v("co-occurence: 두 단어가 정해진 구간 내에서 동시에 등장\n"),v("ul",[v("li",[v("ol",[v("li",[l._v("Term-document matrix : 한 문서에 같이 등장하면 비슷한 단어")])])]),v("li",[v("ol",{attrs:{start:"2"}},[v("li",[l._v("Term-term matrix : 단어가 문맥 내에 같이 등장하면 비슷한 단어")])])])])])])]),v("li",[l._v("word2vec\n"),v("ul",[v("li",[l._v("단어에 대한")])])]),v("li",[l._v("doc2vec\n"),v("ul",[v("li",[l._v("문서/문단 벡터를 마치 단어인 양 학습시키자!")]),v("li",[l._v("차원 축소")])])]),v("li",[l._v("한국어 영화 리뷰 토이데이터")])]),v("h2",{attrs:{id:"python-and-test-배권한"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#python-and-test-배권한","aria-hidden":"true"}},[l._v("#")]),l._v(" Python and Test (배권한)")]),v("ul",[v("li",[l._v("테스트 이점\n"),v("ul",[v("li",[l._v("불안감 해소")]),v("li",[l._v("테스트 통한 점진적 개선 가능")]),v("li",[l._v("손으로 하는 수고 덜어준다.")])])]),v("li",[l._v("어떻게 해야하나\n"),v("ul",[v("li",[l._v("TDD추천")]),v("li",[l._v("느리지만(직접 해보니 5배쯤 느림...ㅠㅠ) 많이 배우고 좋은 프로그램을 짤 수 있다")]),v("li",[l._v("하지만 만능은 아님.\n"),v("ul",[v("li",[l._v("리팩토링을 수반")])])]),v("li",[l._v("하지만 TDD로 개발을 진행할 힘을 얻고, 리팩토링으로 구조 개선\n"),v("ul",[v("li",[l._v("좋은 구조는 또 다른 분야라 생각 ㅎㅎ")])])])])]),v("li",[l._v("언제 리팩토링 해야하나\n"),v("ul",[v("li",[l._v("Three strikes and you refactor")]),v("li",[l._v("세 번 이상 같은 것을 하면 안댕!!!")]),v("li",[l._v("egoless programming을 해야 한다.\n"),v("ul",[v("li",[l._v("나의 코드는 의미가 없으며(!=실력없음) 목적을 위하여 언제든 지울 수 있음(==나는 계속 성장할 수 있다).")])])])])]),v("li",[l._v("다시, 어떻게 해야하나\n"),v("ul",[v("li",[l._v("pyramid\n"),v("ul",[v("li",[v("code",[l._v("unit test")]),l._v("해야한다")]),v("li",[l._v("가급적 테스트는 30초 이내에 끝나야 함(그래야 피드백을 빨리 받고 다른 일을 할 수 있음)")]),v("li",[l._v("그 여러개의 unit test를 합쳐 "),v("code",[l._v("integration test")])])])]),v("li",[v("code",[l._v("Functional test")]),v("ul",[v("li",[l._v("위에서 아래로")])])])])]),v("li",[v("code",[l._v("Obey the test goat")]),l._v(" 라는 사이트\n"),v("ul",[v("li",[l._v("클린코드를 위한 테스트 주도 개발 <<책 봐라")]),v("li",[l._v("가급적이면 unit test를 많이 짜는 습관")])])]),v("li",[l._v("테스트 비용\n"),v("ul",[v("li",[l._v("테스트도 결국 알고리즘 처럼 비용의 세계")]),v("li",[l._v("인간 확인 비용 < 테스트 짜는 비용\n"),v("ul",[v("li",[l._v("이면 굿. 반대면 인간이 확인해도 됨.")])])]),v("li",[l._v("테스트 커버리지가 100%일 필요는 없음(70%만 넘으면 될듯.)")])])]),v("li",[l._v("테스트 하기 쉬운 코드 짜려면?\n"),v("ul",[v("li",[l._v("테스트를 먼저 짠다.")]),v("li",[l._v("기능을 많이 나눔")]),v("li",[l._v("코드리뷰를 거친다")]),v("li",[l._v("의도를 잘 나타내야함")]),v("li",[l._v("가독성")])])]),v("li",[l._v("CI를 통해서 협업\n"),v("ul",[v("li",[l._v("깔끔한 환경에서 할 수 있다.")]),v("li",[l._v("테스트를 돌림")]),v("li",[l._v("형식을 검사")]),v("li",[l._v("import order등을 검사")])])]),v("li",[l._v("more...\n"),v("ul",[v("li",[l._v("py.test를 쓰세요. 이게 좋앙.")]),v("li",[l._v("다른 분들의 코드를 많이 보세요(e.g. 장고쪽에 좋은 테스트 많다)")]),v("li",[l._v("더 고민해서 TC를 짜자")])])])]),v("h2",{attrs:{id:"탐색적으로-큰-데이터-분석하기-장혜식"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#탐색적으로-큰-데이터-분석하기-장혜식","aria-hidden":"true"}},[l._v("#")]),l._v(" 탐색적으로 큰 데이터 분석하기 (장혜식)")]),v("ul",[v("li",[l._v("EHR(Electronic Health Records)\n"),v("ul",[v("li",[l._v("병원 데이터 - 엄청나게 많은 데이터 쌓임")])])]),v("li",[l._v("탐색적 데이터 분석\n"),v("ul",[v("li",[v("code",[l._v("재미있는 것")]),l._v("을 찾아야 함\n"),v("ul",[v("li",[l._v("코드 추가/수정이 매우 간편")])])]),v("li",[l._v("언제 어떤 데이터가 추가될 지 모른다.")]),v("li",[l._v("코드는 빨리 만들어서 (거의) 한 번만 쓴다.")]),v("li",[l._v("그렇다고 "),v("code",[l._v("재사용")]),l._v("이 아예 없는 것도 아니다.\n"),v("ul",[v("li",[l._v("프레임워크가 유연하고 성숙해야 함")])])]),v("li",[l._v("데이터가 작지는 않다.")])])]),v("li",[l._v("Jupiter Notebook\n"),v("ul",[v("li",[l._v("인생이 주피터를 쓰기 전과 후로 나뉜다(ㅎㅎ)\n"),v("ul",[v("li",[l._v("판다스도! 두개 꼭 써봐요")])])])])]),v("li",[l._v("Snakemake\n"),v("ul",[v("li",[l._v("make의 좋은점 / 안좋은점")]),v("li",[l._v("파이썬 코드를 거의 그대로 쓸 수 있다.")]),v("li",[l._v("의존성이 없는 작업은 병렬로 실행됨")]),v("li",[l._v("이미 있는 새 파일은 무시하고 지나감")]),v("li",[l._v("File-driven Programming\n"),v("ul",[v("li",[l._v("보일러판이 필요 없는 프로그램 내장형 병렬화 이벤트 루프")])])])])]),v("li",[l._v("텍스트 파일\n"),v("ul",[v("li",[l._v("tsv(탭으로 구분 텍스트), csv(쉼표로 구분 텍스트)")]),v("li",[l._v("큰 텍스트 파일을 (엄청쉽게) 병렬처리 하려면?\n"),v("ul",[v("li",[l._v("압축을 안 한다?")]),v("li",[l._v("파일을 쪼갠다?")]),v("li",[l._v("tabix를 쓴다!\n"),v("ul",[v("li",[l._v("bgzf\n"),v("ul",[v("li",[l._v("압축을 여러 개로 쪼개서 압축한다.")]),v("li",[l._v("앞뒤로 돌아다니면서 탐색 가능!!")]),v("li",[l._v("100% 하위호환")])])]),v("li",[l._v("한계점\n"),v("ul",[v("li",[l._v("초기 인덱싱이 병렬화 X. (오래걸림)")]),v("li",[l._v("반드시 2레벨 인덱스로 정렬되어 있어야 함")]),v("li",[l._v("레벨 1 인덱스는 병렬 안됨(맞나?)")])])])])])])])])]),v("li",[l._v("Julia\n"),v("ul",[v("li",[l._v("파이썬과 친한 언어 ㅎㅎ")])])])]),v("h2",{attrs:{id:"약속-하재승"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#약속-하재승","aria-hidden":"true"}},[l._v("#")]),l._v(" 약속 (하재승)")]),v("ul",[v("li",[l._v("ㅎㅎㅎ좋으당!")]),v("li",[l._v("프로그래밍은 다 거짓말")])]),v("h2",{attrs:{id:"도도와-파이썬-김재석"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도도와-파이썬-김재석","aria-hidden":"true"}},[l._v("#")]),l._v(" 도도와 파이썬 (김재석)")]),v("ul",[v("li",[l._v("스포카가 도도포인트를 만들며 있었던 기술적 의사결정 공유")]),v("li",[l._v("Do things that don't scale\n"),v("ul",[v("li",[l._v("다만 첫번째 고객의 취향에 완전히 맞춤!!")])])]),v("li",[l._v("백오피스를 가볍게 두고 고객의 니즈에 더 노력을 쏟음\n"),v("ul",[v("li",[l._v("더 팔릴만한 것 만들기!")]),v("li",[l._v("이유: 스포카에서의 경험")]),v("li",[l._v("장점: 장기적으로 효율 좋음. 단, 성공했을 때!!")]),v("li",[l._v("분석은 엑셀로 << 인턴도 데이터 분석 가능")]),v("li",[l._v("디플로이는 heroku로(디플로이 시스템을 만들고 유지보수 하는 것도 부담)\n"),v("ul",[v("li",[l._v("다만 버지니아에서 날아오는데 레이턴시 이슈 ->AWS 도쿄로 옮김")])])])])]),v("li",[l._v("빠르고, 점진적으로")]),v("li",[l._v("나쁜 선택\n"),v("ul",[v("li",[l._v("매장이 1000개 가까이 늘어나니 서비스에 대한 요구사항 늘어남")]),v("li",[l._v("기존 서비스가 커져서 추가가 고통스러웠음(넣으면 서버 터짐;😉")]),v("li",[l._v("종종 '그 때 제대로 해놨면 지금 이고생 안하는데 ㅠㅠ'후회")]),v("li",[l._v("하지만 그건 이미 그 코드를 계속 만질 수 있는 미래 시점에서의 평가일 뿐")])])]),v("li",[l._v("파이썬은 스타트업에게 좋은가?\n"),v("ul",[v("li",[l._v("Duct tape")]),v("li",[l._v("스타텁은 단지 '작은'회사가 아님.")]),v("li",[l._v("스타텁의 가장 중요한 키워드는 '고속성장'")]),v("li",[l._v("시어머니봇\n"),v("ul",[v("li",[l._v("코드리뷰를 사람끼리 하면 사실 맘이 상할 때가 있다")]),v("li",[l._v("봇은 잔인하게 엄격함")]),v("li",[l._v("봇한테 화가 날 순 있어도 미워하진 않더라")]),v("li",[l._v("오픈소스로 풀었어요~")])])])])])]),v("h2",{attrs:{id:"r이-판치는-세상에-python데이터-분석가로-사는-법-하용호"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#r이-판치는-세상에-python데이터-분석가로-사는-법-하용호","aria-hidden":"true"}},[l._v("#")]),l._v(" R이 판치는 세상에 Python데이터 분석가로 사는 법 (하용호)")]),v("ul",[v("li",[l._v("10분만에 듣는 머신러닝\n"),v("ul",[v("li",[l._v("작대기의 자유도에 따라 성능이 결정")]),v("li",[l._v("회귀")]),v("li",[l._v("XOR Problem")]),v("li",[l._v("Decision Tree")]),v("li",[l._v("Support Vector Machine")]),v("li",[l._v("Random Forest\n"),v("ul",[v("li",[l._v("놀랍게도 성능이 좋음")])])])])]),v("li",[l._v("빅데이터\n"),v("ul",[v("li",[l._v("말 오글거려")])])]),v("li",[l._v("GGPLOT2\n"),v("ul",[v("li",[l._v("애증. 안예뻐")])])]),v("li",[l._v("seaborn\n"),v("ul",[v("li",[l._v("그림 그릴 때 좀더 예쁨")])])]),v("li",[l._v("파이썬 인터렉티브 노트북\n"),v("ul",[v("li",[l._v("내가 했던 과정이 노트북처럼 주르륵 나온다.")]),v("li",[l._v("이런 방식이 아니고, 결과만 pdf로 주거나 하면 협업시 데이터를 조금만 고치거나 할 때 힘듦.")]),v("li",[l._v("그게 아니고, 이렇게 만든 과정을 팀 협업할 때 보면 매우 도움.")])])]),v("li",[l._v("mrjob\n"),v("ul",[v("li",[l._v("느리지만 사실 우리가 개발하는 속도가 더 느림")]),v("li",[l._v("사실 코드를 한번 짜고 한번만 쓸 때가 많다.")])])]),v("li",[l._v("luigi\n"),v("ul",[v("li",[l._v("snakemake랑 비슷(근데 이게 더 좋아 by 용호)")])])]),v("li",[l._v("Spark\n"),v("ul",[v("li",[l._v("하둡보다 선호!(by 용호)")])])])]),v("h2",{attrs:{id:"django-매생이"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#django-매생이","aria-hidden":"true"}},[l._v("#")]),l._v(" django (매생이)")]),v("ul",[v("li",[l._v("스타트업의 마감시간 == 남은 돈")])])])}],!1,null,null,null);i.default=n.exports}}]);