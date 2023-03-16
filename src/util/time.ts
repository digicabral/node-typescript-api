import moment from 'moment';

export class TimeUtil {
  public static getUnixTimeforAFutureDay(days: number): number {
    return moment().add(days, 'days').unix();
  }
}
