import Jobs from '../jobs';
import { Job, IJob } from './job';

interface IList {
    [index: string]: Job;
}
const list: IList = {};

Jobs.forEach((Item: any) => {
    console.log(Item);
    const jobItem: IJob = new Item();
    jobItem.getData();
    list[jobItem.name] = jobItem;
});
/**
 * 将受到的数据再塞回去
 */
export function setData(name: string, data: Object, action: string) {
    console.log(name, data, action);
    if (list[name]) {
        const JobItem = list[name];
        if (JobItem[action]) JobItem[action](data);
    }
}
