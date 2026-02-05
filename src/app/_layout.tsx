import { ThemeProvider } from "@/components/theme-provider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs as WebTabs } from "expo-router/tabs";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform, useWindowDimensions } from "react-native";
import * as AC from "@bacons/apple-colors";

export default function Layout() {
  return (
    <ThemeProvider>
      <TabsLayout />
    </ThemeProvider>
  );
}

function TabsLayout() {
  if (process.env.EXPO_OS === "web") {
    return <WebTabsLayout />;
  } else {
    return <NativeTabsLayout />;
  }
}

function WebTabsLayout() {
  const { width } = useWindowDimensions();
  const isMd = width >= 768;
  const isLg = width >= 1024;

  return (
    <WebTabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AC.systemGreen as string,
        ...(isMd
          ? {
              tabBarPosition: "left",
              tabBarVariant: "material",
              tabBarLabelPosition: isLg ? undefined : "below-icon",
            }
          : {
              tabBarPosition: "bottom",
            }),
      }}
    >
      <WebTabs.Screen
        name="(dashboard)"
        options={{
          title: "Dashboard",
          tabBarIcon: (props) => <MaterialIcons {...props} name="dashboard" />,
        }}
      />
      <WebTabs.Screen
        name="(activity)"
        options={{
          title: "Activity",
          tabBarIcon: (props) => <MaterialIcons {...props} name="fitness-center" />,
        }}
      />
      <WebTabs.Screen
        name="(nutrition)"
        options={{
          title: "Nutrition",
          tabBarIcon: (props) => <MaterialIcons {...props} name="restaurant" />,
        }}
      />
      <WebTabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: (props) => <MaterialIcons {...props} name="person" />,
        }}
      />
    </WebTabs>
  );
}

function NativeTabsLayout() {
  return (
    <NativeTabs
      tabBarActiveTintColor={AC.systemGreen as string}
    >
      <NativeTabs.Trigger name="(dashboard)">
        <NativeTabs.Trigger.Label>Dashboard</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "heart.text.square", selected: "heart.text.square.fill" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="dashboard" />,
            },
          })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(activity)">
        <NativeTabs.Trigger.Label>Activity</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "figure.run", selected: "figure.run" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="fitness-center" />,
            },
          })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(nutrition)">
        <NativeTabs.Trigger.Label>Nutrition</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "fork.knife", selected: "fork.knife" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="restaurant" />,
            },
          })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(profile)">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...Platform.select({
            ios: { sf: { default: "person.crop.circle", selected: "person.crop.circle.fill" } },
            default: {
              src: <NativeTabs.Trigger.VectorIcon family={MaterialIcons} name="person" />,
            },
          })}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
