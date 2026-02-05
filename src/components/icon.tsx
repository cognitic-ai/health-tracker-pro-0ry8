import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import * as AC from "@bacons/apple-colors";

// Map SF Symbol names to Ionicons names
const sfToIonicons: Record<string, string> = {
  // Tab icons
  "house.fill": "home",
  "figure.run": "fitness",
  "fork.knife": "restaurant",
  "person.fill": "person",
  // Health metrics
  "heart.fill": "heart",
  "moon.fill": "moon",
  "figure.walk": "walk",
  "flame.fill": "flame",
  "bed.double.fill": "bed",
  // Workouts
  "figure.run.circle.fill": "fitness",
  "figure.walk.circle.fill": "walk",
  "dumbbell.fill": "barbell",
  "figure.mind.and.body": "body",
  "figure.pool.swim": "water",
  "bicycle": "bicycle",
  "figure.strengthtraining.traditional": "barbell",
  "figure.yoga": "body",
  "figure.outdoor.cycle": "bicycle",
  // Meals
  "sunrise.fill": "sunny",
  "sun.max.fill": "sunny",
  "moon.stars.fill": "moon",
  "leaf.fill": "leaf",
  // Profile
  "target": "disc",
  "bell.fill": "notifications",
  "lock.fill": "lock-closed",
  "gearshape.fill": "settings",
  "questionmark.circle.fill": "help-circle",
  "star.fill": "star",
  // Navigation
  "chevron.right": "chevron-forward",
  // Actions
  "plus": "add",
  "plus.circle.fill": "add-circle",
  "drop.fill": "water",
  // Charts
  "chart.bar.fill": "bar-chart",
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export default function Icon({ name, size = 24, color = AC.label as string }: IconProps) {
  if (process.env.EXPO_OS === "web") {
    const ioniconsName = sfToIonicons[name] || "help-circle";
    return <Ionicons name={ioniconsName as any} size={size} color={color} />;
  }

  return (
    <Image
      source={`sf:${name}`}
      style={{ width: size, height: size, tintColor: color }}
    />
  );
}
