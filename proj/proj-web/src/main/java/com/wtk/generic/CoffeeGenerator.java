package generic;

import java.util.Collection;
import java.util.Iterator;

/**
 * Created by Administrator on 2016/6/17.
 */
public class CoffeeGenerator implements Geneator<Coffee>,Iterable<Coffee>{

    public static <T> Collection<T> fill(Collection<T> coll, Geneator<T> gen, int n){
        for(int i=0;i<n;i++){
            coll.add(gen.next());
        }
        return coll;
    }


    public Coffee next() {
        return null;
    }

    public Iterator<Coffee> iterator() {
        return null;
    }
}
