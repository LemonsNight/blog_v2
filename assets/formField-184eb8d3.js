import{cm as h,cn as w,a as n,co as y,cp as b,r as c,c as r,E as o,b as s}from"./index-9c6dccb9.js";import{E as d}from"./input-296e721c.js";import{u as t}from"./index-4c4e7da1.js";const{setPermissions:g}=h(),{getMenuList:v}=w(),x=(e,a)=>new Promise(m=>{var i;(i=n(e))==null||i.validate(async p=>{p&&y(a).then(async f=>{g(f),await v(),await b.push("/")}).finally(()=>{m(!0)})})}),u=c(!1),l=c(!1),V=function(){return[{label:"账号",prop:"username",defaultValue:"admin",render:({formData:e})=>r(d,{clearable:!0,modelValue:e.username,"onUpdate:modelValue":a=>e.username=a,showWordLimit:!0,placeholder:"请输入账号",maxlength:11},null)},{label:"密码",prop:"password",defaultValue:"123456",render:({formData:e})=>r(d,{showPassword:!0,clearable:!0,maxlength:16,type:"password",modelValue:e.password,"onUpdate:modelValue":a=>e.password=a,placeholder:"请输入密码",onFocus:()=>{l.value=!n(l)},onBlur:()=>{l.value=!n(l)}},null)},{labelWidth:"50px",render:({ElFormRef:e,formData:a})=>r("aside",{class:"w-full flex"},[r("div",{class:"flex-1"},[r(o,{loading:u.value,type:"primary",icon:t({icon:"material-symbols:login"}),onClick:()=>{u.value=!0,x(e,a).finally(()=>{u.value=!1})}},{default:()=>[s("登录")]}),r(o,{icon:t({icon:"mdi:register-outline"})},{default:()=>[s("注册")]})]),r(o,{icon:t({icon:"material-symbols:devices-other"}),text:!0,type:"primary"},{default:()=>[s("第三方登录")]})])}].map(e=>({...e,required:!0}))},L=function(){return{FORM_FIELD:V,isFocusPassword:l}};export{L as fromField};
