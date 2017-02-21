<template>
  <div class="content">
    <div class="nav-bar">
      <div class="cell text">共{{total}}条数据</div>
      <div class="float-right cell">
        <el-button @click="createNewEnterprise"><i class="el-icon-plus"></i> 新增</el-button>
      </div>
    </div>
    <div v-show="!showHeder" class="toolbar">
      <div class="cell">
        <el-checkbox-group v-model="checkedEnters" @change="selectFunc">
          <el-checkbox label="全选"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="cell margin-right-20">
        <el-button size="small">下载</el-button>
      </div>
      <div class="cell">
        已经选择<i class="selects">{{selects}}</i>/{{total}}
      </div>
      <div class="cell float-right margin-right-20">
        <el-button type="text" @click="removeToolBar">X 取消</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      ref="table"
      style="width: 100%"
      header-align="center"
      :show-header="showHeder"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        align="center"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        label="企业名称"
        prop="name">
      </el-table-column>
      <el-table-column
        align="center"
        label="项目名称"
        prop="projectName">

      </el-table-column>
      <el-table-column
        align="center"
        label="申请日期">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ new Date(scope.row.nameApprovalDate).format("yyyy-MM-dd") }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="业务状态">
        <template scope="scope">
          <el-tag type="success" v-if="scope.row.auditState=='NAME_APPROVAL'"><i class="el-icon-circle-check"></i> 已完结</el-tag>
          <el-tag type="primary" v-if="scope.row.auditState=='DRAFT'"><i class="el-icon-warning"></i> 待提交</el-tag>
          <el-tag type="warning" v-if="scope.row.auditState=='NAME_APPROVAL'"><i class="el-icon-warning"></i> 待审核</el-tag>
          <el-tag type="danger" v-if="scope.row.auditState=='NAME_APPROVAL'"><i class="el-icon-warning"></i> 待修改</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-popover placement="top">
            <p>确认删除企业: {{ scope.row.name }}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="confirmDelete(scope.row,this)">取消</el-button>
              <el-button size="mini" type="primary"  @click="cancelDelete(scope.row,this)">确定</el-button>
            </div>
            <el-button slot="reference" size="small">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      @current-change="changeTablePage">
    </el-pagination>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex'
import $ from 'jquery';
import {Table,TableColumn,Pagination,Button,Popover,Tag,Icon,Tooltip,Checkbox,CheckboxGroup} from 'element-ui';
Vue.use(Table);Vue.use(TableColumn);Vue.use(Pagination);Vue.use(Button);Vue.use(CheckboxGroup);
Vue.use(Popover);Vue.use(Tag);Vue.use(Icon);Vue.use(Tooltip);Vue.use(Checkbox);
  export default {
    data:function(){
      return {
        tableData:this.$store.state.enterprisesTable.enterprises,
        pageSize:this.$store.state.enterprisesTable.params.pageSize,
        showHeder:true,
        checkedEnters:[]
      };
    },
    computed:{
      selects:function(){
        return 0;
      },
      total:function(){
        return this.$store.state.enterprisesTable.total;
      },
      currentPage:function(){
        return this.$store.state.enterprisesTable.params.page;
      }
    },
    methods: {
      createNewEnterprise(){
        this.$router.push("./createStepFirst");
        this.$store.commit("setBlankEnterprise");
        this.$store.commit("setHeader",{type:"hide",mount:"header"});
      },
      handleEdit(index, row) {
        console.log(this.tableData);
        this.$store.commit("setHeader",{type:"hide"});
      },
      handleDelete(index, row) {
      },
      removeToolBar(){
        this.showHeder=true;
      },
      handleSelectionChange(selection) {
        this.showHeder=false;
        this.multipleSelection = selection;
        if(selection.length==this.tableData.length){
          this.checked=true;
        }else{
          this.checked=false;
        }
      },
      selectFunc:function(){
        if(this.checkedEnters.length>0){
          this.$refs.table.clearSelection();
          this.$refs.table.store.commit("toggleAllSelection");
        }else{
          this.$refs.table.clearSelection();
        }
      },
      changeTablePage:function(val){
        this.$store.commit("changeEntTable",{type:"page",page:val});
        this.reloadEntTable();
      },
      confirmDelete(row,obj){
        console.log(row,obj);
      },
      cancelDelete(row,obj){
        console.log(row,obj);
      },
      ...mapActions([
        "initUser",
        'reloadEntTable' // 映射 this.increment() 为 this.$store.dispatch('increment')
      ])
    },
    beforeMount:function(){
      this.initUser();
      this.reloadEntTable();
    }
  }
</script>
<style scoped>
  .el-checkbox-group{
    width:100px;
  }
  .name-wrapper{
    width:50px;
  }
  .nav-bar{
    height:40px;
    vertical-align: middle;
  }
  .toolbar{
    background:#eff8ff;
    padding-left: 19px;
    line-height: 2.4em;
    border:1px solid #3089c6;
  }
  .toolbar .cell,
  .nav-bar .cell{
    display: inline-block;
  }
  .nav-bar .text{
    line-height: 2em;
  }
  .toolbar .selects{
    color:red;
  }
  .margin-right-20{
    margin-right: 20px;
  }
  .float-right{
    float:right;
  }
  .content{
    padding:50px 40px;
    min-height: 800px;
  }
  .el-pagination{
    margin-top:30px;
  }
  .hidden{
    display: none;
  }
  .name-wrapper{
    margin:0 auto;
  }
  .button-wrapper{
    display: inline-block;
  }
</style>
