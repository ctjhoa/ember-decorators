(function(){var e,r=window.esdocSearchIndex,t=document.querySelector(".search-box"),n=document.querySelector(".search-input"),s=document.querySelector(".search-result"),a=-1
t.addEventListener("mouseenter",function(){t.classList.add("active"),n.focus()}),n.addEventListener("keyup",function(t){var n=t.target.value.toLowerCase()
if(!n)return s.style.display="none",void(s.innerHTML="")
if(n!==e){e=n
for(var i,c={class:[],method:[],member:[],function:[],variable:[],typedef:[],external:[],file:[],test:[],testFile:[]},l=r.length,d=0;d<l;d++){var o=r[d];-1!==o[0].indexOf(n)&&c[i=o[3]].push('<li><a href="'+o[1]+'">'+o[2]+"</a></li>")}var f=""
for(i in c){var u=c[i]
u.length&&(f+='<li class="search-separator">'+i+"</li>\n"+u.join("\n"))}s.innerHTML=f,f&&(s.style.display="block"),a=-1}}),n.addEventListener("keydown",function(e){if(40===e.keyCode){var r=s.children[a]
if((t=s.children[a+1])&&t.classList.contains("search-separator")){var t=s.children[a+2]
a++}t&&(r&&r.classList.remove("selected"),a++,t.classList.add("selected"))}else if(38===e.keyCode){r=s.children[a]
if((t=s.children[a-1])&&t.classList.contains("search-separator")){t=s.children[a-2]
a--}t&&(r&&r.classList.remove("selected"),a--,t.classList.add("selected"))}else{if(13!==e.keyCode)return
if(r=s.children[a]){var n=r.querySelector("a")
n&&(location.href=n.href)}}e.preventDefault()}),s.addEventListener("mousemove",function(e){var r=s.children[a]
r&&r.classList.remove("selected")
for(var t=e.target;t&&"LI"!==t.nodeName;)t=t.parentElement
t&&(a=Array.prototype.indexOf.call(s.children,t),t.classList.add("selected"))}),document.body.addEventListener("click",function(e){a=-1,s.style.display="none",s.innerHTML=""})})()
