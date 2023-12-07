"use strict";(self["webpackChunkerecruitment"]=self["webpackChunkerecruitment"]||[]).push([[623],{5623:function(e,l,a){a.r(l),a.d(l,{default:function(){return Z}});var t=a(3396),o=a(7139);const s=e=>((0,t.dD)("data-v-63c0c298"),e=e(),(0,t.Cn)(),e),n=s((()=>(0,t._)("section",{class:"page-title"},[(0,t._)("div",{class:"auto-container"},[(0,t._)("div",{class:"title-outer"},[(0,t._)("h1",null,"Find Jobs")]),(0,t._)("div")])],-1))),i={class:"ls-section"},r={class:"auto-container"},u=s((()=>(0,t._)("i",{"data-feather":"home"},null,-1))),d=s((()=>(0,t._)("span",null,"Main Menu Dashboard",-1))),c=s((()=>(0,t._)("div",{class:"filters-backdrop"},null,-1))),m={class:"row"},_={class:"filters-column col-lg-4 col-md-12 col-sm-12"},y={class:"inner-column"},p={class:"filters-outer"},g=s((()=>(0,t._)("button",{type:"button",class:"theme-btn close-filters"},"X",-1))),b=s((()=>(0,t._)("h4",null,"Search by Keywords",-1))),h=s((()=>(0,t._)("h4",null,"Job Industry",-1))),f=s((()=>(0,t._)("h4",null,"Job Type",-1))),w=s((()=>(0,t._)("h4",null,"Career Level",-1))),v=s((()=>(0,t._)("h4",null,"Experience",-1))),k=s((()=>(0,t._)("h4",null,"Location",-1))),W={class:"content-column col-lg-8 col-md-12 col-sm-12"},j={class:"ls-outer"},U={class:"inner-box"},C={class:"content"},J={class:"company-logo"},V=["src"],z={class:"job-info"},x=s((()=>(0,t._)("i",{class:"fa fa-briefcase text-purple"},null,-1))),S=s((()=>(0,t._)("i",{class:"fa fa-map-marker text-info"},null,-1))),D=s((()=>(0,t._)("i",{class:"fa fa-clock text-danger"},null,-1))),$=s((()=>(0,t._)("i",{class:"fa fa-graduation-cap text-warning"},null,-1))),K={class:"job-other-info"},H=s((()=>(0,t._)("li",{class:"privacy"},"Apply Now",-1))),Y={class:"time"},I={class:"required"},M=s((()=>(0,t._)("button",{class:"bookmark-btn"},[(0,t._)("i",{class:"fa fa-bookmark text-info"})],-1)));function E(e,l,a,s,E,q){const F=(0,t.up)("router-link"),L=(0,t.up)("el-input"),N=(0,t.up)("el-option"),Z=(0,t.up)("el-select"),A=(0,t.up)("el-button"),O=(0,t.up)("el-form-item"),P=(0,t.up)("el-col"),R=(0,t.up)("el-row"),T=(0,t.up)("el-alert"),X=(0,t.up)("el-pagination");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("section",i,[(0,t._)("div",r,[(0,t._)("li",null,[(0,t.Wm)(F,{to:"/dashboard"},{default:(0,t.w5)((()=>[u,d])),_:1})]),c,(0,t._)("div",m,[(0,t._)("div",_,[(0,t._)("div",y,[(0,t._)("div",p,[g,b,(0,t.Wm)(L,{modelValue:E.search,"onUpdate:modelValue":l[0]||(l[0]=e=>E.search=e),onKeyup:l[1]||(l[1]=e=>q.getJobs()),placeholder:"Job title or keywords",style:{"margin-bottom":"20px"}},null,8,["modelValue"]),h,(0,t.Wm)(Z,{modelValue:E.job_title.industry,"onUpdate:modelValue":l[2]||(l[2]=e=>E.job_title.industry=e),onChange:l[3]||(l[3]=e=>q.getJobs()),placeholder:"Select job industry",filterable:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.$store.state.dictionary.industries,(e=>((0,t.wg)(),(0,t.j4)(N,{value:e.industry,key:e.industry,label:e.industry},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),f,(0,t.Wm)(Z,{modelValue:E.job_title.employment_type,"onUpdate:modelValue":l[4]||(l[4]=e=>E.job_title.employment_type=e),onChange:l[5]||(l[5]=e=>q.getJobs())},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.$store.state.company.employment_types,(e=>((0,t.wg)(),(0,t.j4)(N,{key:e,label:e.employment_type,value:e.employment_type},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),w,(0,t.Wm)(Z,{modelValue:E.job_title.career_level,"onUpdate:modelValue":l[6]||(l[6]=e=>E.job_title.career_level=e),onChange:l[7]||(l[7]=e=>q.getJobs()),filterable:"",placeholder:"Select career level"},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(["Entry-level","Intermediate","Mid-level","Senior or executive-level"],(e=>(0,t.Wm)(N,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),v,(0,t.Wm)(Z,{modelValue:E.job_title.experience,"onUpdate:modelValue":l[8]||(l[8]=e=>E.job_title.experience=e),onChange:l[9]||(l[9]=e=>q.getJobs()),placeholder:"Select required years of experience",filterable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(N,{value:"0"},{default:(0,t.w5)((()=>[(0,t.Uk)("No Experience/Less than 1 year")])),_:1}),(0,t.Wm)(N,{value:"1 year"},{default:(0,t.w5)((()=>[(0,t.Uk)("1 year")])),_:1}),(0,t.Wm)(N,{value:"2 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("2 years")])),_:1}),(0,t.Wm)(N,{value:"3 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("3 years")])),_:1}),(0,t.Wm)(N,{value:"4 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("4 years")])),_:1}),(0,t.Wm)(N,{value:"5 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("5 years")])),_:1}),(0,t.Wm)(N,{value:"6 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("6 years")])),_:1}),(0,t.Wm)(N,{value:"7 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("7 years")])),_:1}),(0,t.Wm)(N,{value:"8 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("8 years")])),_:1}),(0,t.Wm)(N,{value:"9 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("9 years")])),_:1}),(0,t.Wm)(N,{value:"10 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("10 years")])),_:1}),(0,t.Wm)(N,{value:"11 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("11 years")])),_:1}),(0,t.Wm)(N,{value:"12 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("12 years")])),_:1}),(0,t.Wm)(N,{value:"13 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("13 years")])),_:1}),(0,t.Wm)(N,{value:"14 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("14 years")])),_:1}),(0,t.Wm)(N,{value:"15 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("15 years")])),_:1}),(0,t.Wm)(N,{value:"16 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("16 years")])),_:1}),(0,t.Wm)(N,{value:"17 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("17 years")])),_:1}),(0,t.Wm)(N,{value:"18 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("18 years")])),_:1}),(0,t.Wm)(N,{value:"19 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("19 years")])),_:1}),(0,t.Wm)(N,{value:"20 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("20 years")])),_:1}),(0,t.Wm)(N,{value:"More than 20 years"},{default:(0,t.w5)((()=>[(0,t.Uk)("More than 20 years")])),_:1})])),_:1},8,["modelValue"]),k,(0,t.Wm)(Z,{modelValue:E.job_title.country,"onUpdate:modelValue":l[10]||(l[10]=e=>E.job_title.country=e),onChange:l[11]||(l[11]=e=>q.getJobs()),filterable:"",placeholder:"Select country"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.$store.state.dictionary.countries,(e=>((0,t.wg)(),(0,t.j4)(N,{key:e,label:e.name,value:e.name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(P,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{label:""},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{type:"primary",plain:"",onClick:l[12]||(l[12]=e=>q.getJobs()),loading:E.loading},{default:(0,t.w5)((()=>[(0,t.Uk)("Filter")])),_:1},8,["loading"])])),_:1})])),_:1}),(0,t.Wm)(P,{span:6},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{label:""},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{type:"primary",plain:"",onClick:l[13]||(l[13]=e=>E.job_title={}),loading:E.loading},{default:(0,t.w5)((()=>[(0,t.Uk)("Reset")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])])]),(0,t._)("div",W,[(0,t._)("div",j,[E.jobs&&E.jobs.length>0?((0,t.wg)(!0),(0,t.iD)(t.HY,{key:0},(0,t.Ko)(E.jobs,(l=>((0,t.wg)(),(0,t.iD)("div",{class:"job-block",key:l.id},[(0,t._)("div",U,[(0,t._)("div",C,[(0,t._)("span",J,[(0,t._)("img",{src:l.company_logo,alt:""},null,8,V)]),(0,t._)("h4",null,[(0,t.Wm)(F,{to:"#",onClick:e=>q.jobDetails(l)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.job_title),1)])),_:2},1032,["onClick"])]),(0,t._)("ul",z,[(0,t._)("li",null,[x,(0,t.Uk)(" "+(0,o.zw)(l.industry),1)]),(0,t._)("li",null,[S,(0,t.Uk)(" "+(0,o.zw)(l.location+", "+l.country),1)]),(0,t._)("li",null,[D,(0,t.Uk)(" "+(0,o.zw)(e.$helpers.dateFormat(l.application_deadline)),1)]),(0,t._)("li",null,[$,(0,t.Uk)(" "+(0,o.zw)(l.experience),1)])]),(0,t._)("ul",K,[(0,t.Wm)(F,{to:"/login"},{default:(0,t.w5)((()=>[H])),_:1}),(0,t._)("li",Y,(0,o.zw)(l.job_type),1),(0,t._)("li",I,(0,o.zw)(l.career_level),1)]),M])])])))),128)):((0,t.wg)(),(0,t.j4)(T,{key:1,title:"Unfortunately, at this time, we don't have any job vacancies. Please check later",type:"warning"})),E.jobs&&E.jobs.length>0?((0,t.wg)(),(0,t.j4)(X,{key:2,background:"",layout:"total, sizes, prev, pager, next","page-sizes":[10,25,50,100],total:E.pagination.meta?E.pagination.meta.total:0,onSizeChange:q.handleSizeChange,onCurrentChange:q.handleCurrentChange},null,8,["total","onSizeChange","onCurrentChange"])):(0,t.kq)("",!0)])])])])])],64)}a(7658);var q=a(9775),F={data(){return{dialog:!1,loading:!1,pagination:{page:1,size:10},search:"",jobs:[],job_title:{}}},mounted(){this.getJobs(),this.$store.dispatch("dictionary/getCountries"),this.$store.dispatch("dictionary/getIndustries"),this.getJobs()},methods:{jobDetails(e){localStorage.setItem("job",JSON.stringify(e)),this.$router.push("/job-details")},handleCurrentChange(e){this.pagination.page=e,this.getJobs()},handleSizeChange(e){this.pagination.size=e,this.getJobs()},getJobs(){this.loading=!0,q.Z.getJobs({page:this.pagination.page,size:this.pagination.size,search:this.search,filter:this.job_title}).then((e=>{this.jobs=e.data,this.pagination.meta=e.meta,this.loading=!1}),(e=>{this.loading=!1,this.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),this.$notify({title:"Error",message:this.message,type:"error"})}))}}},L=a(89);const N=(0,L.Z)(F,[["render",E],["__scopeId","data-v-63c0c298"]]);var Z=N}}]);
//# sourceMappingURL=623.3b96fbeb.js.map