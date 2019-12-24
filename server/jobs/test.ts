/**
 * 测试用的任务
 */
import { Job } from '../core/job';

class TestJob extends Job {
    getData() {
        setInterval(() => {
            console.log('获取数据');
            this.cleanData();
        }, 5000);
    }

    cleanData() {
        console.log('数据清洗');
        this.runtime.pushData(Date.now(), { id: 1 });
    }

    runData(data: Object) {
        console.log('处理并保存数据', data);
    }
}

export default TestJob;
