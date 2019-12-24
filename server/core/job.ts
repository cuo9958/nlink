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
        this.runtime = RunTime;
    }
    name = '';
    runtime: IRunTime;
    abstract getData(): void;

    abstract nextTick(): void;

    abstract runData(data, index): void;

    pushData(time, data, action = 'runData') {
        RunTime.pushData(this.name, time, data, action);
    }
}
export interface IJob {
    name: string;
    runtime: IRunTime;
    /**
     * 获取数据，并标记时间窗口
     */
    getData(): void;
    /**
     * 重复计算数据
     * @param data 计算后的数据
     * @param map 输入数据
     */
    nextTick(data: Object, map: Object[]): void;
    /**
     * 拿到最终数据并存入数据库
     * @param data 数据
     * @param index 窗口标记
     */
    runData(data: Object, index: number): void;
    /**
     * 将数据传递到下一步
     * @param time 时间
     * @param data 数据
     * @param action 方法
     */
    pushData(time: number, data: Object, action?: string): void;
}
