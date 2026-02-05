import * as AC from "@bacons/apple-colors";
import { ScrollView, View, Text } from "react-native";
import HealthMetricCard from "@/components/health-metric-card";
import ActivityRing from "@/components/activity-ring";
import WorkoutCard from "@/components/workout-card";

const todayMetrics = {
  steps: 8432,
  stepsGoal: 10000,
  calories: 1847,
  caloriesGoal: 2200,
  water: 6,
  waterGoal: 8,
  sleep: 7.5,
  sleepGoal: 8,
};

const recentWorkouts = [
  {
    id: "1",
    icon: "figure.run",
    iconColor: AC.systemGreen as string,
    name: "Morning Run",
    duration: "32 min",
    calories: "285",
    time: "7:30 AM",
  },
  {
    id: "2",
    icon: "figure.strengthtraining.traditional",
    iconColor: AC.systemOrange as string,
    name: "Strength Training",
    duration: "45 min",
    calories: "312",
    time: "Yesterday",
  },
];

export default function DashboardScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 24 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Activity Rings Section */}
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
            marginBottom: 20,
          }}
        >
          Today's Progress
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <ActivityRing
            progress={todayMetrics.steps / todayMetrics.stepsGoal}
            color={AC.systemGreen as string}
            label="Move"
            value={`${todayMetrics.steps.toLocaleString()}`}
            goal={`${todayMetrics.stepsGoal.toLocaleString()} steps`}
          />
          <ActivityRing
            progress={todayMetrics.calories / todayMetrics.caloriesGoal}
            color={AC.systemRed as string}
            label="Calories"
            value={`${todayMetrics.calories}`}
            goal={`${todayMetrics.caloriesGoal} cal`}
          />
          <ActivityRing
            progress={todayMetrics.water / todayMetrics.waterGoal}
            color={AC.systemBlue as string}
            label="Hydration"
            value={`${todayMetrics.water}`}
            goal={`${todayMetrics.waterGoal} glasses`}
          />
        </View>
      </View>

      {/* Health Metrics Grid */}
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 12,
          }}
        >
          Health Metrics
        </Text>
        <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
          <HealthMetricCard
            icon="heart.fill"
            iconColor={AC.systemRed as string}
            title="Heart Rate"
            value="72"
            unit="BPM"
            subtitle="Resting"
          />
          <HealthMetricCard
            icon="bed.double.fill"
            iconColor={AC.systemIndigo as string}
            title="Sleep"
            value={todayMetrics.sleep.toString()}
            unit="hours"
            subtitle={`Goal: ${todayMetrics.sleepGoal}h`}
          />
        </View>
        <View style={{ flexDirection: "row", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
          <HealthMetricCard
            icon="figure.walk"
            iconColor={AC.systemGreen as string}
            title="Steps"
            value={todayMetrics.steps.toLocaleString()}
            unit="steps"
            subtitle="Today"
          />
          <HealthMetricCard
            icon="flame.fill"
            iconColor={AC.systemOrange as string}
            title="Active Cal"
            value="423"
            unit="kcal"
            subtitle="Today"
          />
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
          Recent Activity
        </Text>
        <View style={{ gap: 10 }}>
          {recentWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </View>
      </View>

      {/* Weekly Summary */}
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
          Weekly Summary
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => {
            const isToday = index === 3;
            const progress = [0.8, 0.9, 0.7, 0.84, 0, 0, 0][index];
            return (
              <View key={index} style={{ alignItems: "center", gap: 6 }}>
                <View
                  style={{
                    width: 32,
                    height: 80,
                    backgroundColor: AC.systemGray5,
                    borderRadius: 16,
                    borderCurve: "continuous",
                    overflow: "hidden",
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      height: `${progress * 100}%`,
                      backgroundColor: isToday
                        ? AC.systemGreen
                        : AC.systemGray2,
                      borderRadius: 16,
                      borderCurve: "continuous",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: isToday ? "600" : "400",
                    color: isToday ? AC.systemGreen : AC.secondaryLabel,
                  }}
                >
                  {day}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}
