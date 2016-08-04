package com.wtk;

import java.io.*;

public class CloneUtils {
    @SuppressWarnings("unchecked")
    public static <T extends Serializable> T clone(T obj) {
        T cloneObj = null;
        try {
            //д���ֽ���
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            ObjectOutputStream obs;
            obs = new ObjectOutputStream(out);
            obs.writeObject(obj);
            obs.close();

            //�����ڴ棬д��ԭʼ���������¶���
            ByteArrayInputStream ios = new ByteArrayInputStream(out.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(ios);
            //�������ɵ��¶���
            cloneObj = (T) ois.readObject();
            ois.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return cloneObj;
    }
}