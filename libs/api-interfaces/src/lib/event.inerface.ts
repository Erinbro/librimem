enum IEventMotivation {
  FALSE = "FALSE",
  INTRIGUING = "INTRIGUING",

}

export interface IEvent {
  id?: number;
  reason: IEventMotivation | string;
}
