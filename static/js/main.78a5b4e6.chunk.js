(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3h3z-","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__3-3IP"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2mxkB"}},23:function(e,t,a){e.exports={Button:"Button_Button__3CZvo"}},25:function(e,t,a){e.exports={Spinner:"Loader_Spinner__2_WLj"}},26:function(e,t,a){e.exports={Notice:"Notice_Notice__1a7nw"}},27:function(e,t,a){e.exports={ErrorNotice:"ErrorNotice_ErrorNotice__1mxVq"}},33:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2iCGL",SearchForm:"Searchbar_SearchForm__3h3Oe",SearchForm__button:"Searchbar_SearchForm__button__5Jxsv",SearchForm__button__label:"Searchbar_SearchForm__button__label__2iJTr",SearchForm__input:"Searchbar_SearchForm__input__36gUP"}},56:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),i=(a(33),a(13)),l=a(4),s=a(5),u=a.n(s),m=a(1),b=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(l.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{className:u.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(m.jsx)("button",{type:"submit",className:u.a.SearchForm__button,children:Object(m.jsx)("span",{className:u.a.SearchForm__button__label,children:"Search"})}),Object(m.jsx)("input",{className:u.a.SearchForm__input,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},j=a(12),_=a.n(j),g=function(e){var t=e.url,a=e.tags,r=e.largeImageURL;return Object(m.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:t,alt:a,className:_.a.ImageGalleryItem__image,"data-large-image":r})})},h=a(22),d=a.n(h),f=function(e){var t=e.images,a=e.onClick;return Object(m.jsx)("ul",{className:d.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,n=e.largeImageURL;return Object(m.jsx)(g,{url:a,tags:r,largeImageURL:n},t)}))})},O=a(23),p=a.n(O),S=function(e){var t=e.shouldRenderBtn,a=e.onButtonClick;return t&&Object(m.jsx)("button",{className:p.a.Button,type:"button",onClick:a,children:"Load more"})},x=(a(35),a(24)),v=a.n(x),I=a(25),y=a.n(I),N=function(){return Object(m.jsx)("div",{className:y.a.Spinner,children:Object(m.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:5e3})})},w=a(26),k=a.n(w),F=function(e){var t=e.notice;return t&&Object(m.jsx)("p",{className:k.a.Notice,children:t})},C=a(27),E=a.n(C),G=function(e){var t=e.error;return t&&Object(m.jsx)("p",{className:E.a.ErrorNotice,children:t.message})},B=a(9),L=a.n(B),M=document.querySelector("#modal-root"),U=function(e){var t=e.largeImageUrl,a=e.largeImageAlt,n=e.onClose;Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return Object(c.createPortal)(Object(m.jsx)("div",{className:L.a.Overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(m.jsx)("div",{className:L.a.Modal,children:Object(m.jsx)("img",{className:L.a.ModalImg,src:t,alt:a})})}),M)},P=(a(56),a(28)),R=a.n(P),q=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r,c=e.pageSize,o=void 0===c?12:c;return R.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=").concat("22552656-a52d92f58f7bf96e8efb5df9f","&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data}))},z=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),o=Object(l.a)(c,2),s=o[0],u=o[1],j=Object(r.useState)(""),_=Object(l.a)(j,2),g=_[0],h=_[1],d=Object(r.useState)(!1),O=Object(l.a)(d,2),p=O[0],x=O[1],v=Object(r.useState)(""),I=Object(l.a)(v,2),y=I[0],w=I[1],k=Object(r.useState)(!0),C=Object(l.a)(k,2),E=C[0],B=C[1],L=Object(r.useState)(null),M=Object(l.a)(L,2),P=M[0],R=M[1],z=Object(r.useState)(!1),J=Object(l.a)(z,2),T=J[0],A=J[1],D=Object(r.useState)(""),H=Object(l.a)(D,2),Q=H[0],V=H[1],W=Object(r.useState)(""),Y=Object(l.a)(W,2),Z=Y[0],K=Y[1];Object(r.useEffect)((function(){if(g){g?function(){var e={searchQuery:g,currentPage:s,pageSize:12};x(!0),q(e).then((function(e){var t=e.hits,a=e.totalHits;0!==a?((a<=12||t.length<12)&&B(!1),n((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):w("Images with '".concat(g,"' not found!"))})).catch((function(e){return R(e)})).finally((function(){return x(!1)}))}():n([])}}),[s,g]);var X=a.length>0&&E&&!p;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{onSubmit:function(e){g!==e&&(w(""),B(!0),R(null),h(e),u(1),n([]))}}),Object(m.jsx)(G,{error:P}),Object(m.jsx)(F,{notice:y}),Object(m.jsx)(f,{images:a,onClick:function(e){"IMG"===e.target.nodeName&&(V(e.target.dataset.largeImage),K(e.target.alt),A(!0))}}),T&&Object(m.jsx)(U,{largeImageUrl:Q,largeImageAlt:Z,onClose:function(){A(!1),V(""),K("")}}),N&&Object(m.jsx)(S,{onButtonClick:function(){u((function(e){return e+1}))},shouldRenderBtn:X})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2DE_Y",Modal:"Modal_Modal__2qEEj"}}},[[76,1,2]]]);
//# sourceMappingURL=main.78a5b4e6.chunk.js.map