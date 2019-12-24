import config from 'config';
import axios from 'axios';

const server_list: string[] = config.get('servers');
/**
 * 1.随即节点分担压力
 * 2.计算内容统一处理
 */
export const RunTime: IRunTime = {
    async reduceData(name, time, data, action) {
        
    },
    async pushData(name, time, data, action) {
        const index = (time / server_list.length) % server_list.length >> 0;
        console.log('获取对应的位置', index);
        if (!server_list[index]) return;
        try {
            await axios.post(server_list[index], {
                name,
                action,
                data,
                index
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export interface IRunTime {
    /**
     * 输入数据，组合，超过x条就输出
     */
    reduceData(name: string, time: number, data: Object, action: string): void;
    /**
     * 根据时间戳划分时间窗口，发送数据
     * @param name 任务的名称
     * @param time 时间戳
     * @param data 具体数据
     * @param action 方法名
     */
    pushData(name: string, time: number, data: Object, action: string): void;
}
