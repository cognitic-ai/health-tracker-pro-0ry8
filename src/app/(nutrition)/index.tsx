import * as AC from "@bacons/apple-colors";
import { ScrollView, View, Text, Pressable } from "react-native";
import { SymbolView } from "expo-symbols";
import MealCard from "@/components/meal-card";
import ActivityRing from "@/components/activity-ring";

const todayNutrition = {
  calories: { consumed: 1420, goal: 2000 },
  protein: { consumed: 65, goal: 120 },
  carbs: { consumed: 180, goal: 250 },
  fat: { consumed: 45, goal: 65 },
  water: { consumed: 6, goal: 8 },
};

const todayMeals = [
  {
    id: "1",
    mealType: "Breakfast",
    calories: 420,
    items: ["Oatmeal with berries", "Greek yogurt", "Coffee"],
    time: "8:00 AM",
  },
  {
    id: "2",
    mealType: "Lunch",
    calories: 580,
    items: ["Grilled chicken salad", "Quinoa", "Sparkling water"],
    time: "12:30 PM",
  },
  {
    id: "3",
    mealType: "Snack",
    calories: 180,
    items: ["Apple", "Almond butter"],
    time: "3:00 PM",
  },
  {
    id: "4",
    mealType: "Dinner",
    calories: 240,
    items: ["Salmon", "Brown rice", "Steamed vegetables"],
    time: "Not logged",
  },
];

const macroColors = {
  protein: AC.systemRed as string,
  carbs: AC.systemBlue as string,
  fat: AC.systemYellow as string,
};

export default function NutritionScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
      contentContainerStyle={{ padding: 16, gap: 24 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Calorie Summary */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 20,
          borderCurve: "continuous",
          padding: 20,
          alignItems: "center",
        }}
      >
        <ActivityRing
          progress={todayNutrition.calories.consumed / todayNutrition.calories.goal}
          size={140}
          strokeWidth={14}
          color={AC.systemGreen as string}
          label="Calories"
          value={todayNutrition.calories.consumed.toString()}
          goal={`${todayNutrition.calories.goal} cal`}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 24,
            marginTop: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                color: AC.secondaryLabel,
                marginBottom: 4,
              }}
            >
              Remaining
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: AC.systemGreen,
                fontVariant: ["tabular-nums"],
              }}
            >
              {todayNutrition.calories.goal - todayNutrition.calories.consumed}
            </Text>
          </View>
        </View>
      </View>

      {/* Macros */}
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: AC.label,
            marginBottom: 12,
          }}
        >
          Macronutrients
        </Text>
        <View
          style={{
            backgroundColor: AC.secondarySystemGroupedBackground,
            borderRadius: 16,
            borderCurve: "continuous",
            padding: 16,
            gap: 16,
          }}
        >
          {(["protein", "carbs", "fat"] as const).map((macro) => {
            const data = todayNutrition[macro];
            const progress = data.consumed / data.goal;
            return (
              <View key={macro}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: AC.label,
                      textTransform: "capitalize",
                    }}
                  >
                    {macro}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: AC.secondaryLabel,
                      fontVariant: ["tabular-nums"],
                    }}
                  >
                    {data.consumed}g / {data.goal}g
                  </Text>
                </View>
                <View
                  style={{
                    height: 8,
                    backgroundColor: AC.systemGray5,
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      width: `${Math.min(progress * 100, 100)}%`,
                      height: "100%",
                      backgroundColor: macroColors[macro],
                      borderRadius: 4,
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* Water Intake */}
      <View
        style={{
          backgroundColor: AC.secondarySystemGroupedBackground,
          borderRadius: 16,
          borderCurve: "continuous",
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <SymbolView
              name="drop.fill"
              size={20}
              tintColor={AC.systemBlue as string}
            />
            <Text style={{ fontSize: 16, fontWeight: "600", color: AC.label }}>
              Water Intake
            </Text>
          </View>
          <Text style={{ fontSize: 14, color: AC.secondaryLabel }}>
            {todayNutrition.water.consumed} / {todayNutrition.water.goal} glasses
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {Array.from({ length: todayNutrition.water.goal }).map((_, i) => (
            <Pressable
              key={i}
              style={{
                flex: 1,
                aspectRatio: 1,
                maxWidth: 40,
                backgroundColor:
                  i < todayNutrition.water.consumed
                    ? AC.systemBlue
                    : AC.systemGray5,
                borderRadius: 8,
                borderCurve: "continuous",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SymbolView
                name="drop.fill"
                size={16}
                tintColor={
                  i < todayNutrition.water.consumed
                    ? "white"
                    : (AC.systemGray3 as string)
                }
              />
            </Pressable>
          ))}
        </View>
      </View>

      {/* Today's Meals */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: AC.label,
            }}
          >
            Today's Meals
          </Text>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <Text style={{ fontSize: 15, color: AC.systemGreen, fontWeight: "500" }}>
              + Add Meal
            </Text>
          </Pressable>
        </View>
        <View style={{ gap: 10 }}>
          {todayMeals.map((meal) => (
            <MealCard key={meal.id} {...meal} />
          ))}
        </View>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}
