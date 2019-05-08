(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{288:function(a,s,t){"use strict";t.r(s);var e=t(3),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#JVM%E5%8F%82%E6%95%B0%E7%9A%84%E4%BC%98%E5%8C%96"}},[a._v("JVM参数的优化")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#jstat%E5%91%BD%E4%BB%A4"}},[a._v("jstat命令")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E7%94%9F%E6%88%90Dump%E6%96%87%E4%BB%B6"}},[a._v("生成Dump文件")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E7%9B%91%E6%8E%A7%E5%B7%A5%E5%85%B7"}},[a._v("监控工具")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7"}},[a._v("三方工具")])])])])]),a._v(" "),t("hr"),a._v(" "),t("h1",{attrs:{id:"jvm参数的优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm参数的优化","aria-hidden":"true"}},[a._v("#")]),a._v(" JVM参数的优化")]),a._v(" "),t("h4",{attrs:{id:"因为tomcat运行在java虚拟机之上-适当调整tomcat的运行jvm参数可以提升整体性能。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#因为tomcat运行在java虚拟机之上-适当调整tomcat的运行jvm参数可以提升整体性能。","aria-hidden":"true"}},[a._v("#")]),a._v(" 因为Tomcat运行在JAVA虚拟机之上,适当调整Tomcat的运行JVM参数可以提升整体性能。")]),a._v(" "),t("h3",{attrs:{id:"常用参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用参数")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("参数")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("file.encoding")]),a._v(" "),t("td",[a._v("默认文件编码")])]),a._v(" "),t("tr",[t("td",[a._v("-Xmx1024m")]),a._v(" "),t("td",[a._v("初始堆大小为1024m")])]),a._v(" "),t("tr",[t("td",[a._v("-Xms1024m")]),a._v(" "),t("td",[a._v("最大堆大小为1024m")])]),a._v(" "),t("tr",[t("td",[a._v("-Xmn366m")]),a._v(" "),t("td",[a._v("设置年轻代大小为366m,Sun官方推荐配置为整个堆的3/8（35.7%）")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:NewSize=n")]),a._v(" "),t("td",[a._v("设置年轻代大小")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:MaxNewSize=n")]),a._v(" "),t("td",[a._v("设置最大的年轻代大小")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:PermSize=n")]),a._v(" "),t("td",[a._v("JDK1.7设置永久代大小")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:MaxPermSize=n")]),a._v(" "),t("td",[a._v("JDK1.7设置最大永久代大小")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:MetaspaceSize=n")]),a._v(" "),t("td",[a._v("JDK1.8设置元空间大小")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:MaxMetaspaceSize=n")]),a._v(" "),t("td",[a._v("JDK1.8设置最大元空间大小,最好与-XX:MetaspaceSize一致")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:NewRatio=4")]),a._v(" "),t("td",[a._v("设置年轻代（包括Eden和两个Survivor区）与终身代的比值（除去永久代）。设置为4，则年轻代与终身代所占比值为1：4，年轻代占整个堆栈的1/5")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:SurvivorRatio=n")]),a._v(" "),t("td",[a._v("年轻代中Eden区与两个Survivor区的比值。注意Survivor区有两个。如：3，表示Eden：Survivor=3：2，一个Survivor区占整个年轻代的1/5")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:MaxTenuringThreshold")]),a._v(" "),t("td",[a._v("设置垃圾最大年龄，默认为：15。如果设置为0的话，则年轻代对象不经过Survivor区，直接进入年老代。对于年老代比较多的应用，可以提高效率。如果将此值设置为一个较大值，则年轻代对象会在Survivor区进行多次复制，这样可以增加对象再年轻代的存活时间，增加在年轻代即被回收的概论。")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:+CMSScavengeBeforeRemark")]),a._v(" "),t("td",[a._v("CMS并发标记阶段与用户线程并发进行，此阶段会产生已经被标记了的对象又发生变化的情况，若打开此开关，可在一定程度上降低CMS重新标记阶段对上述“又发生变化”对象的扫描时间，当然，“清除尝试”也会消耗一些时间。注：开启此开关并不会保证在标记阶段前一定会进行清除操作")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:+UseSerialGC")]),a._v(" "),t("td",[a._v("设置串行收集器")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:+UseParallelGC")]),a._v(" "),t("td",[a._v("设置并行收集器")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:ParallelGCThreads=n")]),a._v(" "),t("td",[a._v("设置并行收集线程数")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:+UseParalledlOldGC")]),a._v(" "),t("td",[a._v("设置并行年老代收集器")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:+UseConcMarkSweepGC")]),a._v(" "),t("td",[a._v("设置并发收集器")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:MaxGCPauseMillis=n")]),a._v(" "),t("td",[a._v("设置并行收集最大暂停时间")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:GCTimeRatio=n")]),a._v(" "),t("td",[a._v("设置垃圾回收时间占程序运行时间的百分比。公式为1/(1+n)")])]),a._v(" "),t("tr",[t("td",[a._v("-XX:+UseConcMarkSweepGC")]),a._v(" "),t("td",[a._v("设置年老代为并发收集。测试中配置这个以后，-XX:NewRatio=4的配置失效了，原因不明。所以，此时年轻代大小最好用-Xmn设置。")])])])]),a._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("h4",{attrs:{id:"根据jdk8-4g内存-4核生成的jvm参数，打印了gc各个阶段的日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据jdk8-4g内存-4核生成的jvm参数，打印了gc各个阶段的日志","aria-hidden":"true"}},[a._v("#")]),a._v(" 根据JDK8-4G内存-4核生成的jvm参数，打印了gc各个阶段的日志")]),a._v(" "),t("h5",{attrs:{id:"看看ygc-的回收时间及-时间，已及old区大小，最后看fgc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#看看ygc-的回收时间及-时间，已及old区大小，最后看fgc","aria-hidden":"true"}},[a._v("#")]),a._v(" 看看ygc 的回收时间及 时间，已及old区大小，最后看FGC")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("export")]),a._v(" JAVA_OPTS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\n-server\n-Xmx2688M\n-Xms2688M\n-Xmn960m\n-XX:MaxMetaspaceSize=512M\n-XX:MetaspaceSize=512M\n-XX:+UseConcMarkSweepGC\n-XX:+UseCMSInitiatingOccupancyOnly\n-XX:CMSInitiatingOccupancyFraction=70\n-XX:+ExplicitGCInvokesConcurrentAndUnloadsClasses\n-XX:+CMSClassUnloadingEnabled\n-XX:+ParallelRefProcEnabled\n-XX:+CMSScavengeBeforeRemark\n-XX:+HeapDumpOnOutOfMemoryError\n-XX:HeapDumpPath=/home/jvm_logs/local\n-XX:ErrorFile=/home/jvm_logs/hs_err_pid%p.log\n-Xloggc:/home/jvm_logs/gc.log\n-Djava.rmi.server.hostname=192.168.1.220\n-Dcom.sun.management.jmxremote.port=18999\n-Dcom.sun.management.jmxremote.ssl=false\n-Dcom.sun.management.jmxremote.authenticate=false\n-XX:+PrintGCDetails\n-XX:+PrintGCDateStamps\n-verbose:class\n-XX:+PrintClassHistogramBeforeFullGC\n-XX:+PrintClassHistogramAfterFullGC\n-XX:+PrintCommandLineFlags\n-XX:+PrintGCApplicationConcurrentTime\n-XX:+PrintGCApplicationStoppedTime\n-XX:+PrintTenuringDistribution\n-XX:+PrintHeapAtGC\n"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br")])]),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[a._v("#")]),a._v(" windows")]),a._v(" "),t("h4",{attrs:{id:"添加java-home和jre-home"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加java-home和jre-home","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加JAVA_HOME和JRE_HOME")]),a._v(" "),t("div",{staticClass:"language-sehll line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set JAVA_HOME=C:\\Program Files\\Java\\jdk1.8.0_191\nset JRE_HOME=C:\\Program Files\\Java\\jre1.8.0_201\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h4",{attrs:{id:"修改bin-catalina-bat文件-在setlocal下面一行添加，注意代码格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改bin-catalina-bat文件-在setlocal下面一行添加，注意代码格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改bin/catalina.bat文件,在setlocal下面一行添加，注意代码格式")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/Tomcat%E4%BF%AE%E6%94%B9JVM%E5%8F%82%E6%95%B0Windows.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[a._v("#")]),a._v(" linux")]),a._v(" "),t("h4",{attrs:{id:"修改bin-catalina-sh文件-在最前面添加，注意代码格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改bin-catalina-sh文件-在最前面添加，注意代码格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改bin/catalina.sh文件,在最前面添加，注意代码格式")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/Tomcat%E4%BF%AE%E6%94%B9JVM%E5%8F%82%E6%95%B0Linux.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"jstat命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat命令","aria-hidden":"true"}},[a._v("#")]),a._v(" jstat命令")]),a._v(" "),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[a._v("jstat [ generalOption | outputOptions vmid [interval[s|ms] [count]] ]\n参数：\ngeneralOption: 一般使用-gcutil查看GC情况\nvmid: 虚拟机进程号，即当前运行的java进程号\ninterval: 间隔时间，单位为秒或毫秒\ncount: 打印次数，如果缺省则打印无数次\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 每2秒输出一次内存情况，连续输出100次")]),a._v("\njstat -gcutil "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 2000 100\njstat -gcutil "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" 2000 100\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出heap各个分区大小")]),a._v("\njstat -gc "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\njstat -gc "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取到线程的dump日志")]),a._v("\njstack -l "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" dump.log\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("h3",{attrs:{id:"观察jvm中当前所有线程的运行情况和线程当前状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察jvm中当前所有线程的运行情况和线程当前状态","aria-hidden":"true"}},[a._v("#")]),a._v(" 观察jvm中当前所有线程的运行情况和线程当前状态")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("jstack -F 进程ID\njstack -F "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将所有线程信息输入到指定文件中")]),a._v("\njstack -F 进程ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" jvm.log\njstack -F "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" jvm.log\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"other"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other","aria-hidden":"true"}},[a._v("#")]),a._v(" other")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看本机所有java进程pid")]),a._v("\njps -l\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看运行时jvm参数")]),a._v("\njinfo -flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("jvm参数"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取当前JVM默认参数")]),a._v("\njava -XX:+PrintFlagsFinal -version "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" MaxHeapSize\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 找出占用cpu高（或执行时间长）的线程pid ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v(" -H -p "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),a._v(" -H -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打印等待回收的对象信息")]),a._v("\njmap -finalizerinfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\njmap -finalizerinfo "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("pgrep java"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/myna/p/7573843.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM调优命令-jmap"),t("OutboundLink")],1)]),a._v(" "),t("h1",{attrs:{id:"生成dump文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成dump文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成Dump文件")]),a._v(" "),t("h2",{attrs:{id:"jvm在遇到oom-outofmemoryerror-时生成dump文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm在遇到oom-outofmemoryerror-时生成dump文件","aria-hidden":"true"}},[a._v("#")]),a._v(" JVM在遇到OOM(OutOfMemoryError)时生成Dump文件")]),a._v(" "),t("h3",{attrs:{id:"命令："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令：","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("jmap -dump:live,format"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("b,file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("d:\\dump\\heap.hprof "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[a._v("file：保存路径及文件名\npid：进程编号（windows通过任务管理器查看，linux通过ps aux查看）\ndump文件可以通过MemoryAnalyzer(MAT)分析查看,可以查看dump时对象数量，内存占用，线程情况等。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h1",{attrs:{id:"监控工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 监控工具")]),a._v(" "),t("h2",{attrs:{id:"jvisualvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm","aria-hidden":"true"}},[a._v("#")]),a._v(" jvisualvm")]),a._v(" "),t("h3",{attrs:{id:"在jvm启动参数中加入或在tomcat的-bin-catalina-sh文件中加入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在jvm启动参数中加入或在tomcat的-bin-catalina-sh文件中加入","aria-hidden":"true"}},[a._v("#")]),a._v(" 在jvm启动参数中加入或在Tomcat的/bin/catalina.sh文件中加入")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-Djava.rmi.server.hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("主机的IP\n-Dcom.sun.management.jmxremote.port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("18999\n-Dcom.sun.management.jmxremote.ssl"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n-Dcom.sun.management.jmxremote.authenticate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("h4",{attrs:{id:"到jdk安装目录-bin目录下，双击jvisualvm-exe文件启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#到jdk安装目录-bin目录下，双击jvisualvm-exe文件启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 到JDK安装目录/bin目录下，双击jvisualvm.exe文件启动")]),a._v(" "),t("h5",{attrs:{id:"c-program-files-java-jdk1-8-0-191-bin目录下找到jvisualvm-exe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-program-files-java-jdk1-8-0-191-bin目录下找到jvisualvm-exe","aria-hidden":"true"}},[a._v("#")]),a._v(" C:\\Program Files\\Java\\jdk1.8.0_191\\bin目录下找到jvisualvm.exe")]),a._v(" "),t("h3",{attrs:{id:"需要注意的是-当os所在分区是fat格式时，visualvm无法获取相关信息！"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要注意的是-当os所在分区是fat格式时，visualvm无法获取相关信息！","aria-hidden":"true"}},[a._v("#")]),a._v(" 需要注意的是:当OS所在分区是FAT格式时，VisualVM无法获取相关信息！")]),a._v(" "),t("p",[a._v("http://blog.51cto.com/zero01/2141942")]),a._v(" "),t("p",[a._v("https://blog.csdn.net/u010004317/article/details/82948040")]),a._v(" "),t("h3",{attrs:{id:"解决visual-gc提示”不受此jvm支持“，要监控的主机没有配置jstatd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决visual-gc提示”不受此jvm支持“，要监控的主机没有配置jstatd","aria-hidden":"true"}},[a._v("#")]),a._v(" 解决Visual GC提示”不受此JVM支持“，要监控的主机没有配置jstatd")]),a._v(" "),t("h4",{attrs:{id:"先查看jstatd服务是否可用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先查看jstatd服务是否可用","aria-hidden":"true"}},[a._v("#")]),a._v(" 先查看jstatd服务是否可用")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("jps -l 127.0.0.1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"一、在原有配置文件java-policy中添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、在原有配置文件java-policy中添加","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、在原有配置文件java.policy中添加")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre/lib/security/java.policy\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"在文件末位的-前添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在文件末位的-前添加","aria-hidden":"true"}},[a._v("#")]),a._v(" 在文件末位的 }; 前添加")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("permission java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("security"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AllPermission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"启动jstatd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动jstatd","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动jstatd")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n./jstatd -J-Djava.security.policy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("all.policy -J-Djava.rmi.server.hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("主机的IP -p 1099 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h5",{attrs:{id:"查看运行端口情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看运行端口情况","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看运行端口情况")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -anp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" jstatd\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -ntlp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lsof")]),a._v(" -i:1099\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"二、（推荐）新建一个配置文件-jstatd-all-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、（推荐）新建一个配置文件-jstatd-all-policy","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、（推荐）新建一个配置文件 jstatd.all.policy")]),a._v(" "),t("div",{staticClass:"language-sehll line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd $JAVA_HOME/bin/\nvi jstatd.all.policy\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h5",{attrs:{id:"添加以下代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加以下代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加以下代码")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("grant codebase "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"file:${java.home}/../lib/tools.jar"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   permission java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("security"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AllPermission")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h5",{attrs:{id:"给文件加上执行权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给文件加上执行权限","aria-hidden":"true"}},[a._v("#")]),a._v(" 给文件加上执行权限")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x jstatd.all.policy\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h5",{attrs:{id:"在java的bin目录下用以下命令启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在java的bin目录下用以下命令启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 在Java的bin目录下用以下命令启动")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("./jstatd -J-Djava.security.policy"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jstatd.all.policy -J-Djava.rmi.server.hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("主机的IP -p 1099 -J-Djava.rmi.server.logCalls"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language-diff line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[t("span",{pre:!0,attrs:{class:"token deleted"}},[a._v("-J-Djava.security.policy=jstatd.all.policy 文件的绝对路径；")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[a._v("-J-Djava.rmi.server.logCalls=true 打开日志,如果客户端有连接过来的请求,可以监控到,便于排错；")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[a._v("-J-Djava.rmi.server.hostname=192.168.134.128 指明本机 hostname 对应的本机地址,确保该地址可以给客户机访问。因为有的服务器 hostname 对应的 ip 不一定是外网能连上的，最好在这里直接明确指定；")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token deleted"}},[a._v("-p 3333 指定服务的端口号，默认是1099。也是可选参数。")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("https://blog.csdn.net/liupeifeng3514/article/details/78998161")]),a._v(" "),t("h2",{attrs:{id:"三方工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三方工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 三方工具")]),a._v(" "),t("h3",{attrs:{id:"无侵入式的jvm监控工具myperf4j"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无侵入式的jvm监控工具myperf4j","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/ThinkpadNC5/MyPerf4J",target:"_blank",rel:"noopener noreferrer"}},[a._v("无侵入式的jvm监控工具MyPerf4J"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"alibaba-java诊断利器arthas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alibaba-java诊断利器arthas","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://github.com/alibaba/arthas",target:"_blank",rel:"noopener noreferrer"}},[a._v("Alibaba Java诊断利器Arthas"),t("OutboundLink")],1)])])},[],!1,null,null,null);s.default=r.exports}}]);