(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{272:function(n,t,a){"use strict";a.r(t);var e=a(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[a("ul",[a("li",[n._v("admin lte template: https://almsaeedstudio.com/")])]),a("h2",{attrs:{id:"화면-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#화면-구성","aria-hidden":"true"}},[n._v("#")]),n._v(" 화면 구성")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("물품 목록\n    -이름\n    -설명\n    -전체 창고 + 재고 수량\n\n    +물품 등록하기\n    +(물품 이동하기)\n    +발송장 만들기\n\n물품\n    -이름\n    -설명\n    -GTIN\n    -UPCA\n    -포함 물품\n        -이름\n        -설명\n    -창고\n        -이름\n        -재고 수량\n    -재고 변동 이력\n        -창고\n        -수량\n        -주문 종류(kind)\n\n    +재고 추가하기\n    +물품 이동하기\n    +발송장 만들기\n\n창고 목록\n    -이름\n    -설명\n\n    +창고 등록하기\n    +발송장 만들기\n\n창고\n    -이름\n    -설명\n    -발송장 목록 - 출발 / 도착 / 출발 예정 / 도착 예정\n    -재고 목록\n\n    +창고 수정하기\n    +발송장 만들기\n\n발송장 목록\n    -source\n    -dest\n    -발송 상태\n    -발송장 상태 이력 + 변경자 이름\n\n    +발송장 만들기\n\n발송장\n    -생성 시각\n    -수정 시각\n    -source\n    -dest\n    -발송 상태\n    -발송장 상태 이력 + 변경자 이름\n    -적재 내역(StockEntry) 목록\n        -물품\n\n    +발송장 만들기\n    +발송장 삭제하기\n    +발송장 수정하기\n        +물품 내역(StockEntry) 추가하기\n        +물품 내역 삭제하기\n    +발송장 복사하기\n")])])]),a("p",[n._v("크게는 화면이 여섯 개로 나뉜다고 보시면 됩니다.\n물품 목록과 물품 detail,\n창고 목록과 창고 detail,\n발송장 목록과 발송장 detail 이예요")]),a("p",[a("code",[n._v("-")]),n._v("로 표시된 것은 해당 페이지의 내용이 되겠고\n"),a("code",[n._v("+")]),n._v("로 표시한 것은 해당 페이지의 기능? 버튼?이라고 볼 수 있겠습니다.")]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[n._v("#")]),n._v(" api")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("창고 두 개와 수량을 받는 API\nPOST: inventory_a, inventory_b, quantity\n\nstock/(id)/afterservice/\n    inventory_a - 물건이 반환될 창고\n    inventory_b - 물건이 나갈 창고\nstock/(id)/transfer/\n    inventory_a - 물건이 들어올 창고\n    inventory_b - 물건이 나갈 창고\n\n\n창고 하나와 수량을 받는 API\nPOST: inventory, quantity\n\nstock/(id)/promote/\nstock/(id)/refund/\nstock/(id)/discard/\nstock/(id)/store/\nstock/(id)/bind/\nstock/(id)/unbind/\n")])])]),a("h2",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth","aria-hidden":"true"}},[n._v("#")]),n._v(" Auth")]),a("p",[n._v("with.pinkfong.com처럼 권한 추가.\n로그인 페이지만 있으면 된다.")]),a("h2",{attrs:{id:"django-rest-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-rest-framework","aria-hidden":"true"}},[n._v("#")]),n._v(" django REST framework")]),a("ul",[a("li",[n._v("Getting Started with Django Rest Framework and AngularJS: http://blog.kevinastone.com/getting-started-with-django-rest-framework-and-angularjs.html")]),a("li",[n._v("http://blog.kevinastone.com/getting-started-with-django-rest-framework-and-angularjs.html")])]),a("h2",{attrs:{id:"api-수정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-수정","aria-hidden":"true"}},[n._v("#")]),n._v(" api 수정")]),a("ul",[a("li",[n._v("api/stock\n"),a("ul",[a("li",[n._v("stockId 추가")])])]),a("li",[n._v("api/stock/stockId\n"),a("ul",[a("li",[n._v("invoice의 dest, source를 id값 말고 이름으로 출력")]),a("li",[n._v("stock_entry.kind가 뭐죵?")]),a("li",[n._v("invoice고유아이디를 앞에 넣는게 좋을까")])])]),a("li",[n._v("api/inventory\n"),a("ul",[a("li",[n._v("inventoryId추가")])])])])])}],!1,null,null,null);t.default=i.exports}}]);