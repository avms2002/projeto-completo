(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73759],{892703:(e,t,r)=>{"use strict";var o=r(150414);function i(){}e.exports=function(){function e(e,t,r,i,s,n){if(n!==o){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=i,r.PropTypes=r,r}},45697:(e,t,r)=>{e.exports=r(892703)()},150414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},78273:(e,t,r)=>{"use strict";function o(e){return"/"===e.charAt(0)}function i(e,t){for(var r=t,o=r+1,i=e.length;o<i;r+=1,o+=1)e[r]=e[o];e.pop()}r.d(t,{Z:()=>s});let s=function(e,t){void 0===t&&(t="");var r,s=e&&e.split("/")||[],n=t&&t.split("/")||[],a=e&&o(e),d=t&&o(t),c=a||d;if(e&&o(e)?n=s:s.length&&(n.pop(),n=n.concat(s)),!n.length)return"/";if(n.length){var u=n[n.length-1];r="."===u||".."===u||""===u}else r=!1;for(var l=0,p=n.length;p>=0;p--){var _=n[p];"."===_?i(n,p):".."===_?(i(n,p),l++):l&&(i(n,p),l--)}if(!c)for(;l--;l)n.unshift("..");!c||""===n[0]||n[0]&&o(n[0])||n.unshift("");var y=n.join("/");return r&&"/"!==y.substr(-1)&&(y+="/"),y}},702177:(e,t,r)=>{"use strict";function o(e,t){if(!e)throw Error("Invariant failed")}r.d(t,{Z:()=>o})},495429:(e,t,r)=>{"use strict";function o(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}r.d(t,{Z:()=>i});let i=function e(t,r){if(t===r)return!0;if(null==t||null==r)return!1;if(Array.isArray(t))return Array.isArray(r)&&t.length===r.length&&t.every(function(t,o){return e(t,r[o])});if("object"==typeof t||"object"==typeof r){var i=o(t),s=o(r);return i!==t||s!==r?e(i,s):Object.keys(Object.assign({},t,r)).every(function(o){return e(t[o],r[o])})}return!1}},342513:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(667294);function i(e,t){let r="consumer"===t?`${e}Consumer`:`use${e}`;return`
  ${r} must be used within a ${e}Provider.
  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.
  `}function s(e,t){let r;let s=(0,o.createContext)(t),n=(r=(r=e.slice(1)).endsWith("Context")?r:`${r}Context`,`${e[0].toUpperCase()}${r}`);s.displayName=n;let{Provider:a}=s,d=({children:e})=>{let t=(0,o.useContext)(s);if(void 0===t)throw Error(i(n,"consumer"));return e(t)},c=()=>(0,o.useContext)(s);return a.displayName=`${n}Provider`,d.displayName=`${n}Consumer`,{Provider:a,Consumer:d,MaybeConsumer:({children:e})=>e((0,o.useContext)(s)),useMaybeHook:c,useHook:function(){let e=c();if(void 0===e)throw Error(i(n,"hook"));return e}}}},105737:(e,t,r)=>{"use strict";function o(e,t,r){if(e.length!==t.length)return!1;for(let o=0;o<e.length;o+=1)if(!s(e[o],t[o],r+1))return!1;return!0}function i(e,t,r){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let o in e)if(!(o in t)||!s(e[o],t[o],r+1))return!1;return!0}function s(e,t,r){if(r>=1e3)return!1;if(e===t)return!0;if(null==e||null==t||"object"!=typeof e&&"object"!=typeof t)return e!=e&&t!=t;let s=Object.prototype.toString.call(e);if(s!==Object.prototype.toString.call(t))return!1;switch(s){case"[object Array]":return o(e,t,r);case"[object Set]":return o(Array.from(e).sort(),Array.from(t).sort(),r);case"[object Object]":case"[object Arguments]":return i(e,t,r);case"[object Map]":return i(Object.fromEntries(e),Object.fromEntries(t),r);case"[object RegExp]":return e+""==t+"";case"[object Error]":return e.name===t.name&&e.message===t.message;default:return!1}}function n(e,t){return s(e,t,0)}r.d(t,{ZP:()=>n,qP:()=>o})},26616:(e,t,r)=>{"use strict";r.d(t,{$S:()=>o,V$:()=>i,_4:()=>n,iY:()=>a,mR:()=>s});let o="REFRESH_ALL_EXPERIENCES_MULTI",i="UPDATE_EXPERIENCE_MULTI",s="FETCH_EXPERIENCES",n="REFRESH_ALL_EXPERIENCES",a="UPDATE_EXPERIENCE"},201417:(e,t,r)=>{"use strict";function o(e){return"object"==typeof e&&null!==e&&e.constructor===Object&&"[object Object]"===Object.prototype.toString.call(e)}r.d(t,{Z:()=>o})},996523:(e,t,r)=>{"use strict";r.d(t,{Z:()=>function e(t,r,o=()=>void 0){let i=o(t,r);return void 0!==i?i:void 0===r?t:Array.isArray(t)&&Array.isArray(r)?r.reduce((t,i,s)=>(t[s]=e(t[s],r[s],o),t),[...t]):t&&"object"==typeof t&&r&&"object"==typeof r?Object.keys(r).reduce((t,i)=>(t[i]=e(t[i],r[i],o),t),{...t}):r}})},340523:(e,t,r)=>{"use strict";r.d(t,{F:()=>i,a:()=>o});let{Provider:o,useHook:i}=(0,r(342513).Z)("ExperimentContext")},466385:(e,t,r)=>{"use strict";function o(e,t,r){let o=[...e],i=o.splice(t,1)[0];return o.splice(r,0,i),o}r.d(t,{Z:()=>o})},379316:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(624797),i=r(139655);function s(e){if(!e)return"";let{directory:t,queryKey:r}=(0,i.Z)((0,o.Gw)(e,["request_params"]));return t+"?"+Object.keys(r).sort().map(e=>`${e}=${r[e]}`).join("&")}},414630:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>n,Tb:()=>s});var o=r(379316),i=r(447479);function s({appliedFilters:e,appliedProductFilters:t,autoCorrectionDisabled:r,filters:o,journeyDepth:i,query:s,rs:n,scope:a,selectedOneBarModules:d,selectedPinImgSig:c,sourceId:u,sourceModuleId:l,topPinIds:p,user:_}){let y=[t,o,i,s,n,a,d,c,u,l,e?.filters?e.filters.map(e=>e.filter_options?.length>0?e.filter_options.map(t=>`${e?.filter_id}.${t.filter_option_id}`).join("-"):e?.filter_id).join("-"):"",p,_].map(e=>e??"").join(":");return r?"auto-correction-disabled:"+y:y}function n(e){let{appliedFilters:t,appliedProductFilters:r,autoCorrectionDisabled:s,bubbleId:n,domains:a,filters:d,guidedSearchQuery:c,journeyDepth:u,pageSize:l,priceMax:p,priceMin:_,query:y,rs:E,scope:f,selectedOneBarModules:R,selectedPinImgSig:m,sourceId:b,sourceModuleId:I,sourceUrl:g,topPinId:S,topPinIds:T,user:A}=e;return{name:"BaseSearchResource",options:function({appliedFilters:e=null,appliedProductFilters:t=null,autoCorrectionDisabled:r=!1,bubbleId:s=null,domains:n=null,filters:a=null,journeyDepth:d=null,pageSize:c=null,priceMax:u=null,priceMin:l=null,query:p=null,rs:_=i.i.DIRECT_NAVIGATION,scope:y="pins",selectedOneBarModules:E=null,selectedPinImgSig:f=null,sourceId:R=null,sourceModuleId:m=null,sourceUrl:b=null,topPinId:I=null,topPinIds:g=null,user:S}){return{applied_filters:e,appliedProductFilters:t,article:s,auto_correction_disabled:r,corpus:f?"personalize":null,customized_rerank_type:f?"manas_graph_sage_only_wand_rewrite":null,domains:n,filters:a,journey_depth:d,page_size:c,price_max:u,price_min:l,query_pin_sigs:f,query:p,redux_normalize_feed:!0,rs:_,scope:y,selected_one_bar_modules:E,source_id:R,source_module_id:m,source_url:(0,o.Z)(b),top_pin_id:I,top_pin_ids:g,user:S}}({appliedFilters:t,appliedProductFilters:r,autoCorrectionDisabled:!!s,bubbleId:n,domains:a,filters:d,guidedSearchQuery:c,journeyDepth:u,pageSize:l,priceMax:p,priceMin:_,query:y,rs:E,scope:f,selectedOneBarModules:R,selectedPinImgSig:m,sourceId:b,sourceModuleId:I,sourceUrl:g,topPinId:S,topPinIds:T,user:A})}}},689390:(e,t,r)=>{"use strict";function o(e){if((e||"").includes("--")){let t=e.split("--"),r=t.pop();return{text:t.join("--"),pinId:r}}return{text:"",pinId:e}}r.d(t,{Z:()=>o})},945488:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});let o=(e,t)=>`${e}:${t||""}`},937310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});let o={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",TRIED_IT_FEED:"trieditfeed"}},670633:(e,t,r)=>{"use strict";r.d(t,{J:()=>R,Z:()=>T});var o=r(466385),i=r(419821),s=r(414630),n=r(945488),a=r(539426),d=r(949457),c=r(937310),u=r(29301);let l=new Set(["PinResource","RepinResource"]),p={ApiResource:e=>e?.url==="/v3/orientation/nux_creator_recommendations/"?"nux-creator-recommendations":e?.url==="/v3/users/me/interests/"?`recommended-interests:${e.data?.blend_type}`:"",AggregatedActivityFeedResource:e=>`trieditfeed:${e.aggregated_pin_data_id}`,AggregatedCommentFeedResource:e=>`aggregated-comments:${e.objectId}`,AggregatedCommentReplyFeedResource:e=>`${c.Z.AGGREGATED_COMMENT_REPLIES}:${e.objectId}`,BoardlessPinsResource:e=>`boardless-pins:${e.userId}`,BestPinsFeedAltResource:e=>`idea-page-best-pins:${e.interest}`,BoardArchiveResource:()=>"archived-boards",BoardContentRecommendationResource:e=>`recommendation-feed:${e.id}`,BoardFeedResource:e=>`boardfeed:${e.board_id}`,BoardSectionsRepinResource:e=>`board-sections:${e.board_id}`,BoardSectionsResource:e=>`board-sections:${e.board_id}`,BoardSectionPinsResource:e=>`board-section-pins:${e.section_id}`,BoardsFeedResource:e=>`profile-boards:${e.username}`,BoardToolsFeedResource:e=>`board-tools:${e.boardId}`,ConversationsResource:()=>"conversations",DidItLikedByResource:e=>`triedit-likes:${e.didItDataId}`,DidItUserFeedResource:e=>`profile-tried:${e.username}`,HolidaySpotlightResource:e=>`holiday-spotlight:${e.storyType}`,InterestResource:e=>`klp-pins:${e.interest}`,MoreIdeasTabsBoardsResource:()=>"homefeed-more-ideas-tabs",NewsHubResource:()=>"notifications",NewsHubDetailsResource:e=>`newshubdetail:${e.news_id}`,NuxInterestsResource:()=>"nuxTopics",PinsFromBrandResource:e=>`brand-pins:${e.pin}`,ReactionsResource:e=>`reactions:${e.pin_id}`,RelatedArticlesResource:e=>`related-articles:${e.article_id}`,RelatedModulesResource:e=>`related-modules:${e.pin_id}`,RelatedPinFeedResource:e=>`related-pins:${e.pin}`,RelatedProductFeedResource:e=>"pin"===e.shop_source?`closeup-related-products:${e.pin}`:`related-products:${e.pin}`,RelatedStreamResource:e=>`related-story-pins:${e.pinId}`,SearchResource:e=>{let t=`search:${e.scope}:${e.query}:${e.filters||""}:${e.article||""}`;return e.auto_correction_disabled?`${t}:auto-correction-disabled`:t},BaseSearchResource:e=>{let{appliedProductFilters:t,article:r,auto_correction_disabled:o,filters:i,journey_depth:s,query:n,scope:a,selected_one_bar_modules:d,source_id:c,source_module_id:l,top_pin_ids:p}=e;return`search:${(0,u.Z)({appliedFilters:t,article:r,autoCorrectionDisabled:o,filters:i,journeyDepth:s,query:n,scope:a,selectedOneBarModules:d,sourceId:c,sourceModuleId:l,topPinIds:p})}`},SectionToolsFeedResource:e=>`section-tools:${e.sectionId}`,ShareSuggestionsTypeaheadResource:e=>`share-suggestions:${e.board||e.user}:${e.term}`,ShoppingFeedModularizedResource:e=>e.saved_products_only?`board-shop-saved:${e.board_id}`:`board-shop-related:${e.board_id}`,StoryFeedResource:e=>`story-feed:${e.feed_type}:${e.request_params}`,SuggestedCreatorFollowsResource:()=>"suggested-creator-follows",StoryPinTaggedProductsResource:()=>"story-pin-tagged-products",TodayArticleFeedResource:e=>`today-article:${e.id}`,IdeasHubTodayArticlesResource:e=>`today-article:${e.interest_id}`,TodayTabInterestFeedResource:e=>`today-article-interestfeed:${e.interest_id}`,TodayTabResource:()=>"today-tab",SeoTier1CandidateResource:()=>"tier1-feed",UnifiedCommentsResource:e=>`unified-comments:${e.aggregated_pin_id}`,UserActivityPinsResource:e=>`profile-pins-feed:${e.user_id}`,UserHomefeedResource:e=>e.pin_quiz?"pin-quiz":"homefeed",UserFollowingResource:e=>`user-following:${e.username}`,UserRecentActivityResource:e=>`user-recent-activity:${e.filter_type}`,UserStoryPinsFeedResource:e=>`story-pins-feed:${e.user_id}`,VideosFeedResource:()=>"videos-feed",VisualLiveSearchResource:e=>`visual-search:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualLiveSearchProductFeedResource:e=>`visual-search-products:${e.pin_id}:${e.crop.x}${e.crop.y}${e.crop.w}${e.crop.h}`,VisualSearchFlashlightUnifiedResource:e=>`related-products-unified:${e.pin_id}`,BoardFollowingResource:e=>`board-following:${e.username}`,InterestFollowingResource:e=>`topic-following:${e.username}`,UserPinsResource:e=>`profile-pins:${e.username}`,TopicFeedResource:e=>e.best_pins?`best-topic-pins:${e.interest}`:`topic-pins:${e.interest}`},_={AggregatedActivityFeedResource:({options:{aggregated_pin_data_id:e}})=>({type:c.Z.TRIED_IT_FEED,id:e}),AggregatedCommentFeedResource:({options:{objectId:e}})=>({type:c.Z.AGGREGATED_COMMENTS,id:e}),AggregatedCommentReplyFeedResource:({options:{isUnifiedComment:e,objectId:t}})=>({type:e?c.Z.AGGREGATED_COMMENT_REPLIES:c.Z.AGGREGATED_COMMENTS,id:t,reversed:!0}),BoardFeedResource:({options:{board_id:e}})=>({type:c.Z.BOARDFEED,id:e}),BoardlessPinsResource:({options:{userId:e}})=>({type:c.Z.BOARDLESS_PINS,id:e}),BoardSectionPinsResource:({options:{section_id:e}})=>({type:c.Z.BOARD_SECTION_PINS,id:e}),BoardSectionsResource:({options:{board_id:e}})=>({type:c.Z.BOARD_SECTIONS,id:e}),BoardsResource:({options:{username:e,sort:t}})=>({type:c.Z.PROFILE_BOARDS,id:(0,n.Z)(e,t)}),BaseSearchResource:({options:{appliedFilters:e,appliedProductFilters:t,auto_correction_disabled:r,filters:o,journey_depth:i,query_pin_sigs:n,query:a,rs:d,scope:u,selected_one_bar_modules:l,source_id:p,source_module_id:_,top_pin_ids:y,user:E},response:f})=>({type:c.Z.SEARCH_PINS,id:(0,s.Tb)({appliedFilters:e,appliedProductFilters:t,autoCorrectionDisabled:r,filters:o,journeyDepth:i,query:a,rs:d,scope:u,selectedOneBarModules:l,selectedPinImgSig:n,sourceId:p,sourceModuleId:_,topPinIds:y,user:E}),items:f.resource_response.data?.results||[]}),DidItCommentsResource:({options:{objectId:e}})=>({type:c.Z.AGGREGATED_COMMENTS,id:e,reversed:!0}),DidItUserFeedResource:({options:{username:e}})=>({type:c.Z.TRIED_IT_FEED,id:e}),IdeasHubTodayArticlesResource:({options:{interest_id:e}})=>({type:c.Z.TODAY_TAB,id:e}),RelatedArticlesResource:({options:{article_id:e}})=>({type:c.Z.TODAY_TAB,id:e}),StoryPinDraftsResource:({options:{userId:e}})=>({type:c.Z.STORY_PIN_DATA,id:e}),TodayTabInterestFeedResource:({options:{interest_id:e}})=>({type:c.Z.TODAY_ARTICLE_INTEREST_FEED,id:e}),TodayTabResource:()=>({type:c.Z.TODAY_TAB,id:"todayTab"}),UnifiedCommentsPreviewResource:({options:{aggregated_pin_id:e}})=>({type:c.Z.UNIFIED_COMMENTS,id:e}),UnifiedCommentsResource:({options:{aggregated_pin_id:e,is_reversed:t}})=>({type:c.Z.UNIFIED_COMMENTS,id:e,reversed:t}),UserActivityPinsResource:({options:{user_id:e}})=>({type:c.Z.PROFILE_PINS_FEED,id:e}),UserStoryPinsFeedResource:({response:e,options:{user_id:t}})=>({type:c.Z.STORY_PINS_FEED,id:t,items:e.resource_response.data||[]})},y=(e,{pinId:t,feedId:r})=>e[r]?{...e,[r]:e[r].filter(e=>!("pin"===e.type&&e.id===t))}:e,E=(e,{pinId:t,feedId:r})=>e[r]?{...e,[r]:[{type:"pin",id:t},...e[r]]}:e,f=(e,{pinId:t,oldFeedId:r,newFeedId:o})=>r===o?e:E(y(e,{pinId:t,feedId:r}),{pinId:t,feedId:o}),R=(e,t)=>e in p?p[e](t):null,m=(e,t)=>{switch(e.type){case"story":return{id:e.id??"",type:"story",story_type:e.story_type};case"module":return{id:e.id,type:"module",name:e.name};case"user":return{id:e.id,type:"user"};case"board":return t===c.Z.PROFILE_BOARDS?{id:e.id,type:"board",onProfile:!0,profileGroup:e.archived_by_me_at?"archived":e.privacy||"public"}:{id:e.id,type:"board",onProfile:!1};case"board_section":return{type:"boardsection",id:e.id};case"triedit":return{type:"triedit",id:e.id};case"aggregatedcomment":return{type:"aggregatedcomment",id:e.id};case"home_feed_tab":return{type:"home_feed_tab",id:e.id,name:e.name};case"storypindata":return{id:e.id,type:"storypindata"};case"todayarticle":return{type:"todayarticle",id:e.id};case"unifiedcommentspreview":return"userdiditdata"===e.unified_comment.type?{type:"triedit",id:e.unified_comment.id}:{type:"aggregatedcomment",id:e.unified_comment.id};default:return{type:"pin",id:e.id}}},b=(e,t)=>t?`board-section-pins:${t}`:`boardfeed:${e}`,I=(e,t,r)=>{let o=r||a.Z[e];if(o===d.LR)return t.result;if(o===d.sN)return t.result.map(e=>({id:e,schema:"board"}));if(o===d.Gn)return t.result.map(e=>({id:e,schema:"user"}));if(o===d.Ht)return t.result.map(e=>({id:e,schema:"invite"}));if(o===d.fE)return t.result.map(e=>({id:e,schema:"reaction"}));if("object"==typeof o){let e=Object.entries(o).find(([,e])=>e===d.LR);if(e)return t.result[e[0]]}return null},g=(e,t)=>e.map(e=>{let{id:r,schema:o,type:i}=e;return"home_feed_tabs"===i?e:o?{id:r,type:o,trackingParams:"pin"===o?t.pins[r].tracking_params:void 0,user_id:void 0}:null}).filter(Boolean),S=(e,t,r)=>Object.keys(e).reduce((o,i)=>{let s=e[i]||[],n=s.filter(e=>!(e.type===t&&e.id===r));return s.length!==n.length&&(o[i]=n),o},{...e}),T=(e={},t)=>{switch(t.type){case i.zP:case i.aW:{let{payload:r}=t,{resource:o,options:s,normalizedResponse:n,schema:a}=r;if(n&&o in p){let r=I(o,n,a);if(r&&Array.isArray(r)){let a=p[o](s);if("ShoppingFeedModularizedResource"===o){let{board_id:t,saved_products_only:o}=s??{},i=`board-shop-related:${t}`,a=`board-shop-saved:${t}`,d=`board-shop-saved-preview:${t}`,c=[...e[i]||[]],u=[...e[a]||[]],l=[...e[d]||[]];return g(r,n.entities).forEach(e=>{o?u.push(e):n.entities.pins&&n.entities.pins[e.id]?.board===t?l.push(e):c.push(e)}),{...e,[i]:c,[a]:u,[d]:l}}if("BoardToolsFeedResource"===o||"SectionToolsFeedResource"===o)return{...e,[a]:r};if("UnifiedCommentsResource"===o){let o=g(r,n.entities);if(e[a]&&(i.zP||i.aW===t.type))return{...e,[a]:[...e[a],...o]};return{...e,[a]:o}}{let o=[...t.type===i.aW&&e[a]||[],...g(r,n.entities)];return{...e,[a]:o}}}}else{let{data:o}=r.response.resource_response;if(!r.options?.redux_normalize_feed)return e;let s=_[r.resource]({options:r.options,response:r.response});if(s){let{type:r,id:n,items:a,reversed:d}=s,c=(a||o||[]).map(e=>m(e,r));d&&(c=c.reverse());let u=`${r}:${n}`,l=e[u];if(l||t.type!==i.aW){let r=l||[],o=c;return t.type===i.aW&&(o=d?c.concat(r):r.concat(c)),{...e,[u]:o}}}}break}case"FEED_ITEM_REORDERED":{let{payload:{feedType:r,feedId:i,itemType:s,targetItemId:n,sourceItemId:a}}=t,d=`${r}:${i}`,u=e[d]||[],l=-1,p=-1;if([c.Z.BOARDFEED,c.Z.BOARD_SECTION_PINS,c.Z.BOARD_SECTIONS,"profileBoards"].includes(r)&&(l=u.findIndex(e=>e.type===s&&e.id===a),p=u.findIndex(e=>e.type===s&&e.id===n)),-1!==l&&-1!==p)return{...e,[d]:(0,o.Z)(u,l,p)};break}case"FEED_ITEMS_REMOVED":{let{payload:{feedType:r,feedId:o,inverseSelection:i,itemType:s,itemIds:n=[]}}=t,a=`${r}:${o}`,d=e[a]||[];if(d&&d.length>0&&(r===c.Z.BOARD_SECTION_PINS||r===c.Z.BOARDFEED)){let t=d.filter(e=>{let t=n.includes(e.id);return!(e.type===s&&(i&&!t||!i&&t))}),r=!!t.find(e=>"pin"===e.type);return{...e,[a]:r?t:[]}}if(d&&d.length>0&&r===c.Z.BOARD_SECTIONS){let t=d.filter(e=>{let t=n.includes(e.id);return!(e.type===s&&t)});return{...e,[a]:t}}if(d&&d.length>0&&(r===c.Z.AGGREGATED_COMMENTS||r===c.Z.BOARDLESS_PINS||r===c.Z.PROFILE_PINS_FEED||r===c.Z.STORY_PINS_FEED||r===c.Z.UNIFIED_COMMENTS||r===c.Z.TRIED_IT_FEED||r===c.Z.STORY_PIN_DATA)){let t=d.filter(e=>{let t=n.includes(e.id);return!(e.type===s&&t)});return{...e,[a]:t}}break}case"FEED_ITEMS_ADDED":{let{payload:{feedType:r,feedId:o,itemType:i,itemIds:s=[],prepend:n}}=t,a=`${r}:${o}`,d=e[a]||[];if(d&&(r===c.Z.BOARD_SECTION_PINS||r===c.Z.BOARDFEED||r===c.Z.BOARDLESS_PINS)){let t=s.map(e=>({id:e,type:i})),r=0;"story"===(d[0]||{}).type&&(r=1),"story"===(d[1]||{}).type&&(r=2);let o=[...d.slice(0,r),...t,...d.slice(r)];return{...e,[a]:o}}if(d&&r===c.Z.BOARD_SECTIONS){let t=[...s].reverse().map(e=>({id:e,type:"boardsection"})),r=d?[...t,...d]:[...t];return{...e,[a]:r}}if(r===c.Z.AGGREGATED_COMMENTS||r===c.Z.AGGREGATED_COMMENT_REPLIES||r===c.Z.PROFILE_PINS_FEED||r===c.Z.STORY_PINS_FEED||r===c.Z.UNIFIED_COMMENTS){let t=s.map(e=>({id:e,type:i})),r=d?[...n?t:d,...n?d:t]:t;return{...e,[a]:r}}if(r===c.Z.TRIED_IT_FEED){let t=s.map(e=>({id:e,type:i})),r=d?[...t,...d]:t;return{...e,[a]:r}}break}case"FEED_INVALIDATE":{let{payload:{feedType:r,feedId:o}}=t,i=`${r}:${o}`;return e[i],{...e,[i]:null}}case"APPEND_FEED_ITEMS":{let{payload:{id:r,items:o,options:i}}=t,s=e[r];if(!s)return{...e,[r]:o};{let t;return t=i.isPrepend?s[0]&&"story"===s[0].type?[].concat(s[0],o,s.slice(1)):o.concat(s):s.concat(o),{...e,[r]:t}}}case"PIN_DELETE":{let{payload:{pinId:r}}=t;return S(e,"pin",r)}case"BOARD_ARCHIVE":{let{payload:{boardId:r,username:o}}=t,i=`profile-boards:${o??""}`;if(e[i])return{...e,[i]:e[i].filter(e=>e.id!==r)};break}case"BOARD_UNARCHIVE":{let{payload:{boardId:r}}=t,o="archived-boards";if(e[o])return{...e,[o]:e[o].filter(e=>e.id!==r)};break}case"BOARD_DELETE":{let{payload:{boardId:r}}=t;return S(e,"board",r)}case"BOARD_SECTION_DELETE":{let{payload:{boardSectionId:r}}=t;return S(e,"boardsection",r)}case"PINS_MOVE":{let{payload:{source:r,target:o,pinIds:i,userId:s}}=t,n=r.boardlessPins&&s&&`boardless-pins:${s}`||r.boardId&&b(r.boardId,r.sectionId),a=b(o.boardId,o.sectionId);return i.reduce((e,t)=>f(e,{pinId:t,oldFeedId:n,newFeedId:a}),e)}case"PINS_MOVE_ALL":{let{payload:{source:r,target:o,excludePinIds:i}}=t,s=b(r.boardId,r.sectionId),n=b(o.boardId,o.sectionId),a={...e,[s]:i.map(e=>({type:"pin",id:e}))};return delete a[n],a}case"PIN_EDIT":{let{payload:{pinId:r,boardId:o,sectionId:i="",source:{boardId:s,sectionId:n}}}=t;return f(e,{pinId:r,oldFeedId:b(s,n),newFeedId:b(o,i)})}case i.AF:if(l.has(t.payload.resource)){let r;let o=t.payload.response.resource_response.data,{board:i}=o;if("quick_saves"===i.layout)r=`boardless-pins:${t.payload.options.user_id}`;else{let e=t.payload.options.section;r=e?`board-section-pins:${e}`:`boardfeed:${i.id}`}if(e[r]){let t={...e},i={id:o.id,type:"pin",trackingParams:o?.tracking_params};return t[r]=[i].concat(e[r]),t}}if("BoardSectionResource"===t.payload.resource&&t.payload.normalizedResponse){let r=t.payload.normalizedResponse.result,o=t.payload.normalizedResponse.entities.boardsections[r].board,i=`board-sections:${o}`;if(e[i]){let t={...e};return t[i]=[{id:r,type:"boardsection"}].concat(e[i]),t}}if("AggregatedCommentResource"===t.payload.resource&&t.payload.normalizedResponse){let r={id:t.payload.normalizedResponse.result,type:"aggregatedcomment"},o={...e};for(let i of["aggregated-comments","unified-comments"]){let s=`${i}:${t.payload.options.objectId}`;e[s]&&(o={...o,[s]:[r].concat(o[s])})}return o}if("AggregatedCommentReplyResource"===t.payload.resource&&t.payload.normalizedResponse){let r=`${c.Z.AGGREGATED_COMMENT_REPLIES}:${t.payload.options.objectId}`;return{...e,[r]:[...e[r]||[],{id:t.payload.normalizedResponse.result,type:"aggregatedComment"}]}}if("ReactionsResource"===t.payload.resource&&t.payload.normalizedResponse){let{reaction_pin_id:r,reaction_type:o}=t.payload.options;if("reaction"===t.payload.options.action_type){let i=`reactions:${t.payload.options.pin_id}`,s={...e},n={id:`${r}:${t.payload.options.user_id}:${o}`,type:"reaction",trackingParams:void 0};return s[i]=[n].concat(e[i]),s}if("unreaction"===t.payload.options.action_type)return S(e,"reaction",`${r}:${t.payload.options.user_id}`)}break;case"COMPLETE_STORY":{let{payload:{storyId:r}}=t;return S(e,"story",r)}}return e}},706196:(e,t,r)=>{"use strict";function o(e){let[t,r]=e.split(/\/(.*)+/);return{filepath:r||"",site:t||""}}function i(e,t){return t?`${e||""}/${t}`:`/${e||""}`}r.d(t,{ac:()=>o,ke:()=>i})},908734:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,d:()=>i});let o="HIDDEN_ON_SERVER_ERROR",i=e=>e instanceof Object&&"message"in e&&e.message===o;function s({children:e}){if("undefined"==typeof window)throw Error(o);return e}},528252:(e,t,r)=>{"use strict";r.d(t,{DB:()=>c,SS:()=>a,WP:()=>s,z5:()=>d});var o=r(667294),i=r(706196);let s=(0,o.createContext)({anyEnabled:!1,group:""}),n={anyEnabled:!1,group:""};function a({experimentsClient:e,isAuthenticated:t,handlerId:r}){let{site:o}=(0,i.ac)(r??"");return"www"!==o?n:e?.checkExperiment(t?"web_early_hydration_auth":"web_early_hydration_unauth")??n}function d(){return(0,o.useContext)(s).anyEnabled}function c(){return(0,o.useContext)(s)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73759-4705d649209a5275.mjs.map