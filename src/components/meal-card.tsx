import * as AC from "@bacons/apple-colors";
import { View, Text, Pressable } from "react-native";
import { SymbolView } from "expo-symbols";

interface MealCardProps {
  mealType: string;
  calories: number;
  items: string[];
  time: string;
  onPress?: () => void;
}

const mealIcons: Record<string, { icon: string; color: string }> = {
  Breakfast: { icon: "sunrise.fill", color: AC.systemOrange as string },
  Lunch: { icon: "sun.max.fill", color: AC.systemYellow as string },
  Dinner: { icon: "moon.stars.fill", color: AC.systemIndigo as string },
  Snack: { icon: "leaf.fill", color: AC.systemGreen as string },
};

export default function MealCard({
  mealType,
  calories,
  items,
  time,
  onPress,
}: MealCardProps) {
  const { icon, color } = mealIcons[mealType] || mealIcons.Snack;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: AC.secondarySystemGroupedBackground,
        borderRadius: 16,
        borderCurve: "continuous",
        padding: 16,
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            borderCurve: "continuous",
            backgroundColor: color + "20",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SymbolView name={icon} size={22} tintColor={color} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: AC.label }}>
              {mealType}
            </Text>
            <Text style={{ fontSize: 13, color: AC.tertiaryLabel }}>{time}</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: "500", color, marginTop: 4 }}>
            {calories} cal
          </Text>
          <Text
            style={{ fontSize: 13, color: AC.secondaryLabel, marginTop: 4 }}
            numberOfLines={2}
          >
            {items.join(", ")}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
