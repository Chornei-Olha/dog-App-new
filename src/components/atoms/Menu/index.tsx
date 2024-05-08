import { NavList, NavListItem } from './styled';

type MenuItemProps = {
  title: string;
  route: string;
};

export type MenuProps = {
  menuList: MenuItemProps[];
};

export const Menu = ({ menuList }: MenuProps) => (
  <NavList component="nav">
    {menuList.map(item => (
      <NavListItem to={item.route} key={item.title}>
        {({ isActive }) => (
          <span className={isActive ? 'active' : ''}>{item.title}</span>
        )}
      </NavListItem>
    ))}
  </NavList>
);
