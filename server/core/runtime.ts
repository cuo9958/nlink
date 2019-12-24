import config from 'config';
import axios from 'axios';

const server_list: string[] = config.get('servers');
/**
 * 1.产生通道
 */
export class RunTime implements IRunTime {
    constructor(name) {
        this.name = name;
    }
    name = '';

    async pushData(time, data, action = 'runData') {
        console.log(time, data);
        //根据情况吧数据放到对应的服务和端口上

        console.log(server_list);
        try {
            await axios.post(server_list[0], {
                name: this.name,
                action,
                data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export interface IRunTime {
    name: string;
    /**
     * 根据时间戳划分时间窗口，发送数据
     * @param time 时间戳
     * @param data 具体数据
     * @param action 方法名
     */
    pushData(time: number, data: Object, action?: string): void;
}
