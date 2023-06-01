"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[359],{1359:(Y,u,i)=>{i.r(u),i.d(u,{DashboardModule:()=>K});var o=i(1180),c=i(4755),g=i(4466),m=i(2480),p=i(5439),t=i(2223),k=i(941),h=i(3630),f=i(9300),T=i(2912),Z=i(430),v=i(1728),l=i(6012),C=i(7081),_=i(2475);function x(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(s);const r=t.oxw(2);return t.KtG(r.done.emit(r.task))}),t.TgZ(1,"mat-icon"),t._uU(2,"done"),t.qZA()()}}function D(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"mat-card",1)(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-content")(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"localDate"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12,"progress:"),t.qZA(),t._UZ(13,"mat-progress-bar",2),t.TgZ(14,"p"),t._uU(15),t.ALo(16,"localDate"),t.qZA()(),t.TgZ(17,"mat-card-actions",3),t.YNc(18,x,3,0,"button",4),t.TgZ(19,"button",5),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.edit.emit(r.task))}),t.TgZ(20,"mat-icon"),t._uU(21,"edit"),t.qZA()(),t.TgZ(22,"button",6),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.delete.emit(r.task))}),t.TgZ(23,"mat-icon"),t._uU(24,"delete"),t.qZA()()()()}if(2&e){const s=t.oxw();t.Q6J("ngStyle",s.cardStyle),t.xp6(2),t.hij(" ",s.task.title," "),t.xp6(3),t.hij("name: ",s.task.name,""),t.xp6(2),t.hij("created at: ",t.lcZ(8,8,s.task.createdAt),""),t.xp6(3),t.hij("description: ",s.task.description,""),t.xp6(3),t.Q6J("value",s.task.progress),t.xp6(2),t.hij("due at: ",t.xi3(16,10,s.task.dueDate,"YYYY-MM-DD"),""),t.xp6(3),t.Q6J("ngIf",s.task.progress<100)}}let y=(()=>{class e{constructor(){(0,o.Z)(this,"task",void 0),(0,o.Z)(this,"edit",new t.vpe),(0,o.Z)(this,"delete",new t.vpe),(0,o.Z)(this,"done",new t.vpe)}get hourFromDue(){return null==this.task?-1:p(new Date).diff(this.task.dueDate,"hour")}get cardStyle(){let s="";return this.hourFromDue>0&&(s="rgba(255,0,0,0.3)"),100===this.task?.progress&&(s="rgba(0,255,0,0.3)"),{backgroundColor:s}}}return(0,o.Z)(e,"\u0275fac",function(s){return new(s||e)}),(0,o.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["app-task-card"]],inputs:{task:"task"},outputs:{edit:"edit",delete:"delete",done:"done"},decls:1,vars:1,consts:[["class","task-card__card",3,"ngStyle",4,"ngIf"],[1,"task-card__card",3,"ngStyle"],[3,"value"],["align","end"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-icon-button","",3,"click"]],template:function(s,a){1&s&&t.YNc(0,D,25,13,"mat-card",0),2&s&&t.Q6J("ngIf",void 0!==a.task)},dependencies:[c.O5,c.PC,Z.Hw,v.RK,l.a8,l.hq,l.dn,l.n5,C.pW,_.H],styles:[".task-card__card[_ngcontent-%COMP%]{padding:8px}"]})),e})();function S(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",2)(1,"app-task-card",3),t.NdJ("edit",function(r){t.CHM(s);const d=t.oxw();return t.KtG(d.onEdit(r))})("delete",function(r){t.CHM(s);const d=t.oxw();return t.KtG(d.onDelete(r))})("done",function(r){t.CHM(s);const d=t.oxw();return t.KtG(d.onDone(r))}),t.qZA()()}if(2&e){const s=n.$implicit;t.xp6(1),t.Q6J("task",s)}}let M=(()=>{class e{constructor(s,a){(0,o.Z)(this,"taskService",void 0),(0,o.Z)(this,"dialogService",void 0),(0,o.Z)(this,"tasks",[]),this.taskService=s,this.dialogService=a}onEdit(s){this.dialogService.openTaskForm(s).subscribe(a=>{a&&this.taskService.updateTask(s,a)})}onDone(s){this.taskService.finishTask(s)}onDelete(s){this.dialogService.openConfirm(`Are you sure you want to delete ${s.name}?`,"Confirming delete").pipe((0,f.h)(a=>a)).subscribe(()=>{this.taskService.deleteTask(s.key)})}}return(0,o.Z)(e,"\u0275fac",function(s){return new(s||e)(t.Y36(k.M),t.Y36(T.x))}),(0,o.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["app-task-list"]],inputs:{tasks:"tasks"},decls:2,vars:1,consts:[[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","xl:grid-cols-5","gap-3"],["class","task-list__cell",4,"ngFor","ngForOf"],[1,"task-list__cell"],[3,"task","edit","delete","done"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t.YNc(1,S,2,1,"div",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",a.tasks))},dependencies:[c.sg,y]})),e})();function F(e,n){if(1&e&&(t.TgZ(0,"div",3)(1,"div")(2,"span",4),t._uU(3),t.qZA(),t._UZ(4,"mat-divider"),t.qZA(),t._UZ(5,"app-task-list",5),t.qZA()),2&e){const s=t.oxw().$implicit;t.xp6(3),t.Oqu(s.name),t.xp6(2),t.Q6J("tasks",s.tasks)}}function O(e,n){if(1&e&&(t.ynx(0),t.YNc(1,F,6,2,"div",2),t.BQk()),2&e){const s=n.$implicit;t.xp6(1),t.Q6J("ngIf",s.tasks.length>0)}}const U=[{path:"",children:[{path:"",component:(()=>{class e{constructor(s){(0,o.Z)(this,"taskService",void 0),(0,o.Z)(this,"allTasks",[]),this.taskService=s,this.allTasks=s.tasks,this.taskService.tasks$.subscribe(a=>{this.allTasks=a})}get taskGroup(){const s=[];return s.push({name:"recent",tasks:this.allTasks.filter(a=>p().diff(a.createdAt,"hour")<2&&100!==a.progress)}),s.push({name:"due at today",tasks:this.allTasks.filter(a=>p().diff(a.dueDate,"hour")<=24)}),s.push({name:"uncompleted",tasks:this.allTasks.filter(a=>a.progress<100)}),s.push({name:"completed",tasks:this.allTasks.filter(a=>100===a.progress)}),s.push({name:"all tasks",tasks:[...this.allTasks]}),s}}return(0,o.Z)(e,"\u0275fac",function(s){return new(s||e)(t.Y36(k.M))}),(0,o.Z)(e,"\u0275cmp",t.Xpm({type:e,selectors:[["app-dashboard"]],decls:2,vars:1,consts:[[1,"grid","grid-cols-1","gap-8"],[4,"ngFor","ngForOf"],["class","grid grid-cols-1 gap-6",4,"ngIf"],[1,"grid","grid-cols-1","gap-6"],[1,"text-xl","text-gray-400"],[3,"tasks"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t.YNc(1,O,2,1,"ng-container",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",a.taskGroup))},dependencies:[c.sg,c.O5,h.d,M]})),e})()}]}];let J=(()=>{class e{}return(0,o.Z)(e,"\u0275fac",function(s){return new(s||e)}),(0,o.Z)(e,"\u0275mod",t.oAB({type:e})),(0,o.Z)(e,"\u0275inj",t.cJS({imports:[m.Bz.forChild(U),m.Bz]})),e})();var L=i(5642);let K=(()=>{class e{}return(0,o.Z)(e,"\u0275fac",function(s){return new(s||e)}),(0,o.Z)(e,"\u0275mod",t.oAB({type:e})),(0,o.Z)(e,"\u0275inj",t.cJS({imports:[c.ez,g.m,L.K,J]})),e})()}}]);