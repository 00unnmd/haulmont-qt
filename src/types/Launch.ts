export interface Launch {
  id: number;
  patch: string;
  name: string;
  date: string;
  details: string;
  launch_site: {
    name: string;
  };
  rocket: {
    name: string;
  };
}
