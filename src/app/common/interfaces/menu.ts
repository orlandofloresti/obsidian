export interface IMenuItem {
  label: string;
  icon: string;
  path: string;
}

export interface IMenuCategory {
  label: string;
  items: IMenuItem[];
}
