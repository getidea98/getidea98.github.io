(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{423:function(a,t,e){"use strict";e.r(t);var s=e(34),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"java中的线程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java中的线程池"}},[a._v("#")]),a._v(" Java中的线程池")]),a._v(" "),e("p",[a._v("Created: March 20, 2022 4:34 PM\nTags: ThreadPoolExecutor, 框架")]),a._v(" "),e("p",[e("img",{attrs:{src:"/imgs/TheArtOfJavaConcurrentProgramming/Java%E4%B8%AD%E7%9A%84%E7%BA%BF%E7%A8%8B%E6%B1%A0.png",alt:"线程池的主要处理流程"}})]),a._v(" "),e("p",[a._v("线程池的主要处理流程")]),a._v(" "),e("p",[a._v("简单介绍"),e("code",[a._v("ThreadPoolExecutor.execute()")])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("如果当前运行的线程少于corePoolSize，则创建新线程来执行任务（注意，执行这一步骤需要获取全局锁）。")])]),a._v(" "),e("li",[e("p",[a._v("如果运行的线程等于或多于corePoolSize，则将任务加入BlockingQueue。")])]),a._v(" "),e("li",[e("p",[a._v("如果无法将任务加入BlockingQueue（队列已满），则创建新的线程来处理任务（注意，执")]),a._v(" "),e("p",[a._v("行这一步骤需要获取全局锁）。")])]),a._v(" "),e("li",[e("p",[a._v("如果创建新线程将使当前运行的线程超出maximumPoolSize，任务将被拒绝，并调用")]),a._v(" "),e("p",[a._v("RejectedExecutionHandler.rejectedExecution()方法。")])])]),a._v(" "),e("h2",{attrs:{id:"线程池的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池的创建"}},[a._v("#")]),a._v(" "),e("strong",[a._v("线程池的创建")])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadPoolExecutor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" maximumPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                          "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" keepAliveTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                          "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TimeUnit")]),a._v(" unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                          "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BlockingQueue")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" workQueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                          "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadFactory")]),a._v(" threadFactory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                          "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RejectedExecutionHandler")]),a._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("⚠️ 任务队列如果是无限队列，那么非核心的线程永远不会被创建，使用这个队列也是非常危险的")])])}),[],!1,null,null,null);t.default=n.exports}}]);