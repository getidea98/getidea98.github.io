(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{431:function(t,r,a){"use strict";a.r(r);var n=a(34),e=Object(n.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"并发编程模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发编程模型"}},[t._v("#")]),t._v(" 并发编程模型")]),t._v(" "),a("p",[t._v("内存通信")]),t._v(" "),a("p",[t._v("共享内存")]),t._v(" "),a("p",[t._v("消息传递")]),t._v(" "),a("p",[t._v("内存同步")]),t._v(" "),a("p",[a("strong",[t._v("Java内存模型的抽象结构")])]),t._v(" "),a("aside",[t._v("\n💡 JMM定义了线程和主内存之间的抽象关系：线程之间的共享变量存储在主内存（Main Memory）中，每个线程都有一个私有的本地内存（Local Memory），本地内存中存储了该线程以读/写共享变量的副本。本地内存是JMM的 一个抽象概念，并不真实存在。它涵盖了缓存、写缓冲区、寄存器以及其他的硬件和编译器优化\n")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgs/TheArtOfJavaConcurrentProgramming/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B1.png",alt:"Untitled"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("线程之间通信举例")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgs/TheArtOfJavaConcurrentProgramming/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E6%A8%A1%E5%9E%8B2.png",alt:"Untitled"}})]),t._v(" "),a("p",[t._v("假设初始时，这3个 内存中的x值都为0。线程A在执行时，把更新后的x值（假设值为1）临时存放在自己的本地内存 A中。当线程A和线程B需要通信时，线程A首先会把自己本地内存中修改后的x值刷新到主内 存中，此时主内存中的x值变为了1。随后，线程B到主内存中去读取线程A更新后的x值，此时 线程B的本地内存的x值也变为了1。 从整体来看，这两个步骤实质上是线程A在向线程B发送消息，而且这个通信过程必须要 经过主内存。JMM通过控制主内存与每个线程的本地内存之间的交互，来为Java程序员提供 内存可见性保证。")])])}),[],!1,null,null,null);r.default=e.exports}}]);