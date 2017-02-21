<template>
  <div class="content">
    <!-- 头部部分 -->
    <div class="top-bar">
      <div class="process"></div>
      <div class="title">
        <span class="center">新设企业(1/6)</span>
        <el-button type="text" class="float-right margin-right-20" @click="cancelStepFirst"><i class="el-icon-close" style="color:#ddd; font-size:26px;"></i></el-button>
        <el-button type="primary" class="float-right" style="margin-right:80px;vertical-align:middle;">&nbsp;&nbsp;保存&nbsp;&nbsp;</el-button>
      </div>
    </div>
    <!-- 头部部分 结束 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="rule-form">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Vue from 'vue';
import {Form,FormItem,Input,Select,Option,Col,TimePicker,DatePicker,Switch,RadioGroup,Radio} from 'element-ui';
Vue.use(Form);Vue.use(FormItem);Vue.use(Input);Vue.use(Option);Vue.use(Switch);Vue.use(RadioGroup);
Vue.use(Col);Vue.use(TimePicker);Vue.use(Select);Vue.use(DatePicker);Vue.use(Radio);

export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancelStepFirst(){
        this.$router.push("/");
      }
    }
  }
</script>
<style scoped>
.content{
  background: #fff;
  min-height: 900px;
}
.top-bar{
  width:100%;
  position: fixed;
  z-index: 21;
  background: #fff;
}
.title{
  padding: 16px 0;
  border-bottom: 1px solid #eee;
}
.float-right{
  float: right;
}
.process{
  height:10px;
  background-color: #c43e3e;
}
.margin-right-20{
  margin-right: 20px;
}
.rule-form{
  padding-top: 100px;
  position: static;
}
.content .center{
  font-size: 28px;
  font-weight: 500px;
  margin-left: 45%;
}
</style>
