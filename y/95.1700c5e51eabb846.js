"use strict";(self.webpackChunkappUTN=self.webpackChunkappUTN||[]).push([[95],{95:(An,fe,d)=>{d.d(fe,{Fj:()=>w,NI:()=>K,u:()=>st,cw:()=>B,sg:()=>U,u5:()=>vn,JJ:()=>Bt,JL:()=>It,F:()=>H,On:()=>tt,UX:()=>Cn,Q7:()=>j,_Y:()=>zt});var o=d(8926),lt=d(6814),pe=d(2459),ge=d(5592),me=d(7453),_e=d(4829),ye=d(4564),ve=d(8251),Ce=d(7400),Ve=d(2714),De=d(7398);let ut=(()=>{var e;class t{constructor(n,s){this._renderer=n,this._elementRef=s,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(n,s){this._renderer.setProperty(this._elementRef.nativeElement,n,s)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(o.Qsj),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e}),t})(),y=(()=>{var e;class t extends ut{}return(e=t).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(e)))(s||e)}}(),e.\u0275dir=o.lG2({type:e,features:[o.qOj]}),t})();const f=new o.OlP("NgValueAccessor"),Me={provide:f,useExisting:(0,o.Gpc)(()=>w),multi:!0},Oe=new o.OlP("CompositionEventMode");let w=(()=>{var e;class t extends ut{constructor(n,s,i){super(n,s),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ee(){const e=(0,lt.q)()?(0,lt.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Oe,8))},e.\u0275dir=o.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){1&n&&o.NdJ("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[o._Bn([Me]),o.qOj]}),t})();const u=new o.OlP("NgValidators"),g=new o.OlP("NgAsyncValidators");function pt(e){return function p(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}(e.value)?{required:!0}:null}function F(e){return null}function Ct(e){return null!=e}function Vt(e){return(0,o.QGY)(e)?(0,pe.D)(e):e}function At(e){let t={};return e.forEach(r=>{t=null!=r?{...t,...r}:t}),0===Object.keys(t).length?null:t}function Dt(e,t){return t.map(r=>r(e))}function bt(e){return e.map(t=>function Fe(e){return!e.validate}(t)?t:r=>t.validate(r))}function R(e){return null!=e?function Mt(e){if(!e)return null;const t=e.filter(Ct);return 0==t.length?null:function(r){return At(Dt(r,t))}}(bt(e)):null}function L(e){return null!=e?function Et(e){if(!e)return null;const t=e.filter(Ct);return 0==t.length?null:function(r){return function Ae(...e){const t=(0,ye.jO)(e),{args:r,keys:n}=(0,me.D)(e),s=new ge.y(i=>{const{length:a}=r;if(!a)return void i.complete();const l=new Array(a);let h=a,V=a;for(let _=0;_<a;_++){let at=!1;(0,_e.Xf)(r[_]).subscribe((0,ve.x)(i,Vn=>{at||(at=!0,V--),l[_]=Vn},()=>h--,void 0,()=>{(!h||!at)&&(V||i.next(n?(0,Ve.n)(n,l):l),i.complete())}))}});return t?s.pipe((0,Ce.Z)(t)):s}(Dt(r,t).map(Vt)).pipe((0,De.U)(At))}}(bt(e)):null}function Ot(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function wt(e){return e._rawValidators}function Ft(e){return e._rawAsyncValidators}function Y(e){return e?Array.isArray(e)?e:[e]:[]}function S(e,t){return Array.isArray(e)?e.includes(t):e===t}function St(e,t){const r=Y(t);return Y(e).forEach(s=>{S(r,s)||r.push(s)}),r}function Nt(e,t){return Y(t).filter(r=>!S(e,r))}class Gt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=R(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=L(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,r){return!!this.control&&this.control.hasError(t,r)}getError(t,r){return this.control?this.control.getError(t,r):null}}class c extends Gt{get formDirective(){return null}get path(){return null}}class m extends Gt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class xt{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Bt=(()=>{var e;class t extends xt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(m,2))},e.\u0275dir=o.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){2&n&&o.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[o.qOj]}),t})(),It=(()=>{var e;class t extends xt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(c,10))},e.\u0275dir=o.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,s){2&n&&o.ekj("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[o.qOj]}),t})();const D="VALID",G="INVALID",A="PENDING",b="DISABLED";function $(e){return(x(e)?e.validators:e)||null}function z(e,t){return(x(t)?t.asyncValidators:e)||null}function x(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Ht{constructor(t,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===G}get pending(){return this.status==A}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(St(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(St(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Nt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Nt(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=A,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(n=>{n.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(n=>{n.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===A)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const r=Vt(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,r={}){this.errors=t,this._updateControlsErrors(!1!==r.emitEvent)}get(t){let r=t;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,s)=>n&&n._find(s),this)}getError(t,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[t]:null}hasError(t,r){return!!this.getError(t,r)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(G)?G:D}_anyControlsHaveStatus(t){return this._anyControls(r=>r.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){x(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function xe(e){return Array.isArray(e)?R(e):e||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Be(e){return Array.isArray(e)?L(e):e||null}(this._rawAsyncValidators)}}class B extends Ht{constructor(t,r,n){super($(r),z(n,r)),this.controls=t,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,r){return this.controls[t]?this.controls[t]:(this.controls[t]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(t,r,n={}){this.registerControl(t,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(t,r,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],r&&this.registerControl(t,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,r={}){(function Tt(e,t,r){e._forEachChild((n,s)=>{if(void 0===r[s])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(n=>{(function kt(e,t,r){const n=e.controls;if(!(t?Object.keys(n):n).length)throw new o.vHH(1e3,"");if(!n[r])throw new o.vHH(1001,"")})(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(t,r={}){null!=t&&(Object.keys(t).forEach(n=>{const s=this.controls[n];s&&s.patchValue(t[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(t={},r={}){this._forEachChild((n,s)=>{n.reset(t[s],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(t,r,n)=>(t[n]=r.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(r,n)=>!!n._syncPendingControls()||r);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(r=>{const n=this.controls[r];n&&t(n,r)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[r,n]of Object.entries(this.controls))if(this.contains(r)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(r,n,s)=>((n.enabled||this.disabled)&&(r[s]=n.value),r))}_reduceChildren(t,r){let n=t;return this._forEachChild((s,i)=>{n=r(n,s,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const v=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>M}),M="always";function I(e,t){return[...t.path,e]}function E(e,t,r=M){J(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&t.valueAccessor.setDisabledState?.(e.disabled),function ke(e,t){t.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Ut(e,t)})}(e,t),function He(e,t){const r=(n,s)=>{t.valueAccessor.writeValue(n),s&&t.viewToModelUpdate(n)};e.registerOnChange(r),t._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,t),function Te(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Ut(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function Pe(e,t){if(t.valueAccessor.setDisabledState){const r=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(r),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,t)}function P(e,t,r=!0){const n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),T(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function k(e,t){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(t)})}function J(e,t){const r=wt(e);null!==t.validator?e.setValidators(Ot(r,t.validator)):"function"==typeof r&&e.setValidators([r]);const n=Ft(e);null!==t.asyncValidator?e.setAsyncValidators(Ot(n,t.asyncValidator)):"function"==typeof n&&e.setAsyncValidators([n]);const s=()=>e.updateValueAndValidity();k(t._rawValidators,s),k(t._rawAsyncValidators,s)}function T(e,t){let r=!1;if(null!==e){if(null!==t.validator){const s=wt(e);if(Array.isArray(s)&&s.length>0){const i=s.filter(a=>a!==t.validator);i.length!==s.length&&(r=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const s=Ft(e);if(Array.isArray(s)&&s.length>0){const i=s.filter(a=>a!==t.asyncValidator);i.length!==s.length&&(r=!0,e.setAsyncValidators(i))}}}const n=()=>{};return k(t._rawValidators,n),k(t._rawAsyncValidators,n),r}function Ut(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function jt(e,t){J(e,t)}function Z(e,t){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(t,r.currentValue)}function Rt(e,t){e._syncPendingControls(),t.forEach(r=>{const n=r.control;"submit"===n.updateOn&&n._pendingChange&&(r.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function X(e,t){if(!t)return null;let r,n,s;return Array.isArray(t),t.forEach(i=>{i.constructor===w?r=i:function Re(e){return Object.getPrototypeOf(e.constructor)===y}(i)?n=i:s=i}),s||n||r||null}const Ye={provide:c,useExisting:(0,o.Gpc)(()=>H)},O=(()=>Promise.resolve())();let H=(()=>{var e;class t extends c{constructor(n,s,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new B({},R(n),L(s))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(n){O.then(()=>{const s=this._findContainer(n.path);n.control=s.registerControl(n.name,n.control),E(n.control,n,this.callSetDisabledState),n.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(n)})}getControl(n){return this.form.get(n.path)}removeControl(n){O.then(()=>{const s=this._findContainer(n.path);s&&s.removeControl(n.name),this._directives.delete(n)})}addFormGroup(n){O.then(()=>{const s=this._findContainer(n.path),i=new B({});jt(i,n),s.registerControl(n.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(n){O.then(()=>{const s=this._findContainer(n.path);s&&s.removeControl(n.name)})}getFormGroup(n){return this.form.get(n.path)}updateModel(n,s){O.then(()=>{this.form.get(n.path).setValue(s)})}setValue(n){this.control.setValue(n)}onSubmit(n){return this.submitted=!0,Rt(this.form,this._directives),this.ngSubmit.emit(n),"dialog"===n?.target?.method}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(n){return n.pop(),n.length?this.form.get(n):this.form}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(u,10),o.Y36(g,10),o.Y36(v,8))},e.\u0275dir=o.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,s){1&n&&o.NdJ("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Ye]),o.qOj]}),t})();function Lt(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}function Yt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const K=class extends Ht{constructor(t=null,r,n){super($(r),z(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=Yt(t)?t.value:t)}setValue(t,r={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(t,r={}){this.setValue(t,r)}reset(t=this.defaultValue,r={}){this._applyFormState(t),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Lt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Lt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Yt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},$e={provide:m,useExisting:(0,o.Gpc)(()=>tt)},$t=(()=>Promise.resolve())();let tt=(()=>{var e;class t extends m{constructor(n,s,i,a,l,h){super(),this._changeDetectorRef=l,this.callSetDisabledState=h,this.control=new K,this._registered=!1,this.name="",this.update=new o.vpe,this._parent=n,this._setValidators(s),this._setAsyncValidators(i),this.valueAccessor=X(0,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){const s=n.name.previousValue;this.formDirective.removeControl({name:s,path:this._getPath(s)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Z(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){E(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(n){$t.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){const s=n.isDisabled.currentValue,i=0!==s&&(0,o.VuI)(s);$t.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?I(n,this._parent):[n]}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(c,9),o.Y36(u,10),o.Y36(g,10),o.Y36(f,10),o.Y36(o.sBO,8),o.Y36(v,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([$e]),o.qOj,o.TTD]}),t})(),zt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275dir=o.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),Qt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),t})();const et=new o.OlP("NgModelWithFormControlWarning"),Ke={provide:c,useExisting:(0,o.Gpc)(()=>U)};let U=(()=>{var e;class t extends c{constructor(n,s,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(n),this._setAsyncValidators(s)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(T(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){const s=this.form.get(n.path);return E(s,n,this.callSetDisabledState),s.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),s}getControl(n){return this.form.get(n.path)}removeControl(n){P(n.control||null,n,!1),function Le(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,s){this.form.get(n.path).setValue(s)}onSubmit(n){return this.submitted=!0,Rt(this.form,this.directives),this.ngSubmit.emit(n),"dialog"===n?.target?.method}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{const s=n.control,i=this.form.get(n.path);s!==i&&(P(s||null,n),(e=>e instanceof K)(i)&&(E(i,n,this.callSetDisabledState),n.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){const s=this.form.get(n.path);jt(s,n),s.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){const s=this.form.get(n.path);s&&function Ue(e,t){return T(e,t)}(s,n)&&s.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){J(this.form,this),this._oldForm&&T(this._oldForm,this)}_checkFormPresent(){}}return(e=t).\u0275fac=function(n){return new(n||e)(o.Y36(u,10),o.Y36(g,10),o.Y36(v,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,s){1&n&&o.NdJ("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Ke]),o.qOj,o.TTD]}),t})();const nn={provide:m,useExisting:(0,o.Gpc)(()=>st)};let st=(()=>{var e;class t extends m{set isDisabled(n){}constructor(n,s,i,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(s),this._setAsyncValidators(i),this.valueAccessor=X(0,a)}ngOnChanges(n){this._added||this._setUpControl(),Z(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return I(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return(e=t)._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(o.Y36(c,13),o.Y36(u,10),o.Y36(g,10),o.Y36(f,10),o.Y36(et,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([nn]),o.qOj,o.TTD]}),t})(),C=(()=>{var e;class t{constructor(){this._validator=F}ngOnChanges(n){if(this.inputName in n){const s=this.normalizeInput(n[this.inputName].currentValue);this._enabled=this.enabled(s),this._validator=this._enabled?this.createValidator(s):F,this._onChange&&this._onChange()}}validate(n){return this._validator(n)}registerOnValidatorChange(n){this._onChange=n}enabled(n){return null!=n}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275dir=o.lG2({type:e,features:[o.TTD]}),t})();const hn={provide:u,useExisting:(0,o.Gpc)(()=>j),multi:!0};let j=(()=>{var e;class t extends C{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.VuI,this.createValidator=n=>pt}enabled(n){return n}}return(e=t).\u0275fac=function(){let r;return function(s){return(r||(r=o.n5z(e)))(s||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,s){2&n&&o.uIk("required",s._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([hn]),o.qOj]}),t})(),he=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[Qt]}),t})(),vn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:v,useValue:n.callSetDisabledState??M}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[he]}),t})(),Cn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:et,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:v,useValue:n.callSetDisabledState??M}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[he]}),t})()}}]);