import{d as m,u as f,l as h,a as e,o,e as c,F as g,j as k,c as p,w as M,G as b,H as w,g as x,v as B,n as u,E as I,m as N}from"./index-25f977bd.js";const s={branch:"icon-park-twotone:branch-one",copy:"ep:promotion",approve:"ep:stamp",add:"ep:circle-plus-filled"},a=()=>({icon:{icon:s.approve,color:"var(--approve--color)"},title:"审批人",type:1}),_=()=>({icon:{icon:s.copy,color:"var(--copy--color)"},title:"抄送人",type:2}),d=()=>({icon:{icon:s.branch,color:"var(--copy--color)"},title:"条件分支",type:3}),P=t=>{switch(t){case 1:return a();case 2:return _();case 3:return d();default:return a()}},j=t=>{switch(t){case 1:return{theme:"approve"};case 2:return{theme:"copy"};case 3:return{theme:"branch"};default:return{theme:"initiate"}}},E=[a(),_(),d()],S=m({name:"SelectMenu"}),A=m({...S,emits:["clickMenu"],setup(t,{emit:v}){const r=f("select-menu"),{show:l}=defineModel(),y=i=>{v("clickMenu",i),l.value=!1};return(i,V)=>{const C=h("Icon");return e(l)?(o(),c("div",{key:0,class:u([e(r).b()])},[(o(!0),c(g,null,k(e(E),n=>(o(),c("div",{key:n.title},[p(e(I),{text:"",class:u([e(r).e("button")]),onClick:z=>y(n)},{default:M(()=>[p(C,b(w(n.icon)),null,16),x("span",null,B(n.title),1)]),_:2},1032,["class","onClick"])]))),128))],2)):N("",!0)}}});export{j as C,s as I,A as _,P as g};
