import{_ as u,r as _,o as b,c as h,b as e,t as p,a as t,w as n,F as f,d as i}from"./index-0604abe1.js";const l="/testpage/assets/service-youtube-bg-5d2ef119.jpg",v="/testpage/assets/service-blog-bg-8cf5ba8a.jpg",d="/testpage/assets/service-livecommerce-bg-35aada88.jpg";const $={watch:{$route(){this.modifyName()}},mounted(){this.modifyName()},data(){return{serviceName:"OOTW 유튜브 마케팅",imageUrl:[l,v,d]}},beforeRouteLeave(s,a,c){this.$ScrollTrigger.getAll().forEach(r=>r.kill()),c()},methods:{modifyName(){let s=document.querySelectorAll(".service_navigation_element");if(s)switch(s.forEach(a=>{this.$gsap.set(a,{background:"#7fadeb"})}),this.$route.name){case"ootwyoutube":this.serviceName="OOTW 유튜브 마케팅",this.$gsap.to(s[0],{background:"#1d64c2",duration:.1}),this.$gsap.to(".service_banner_box",{background:`url(${l}) center/cover`,duration:.1});break;case"ootwblog":this.serviceName="OOTW 블로그 마케팅",this.$gsap.to(s[1],{background:"#1d64c2",duration:.1}),this.$gsap.to(".service_banner_box",{background:`url(${v}) center/cover`,duration:.1});break;case"livecommerce":this.serviceName="라이브 커머스 QQQ",this.$gsap.to(s[2],{background:"#1d64c2",duration:.1}),this.$gsap.to(".service_banner_box",{background:`url(${d}) center/cover`,duration:.1});break}}}},k={class:"service_banner_box"},w=e("div",{class:"service_banner_dimmed"},null,-1),N={class:"service_banner_text_wrap"},x=e("p",{class:"gnb_name"},"서비스소개",-1),y={class:"service_name"},O={class:"service_navigation"},T={class:"service_navigation_wrap"},Q={class:"service_navigation_element"},S={class:"service_navigation_element"},W={class:"service_navigation_element"},j=e("li",{class:"service_navigation_element"},[e("a",{class:"service_navigation_name"},"홈페이지 제작")],-1);function B(s,a,c,r,m,E){const o=_("router-link"),g=_("router-view");return b(),h(f,null,[e("div",k,[w,e("div",N,[x,e("p",y,p(m.serviceName),1)]),e("div",O,[e("ul",T,[e("li",Q,[t(o,{to:{name:"ootwyoutube"},class:"service_navigation_name"},{default:n(()=>[i("OOTW 유튜브 마케팅")]),_:1})]),e("li",S,[t(o,{to:{name:"ootwblog"},class:"service_navigation_name"},{default:n(()=>[i("OOTW 블로그 마케팅")]),_:1})]),e("li",W,[t(o,{to:{name:"livecommerce"},class:"service_navigation_name"},{default:n(()=>[i("라이브 커머스 QQQ")]),_:1})]),j])])]),t(g)],64)}const V=u($,[["render",B]]);export{V as default};
