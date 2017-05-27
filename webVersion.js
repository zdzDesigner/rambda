(function webpackUniversalModuleDefinition(d,e){if(typeof exports==='object'&&typeof module==='object')module.exports=e();else if(typeof define==='function'&&define.amd)define([],e);else{var a=e();for(var i in a)(typeof exports==='object'?exports:d)[i]=a[i];}})(this,function(){return function(f){var g={};function __webpack_require__(h){if(g[h]){return g[h].exports;}var j=g[h]={i:h,l:!1,exports:{}};f[h].call(j.exports,j,j.exports,__webpack_require__);j.l=!0;return j.exports;}__webpack_require__.m=f;__webpack_require__.c=g;__webpack_require__.i=function(k){return k;};__webpack_require__.d=function(l,m,n){if(!__webpack_require__.o(l,m)){Object.defineProperty(l,m,{configurable:!1,enumerable:!0,get:n});}};__webpack_require__.n=function(o){var p=o&&o.__esModule?function getDefault(){return o['default'];}:function getModuleExports(){return o;};__webpack_require__.d(p,'a',p);return p;};__webpack_require__.o=function(q,r){return Object.prototype.hasOwnProperty.call(q,r);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=8);}([function(s,t){function type(a){if(a===null){return"Null";}else if(Array.isArray(a)){return"Array";}else if(typeof a==="boolean"){return"Boolean";}else if(typeof a==="number"){return"Number";}else if(typeof a==="string"){return"String";}else if(a===void 0){return"Undefined";}else if(a instanceof RegExp){return"RegExp";}const u=a.toString();if(u.startsWith("async")){return"Async";}else if(u.includes("function")||u.includes("=>")){return"Function";}return"Object";}s.exports=type;},function(v,w){function baseSlice(x,y,z){let A=-1,B=x.length;z=z>B?B:z;if(z<0){z+=B;}B=y>z?0:z-y>>>0;y>>>=0;const C=Array(B);while(++A<B){C[A]=x[A+y];}return C;}v.exports=baseSlice;},function(D,E,F){const G=F(4);function contains(H,I){if(I===void 0){return J=>contains(H,J);}let K=-1,L=!1;while(++K<I.length&&!L){if(G(I[K],H)){L=!0;}}return L;}D.exports=contains;},function(M,N){function drop(O,a){if(a===void 0){return P=>drop(O,P);}return a.slice(O);}M.exports=drop;},function(Q,R,S){const T=S(0);function equals(a,b){if(b===void 0){return U=>equals(a,U);}else if(a===b){return a!==0||1/a===1/b;}const V=T(a);if(V!==T(b)){return!1;}if(V==="Array"){const W=Array.from(a),X=Array.from(b);return W.sort().toString()===X.sort().toString();}if(V==="Object"){const Y=Object.keys(a);if(Y.length===Object.keys(b).length){if(Y.length===0){return!0;}let Z=!0;Y.map(a1=>{if(Z){const b1=T(a[a1]),c1=T(b[a1]);if(b1===c1){if(b1==="Object"){if(Object.keys(a[a1]).length===Object.keys(b[a1]).length){if(Object.keys(a[a1]).length!==0){if(!equals(a[a1],b[a1])){Z=!1;}}}else{Z=!1;}}else if(!equals(a[a1],b[a1])){Z=!1;}}else{Z=!1;}}});return Z;}}return!1;}Q.exports=equals;},function(d1,e1){function map(fn,g1){if(g1===void 0){return h1=>map(fn,h1);}let i1=-1;const j1=g1.length,k1=Array(j1);while(++i1<j1){k1[i1]=fn(g1[i1]);}return k1;}d1.exports=map;},function(l1,m1){function merge(n1,o1){if(o1===void 0){return p1=>merge(n1,p1);}return Object.assign({},n1,o1);}l1.exports=merge;},function(q1,r1,s1){r1.add=s1(9);r1.any=s1(11);r1.adjust=s1(10);r1.append=s1(12);r1.compose=s1(13);r1.contains=s1(2);r1.curry=s1(14);r1.defaultTo=s1(15);r1.drop=s1(3);r1.dropLast=s1(16);r1.equals=s1(4);r1.filter=s1(17);r1.find=s1(18);r1.findIndex=s1(19);r1.flatten=s1(20);r1.has=s1(21);r1.head=s1(22);r1.indexOf=s1(23);r1.init=s1(24);r1.join=s1(25);r1.last=s1(26);r1.length=s1(27);r1.map=s1(5);r1.match=s1(28);r1.merge=s1(6);r1.omit=s1(29);r1.path=s1(30);r1.pick=s1(31);r1.pluck=s1(32);r1.prepend=s1(33);r1.prop=s1(34);r1.propEq=s1(35);r1.range=s1(36);r1.repeat=s1(37);r1.replace=s1(38);r1.sort=s1(39);r1.sortBy=s1(40);r1.split=s1(41);r1.splitEvery=s1(42);r1.subtract=s1(43);r1.tail=s1(44);r1.take=s1(45);r1.takeLast=s1(46);r1.test=s1(47);r1.toLower=s1(48);r1.toUpper=s1(49);r1.trim=s1(50);r1.type=s1(0);r1.uniq=s1(51);r1.update=s1(52);r1.values=s1(53);},function(t1,u1,v1){const w1=v1(7);t1.exports.R=w1;},function(x1,y1){function add(a,b){if(b===void 0){return c=>add(a,c);}return a+b;}x1.exports=add;},function(z1,A1){function adjust(fn,C1,D1){if(C1===void 0){return(E1,F1)=>adjust(fn,E1,F1);}else if(D1===void 0){return G1=>adjust(fn,C1,G1);}const H1=D1.concat();return H1.map((I1,J1)=>{if(J1===C1){return fn(D1[C1]);}return I1;});}z1.exports=adjust;},function(K1,L1){function any(fn,N1){if(N1===void 0){return O1=>any(fn,O1);}let P1=0;while(P1<N1.length){if(fn(N1[P1])){return!0;}P1++;}return!1;}K1.exports=any;},function(Q1,R1){function append(S1,T1){if(T1===void 0){return U1=>append(S1,U1);}const V1=T1.concat();V1.push(S1);return V1;}Q1.exports=append;},function(W1,X1){function isFunction(Y1){return typeof Y1==="function";}function compose(){const Z1=arguments;let a2=Z1.length;while(a2--){if(!isFunction(Z1[a2])){throw new TypeError();}}return function(){let b2=arguments,c2=Z1.length;while(c2--){b2=[Z1[c2].apply(this,b2)];}return b2[0];};}W1.exports=compose;},function(d2,e2,f2){const g2=f2(0),h2=f2(6);function curry(fn,j2={}){return k2=>{if(g2(fn)==="Async"){return new Promise((l2,m2)=>{fn(h2(k2,j2)).then(l2).catch(m2);});}return fn(h2(k2,j2));};}d2.exports=curry;},function(n2,o2,p2){const q2=p2(0);function defaultTo(r2,s2){if(arguments.length===1){return t2=>defaultTo(r2,t2);}return s2===void 0||!(q2(s2)===q2(r2))?r2:s2;}n2.exports=defaultTo;},function(u2,v2){function dropLast(w2,a){if(a===void 0){return x2=>dropLast(w2,x2);}return a.slice(0,-w2);}u2.exports=dropLast;},function(y2,z2){function filter(fn,B2){if(B2===void 0){return C2=>filter(fn,C2);}let D2=-1,E2=0;const F2=B2.length,G2=[];while(++D2<F2){const H2=B2[D2];if(fn(H2)){G2[E2++]=H2;}}return G2;}y2.exports=filter;},function(I2,J2){function find(fn,L2){if(L2===void 0){return M2=>find(fn,M2);}return L2.find(fn);}I2.exports=find;},function(N2,O2){function findIndex(fn,Q2){if(Q2===void 0){return R2=>findIndex(fn,R2);}const S2=Q2.length;let T2=-1;while(++T2<S2){if(fn(Q2[T2])){return T2;}}return-1;}N2.exports=findIndex;},function(U2,V2){function flatten(W2,X2){X2=X2===void 0?[]:X2;for(let i=0;i<W2.length;i++){if(Array.isArray(W2[i])){flatten(W2[i],X2);}else{X2.push(W2[i]);}}return X2;}U2.exports=flatten;},function(Y2,Z2){function has(a3,b3){if(b3===void 0){return c3=>has(a3,c3);}return b3[a3]!==void 0;}Y2.exports=has;},function(d3,e3){function head(a){if(typeof a==="string"){return a[0]||"";}return a[0];}d3.exports=head;},function(f3,g3){function indexOf(h3,i3){if(i3===void 0){return j3=>indexOf(h3,j3);}let k3=-1;const l3=i3.length;while(++k3<l3){if(i3[k3]===h3){return k3;}}return-1;}f3.exports=indexOf;},function(m3,n3,o3){const p3=o3(1);function init(a){console.log(a,p3(a,0,-1));if(typeof a==="string"){return a.slice(0,-1);}return a.length?p3(a,0,-1):[];}m3.exports=init;},function(q3,r3){function join(s3,t3){if(t3===void 0){return u3=>join(s3,u3);}return t3.join(s3);}q3.exports=join;},function(v3,w3){function last(a){if(typeof a==="string"){return a[a.length-1]||"";}return a[a.length-1];}v3.exports=last;},function(x3,y3){function length(z3){return z3.length;}x3.exports=length;},function(A3,B3){function match(C3,D3){if(D3===void 0){return E3=>match(C3,E3);}const F3=D3.match(C3);return F3===null?[]:F3;}A3.exports=match;},function(G3,H3){function omit(I3,J3){if(J3===void 0){return K3=>omit(I3,K3);}const L3={};for(key in J3){if(!I3.includes(key)){L3[key]=J3[key];}}return L3;}G3.exports=omit;},function(M3,N3){function path(O3,P3){if(P3===void 0){return Q3=>path(O3,Q3);}let R3=P3,S3=0;while(S3<O3.length){if(R3===null){return void 0;}R3=R3[O3[S3]];S3++;}return R3;}M3.exports=path;},function(T3,U3){function pick(V3,W3){if(W3===void 0){return X3=>pick(V3,X3);}const Y3={};let Z3=0;while(Z3<V3.length){if(V3[Z3]in W3){Y3[V3[Z3]]=W3[V3[Z3]];}Z3++;}return Y3;}T3.exports=pick;},function(a4,b4,c4){const d4=c4(5);function pluck(e4,f4){if(f4===void 0){return g4=>pluck(e4,g4);}const h4=[];d4(i4=>{if(!(i4[e4]===void 0)){h4.push(i4[e4]);}},f4);return h4;}a4.exports=pluck;},function(j4,k4){function prepend(l4,m4){if(m4===void 0){return n4=>prepend(l4,n4);}const o4=m4.concat();o4.unshift(l4);return o4;}j4.exports=prepend;},function(p4,q4){function prop(r4,s4){if(s4===void 0){return t4=>prop(r4,t4);}return s4[r4];}p4.exports=prop;},function(u4,v4){function propEq(w4,x4,y4){if(x4===void 0){return(z4,A4)=>propEq(w4,z4,A4);}else if(y4===void 0){return B4=>propEq(w4,x4,B4);}return y4[w4]===x4;}u4.exports=propEq;},function(C4,D4){function range(E4,F4){const G4=[];for(let i=E4;i<F4;i++){G4.push(i);}return G4;}C4.exports=range;},function(H4,I4){function repeat(a,J4){if(J4===void 0){return K4=>repeat(a,K4);}const L4=Array(J4);return L4.fill(a);}H4.exports=repeat;},function(M4,N4){function replace(O4,P4,Q4){if(P4===void 0){return(R4,S4)=>replace(O4,R4,S4);}else if(Q4===void 0){return T4=>replace(O4,P4,T4);}return Q4.replace(O4,P4);}M4.exports=replace;},function(U4,V4){function sort(fn,X4){if(X4===void 0){return Y4=>sort(fn,Y4);}const Z4=X4.concat();return Z4.sort(fn);}U4.exports=sort;},function(a5,b5){function sortBy(fn,d5){if(d5===void 0){return e5=>sortBy(fn,e5);}const f5=d5.concat();return f5.sort((a,b)=>{const g5=fn(a),h5=fn(b);return g5<h5?-1:g5>h5?1:0;});}a5.exports=sortBy;},function(i5,j5){function split(k5,l5){if(l5===void 0){return m5=>split(k5,m5);}return l5.split(k5);}i5.exports=split;},function(n5,o5){function splitEvery(p5,a){if(a===void 0){return q5=>splitEvery(p5,q5);}p5=p5>1?p5:1;const r5=[];let s5=0;while(s5<a.length){r5.push(a.slice(s5,s5+=p5));}return r5;}n5.exports=splitEvery;},function(t5,u5){function subtract(a,b){if(b===void 0){return v5=>subtract(a,v5);}return a-b;}t5.exports=subtract;},function(w5,x5,y5){const z5=y5(3);function tail(A5){return z5(1,A5);}w5.exports=tail;},function(B5,C5,D5){const E5=D5(1);function take(F5,a){if(a===void 0){return G5=>take(F5,G5);}else if(typeof a==="string"){return a.slice(0,F5);}return E5(a,0,F5);}B5.exports=take;},function(H5,I5,J5){const K5=J5(1);function takeLast(L5,a){if(a===void 0){return M5=>takeLast(L5,M5);}const N5=a.length;L5=L5>N5?N5:L5;if(typeof a==="string"){return a.slice(N5-L5);}L5=N5-L5;return K5(a,L5,N5);}H5.exports=takeLast;},function(O5,P5){function test(Q5,R5){if(R5===void 0){return S5=>test(Q5,S5);}return R5.search(Q5)===-1?!1:!0;}O5.exports=test;},function(T5,U5){function toLower(V5){return V5.toLowerCase();}T5.exports=toLower;},function(W5,X5){function toUpper(Y5){return Y5.toUpperCase();}W5.exports=toUpper;},function(Z5,a6){function trim(b6){return b6.trim();}Z5.exports=trim;},function(c6,d6,e6){const f6=e6(2);function uniq(g6){let h6=-1;const i6=[];while(++h6<g6.length){const j6=g6[h6];if(!f6(j6,i6)){i6.push(j6);}}return i6;}c6.exports=uniq;},function(k6,l6){function update(m6,n6,o6){if(n6===void 0){return(p6,q6)=>update(m6,p6,q6);}else if(o6===void 0){return r6=>update(m6,n6,r6);}const s6=o6.concat();return s6.fill(n6,m6,m6+1);}k6.exports=update;},function(t6,u6){function values(v6){const w6=[];for(key in v6){w6.push(v6[key]);}return w6;}t6.exports=values;}]);});