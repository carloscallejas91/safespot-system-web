import React, { useState } from "react";
import { SFContent } from "../../styles/content/style.jsx";
import { Layout, Menu, Drawer, Button, Image, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logotipo.png";
import itemsMenu from "./itemsMenu.jsx";
import colors from "../../constants/colors.jsx";
import { scrollToSection } from "../../utils/ScrollToSection.jsx";

const { Header } = Layout;

const MenuFixed = () => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const findItemByKey = (key, items) => {
    for (const item of items) {
      if (item.key === key) {
        return item;
      }
      if (item.children) {
        const foundChild = findItemByKey(key, item.children);
        if (foundChild) {
          return foundChild;
        }
      }
    }
    return null;
  };

  return (
    <Layout>
      <Header
        style={{ height: "auto", position: "fixed", zIndex: "2", padding: "0" }}
      >
        {!breakpoint.lg ? (
          <SFContent
            width="100%"
            padding="1% 8%"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor={colors.overlay}
            style={{ position: "fixed", zIndex: "2" }}
          >
            <a
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("início")}
            >
              <Image
                width={"150px"}
                src={logo}
                alt="Logotipo"
                preview={false}
              />
            </a>
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={visible}
            >
              <Menu
                onClick={(e) => {
                  onClose();
                  const selectedItem = findItemByKey(e.key, itemsMenu);
                  if (selectedItem) {
                    const section =
                      selectedItem.link || selectedItem.label.toLowerCase(); // ou outra lógica para definir a seção
                    scrollToSection(section);
                  }
                }}
                mode="inline"
                items={itemsMenu}
                theme="dark"
              />
            </Drawer>
          </SFContent>
        ) : (
          <SFContent
            width="100%"
            padding="1% 10%"
            flexDirection="row"
            justifyContent="space-between"
            backgroundColor={colors.overlay}
            style={{ position: "fixed", zIndex: "2" }}
          >
            <a
              style={{
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("início")}
            >
              <Image
                width={"150px"}
                src={logo}
                alt="Logotipo"
                preview={false}
              />
            </a>
            <Menu
              onClick={(e) => {
                onClose();
                const selectedItem = findItemByKey(e.key, itemsMenu);
                if (selectedItem) {
                  const section =
                    selectedItem.link || selectedItem.label.toLowerCase();

                  scrollToSection(section);
                }
              }}
              mode="horizontal"
              theme="light"
              items={itemsMenu}
            />
          </SFContent>
        )}
      </Header>
    </Layout>
  );
};

export default MenuFixed;
