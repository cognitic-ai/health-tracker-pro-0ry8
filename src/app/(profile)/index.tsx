import * as AC from "@bacons/apple-colors";
import { ScrollView, View, Text, Pressable } from "react-native";
import Icon from "@/components/icon";

const userProfile = {
  name: "Alex Johnson",
  email: "alex@example.com",
  memberSince: "January 2024",
  height: "5'10\"",
  weight: "165 lbs",
  age: 28,
  goalWeight: "160 lbs",
};

const stats = {
  totalWorkouts: 127,
  totalCaloriesBurned: 45230,
  longestStreak: 21,
  currentStreak: 7,
};

const settingsSections = [
  {
    title: "Health",
    items: [
      { icon: "target", label: "Goals", color: AC.systemGreen as string },
      { icon: "heart.fill", label: "Health Data", color: AC.systemRed as string },
      { icon: "bell.fill", label: "Reminders", color: AC.systemOrange as string },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: "person.fill", label: "Personal Info", color: AC.systemBlue as string },
      { icon: "lock.fill", label: "Privacy", color: AC.systemGray as string },
      { icon: "gearshape.fill", label: "Settings", color: AC.systemGray as string },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "questionmark.circle.fill", label: "Help Center", color: AC.systemCyan as string },
      { icon: "star.fill", label: "Rate App", color: AC.systemYellow as string },
    ],
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 24 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Profile Header */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 20,
          borderCurve: "continuous",
          padding: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: AC.systemGreen,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "600", color: "white" }}>
            {userProfile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Text>
        </View>
        <Text
          selectable
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: AC.label,
          }}
        >
          {userProfile.name}
        </Text>
        <Text
          selectable
          style={{
            fontSize: 14,
            color: AC.secondaryLabel,
            marginTop: 4,
          }}
        >
          {userProfile.email}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: AC.tertiaryLabel,
            marginTop: 4,
          }}
        >
          Member since {userProfile.memberSince}
        </Text>
      </View>

      {/* Stats */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: "continuous",
          padding: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: AC.label,
            marginBottom: 16,
          }}
        >
          Your Stats
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
          <View style={{ flex: 1, minWidth: "40%" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemGreen,
                fontVariant: ["tabular-nums"],
              }}
            >
              {stats.totalWorkouts}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>
              Total Workouts
            </Text>
          </View>
          <View style={{ flex: 1, minWidth: "40%" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemOrange,
                fontVariant: ["tabular-nums"],
              }}
            >
              {(stats.totalCaloriesBurned / 1000).toFixed(1)}k
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>
              Calories Burned
            </Text>
          </View>
          <View style={{ flex: 1, minWidth: "40%" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemRed,
                fontVariant: ["tabular-nums"],
              }}
            >
              {stats.longestStreak}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>
              Longest Streak
            </Text>
          </View>
          <View style={{ flex: 1, minWidth: "40%" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemBlue,
                fontVariant: ["tabular-nums"],
              }}
            >
              {stats.currentStreak}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>
              Current Streak
            </Text>
          </View>
        </View>
      </View>

      {/* Body Metrics */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: "continuous",
          padding: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: AC.label,
            marginBottom: 12,
          }}
        >
          Body Metrics
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: AC.label }}>
              {userProfile.height}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Height</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: AC.label }}>
              {userProfile.weight}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Weight</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: AC.label }}>
              {userProfile.age}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Age</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: AC.systemGreen }}>
              {userProfile.goalWeight}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Goal</Text>
          </View>
        </View>
      </View>

      {/* Settings */}
      {settingsSections.map((section) => (
        <View key={section.title}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: AC.secondaryLabel,
              marginBottom: 8,
              marginLeft: 16,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {section.title}
          </Text>
          <View
            style={{
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 16,
              borderCurve: "continuous",
              overflow: "hidden",
            }}
          >
            {section.items.map((item, index) => (
              <Pressable
                key={item.label}
                style={({ pressed }) => ({
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 14,
                  gap: 12,
                  backgroundColor: pressed
                    ? AC.systemGray5
                    : AC.secondarySystemGroupedBackground,
                  borderBottomWidth: index < section.items.length - 1 ? 0.5 : 0,
                  borderBottomColor: AC.separator as string,
                })}
              >
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    borderCurve: "continuous",
                    backgroundColor: item.color + "20",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon name={item.icon} size={16} color={item.color} />
                </View>
                <Text style={{ flex: 1, fontSize: 16, color: AC.label }}>
                  {item.label}
                </Text>
                <Icon
                  name="chevron.right"
                  size={14}
                  color={AC.tertiaryLabel as string}
                />
              </Pressable>
            ))}
          </View>
        </View>
      ))}

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}
