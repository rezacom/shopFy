import React from "react";
import { FlatList, ScrollView, View } from "react-native";

import ListItem from "@/app/components/cards/listItem/listItemCard";
import styles from "./styles";
import ListItemSeparator from "@/app/components/lisIItemSeparator";

const data = [
  {
    id: 1,
    title: "Reza",
    description: "hello...",
    image: require("@/assets/images/user.jpg"),
  },
  {
    id: 2,
    title: "Ali",
    description: "hey what",
    image: require("@/assets/images/user.jpg"),
  },
];
function MessagesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={data}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Item Selectd", item)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

export default MessagesScreen;
