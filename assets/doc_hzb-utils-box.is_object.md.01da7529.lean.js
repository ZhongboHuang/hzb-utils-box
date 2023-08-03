import{_ as s,v as a,b as o,R as t}from"./chunks/framework.38c70500.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/hzb-utils-box.is_object.md","filePath":"doc/hzb-utils-box.is_object.md"}'),n={name:"doc/hzb-utils-box.is_object.md"},e=t('<p><a href="./">Home</a> &gt; <a href="./hzb-utils-box.html">hzb-utils-box</a> &gt; <a href="./hzb-utils-box.is_object.html">is_object</a></p><h2 id="is-object-function" tabindex="-1">is_object() function <a class="header-anchor" href="#is-object-function" aria-label="Permalink to &quot;is\\_object() function&quot;">​</a></h2><p>该函数检查给定值是否是对象而不是数组。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is_object</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">o</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">o</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Exclude</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;&gt;;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">is_object</span><span style="color:#000000;">(</span><span style="color:#001080;">o</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#001080;">o</span><span style="color:#000000;"> </span><span style="color:#0000FF;">is</span><span style="color:#000000;"> </span><span style="color:#267F99;">Exclude</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">object</span><span style="color:#000000;">, </span><span style="color:#267F99;">Array</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">any</span><span style="color:#000000;">&gt;&gt;;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>o</td><td>any</td><td>参数“o”的类型为“any”，这意味着它可以是任何数据类型。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>o is Exclude&lt;object, Array&lt;any&gt;&gt;</p><p>一个布尔值。</p>',10),l=[e];function p(r,c,i,y,d,h){return a(),o("div",null,l)}const u=s(n,[["render",p]]);export{E as __pageData,u as default};