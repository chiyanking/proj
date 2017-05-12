package com.wtk.utils;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by Administrator on 2016/6/27.
 */
public class Sets {
    public static <T> Set<T> union(Set<T> a, Set<T> b) {
        Set<T> result = new HashSet<T>(a);
        result.addAll(b);
        return result;
    }

    public static <T> Set<T> intersection(Set<T> a, Set<T> b) {
        Set<T> result = new HashSet<T>(a);
        result.retainAll(b);
        return result;
    }

    public static <T> Set<T> differece(Set<T> superset, Set<T> subset) {
        Set<T> result = new HashSet<T>(superset);
        result.removeAll(subset);
        return result;
    }

    public static <T> Set<T> compement(Set<T> a, Set<T> b) {
        return differece(union(a, b), intersection(a, b));
    }
 

}
