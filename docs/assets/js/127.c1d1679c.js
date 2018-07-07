(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{212:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"django-admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-admin","aria-hidden":"true"}},[t._v("#")]),t._v(" Django admin")]),a("h2",{attrs:{id:"admin-form-커스터마이즈하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-form-커스터마이즈하기","aria-hidden":"true"}},[t._v("#")]),t._v(" Admin Form 커스터마이즈하기")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("QuestionAdmin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("admin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fields "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'pub_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'question_text'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 필드 순서 조정")]),t._v("\n\nadmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Question"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QuestionAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 두 번째 인자로 위에 만든 model admin class를 넘긴다.")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("QuestionAdmin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("admin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fieldsets "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("None")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'fields'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'question_text'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'날짜 정보'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'fields'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'pub_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nadmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Question"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QuestionAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("이렇게 하면")]),a("ul",[a("li",[t._v("헤더 없이: question_text 필드 보여짐")]),a("li",[t._v("'날짜 정보'헤더: pub_date 필드 보여짐")])]),a("p",[t._v("처럼 admin을 커스터마이즈 할 수 있다.")]),a("h2",{attrs:{id:"related-objects-추가하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-objects-추가하기","aria-hidden":"true"}},[t._v("#")]),t._v(" Related objects 추가하기")]),a("p",[t._v("Question마다 related model인 Choices들이 있는데, admin page에선 안 보이니까 추가해준다.")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Choice"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Question\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ChoiceInline")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("admin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StackedInline"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# admin.TabularInline로 하면 더 컴팩트하게 보여준다")]),t._v("\n    model "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Choice\n    extra "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 3세트의 Choice 필드를 보여준다")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("QuestionAdmin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("admin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    fieldsets "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("None")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'fields'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'question_text'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'날짜 정보'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'fields'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'pub_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'classes'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'collapse'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    inlines "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ChoiceInline"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# Choice오브젝트가 Question 어드민 페이지에서 edit될것이다")]),t._v("\n\nadmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("site"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("register"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Question"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QuestionAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"admin-list-커스터마이즈하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin-list-커스터마이즈하기","aria-hidden":"true"}},[t._v("#")]),t._v(" Admin List 커스터마이즈하기")]),a("p",[t._v("기본적으로, 장고는 각 오브젝트의 "),a("code",[t._v("str()")]),t._v("를 보여준다.")]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("QuestionAdmin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("admin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModelAdmin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    list_display "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'question_text'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'pub_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 리스트에 이 필드들 추가")]),t._v("\n    list_filter "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'pub_date'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 리스트에 필터 추가")]),t._v("\n    search_fields "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'question_text'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 검색 필터 추가")]),t._v("\n")])])]),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[t._v("#")]),t._v(" Refer")]),a("p",[t._v("https://docs.djangoproject.com/en/1.9/intro/tutorial07/")])])}],!1,null,null,null);s.default=o.exports}}]);