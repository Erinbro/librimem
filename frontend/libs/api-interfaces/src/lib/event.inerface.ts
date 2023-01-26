import { ISubject } from './subject.interface';
enum IEventMotivation {
  FALSE = "FALSE",
  INTRIGUING = "INTRIGUING",

}

export interface IEvent {
  id?: number;
  title: string;
  reason: IEventMotivation | string;
  subjects: ISubject[];
  importance: number;
}
