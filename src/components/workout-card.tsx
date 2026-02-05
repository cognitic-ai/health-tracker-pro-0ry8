import * as AC from "@bacons/apple-colors";
import { View, Text, Pressable } from "react-native";
import { SymbolView } from "expo-symbols";

interface WorkoutCardProps {
  icon: string;
  iconColor: string;
  name: string;
  duration: string;
  calories: string;
  time: string;
  onPress?: () => void;
}

export default function WorkoutCard({
  icon,
  iconColor,
  name,
  duration,
  calories,
  time,
  onPress,
}: WorkoutCardProps) {
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
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            borderCurve: "continuous",
            backgroundColor: iconColor + "20",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SymbolView name={icon} size={24} tintColor={iconColor} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: AC.label }}>
            {name}
          </Text>
          <Text style={{ fontSize: 13, color: AC.secondaryLabel, marginTop: 2 }}>
            {duration} · {calories} cal
          </Text>
        </View>
        <Text style={{ fontSize: 13, color: AC.tertiaryLabel }}>{time}</Text>
      </View>
    </Pressable>
  );
}
