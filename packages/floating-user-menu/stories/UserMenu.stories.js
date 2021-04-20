/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, lazy } from "react";
import UserMenuContextProvider, { useUserMenu } from "../src/FloatingUserMenu";
//import { avatar } from "./avatar-base64";
import { RecentApps } from "../backup/RecentApps";

export default { title: "UserMenu" };
//export const userMenu = () => <div>Testing...</div>;

export function userMenu() {
  //const toast = React.useContext(ToastContext);

  const floatingUserMenu = useUserMenu();
  console.log("Context inside Component", typeof floatingUserMenu);
  //console.log("ALERTS", toast.alerts.length > 0 ? toast.alerts[0] : null);
  //console.log(RecentApps);

  useEffect(() => {
    floatingUserMenu.show({
      effect: { hover: { width: 42 } },
      initials: "TA",
      notifications: 9,
      RecentApps: RecentApps,
    });
    //console.log(RecentApps);
  }, [floatingUserMenu]);

  return (
    <div style={{ pointerEvents: "all", cursor: "pointer" }}>
      <div>User menu test</div>
      <button
        onClick={() => {
          console.log("UPDATE CLICK");
          floatingUserMenu.onUpdate();
        }}
      >
        UPDATE
      </button>
    </div>
  );
}

/*
export const userMenu = () => (
  <React.Fragment>
    <div>Testing....</div>
    <UserMenuContextProvider>Menu here</UserMenuContextProvider>
  </React.Fragment>
);


userMenu.story = {
  name: "UserMenu",
};

*/
userMenu.story = {
  name: "UserMenu",
  decorators: [
    Story => {
      return (
        <UserMenuContextProvider
          onExit={() => {
            console.log("LOGOUT...  ");
          }}
          onHome={() => {
            console.log("HOME...  ");
          }}
        >
          <Story />
        </UserMenuContextProvider>
      );
    },
  ],
};
