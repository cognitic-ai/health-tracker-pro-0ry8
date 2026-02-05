import * as AC from "@bacons/apple-colors";
import { ScrollView, View, Text, Pressable } from "react-native";
import Icon from "@/components/icon";
import WorkoutCard from "@/components/workout-card";

const workoutTypes = [
  { id: "1", icon: "figure.run", name: "Running", color: AC.systemGreen as string },
  { id: "2", icon: "figure.walk", name: "Walking", color: AC.systemBlue as string },
  { id: "3", icon: "dumbbell.fill", name: "Strength", color: AC.systemOrange as string },
  { id: "4", icon: "figure.mind.and.body", name: "Yoga", color: AC.systemPurple as string },
  { id: "5", icon: "figure.pool.swim", name: "Swimming", color: AC.systemCyan as string },
  { id: "6", icon: "bicycle", name: "Cycling", color: AC.systemRed as string },
];

const recentWorkouts = [
  {
    id: "1",
    icon: "figure.run",
    iconColor: AC.systemGreen as string,
    name: "Morning Run",
    duration: "32 min",
    calories: "285",
    time: "Today, 7:30 AM",
  },
  {
    id: "2",
    icon: "dumbbell.fill",
    iconColor: AC.systemOrange as string,
    name: "Upper Body Workout",
    duration: "45 min",
    calories: "312",
    time: "Yesterday, 6:00 PM",
  },
  {
    id: "3",
    icon: "figure.mind.and.body",
    iconColor: AC.systemPurple as string,
    name: "Morning Yoga",
    duration: "30 min",
    calories: "120",
    time: "Yesterday, 7:00 AM",
  },
  {
    id: "4",
    icon: "bicycle",
    iconColor: AC.systemRed as string,
    name: "Evening Ride",
    duration: "55 min",
    calories: "420",
    time: "2 days ago",
  },
];

const weeklyStats = {
  workouts: 5,
  totalMinutes: 180,
  totalCalories: 1250,
  streak: 7,
};

export default function ActivityScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 24 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Start Workout Section */}
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 12,
          }}
        >
          Start Workout
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {workoutTypes.map((workout) => (
            <Pressable
              key={workout.id}
              style={({ pressed }) => ({
                backgroundColor: AC.secondarySystemGroupedBackground,
                borderRadius: 16,
                borderCurve: "continuous",
                padding: 16,
                alignItems: "center",
                gap: 8,
                width: "30%",
                minWidth: 90,
                flexGrow: 1,
                opacity: pressed ? 0.8 : 1,
              })}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: workout.color + "20",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name={workout.icon} size={24} color={workout.color} />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: AC.label,
                  textAlign: "center",
                }}
              >
                {workout.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Weekly Stats */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 20,
          borderCurve: "continuous",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 16,
          }}
        >
          This Week
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemGreen,
                fontVariant: ["tabular-nums"],
              }}
            >
              {weeklyStats.workouts}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Workouts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemBlue,
                fontVariant: ["tabular-nums"],
              }}
            >
              {weeklyStats.totalMinutes}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Minutes</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemOrange,
                fontVariant: ["tabular-nums"],
              }}
            >
              {weeklyStats.totalCalories}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Calories</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: AC.systemRed,
                fontVariant: ["tabular-nums"],
              }}
            >
              {weeklyStats.streak}
            </Text>
            <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>Day Streak</Text>
          </View>
        </View>
      </View>

      {/* Recent Workouts */}
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 12,
          }}
        >
          Recent Workouts
        </Text>
        <View style={{ gap: 10 }}>
          {recentWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </View>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}
