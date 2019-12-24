import { RunTime, IRunTime } from './runtime';
import nanoid from 'nanoid';
/**
 * 任务的基类，需要任务实现的内容：
 * 1.获取数据
 * 2.标记内容
 * 3.计算数据并存入数据库
 */
export abstract class Job implements IJob {
    constructor() {
        this.name = nanoid(10);
        this.runtime = new RunTime(this.name);
        console.log(this);
    }
    name = '';
    runtime: IRunTime;
    abstract getData(): void;

    abstract runData(data): void;
}
export interface IJob {
    name: string;
    runtime: IRunTime;
    /**
     * 获取数据，并标记时间窗口
     */
    getData(): void;
    /**
     * 拿到最终数据并存入数据库
     * @param data 数据
     */
    runData(data: Object): void;
}
