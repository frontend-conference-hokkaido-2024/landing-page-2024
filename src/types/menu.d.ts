declare module "menu" {
  type MenuButtonProps = {
    title: string;
    href: string;
  }
  
  type MenuProps = MenuButtonProps[];
}