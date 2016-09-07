import java.sql.*;
import java.sql.Date;
import java.util.*;

/**
 * Created by Administrator on 2016/4/8.
 */
public class ImportData {
        static String sql1="select id,name,createDate from project where name = ? ";
        static String sql2="select count(account.id) allAccount from account where account.fromProject = ? ";
        static String sql3="select count(signlog.id) allSignLog from signlog where signlog.uid = (select account.id from account where account.projectId = ? )";
        static String sqlstore="CALL createSignlog(?,?,?,?)";


        static Connection con;
        static {
                try {
                        Class.forName("com.mysql.jdbc.Driver");
                        String url = "jdbc:mysql://localhost:3306/test" ;
                        String username = "root" ;
                        String password = "123456" ;
                        con = DriverManager.getConnection(url , username , password ) ;

                } catch (Exception e) {
                        e.printStackTrace();
                }

        }




        public static void main(String[] args) throws  Exception{
                init();

                for(Map.Entry<String,Integer> per:project.entrySet()){
                        excutePer(per.getKey(),per.getValue());
                }


        }

        public static void excutePer( String projectName,Integer AllSignlogAcount) throws Exception{

                PreparedStatement stmt1 = con.prepareStatement(sql1);
                stmt1.setString(1,projectName);

                ResultSet re1= stmt1.executeQuery();

                Integer projectId=null; String name=null; Date  createDate=null;
                if(!re1.next())
                        return;



                projectId= re1.getInt("id");
                createDate =re1.getDate("createDate");
                name=re1.getString("name");


                PreparedStatement stmt2 = con.prepareStatement(sql2);
                stmt2.setInt(1,projectId);

                ResultSet re2 = stmt2.executeQuery();
                if(re2.next()){
                        System.out.println(name+" 用户量 : "+re2.getString("allAccount"));
                }



                PreparedStatement stmt3 = con.prepareStatement(sql3);
                stmt3.setInt(1,projectId);





                int curSignlogAcc=0;
                int needRun =AllSignlogAcount-curSignlogAcc;


                while(needRun>1000){
                        ResultSet re3 = stmt3.executeQuery();
                        if(re3.next()){
                                curSignlogAcc=re3.getInt("allSignLog");
                        }
                        needRun =AllSignlogAcount-curSignlogAcc;
                        System.out.println(name +" 还需生成 :"+needRun);

                        Date  now=new Date(System.currentTimeMillis());
                        PreparedStatement stmt4 = con.prepareStatement(sqlstore);
                        stmt4.setDate(1,createDate);
                        stmt4.setDate(2, now);
                        stmt4.setInt(3,projectId);
                        stmt4.setInt(4,needRun);
                        stmt4.executeUpdate();
                        needRun=AllSignlogAcount-curSignlogAcc;
                }

                ResultSet re3 = stmt3.executeQuery();
                if(re3.next()){
                        System.out.println(projectName+" 共同生成 signlog :"+re3.getInt("allSignLog"));
                }
        }



        public static Map<String,Integer> project=new HashMap<String, Integer>();
        public static void init(){

//                signlog_2
//                project.put("海康威视电子签章项目",681307);
//                project.put("温州市四级联动网上审批服务平台",789439);
//                project.put("余姚国土CA应用项目",77968);
//                project.put("湖州招投标项目",157558);
//                project.put("青阳县招投标项目",93358);
//                project.put("海盐招投标项目",81589);
//                project.put("鄞州卫生局电子签章项目",474201);
//                project.put("余杭公共资源交易中心项目",247218);
//                project.put("宁波市江北区计生局项目",366134);
//                project.put("绍兴市上虞区公共资源交易中心",56343);
//                project.put("李惠利医院项目",9824);
//                project.put("嘉兴市公路管理局电子印章项目",59772);        有数据误差 等会儿处理 在signlog_2里面


//                signlog_3
//                project.put("丽水市公共资源交易中心",22931);
//                project.put("杭州市公共资源交易中心",179208);
//                project.put("枞阳县公共资源交易中心",35380);
//                project.put("宁波市卫生局项目",385539);


//
//                手动产生
//                project.put("驻马店公共资源交易中心项目",32467);
//                project.put("宁大附属医院",2280402);
//                project.put("宁波市中医院项目",2750334);
        }










        class autoImportHread  extends Thread{

                @Override
                public void run() {


                        try{

                        }catch (Exception e){
                                e.printStackTrace();
                        }
                }
        }
}


