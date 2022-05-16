(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{428:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java并发容器和框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java并发容器和框架"}},[t._v("#")]),t._v(" Java并发容器和框架")]),t._v(" "),a("p",[t._v("Created: March 18, 2022 10:13 PM\nTags: ConcurrentLinkedQueue, 框架")]),t._v(" "),a("p",[a("strong",[t._v("多线程下HashMap的环链")])]),t._v(" "),a("p",[a("strong",[t._v("ConcurrentHashMap")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"concurrentlinkedqueue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrentlinkedqueue"}},[t._v("#")]),t._v(" "),a("strong",[t._v("ConcurrentLinkedQueue")])]),t._v(" "),a("h3",{attrs:{id:"入队"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入队"}},[t._v("#")]),t._v(" 入队")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgs/TheArtOfJavaConcurrentProgramming/Java%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E5%92%8C%E6%A1%86%E6%9E%B61.png",alt:"队列添加元素的快照图"}})]),t._v(" "),a("p",[t._v("队列添加元素的快照图")]),t._v(" "),a("p",[t._v("上图的注意点⚠️：")]),t._v(" "),a("p",[t._v("如果tail节点的next节 点不为空，则将入队节点设置成tail节点，如果tail节点的next节点为空，则将入队节点设置成 tail的next节点，所以tail节点不总是尾节点")]),t._v(" "),a("p",[t._v("入队过程主要做两件事情：第一是定位出尾节点；第二是使用 CAS算法将入队节点设置成尾节点的next节点，如不成功则重试。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 插入指定的元素到队列的尾部.\n * 这是一个无界队列，这个方法永远不会返回false\n *\n *@return{@codetrue} (as specified by {@linkQueue#offer})\n *@throwsNullPointerException 如果入队是一个null则会抛空指针\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("offer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkNotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" newNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// p节点是最后队列最后的节点")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("casNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将newNode成功的使用CAS方式添加到队列中，入参e被封装到newNode中")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tail不是尾节点，将newNode成为tail节点")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("casTail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功或失败均无所谓")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Lost CAS race to another thread; re-read next")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("⚠️"),a("strong",[t._v("为什么更新tail节点可以失败⚠️")])]),t._v(" "),a("p",[t._v("如果强制性的需要p.casNext(null, newNode)和casTail(t, newNode)同时成功，会大大降低成功率。")]),t._v(" "),a("p",[t._v("但是如果，p.casNext(null, newNode)是成功的，表明newNode成功的加入添加到队列的尾部。")]),t._v(" "),a("p",[t._v("至于更新尾节点的操作失败了，那么表示下次循环找尾节点的次数多一些，但是会提高整体的入队效率。")]),t._v(" "),a("p",[a("strong",[t._v("⚠️offer永远返回true，不要尝试根据返回值，判断是否成功")])]),t._v(" "),a("h3",{attrs:{id:"出队"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出队"}},[t._v("#")]),t._v(" "),a("strong",[t._v("出队")])]),t._v(" "),a("p",[t._v("出队列的就是从队列里返回一个节点元素，并清空该节点对元素的引用")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgs/TheArtOfJavaConcurrentProgramming/Java%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E5%92%8C%E6%A1%86%E6%9E%B62.png",alt:"Untitled"}})]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("poll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    restartFromHead"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("casItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v(" restartFromHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n                p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("⚠️ 和入队一样，并不能确定head指向的节点是头节点。")]),t._v(" "),a("p",[t._v("如果head执行的节点是有效节点（item有效），则使用CAS的方式将头节点的引用设置成null，如果CAS成功，则直接返回头节点的元素，如果不成功，表示另外一个线程已经进行了一次出队操作更新了head节点，导致元素发生了变化，需要重新获取头节点")]),t._v(" "),a("p",[t._v("⚠️ 为什么在入队的时候，元素不能是null。")]),t._v(" "),a("p",[t._v("因为，在出队的时候会判断节点是不是有效的。如果这个节点已经出队了，那么节点的item会被置为null。根据item是不是null来判断是不是有效节点。")]),t._v(" "),a("p",[t._v("在入队的时候不控制，那么在出队的时候就无法判断当前节点是有效还是无效。")]),t._v(" "),a("p",[t._v("⚠️ 为什么出队的元素，再次出队时还会被检索到？")]),t._v(" "),a("p",[t._v("因为，更新head节点的操作和更新tail节点的操作一样， 不要求必须成功。")]),t._v(" "),a("p",[t._v("因此，head可能还在指向那些已经出队的节点。")]),t._v(" "),a("p",[t._v("好处是，每次出队不需要两个CAS同时成功，大大提高出队的效率，虽然增加来循环。")]),t._v(" "),a("p",[t._v("但是，很明显，针对volatile变量， 读操作比写操作快得多。")]),t._v(" "),a("p",[a("strong",[t._v("总结：")])]),t._v(" "),a("p",[t._v("ConcurrentLinkedQueue不保证head和tail节点，像变量名那样，强制的指向头节点和尾节点。")]),t._v(" "),a("p",[t._v("虽然这样，仍然可以通过，head和tail找到对应的头节点和尾节点。")]),t._v(" "),a("p",[t._v("另外，其设计思路是在方法上面不加锁，而是使用CAS方式更新。")]),t._v(" "),a("p",[t._v("这就导致了，即便拿到head或tail指向的节点，也无法确保这个节点就是头节点或尾节点（其他线程")]),t._v(" "),a("p",[t._v("可能会同时更新队列）。")]),t._v(" "),a("p",[t._v("所以，也就没必要强制性的要求更新后同时更新头节点和尾节点。")]),t._v(" "),a("p",[a("strong",[t._v("ConcurrentLinkedQueue通过增加volatile变量的读操作来代替写操作，使得提高队列的效率。")])]),t._v(" "),a("h2",{attrs:{id:"阻塞队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻塞队列"}},[t._v("#")]),t._v(" 阻塞队列")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgs/TheArtOfJavaConcurrentProgramming/Java%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E5%92%8C%E6%A1%86%E6%9E%B63.png",alt:"插入和移除操作的4中处理方式"}})]),t._v(" "),a("p",[t._v("插入和移除操作的4中处理方式")]),t._v(" "),a("p",[t._v("⚠️ 如果是无界阻塞队列，队列不可能会出现满的情况，所以使用put或offer方法永 远不会被阻塞，而且使用offer方法时，该方法永远返回true。")]),t._v(" "),a("p",[a("strong",[t._v("ArrayBlockingQueue")])]),t._v(" "),a("p",[t._v("ArrayBlockingQueue是一个用数组实现的有界阻塞队列。默认情况下不保证线程公平。")]),t._v(" "),a("p",[a("strong",[t._v("LinkedBlockingQueue")])]),t._v(" "),a("p",[t._v("LinkedBlockingQueue是一个用链表实现的有界阻塞队列。此队列的默认和最大长度为 "),a("code",[t._v("Integer.MAX_VALUE")])]),t._v(" "),a("p",[a("strong",[t._v("PriorityBlockingQueue")])]),t._v(" "),a("p",[t._v("PriorityBlockingQueue是一个支持优先级的无界阻塞队列。默认情况下元素采取自然顺序升序列。")]),t._v(" "),a("p",[t._v("也可以自定义类实现compareTo()方法来指定元素排序规则，或者初始化 PriorityBlockingQueue")]),t._v(" "),a("p",[t._v("时，指定构造参数Comparator来对元素进行排序。需要注意的是不能保证 同优先级元素的顺序。")]),t._v(" "),a("p",[a("strong",[t._v("DelayQueue")])]),t._v(" "),a("p",[t._v("DelayQueue是一个支持延时获取元素的无界阻塞队列。队列使用PriorityQueue来实现。队列中的元")]),t._v(" "),a("p",[t._v("素必须实现Delayed接口，在创建元素时可以指定多久才能从队列中获取当前元素。 只有在延迟期满")]),t._v(" "),a("p",[t._v("时才能从队列中提取元素。")]),t._v(" "),a("p",[a("strong",[t._v("LinkedBlockingDeque")])]),t._v(" "),a("p",[t._v("LinkedBlockingDeque是一个由链表结构组成的双向阻塞队列。所谓双向队列指的是可以从队列的两")]),t._v(" "),a("p",[t._v("端插入和移出元素。双向队列因为多了一个操作队列的入口，在多线程同时入队时，也就减少了一半")]),t._v(" "),a("p",[t._v("的竞争")]),t._v(" "),a("p",[a("strong",[t._v("阻塞队列的实现原理")])]),t._v(" "),a("p",[t._v("使用通知模式实现。所谓通知模式，就是当生产者往满的队列里添加元素时会阻塞住生产者，当消")]),t._v(" "),a("p",[t._v("费者消费了一个队列中的元素后，会通知生产者当前队列可用。")])])}),[],!1,null,null,null);s.default=e.exports}}]);