import * as AC from "@bacons/apple-colors";
import { View, Text, Pressable } from "react-native";
import { SymbolView } from "expo-symbols";

interface HealthMetricCardProps {
  icon: string;
  iconColor: string;
  title: string;
  value: string;
  unit: string;
  subtitle?: string;
  onPress?: () => void;
}

export default function HealthMetricCard({
  icon,
  iconColor,
  title,
  value,
  unit,
  subtitle,
  onPress,
}: HealthMetricCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: AC.secondarySystemGroupedBackground,
        borderRadius: 16,
        borderCurve: "continuous",
        padding: 16,
        flex: 1,
        minWidth: 150,
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <SymbolView
          name={icon}
          size={22}
          tintColor={iconColor}
        />
        <Text style={{ fontSize: 14, fontWeight: "600", color: iconColor }}>
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "baseline", gap: 4 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: AC.label,
            fontVariant: ["tabular-nums"],
          }}
        >
          {value}
        </Text>
        <Text style={{ fontSize: 14, color: AC.secondaryLabel }}>{unit}</Text>
      </View>
      {subtitle && (
        <Text style={{ fontSize: 12, color: AC.tertiaryLabel, marginTop: 4 }}>
          {subtitle}
        </Text>
      )}
    </Pressable>
  );
}
