import { ResultEnum } from '@/enums/httpEnum';

declare interface API<T = any> {
  code: ResultEnum;
  result?: T;
  msg: string;
}
