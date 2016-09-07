package src.main.java;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;

/**
 * Created by Administrator on 2016/3/31.
 */
public class IOStream {
    public static  String buf="WNASDKFJKLJASDFLKJASKDLF;JKDASF;LKJASDFKIOWQUERELRKJLJXCZHUVIUAHSDR.EXCVBJIUWRET;POIZXCV,.AEJWOQIUROWER";

    public static void main(String[] args) throws IOException {

        BufferedOutputStream out =new BufferedOutputStream(System.out);
        System.in.read(buf.getBytes());
        BufferedInputStream  in =new BufferedInputStream(System.in);
        byte[]  bt=new byte[100];
        while(-1!=in.read(bt)){
            System.out.println(bt);
        }

    }

}
