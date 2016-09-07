package NewThread;

import java.util.concurrent.Callable;
import java.util.concurrent.FutureTask;

/**
 * Created by Administrator on 2016/6/12.
 */
public class TestCall {
        public static void main(String[] args) {
                Runnable  ru=new Runnable() {
                        public void run() {

                        }
                };
                Thread  threa=new Thread(new FutureTask<Integer>(new MyCallable()));

        }
}

class   MyCallable  implements Callable<Integer> {

        public Integer call() throws Exception {

                return null;
        }
}
