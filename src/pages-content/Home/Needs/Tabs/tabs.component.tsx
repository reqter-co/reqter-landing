import { TabsContainer, TabItem } from "./tabs.styles";
const Tabs = ({
  menu,
  onSelectTab,
  selected,
}: {
  menu: any[];
  onSelectTab: (item: any) => void;
  selected: any;
}) => {
  return (
    <TabsContainer>
      {menu?.map((item: any) => (
        <TabItem
          key={item.id}
          selected={selected && selected.id === item.id}
          onClick={() => onSelectTab(item)}
        >
          {item.title}
        </TabItem>
      ))}
    </TabsContainer>
  );
};
export default Tabs;
