import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Notification} from 'element-ui';
Vue.use(Vuex);
Vue.use(VueResource);
// Vue.use(Notification);
const state = {
  enterprise: {
    id: undefined,
    projectName: undefined,
    letterMailAddress: undefined,
    letterMailReceiveName: undefined,
    letterMailReceiveMobile: undefined,
    chairmanExpress: {//法人身份回寄地址
      id: undefined,
      name: undefined,
      address: undefined,
      mobile: undefined,
      weChart: undefined
    },
    entEdition: "web",
    entStatus: "1",
    name: undefined,
    auditState: undefined,
    type: "合伙企业",
    nameApprovalDepartment: "宁波市工商行政管理局镇海分局",
    nameApprovalDate: undefined,
    authorizeStartTime: undefined,
    authorizeEndTime: undefined,
    authority: undefined,
    applicant: undefined,
    chairman: undefined,
    chairmanOrganName: undefined,
    financeman: undefined,
    contact: undefined,
    setupInfo: undefined,
    partnerInfos: [],
    baDocs: [],
    partnerAgreementOssKey: undefined, //合伙协议
    msg: undefined,
  },
  setupInfo: {
    id: undefined,
    enterpriseId: undefined,
    backupName: undefined,
    bankAuthorizer: undefined,
    bankOperator: undefined,
    bankReceiptor: undefined,
    operatePlace: undefined,
    productPlace: undefined,
    fixedPhoneNum: undefined,
    postcode: undefined,
    partnerEntType: "有限合伙企业",
    checkedContributionAmount: undefined,
    operationRange: undefined,
    partnerNum: undefined,
    limitedPartnerNum: undefined,
    workerNum: undefined
  },
  //企业列表
  enterprisesTable: {
    enterprises: [],
    params:{
      page:1,
      pageSize: 20,
      processed:false
    },
    total: 10
  },
  //头部是否显示
  header:true,
  footer:true,
  //当前登陆用户
  user:{
    name:"管理员"
  }
};

const mutations = {
  setHeader(state,payload){
    if(payload.type=="show"){
      state[payload.mount]=true;
    }else if(payload.type=="hide"){
      state[payload.mount]=false;
    }
  },
  changeEntTable({enterprisesTable},payload){
    if(payload){
      if(payload.type=="page"){
        enterprisesTable.params.page=payload.page;
      }else if(payload.type=="enterprises"){
        enterprisesTable.enterprises.splice(0,enterprisesTable.enterprises.length);
        enterprisesTable.enterprises.push(...payload["enterprises"]);
      }else if(payload.type =="total"){
        enterprisesTable.total=payload.total;
      }else if(payload.type =="processed"){
        enterprisesTable.params.processed=payload["processed"];
      }
    }
  },
  setBlankEnterprise:function(){
    let enterprise=state.enterprise;
    enterprise.id= undefined;
    enterprise.projectName = undefined;
    enterprise.letterMailAddress = undefined;
    enterprise.letterMailReceiveName = undefined;
    enterprise.letterMailReceiveMobile = undefined;
    enterprise.entEdition = "web",
    enterprise.entStatus = "1";
    enterprise.name = undefined;
    enterprise.auditState = undefined;
    enterprise.type = "合伙企业";
    enterprise.nameApprovalDepartment = "宁波市工商行政管理局镇海分局";
    enterprise.nameApprovalDate = undefined;
    enterprise.authorizeStartTime = undefined;
    enterprise.authorizeEndTime = undefined;
    enterprise.authority = undefined;
    enterprise.applicant = undefined;
    enterprise.chairman = undefined;
    enterprise.chairmanOrganName = undefined;
    enterprise.financeman = undefined;
    enterprise.contact = undefined;
    enterprise.setupInfo = undefined;
    enterprise.partnerInfos = [];
    enterprise.baDocs = [];
    enterprise.partnerAgreementOssKey = undefined; //合伙协议
    enterprise.msg = undefined;
  }
};
const http=Vue.http;
const actions = {
  reloadEntTable({ commit,state },payload){
    commit("changeEntTable",payload);
    let params=state.enterprisesTable.params;
    http.get("../../service/ba/enterprise",{params:params}).then(function(response){
      response=response.data;
      let data=response.data;
      commit("changeEntTable",{type:"total",total:response.total});
      commit("changeEntTable",{type:"enterprises",enterprises:data});
    },errorHandler);
  },
  logOut(){
    let param={};
    http.get("../../service/ba/account/logout",param).then(function(response){
      window.location.href="../../static/index.html";
    },errorHandler);
  },
  initUser(){
    http.get("../../service/ba/account/login?name=applicant&password=Tsign123",{}).then(function(response){},errorHandler);
  }
};
function errorHandler(response){
  Notification({
    type:"error",
    title:"出错啦",
    message:"网络出错",
    duration:3000
  });
}
const getters = {};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
