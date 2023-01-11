export type Event = {
  id: number;
  team1: string;
  team2: string;
  date: string;
  time: string;
  win1: string;
  win2: string;
  draw: string;
};

export type State = {
  value: string;
  eventState: Event;
  isSuccessful: boolean;
};
