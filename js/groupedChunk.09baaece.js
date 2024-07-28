"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[246],{1618:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var o=s(3396),n=s(7139);const a={class:"container mx-auto mt-6"},r={class:"md:grid md:grid-cols-3 md:gap-4"},i={class:"col-span-1"},l={class:"col-span-2"},d={class:"bg-white rounded border border-gray-200 relative flex flex-col"},c={class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},u={class:"card-title"},m=(0,o._)("i",{class:"fa fa-compact-disc float-right text-green-400 text-2xl"},null,-1),g={class:"p-6"};function p(e,t,s,p,b,_){const h=(0,o.up)("app-upload"),v=(0,o.up)("composition-item");return(0,o.wg)(),(0,o.iD)("section",a,[(0,o._)("div",r,[(0,o._)("div",i,[(0,o.Wm)(h,{ref:"upload",addSong:_.addSong},null,8,["addSong"])]),(0,o._)("div",l,[(0,o._)("div",d,[(0,o._)("div",c,[(0,o._)("span",u,(0,n.zw)(e.$t("manage.my_songs")),1),m]),(0,o._)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.songs,((e,t)=>((0,o.wg)(),(0,o.j4)(v,{key:e.docId,song:e,updateSong:_.updateSong,index:t,removeSong:_.removeSong,updateUnsavedFlag:_.updateUnsavedFlag},null,8,["song","updateSong","index","removeSong","updateUnsavedFlag"])))),128))])])])])])}var b=s(9242);const _={class:"bg-white rounded border border-gray-200 relative flex flex-col"},h=(0,o._)("div",{class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},[(0,o._)("span",{class:"card-title"},"Upload"),(0,o._)("i",{class:"fas fa-upload float-right text-green-400 text-2xl"})],-1),v={class:"p-6"},f=(0,o._)("h5",null,"Drop your files here",-1),w=[f],x=(0,o._)("label",{for:"upload"},null,-1),y=(0,o._)("hr",{class:"my-6"},null,-1),k={class:"flex h-4 overflow-hidden bg-gray-200 rounded"};function S(e,t,s,a,r,i){return(0,o.wg)(),(0,o.iD)("div",_,[h,(0,o._)("div",v,[(0,o._)("div",{class:(0,n.C_)(["w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid",{"bg-green-400 border-green-40 border-solid":r.is_dragover}]),onDrag:t[0]||(t[0]=(0,b.iM)((()=>{}),["prevent","stop"])),onDragstart:t[1]||(t[1]=(0,b.iM)((()=>{}),["prevent","stop"])),onDragend:t[2]||(t[2]=(0,b.iM)((e=>r.is_dragover=!1),["prevent","stop"])),onDragover:t[3]||(t[3]=(0,b.iM)((e=>r.is_dragover=!0),["prevent","stop"])),onDragenter:t[4]||(t[4]=(0,b.iM)((e=>r.is_dragover=!0),["prevent","stop"])),onDragleave:t[5]||(t[5]=(0,b.iM)((e=>r.is_dragover=!1),["prevent","stop"])),onDrop:t[6]||(t[6]=(0,b.iM)((e=>i.upload(e)),["prevent","stop"]))},w,34),x,(0,o._)("input",{name:"upload",type:"file",multiple:"",onChange:t[7]||(t[7]=e=>i.upload(e))},null,32),y,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.uploads,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-4",key:e.name},[(0,o._)("div",{class:(0,n.C_)(["font-bold text-sm",e.text_class])},[(0,o._)("i",{class:(0,n.C_)(e.icon)},null,2),(0,o.Uk)(" "+(0,n.zw)(e.name),1)],2),(0,o._)("div",k,[(0,o._)("div",{class:(0,n.C_)(["transition-all progress-bar",e.variant]),style:(0,n.j5)({width:e.current_progress+"%"})},null,6)])])))),128))])])}var D=s(1572),C={name:"AppApload",data(){return{is_dragover:!1,uploads:[]}},props:["addSong"],methods:{upload(e){this.is_dragover=!1,console.log(e);const t=e.dataTransfer?[...e.dataTransfer.files]:[...e.target.files];t.forEach((e=>{if("audio/mpeg"!==e.type)return;if(!navigator.onLine)return void this.uploads.push({task:{},current_progress:100,name:e.name,variant:"bg-red-400",icon:"fa fa-times",text_class:"text-red-400"});const t=D.tO.ref(),s=t.child(`songs/${e.name}`),o=s.put(e),n=this.uploads.push({task:o,current_progress:0,name:e.name,variant:"bg-blue-400",icon:"fa fa-spinner fa-spin",text_class:""})-1;o.on("state_changed",(e=>{const t=e.bytesTransferred/e.totalBytes*100;this.uploads[n].current_progress=t}),(e=>{this.uploads[n].variant="bg-red-400",this.uploads[n].icon="fas fa-times",this.uploads[n].text_class="text-red-400",console.log(e)}),(async()=>{const e={uid:D.I8.currentUser.uid,display_name:D.I8.currentUser.displayName,original_name:o.snapshot.ref.name,modified_name:o.snapshot.ref.name,genre:"",comment_count:0};e.url=await o.snapshot.ref.getDownloadURL();const t=await D.GX.add(e),s=await t.get();this.addSong(s),this.uploads[n].variant="bg-green-400",this.uploads[n].icon="fas fa-check",this.uploads[n].text_class="text-green-400"}))})),console.log(t)},cancelUploads(){this.uploads.forEach((e=>{e.task.cancel()}))},beforeUnmout(){this.uploads.forEach((e=>{e.task.cancel()}))}}},F=s(89);const U=(0,F.Z)(C,[["render",S]]);var I=U;const M={class:"border border-gray-200 p-3 mb-4 rounded"},z={class:"inline-block text-2xl font-bold"},q=(0,o._)("i",{class:"fa fa-times"},null,-1),$=[q],E=(0,o._)("i",{class:"fa fa-pencil-alt"},null,-1),P=[E],G={class:"mb-3"},W=(0,o._)("label",{class:"inline-block mb-2"},"Song Title",-1),L={class:"mb-3"},Y=(0,o._)("label",{class:"inline-block mb-2"},"Genre",-1),T=["disabled"],X=["disabled"];function j(e,t,s,a,r,i){const l=(0,o.up)("vee-field"),d=(0,o.up)("ErrorMessage"),c=(0,o.up)("vee-form");return(0,o.wg)(),(0,o.iD)("div",M,[(0,o.wy)((0,o._)("div",null,[(0,o._)("h4",z,(0,n.zw)(s.song.modified_name),1),(0,o._)("button",{class:"ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right",onClick:t[0]||(t[0]=(0,b.iM)(((...e)=>i.deleteSong&&i.deleteSong(...e)),["prevent"]))},$),(0,o._)("button",{class:"ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right",onClick:t[1]||(t[1]=(0,b.iM)((e=>r.showForm=!r.showForm),["prevent"]))},P)],512),[[b.F8,!r.showForm]]),(0,o.wy)((0,o._)("div",null,[r.show_alert?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,n.C_)(["text-white text-center font-bold p-4 mb-4",r.alert_variant])},(0,n.zw)(r.alert_message),3)):(0,o.kq)("",!0),(0,o.Wm)(c,{"validation-schema":r.schema,"initial-values":s.song,onSubmit:i.edit},{default:(0,o.w5)((()=>[(0,o._)("div",G,[W,(0,o.Wm)(l,{type:"text",name:"modified_name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Song Title",onInput:t[2]||(t[2]=e=>s.updateUnsavedFlag(!0))}),(0,o.Wm)(d,{class:"text-red-600",name:"modified_name"})]),(0,o._)("div",L,[Y,(0,o.Wm)(l,{type:"text",name:"genre",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Genre",onInput:t[3]||(t[3]=e=>s.updateUnsavedFlag(!0))}),(0,o.Wm)(d,{class:"text-red-600",name:"genre"})]),(0,o._)("button",{type:"submit",class:"py-1.5 px-3 rounded text-white bg-green-600",disabled:r.in_submission}," Submit ",8,T),(0,o._)("button",{type:"button",class:"py-1.5 px-3 rounded text-white bg-gray-600",disabled:r.in_submission,onClick:t[4]||(t[4]=(0,b.iM)((e=>r.showForm=!1),["prevent"]))}," Go Back ",8,X)])),_:1},8,["validation-schema","initial-values","onSubmit"])],512),[[b.F8,r.showForm]])])}var A={name:"CompositionItem",props:{song:{type:Object,required:!0},updateSong:{type:Function,required:!0},index:{type:Number,required:!0},removeSong:{type:Function,required:!0},updateUnsavedFlag:{type:Function}},data(){return{showForm:!1,schema:{modified_name:"required",genre:"alpha_spaces"},in_submission:!1,show_alert:!1,alert_variant:"bg-blue-500",alert_message:"Please wait! Updating song info."}},methods:{async edit(e){this.in_submission=!0,this.show_alert=!0,this.alert_variant="bg-blue-500",this.alert_message="Please wait! Updating song info.";try{console.log(this.song.docId),await D.GX.doc(this.song.docId).update(e)}catch(t){return console.log(t),this.in_submission=!1,this.alert_variant="bg-red-500",void(this.alert_message="Something went wrong! Try again later")}this.updateSong(this.index,e),this.updateUnsavedFlag(!1),this.in_submission=!1,this.alert_variant="bg-green-500",this.alert_message="Success!"},async deleteSong(){const e=D.tO.ref(),t=e.child(`songs/${this.song.original_name}`);await t.delete(),await D.GX.doc(this.song.docId).delete(),this.removeSong(this.index)}}};const O=(0,F.Z)(A,[["render",j]]);var Z=O,H={name:"ManageView",components:{AppUpload:I,CompositionItem:Z},data(){return{songs:[],unsavedFlag:!1}},async created(){const e=await D.GX.where("uid","==",D.I8.currentUser.uid).get();e.forEach(this.addSong)},methods:{updateSong(e,t){this.songs[e].modified_name=t.modified_name,this.songs[e].genre=t.genre},removeSong(e){this.songs.splice(e,1)},addSong(e){const t={...e.data(),docId:e.id};this.songs.push(t)},updateUnsavedFlag(e){this.unsavedFlag=e}},beforeRouteLeave(e,t,s){if(this.unsavedFlag){const e=confirm("You have unsaved changes. Are you sure you want to leave?");s(e)}else s()}};const K=(0,F.Z)(H,[["render",p]]);var N=K},3227:function(e,t,s){s.r(t),s.d(t,{default:function(){return $}});var o=s(3396),n=s(9242),a=s(7139);const r={class:"w-full mb-8 py-14 text-center text-white relative"},i=(0,o._)("div",{class:"absolute inset-0 w-full h-full box-border bg-contain music-bg",style:{"background-image":"url(/assets/img/song-header.png)"}},null,-1),l={class:"container mx-auto flex items-center"},d={class:"z-50 text-left ml-8"},c={class:"text-3xl font-bold"},u={class:"song-price"},m={class:"container mx-auto mt-6",id:"comments"},g={class:"bg-white rounded border border-gray-200 relative flex flex-col"},p={class:"px-6 pt-6 pb-5 font-bold border-b border-gray-200"},b={class:"card-title"},_=(0,o._)("i",{class:"fa fa-comments float-right text-green-400 text-2xl"},null,-1),h={class:"p-6"},v=(0,o._)("label",null,null,-1),f=["disabled"],w=(0,o._)("label",null,null,-1),x=(0,o._)("option",{value:"1"},"Latest",-1),y=(0,o._)("option",{value:"2"},"Oldest",-1),k=[x,y],S={class:"container mx-auto"},D={class:"mb-5"},C={class:"font-bold"};function F(e,t,s,x,y,F){const U=(0,o.up)("vee-field"),I=(0,o.up)("ErrorMessage"),M=(0,o.up)("vee-form");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("section",r,[i,(0,o._)("div",l,[(0,o._)("button",{type:"button",class:"z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none",onClick:t[0]||(t[0]=(0,n.iM)((t=>e.newSong(y.song)),["prevent"])),id:"play-button"},[(0,o._)("i",{class:(0,a.C_)(["fas",{"fa-play":!e.playing,"fa-pause":e.playing}])},null,2)]),(0,o._)("div",d,[(0,o._)("div",c,(0,a.zw)(y.song.modified_name),1),(0,o._)("div",null,(0,a.zw)(y.song.genre),1),(0,o._)("div",u,(0,a.zw)(e.$n(1,"currency")),1)])])]),(0,o._)("section",m,[(0,o._)("div",g,[(0,o._)("div",p,[(0,o._)("span",b,(0,a.zw)(e.$tc("song.comment_count",y.song.comment_count,{count:y.song.comment_count})),1),_]),(0,o._)("div",h,[y.comment_show_alert?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,a.C_)(["text-white text-center font-bold p-5 mb-4",y.comment_alert_variant])},(0,a.zw)(y.comment_alert_message),3)):(0,o.kq)("",!0),e.userLoggedIn?((0,o.wg)(),(0,o.j4)(M,{key:1,"validation-schema":y.schema,onSubmit:F.addComment},{default:(0,o.w5)((()=>[v,(0,o.Wm)(U,{as:"textarea",name:"comment",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4",placeholder:"Your comment here..."}),(0,o.Wm)(I,{class:"text-red-600",name:"comment"}),(0,o._)("button",{type:"submit",class:"py-1.5 px-3 rounded text-white bg-green-600 block",disabled:y.comment_in_submission}," Submit ",8,f)])),_:1},8,["validation-schema","onSubmit"])):(0,o.kq)("",!0),w,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>y.sort=e),class:"block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"},k,512),[[n.bM,y.sort]])])])]),(0,o._)("ul",S,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(F.sortedComments,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"p-6 bg-gray-50 border border-gray-200",key:e.docId},[(0,o._)("div",D,[(0,o._)("div",C,(0,a.zw)(e.name),1),(0,o._)("time",null,(0,a.zw)(e.datePosted),1)]),(0,o._)("p",null,(0,a.zw)(e.content),1)])))),128))])])}var U=s(1572),I=s(65),M={name:"SongView",data(){return{song:{},schema:{comment:"required|min:3"},comment_in_submission:!1,comment_show_alert:!1,comment_alert_variant:"bg-blue-500",comment_alert_message:"Pease wait! Your comment is being submitted",comments:[],sort:"1"}},computed:{...(0,I.rn)({userLoggedIn:e=>e.auth.userLoggedIn}),...(0,I.Se)(["playing"]),sortedComments(){return this.comments.slice().sort(((e,t)=>"1"===this.sort?new Date(t.datePosted)-new Date(e.datePosted):new Date(e.datePosted)-new Date(t.datePosted)))}},async beforeRouteEnter(e,t,s){const o=await U.GX.doc(e.params.id).get();s((e=>{if(!o.exists)return void e.$router.push({name:"home"});const{sort:t}=e.$route.query;e.sort="1"===t||"2"===t?t:"1",e.song=o.data(),e.getComments()}))},methods:{...(0,I.nv)(["newSong"]),async addComment(e,{resetForm:t}){this.comment_in_submission=!0,this.comment_show_alert=!0,this.comment_alert_variant="bg-blue-500",this.comment_alert_message="Pease wait! Your comment is being submitted";const s={content:e.comment,datePosted:(new Date).toString(),sid:this.$route.params.id,name:U.I8.currentUser.displayName,uid:U.I8.currentUser.uid};await U.o.add(s),this.song.comment_count+=1,await U.GX.doc(this.$route.params.id).update({comment_count:this.song.comment_count}),this.getComments(),this.comment_in_submission=!1,this.comment_alert_variant="bg-green-500",this.comment_alert_message="Comment added!",t()},async getComments(){const e=await U.o.where("sid","==",this.$route.params.id).get();this.comments=[],e.forEach((e=>[this.comments.push({docId:e.id,...e.data()})]))}},watch:{sort(e){e!==this.$route.query.sort&&this.$router.push({query:{sort:e}})}}},z=s(89);const q=(0,z.Z)(M,[["render",F]]);var $=q}}]);
//# sourceMappingURL=groupedChunk.09baaece.js.map