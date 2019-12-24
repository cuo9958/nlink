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
        const time = Date.now();
        this.pushData(time, { id: 1, time });
    }

    runData(data: Object, index: number) {
        console.log('处理并保存数据', data);
    }
}

export default TestJob;
