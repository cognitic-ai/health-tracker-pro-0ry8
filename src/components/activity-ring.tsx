import * as AC from "@bacons/apple-colors";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface ActivityRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  label: string;
  value: string;
  goal: string;
}

export default function ActivityRing({
  progress,
  size = 100,
  strokeWidth = 10,
  color,
  label,
  value,
  goal,
}: ActivityRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (Math.min(progress, 1) * circumference);

  return (
    <View style={{ alignItems: "center", gap: 8 }}>
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size} style={{ transform: [{ rotate: "-90deg" }] }}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={AC.systemGray5}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </Svg>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: size * 0.2,
              fontWeight: "700",
              color: AC.label,
            }}
          >
            {Math.round(progress * 100)}%
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 13, fontWeight: "600", color: AC.label }}>
        {label}
      </Text>
      <Text style={{ fontSize: 12, color: AC.secondaryLabel }}>
        {value} / {goal}
      </Text>
    </View>
  );
}
